import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const defaultRoot = path.join(root, 'registry/default')
const shadcnRoot = path.join(root, 'registry/shadcn/default')
const reportPath = path.join(root, 'docs/development/tailwind-class-diff-report.md')

const fileExtensions = new Set(['.vue', '.ts'])
const tailwindBasePatterns = [
  /^(?:-)?(?:m|mx|my|mt|mr|mb|ml|p|px|py|pt|pr|pb|pl)-/,
  /^(?:min-|max-)?(?:h|w)-/,
  /^size-/,
  /^basis-/,
  /^gap(?:-[xy])?-/,
  /^space-[xy]-/,
  /^grid-cols-/,
  /^col-/,
  /^row-/,
  /^inset(?:-[xy])?-/,
  /^(?:top|right|bottom|left)-/,
  /^z-/,
  /^order-/,
  /^rounded/,
  /^border/,
  /^bg-/,
  /^text-/,
  /^font-/,
  /^leading-/,
  /^tracking-/,
  /^shadow/,
  /^ring/,
  /^outline/,
  /^opacity-/,
  /^cursor-/,
  /^transition/,
  /^duration-/,
  /^delay-/,
  /^ease-/,
  /^animate-/,
  /^translate-[xy]-/,
  /^rotate-/,
  /^scale-/,
  /^origin-/,
  /^object-/,
  /^aspect-/,
  /^overflow/,
  /^whitespace-/,
  /^align-/,
  /^justify-/,
  /^items-/,
  /^content-/,
  /^self-/,
  /^place-/,
  /^flex/,
  /^grid$/,
  /^inline-grid$/,
  /^block$/,
  /^inline-block$/,
  /^inline$/,
  /^hidden$/,
  /^sr-only$/,
  /^relative$/,
  /^absolute$/,
  /^fixed$/,
  /^sticky$/,
  /^static$/,
  /^isolate$/,
  /^container$/,
  /^truncate$/,
  /^line-clamp-/,
  /^select-/,
  /^pointer-events-/,
  /^resize/,
  /^shrink/,
  /^grow/,
  /^table/,
  /^list-/,
  /^divide-/,
  /^fill-/,
  /^stroke-/,
  /^caret-/,
  /^placeholder:/,
  /^placeholder-/,
  /^accent-/,
  /^scroll-/,
]

const semanticColorTokens = new Set([
  'background',
  'foreground',
  'muted',
  'muted-foreground',
  'border',
  'input',
  'ring',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'destructive-foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'sidebar',
  'sidebar-foreground',
  'sidebar-accent',
  'sidebar-accent-foreground',
  'sidebar-border',
  'sidebar-ring',
  'overlay',
  'gray-200',
  'gray-300',
  'gray-400',
  'gray-500',
  'gray-900',
  'red-500',
])

const components = listDirs(defaultRoot)
const shadcnComponents = listDirs(shadcnRoot)
const missingInDefault = shadcnComponents.filter((name) => !components.includes(name))
const missingInShadcn = components.filter((name) => !shadcnComponents.includes(name))
const allComponents = [...new Set([...components, ...shadcnComponents])].sort()

const analyses = allComponents.map((component) => {
  const defaultAnalysis = analyzeComponent(defaultRoot, component)
  const shadcnAnalysis = analyzeComponent(shadcnRoot, component)
  return compareComponent(component, defaultAnalysis, shadcnAnalysis)
})

const riskItems = analyses.flatMap((analysis) => analysis.shadcn.risks)

mkdirSync(path.dirname(reportPath), { recursive: true })
writeFileSync(reportPath, renderReport(analyses, riskItems))

console.log(`Generated ${path.relative(root, reportPath)}`)
console.log(`Components: ${allComponents.length}`)
console.log(`Components with class diffs: ${analyses.filter((item) => item.hasDiff).length}`)
console.log(`Shadcn token risks: ${riskItems.length}`)

function listDirs(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
}

function walkFiles(dir) {
  if (!existsSync(dir)) return []
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath))
      continue
    }
    if (entry.isFile() && fileExtensions.has(path.extname(entry.name))) files.push(fullPath)
  }
  return files.sort()
}

function analyzeComponent(baseDir, component) {
  const componentDir = path.join(baseDir, component)
  const sources = []
  const tokens = new Set()
  const risks = []

  for (const file of walkFiles(componentDir)) {
    const source = readFileSync(file, 'utf8')
    const relativeFile = path.relative(componentDir, file)
    const stringSources = extractClassSources(source)

    stringSources.forEach((item, index) => {
      const classTokens = tokenizeClassString(item.value).filter(isTailwindToken)
      if (classTokens.length === 0) return

      const record = {
        component,
        file: relativeFile,
        line: item.line,
        ordinal: index,
        context: item.context,
        value: item.value,
        tokens: unique(classTokens).sort(sortToken),
      }
      sources.push(record)
      record.tokens.forEach((token) => tokens.add(token))
      risks.push(...detectTokenRisks(record))
    })
  }

  return {
    exists: existsSync(componentDir) && statSync(componentDir).isDirectory(),
    sources,
    tokens: [...tokens].sort(sortToken),
    risks,
  }
}

function extractClassSources(source) {
  const sources = []
  const literals = extractStringLiterals(source)

  literals.forEach((literal, index) => {
    const context = source.slice(Math.max(0, literal.start - 160), Math.min(source.length, literal.end + 160))
    const previousLiteral = literals[index - 1]
    const inLikelyClassContext = /(?:class\s*=|:class\s*=|class:\s*|cn\s*\(|cva\s*\(|variants\s*:|defaultVariants\s*:|compoundVariants\s*:)/.test(context)
    const followsObjectKey = previousLiteral && source.slice(previousLiteral.end, literal.start).trim().startsWith(':')
    if (inLikelyClassContext || followsObjectKey || looksLikeClassList(literal.value)) {
      sources.push({
        ...literal,
        context: inferClassContext(source, literal, previousLiteral),
      })
    }
  })

  return sources
}

function inferClassContext(source, literal, previousLiteral) {
  const before = source.slice(0, literal.start)
  const tagStart = before.lastIndexOf('<')
  const tagEnd = before.lastIndexOf('>')
  if (tagStart > tagEnd) {
    const tag = source.slice(tagStart, Math.min(source.length, tagStart + 160)).match(/^<([A-Za-z][\w.:/-]*)/)
    if (tag) return `<${tag[1]}>`
  }

  const localContext = before.slice(Math.max(0, before.length - 180))
  if (/cva\s*\([^)]*$/s.test(localContext)) return 'cva(...)'
  if (/cn\s*\([^)]*$/s.test(localContext)) return 'cn(...)'
  if (/class\s*=\s*$/.test(localContext)) return 'class 属性'
  if (/:class\s*=\s*$/.test(localContext)) return ':class 属性'
  if (previousLiteral && source.slice(previousLiteral.end, literal.start).trim().startsWith(':')) return `variant "${previousLiteral.value}"`
  if (/variants\s*:\s*\{[\s\S]*$/s.test(localContext)) return 'variants'

  return '样式字符串'
}

function extractStringLiterals(source) {
  const literals = []
  let index = 0
  let line = 1

  while (index < source.length) {
    const char = source[index]
    if (char === '\n') line += 1

    if (char !== '\'' && char !== '"' && char !== '`') {
      index += 1
      continue
    }

    const quote = char
    const start = index
    const startLine = line
    index += 1
    let value = ''

    while (index < source.length) {
      const current = source[index]
      if (current === '\\') {
        value += current
        if (index + 1 < source.length) {
          value += source[index + 1]
          if (source[index + 1] === '\n') line += 1
          index += 2
          continue
        }
      }
      if (current === quote) {
        index += 1
        break
      }
      if (current === '\n') line += 1
      value += current
      index += 1
    }

    literals.push({ start, end: index, line: startLine, value })
  }

  return literals
}

function tokenizeClassString(value) {
  return value
    .replace(/\$\{[\s\S]*?\}/g, ' ')
    .replace(/['",`]/g, ' ')
    .split(/\s+/)
    .map((token) => token.trim())
    .map((token) => token.replace(/^[({]+|[)},;]+$/g, ''))
    .filter(Boolean)
}

function looksLikeClassList(value) {
  const tokens = tokenizeClassString(value)
  if (tokens.length < 2) return false
  return tokens.filter(isTailwindToken).length >= Math.min(2, tokens.length)
}

function isTailwindToken(token) {
  if (!token || token.includes('/') && token.startsWith('@/')) return false
  const normalized = stripVariants(token)
  if (!normalized) return false
  if (tailwindBasePatterns.some((pattern) => pattern.test(normalized))) return true
  return /^(?:hover|focus|focus-visible|active|disabled|enabled|data-|aria-|group-|peer-|has-|dark|sm|md|lg|xl|2xl|\[)/.test(token)
}

function stripVariants(token) {
  let depth = 0
  let lastColon = -1
  for (let index = 0; index < token.length; index += 1) {
    const char = token[index]
    if (char === '[') depth += 1
    if (char === ']') depth -= 1
    if (char === ':' && depth === 0) lastColon = index
  }
  return lastColon === -1 ? token : token.slice(lastColon + 1)
}

function unique(values) {
  return [...new Set(values)]
}

function compareComponent(component, defaultAnalysis, shadcnAnalysis) {
  const defaultTokens = new Set(defaultAnalysis.tokens)
  const shadcnTokens = new Set(shadcnAnalysis.tokens)
  const added = defaultAnalysis.tokens.filter((token) => !shadcnTokens.has(token))
  const removed = shadcnAnalysis.tokens.filter((token) => !defaultTokens.has(token))
  const addedDetails = added.map((token) => ({ token, locations: tokenLocations(defaultAnalysis, token) }))
  const removedDetails = removed.map((token) => ({ token, locations: tokenLocations(shadcnAnalysis, token) }))
  const changedSources = compareSources(defaultAnalysis.sources, shadcnAnalysis.sources)

  return {
    component,
    default: defaultAnalysis,
    shadcn: shadcnAnalysis,
    added,
    removed,
    addedDetails,
    removedDetails,
    changedSources,
    hasDiff: added.length > 0 || removed.length > 0 || changedSources.length > 0,
  }
}

function tokenLocations(analysis, token) {
  return analysis.sources
    .filter((source) => source.tokens.includes(token))
    .map((source) => ({
      file: source.file,
      line: source.line,
      context: source.context,
    }))
}

function compareSources(defaultSources, shadcnSources) {
  const shadcnByKey = new Map(shadcnSources.map((source) => [sourceKey(source), source]))
  const changes = []

  for (const current of defaultSources) {
    const upstream = shadcnByKey.get(sourceKey(current))
    if (!upstream) continue
    const currentTokens = new Set(current.tokens)
    const upstreamTokens = new Set(upstream.tokens)
    const added = current.tokens.filter((token) => !upstreamTokens.has(token))
    const removed = upstream.tokens.filter((token) => !currentTokens.has(token))
    if (added.length || removed.length) {
      changes.push({
        file: current.file,
        defaultLine: current.line,
        shadcnLine: upstream.line,
        added,
        removed,
      })
    }
  }

  return changes
}

function sourceKey(source) {
  return `${source.file}:${source.ordinal}`
}

function detectTokenRisks(source) {
  const risks = []
  for (const token of source.tokens) {
    const base = stripVariants(token)
    const colorPrefix = colorUtilityPrefix(base)
    if (colorPrefix && /\[(?:#|rgb|hsl|oklch|color:)/.test(base)) {
      risks.push(tokenRisk(source, token, '未语义化', '硬编码颜色或任意值颜色应提取为设计 token，例如 text-foreground / border-gray-300 / bg-overlay。'))
      continue
    }
    if (colorPrefix && /\[var\(--/.test(base)) {
      risks.push(tokenRisk(source, token, '未提取为 token class', '避免直接写 var(--*)，应先在 @theme 中暴露，再使用 text-* / border-* / bg-* 等 token class。'))
      continue
    }
    if (colorPrefix && isNonSemanticPalette(base)) {
      risks.push(tokenRisk(source, token, '非语义色阶', '组件源码中的颜色优先使用项目语义 token 或已验证灰阶 token，避免直接依赖通用色阶。'))
      continue
    }
  }

  risks.push(...detectLocationRisks(source))
  return dedupeRisks(risks)
}

function detectLocationRisks(source) {
  const risks = []
  const tokens = new Set(source.tokens)
  const file = source.file
  const inputLike = /(?:Input|Textarea|SelectTrigger|ComboboxInput|NumberFieldInput|TagsInput|PinInputSlot)\.(?:vue|ts)$/.test(file)
  const overlayLike = /Overlay\.vue$/.test(file)
  const floatingContent = /(?:TooltipContent|SelectContent|ComboboxList|ContextMenuContent|DropdownMenuContent|HoverCardContent|PopoverContent)\.vue$/.test(file)
  const modalContent = /(?:AlertDialogContent|DialogContent|DrawerContent|SheetContent)\.vue$/.test(file)

  if (inputLike) {
    for (const token of source.tokens) {
      const base = stripVariants(token)
      if (['h-9', 'h-10', 'rounded-md', 'text-sm', 'py-1', 'py-2', 'ring-offset-background'].includes(base) || /^focus(?:-visible)?:ring-2$/.test(token) || /^focus(?:-visible)?:ring-1$/.test(token)) {
        risks.push(tokenRisk(source, token, '语义 token 位置不匹配', '输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。'))
      }
    }
    if (tokens.has('bg-background')) {
      risks.push(tokenRisk(source, 'bg-background', '语义 token 位置不匹配', '输入类默认背景应与本项目输入基线保持一致，优先使用输入背景 token。'))
    }
  }

  if (overlayLike && tokens.has('bg-black/80')) {
    risks.push(tokenRisk(source, 'bg-black/80', '语义 token 位置不匹配', '遮罩层应使用 bg-overlay，避免在组件中直接写黑色透明度。'))
  }

  if (floatingContent) {
    for (const token of source.tokens) {
      const base = stripVariants(token)
      if (base === 'rounded-md' || base === 'rounded-lg') {
        risks.push(tokenRisk(source, token, '语义 token 位置不匹配', '弹层内容圆角应对齐 TooltipContent 基线，优先使用 rounded-[4px]。'))
      }
      if ((base === 'border' && !hasExplicitBorderColor(source.tokens)) || base === 'border-border') {
        risks.push(tokenRisk(source, token, '语义 token 位置不匹配', '弹层内容边框应使用已验证的弹层边框 token，例如 border-gray-300。'))
      }
    }
  }

  if (modalContent) {
    for (const token of source.tokens) {
      const base = stripVariants(token)
      if (base === 'p-6' && /(?:SheetContent|DrawerContent)\.vue$/.test(file)) {
        risks.push(tokenRisk(source, token, '语义 token 位置不匹配', '抽屉 / Sheet 内容容器 padding 应交给 Header/Footer/Body 分区控制，避免根容器固定 p-6。'))
      }
      if (base === 'border' && !hasExplicitBorderColor(source.tokens)) {
        risks.push(tokenRisk(source, token, '语义 token 位置不匹配', '弹窗或抽屉边框应使用明确边框 token，避免裸 border 依赖默认值。'))
      }
    }
  }

  for (const token of source.tokens) {
    if (token.includes('disabled:pointer-events-none')) {
      risks.push(tokenRisk(source, token, '语义 token 位置不匹配', '禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。'))
    }
    if (/^(?:hover|focus|active):/.test(token) && !token.startsWith('enabled:') && /(?:Button|Toggle|NavigationMenu|SidebarMenu|BreadcrumbLink)/.test(file)) {
      risks.push(tokenRisk(source, token, '交互状态未限定 enabled', '支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。'))
    }
  }

  return risks
}

function hasExplicitBorderColor(tokens) {
  return tokens.some((token) => {
    const base = stripVariants(token)
    return /^border-(?![trblxyse]$|[trblxyse]-|0$|2$|4$|8$|solid$|dashed$|dotted$|double$|none$)/.test(base)
  })
}

function tokenRisk(source, token, type, suggestion) {
  return {
    component: source.component,
    file: source.file,
    line: source.line,
    token,
    type,
    suggestion,
  }
}

function dedupeRisks(risks) {
  const seen = new Set()
  return risks.filter((risk) => {
    const key = `${risk.component}:${risk.file}:${risk.line}:${risk.token}:${risk.type}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function colorUtilityPrefix(base) {
  const match = base.match(/^(bg|text|border|ring|outline|fill|stroke|caret|accent|decoration|placeholder)-(.+)/)
  return match?.[1] ?? ''
}

function isNonSemanticPalette(base) {
  const match = base.match(/^(?:bg|text|border|ring|outline|fill|stroke|caret|accent|decoration|placeholder)-([a-z]+-\d{2,3})(?:\/\d+)?$/)
  if (!match) return false
  return !semanticColorTokens.has(match[1])
}

function sortToken(a, b) {
  return a.localeCompare(b)
}

function renderReport(analyses, riskItems) {
  const componentsWithDiff = analyses.filter((item) => item.hasDiff)
  const componentsWithoutDiff = analyses.filter((item) => !item.hasDiff)
  const lines = [
    '# Tailwind 类差异与 Token 风险审计报告',
    '',
    `生成时间：${new Date().toISOString()}`,
    '',
    '## 总览',
    '',
    `- registry/default 组件数：${components.length}`,
    `- registry/shadcn/default 组件数：${shadcnComponents.length}`,
    `- 对比组件数：${allComponents.length}`,
    `- 存在 Tailwind 类差异的组件数：${componentsWithDiff.length}`,
    `- 无 Tailwind 类差异的组件数：${componentsWithoutDiff.length}`,
    `- shadcn token 风险数：${riskItems.length}`,
    '',
    '## 覆盖校验',
    '',
    missingInDefault.length === 0 ? '- shadcn 中没有 default 缺失的组件。' : `- shadcn 中存在 default 缺失组件：${formatTokens(missingInDefault)}`,
    missingInShadcn.length === 0 ? '- default 中没有 shadcn 缺失的组件。' : `- default 中存在 shadcn 缺失组件：${formatTokens(missingInShadcn)}`,
    '',
    '## 判定规则',
    '',
    '- `default 新增类`：`registry/default` 中存在、`registry/shadcn/default` 中不存在的 Tailwind 类。',
    '- `default 删除类`：`registry/shadcn/default` 中存在、`registry/default` 中不存在的 Tailwind 类。',
    '- `同位置类串变更`：同组件同文件中按 class 字符串出现顺序配对后，token 集合发生变化的 class 串。',
    '- Token 风险只扫描 `registry/shadcn/default`，用于定位上游镜像里不符合本项目语义 token 约定的类。',
    '',
    '## 组件差异汇总',
    '',
    '| 组件 | default 新增类及位置 | default 删除类及位置 | 同位置类串变更 | shadcn token 风险 |',
    '| --- | --- | --- | ---: | ---: |',
    ...analyses.map((item) => `| \`${item.component}\` | ${formatTokenDetails(item.addedDetails)} | ${formatTokenDetails(item.removedDetails)} | ${item.changedSources.length} | ${item.shadcn.risks.length} |`),
    '',
    '## Token 风险清单（registry/shadcn/default）',
    '',
  ]

  if (riskItems.length === 0) {
    lines.push('未发现符合当前规则的 token 风险。', '')
  } else {
    lines.push('| 组件 | 文件 | 类 | 风险类型 | default 解决状态 | 建议 |', '| --- | --- | --- | --- | --- | --- |')
    for (const risk of riskItems.sort((a, b) => `${a.component}/${a.file}/${a.line}`.localeCompare(`${b.component}/${b.file}/${b.line}`))) {
      const defaultStatus = resolveDefaultStatus(analyses.find((item) => item.component === risk.component), risk)
      lines.push(`| \`${risk.component}\` | \`${risk.file}:${risk.line}\` | \`${escapePipe(risk.token)}\` | ${risk.type} | ${defaultStatus} | ${risk.suggestion} |`)
    }
    lines.push('')
  }

  lines.push('## 逐组件 Tailwind 类差异', '')

  for (const item of analyses) {
    lines.push(`<details${item.hasDiff || item.shadcn.risks.length ? ' open' : ''}>`)
    lines.push(`<summary><code>${item.component}</code>：新增 ${item.added.length} / 删除 ${item.removed.length} / 同位置变更 ${item.changedSources.length} / 风险 ${item.shadcn.risks.length}</summary>`)
    lines.push('')
    lines.push('### default 新增类')
    lines.push('')
    lines.push(item.added.length ? formatTokenDetailsList(item.addedDetails) : '无。')
    lines.push('')
    lines.push('### default 删除类')
    lines.push('')
    lines.push(item.removed.length ? formatTokenDetailsList(item.removedDetails) : '无。')
    lines.push('')
    lines.push('### 同位置类串变更')
    lines.push('')
    if (item.changedSources.length === 0) {
      lines.push('无。', '')
    } else {
      lines.push('| 文件 | default 新增 | default 删除 |', '| --- | --- | --- |')
      for (const change of item.changedSources) {
        lines.push(`| \`${change.file}\` default:${change.defaultLine} / shadcn:${change.shadcnLine} | ${formatTokens(change.added)} | ${formatTokens(change.removed)} |`)
      }
      lines.push('')
    }
    lines.push('</details>', '')
  }

  return `${lines.join('\n')}\n`
}

function resolveDefaultStatus(analysis, risk) {
  if (!analysis?.default.exists) return '缺少 default 组件'
  const matchingDefaultRisks = analysis.default.risks.filter((item) => item.file === risk.file && item.token === risk.token && item.type === risk.type)
  if (matchingDefaultRisks.length > 0) return '待处理'

  return '已解决'
}

function formatTokens(tokens) {
  if (!tokens || tokens.length === 0) return '无'
  return tokens.map((token) => `\`${escapePipe(token)}\``).join(' ')
}

function formatTokenDetails(items) {
  if (!items || items.length === 0) return '无'
  return items.map((item) => {
    const locations = item.locations.map(formatLocation).join('<br>')
    return `\`${escapePipe(item.token)}\`<br><small>${locations}</small>`
  }).join('<br><br>')
}

function formatTokenDetailsList(items) {
  if (!items || items.length === 0) return '无。'
  return items.map((item) => `- \`${escapePipe(item.token)}\`：${item.locations.map(formatLocation).join('；')}`).join('\n')
}

function formatLocation(location) {
  return `\`${location.file}:${location.line}\` \`${escapeMarkdown(location.context)}\``
}

function escapePipe(value) {
  return String(value).replaceAll('|', '\\|')
}

function escapeMarkdown(value) {
  return escapePipe(value).replaceAll('`', '\\`')
}
