import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const registry = JSON.parse(readFileSync(path.join(root, 'registry.json'), 'utf8'))
const docsDir = path.join(root, 'content/docs/components')
const appDataDir = path.join(root, 'app/data')

const EXTERNAL_PREFIXES = ['@vueuse/', '@unovis/', '@vee-validate/', 'class-variance-authority', 'embla-carousel-vue', '@meri-design/icon-vue', 'lucide-vue-next', 'reka-ui', 'vaul-vue', 'vee-validate', 'vue-sonner', 'zod']
const CUSTOM_DEMO_COMPONENTS = new Set(['button', 'badge', 'checkbox', 'switch', 'input', 'table'])

function pascalCase(value) {
  return value
    .split(/[-_/]/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('')
}

function read(file) {
  return readFileSync(path.join(root, file), 'utf8')
}

function codeFence(code, lang = 'vue') {
  return `\`\`\`${lang}\n${code.trim()}\n\`\`\``
}

function escapeTemplateLiteral(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')
}

function kebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase()
}

function inline(value) {
  return String(value).replace(/\s+/g, ' ').replaceAll('|', '\\|').replaceAll('`', '\\`').trim()
}

function unique(values) {
  return [...new Set(values.filter(Boolean))]
}

function extractBlock(source, startIndex) {
  const start = source.indexOf('{', startIndex)
  if (start === -1) return ''
  let depth = 0
  for (let index = start; index < source.length; index += 1) {
    const char = source[index]
    if (char === '{') depth += 1
    if (char === '}') depth -= 1
    if (depth === 0) return source.slice(start + 1, index)
  }
  return ''
}

function extractGeneric(source, macro) {
  const marker = `${macro}<`
  const start = source.indexOf(marker)
  if (start === -1) return ''
  let depth = 0
  const genericStart = start + marker.length
  for (let index = genericStart; index < source.length; index += 1) {
    const char = source[index]
    if (char === '<') depth += 1
    if (char === '>') {
      if (depth === 0) return source.slice(genericStart, index).trim()
      depth -= 1
    }
  }
  return ''
}

function extractRuntimeCall(source, macro) {
  const marker = `${macro}(`
  const start = source.indexOf(marker)
  if (start === -1) return ''
  let depth = 0
  const callStart = start + marker.length
  for (let index = callStart; index < source.length; index += 1) {
    const char = source[index]
    if (char === '(' || char === '{' || char === '[') depth += 1
    if (char === ')' || char === '}' || char === ']') {
      if (depth === 0) return source.slice(callStart, index).trim()
      depth -= 1
    }
  }
  return ''
}

function extractProps(source) {
  const props = []
  const generic = extractGeneric(source, 'defineProps')
  const runtime = extractRuntimeCall(source, 'defineProps')
  const withDefaults = source.includes('withDefaults(defineProps')

  if (generic) {
    const objectBody = generic.startsWith('{') ? generic.slice(1, -1) : ''
    if (objectBody) {
      for (const line of objectBody.split('\n')) {
        const match = line.trim().match(/^["']?([\w:-]+)["']?\??:\s*([^,]+)/)
        if (match) props.push({ name: match[1], type: match[2].trim(), source: line.trim() })
      }
    } else {
      props.push({ name: 'props', type: generic, source: generic })
    }
  } else if (runtime) {
    for (const match of runtime.matchAll(/([\w-]+)\s*:/g)) {
      props.push({ name: match[1], type: 'runtime declaration', source: runtime })
    }
  }

  return { props, withDefaults }
}

function extractEmits(source) {
  const emits = []
  const generic = extractGeneric(source, 'defineEmits')
  const runtime = extractRuntimeCall(source, 'defineEmits')

  if (generic) {
    for (const line of generic.split('\n')) {
      const match = line.trim().match(/^["']?([\w:-]+)["']?\??:\s*([^,]+)/)
      if (match) emits.push({ name: match[1], type: match[2].trim(), source: line.trim() })
    }
    if (emits.length === 0) emits.push({ name: 'emits', type: generic, source: generic })
  } else if (runtime) {
    for (const match of runtime.matchAll(/["']([\w:-]+)["']/g)) {
      emits.push({ name: match[1], type: 'runtime event', source: runtime })
    }
  }

  return emits
}

function extractSlots(source) {
  const slots = new Map()
  for (const match of source.matchAll(/<slot(?:\s+name=["']([^"']+)["'])?/g)) {
    const name = match[1] || 'default'
    slots.set(name, { name, source: match[0] })
  }
  for (const match of source.matchAll(/<template\s+#([\w-]+)/g)) {
    const name = match[1] || 'default'
    slots.set(name, { name, source: match[0] })
  }
  const generic = extractGeneric(source, 'defineSlots')
  if (generic) {
    for (const line of generic.split('\n')) {
      const match = line.trim().match(/^([\w-]+)\??:\s*([^,]+)/)
      if (match) slots.set(match[1], { name: match[1], source: line.trim() })
    }
  }
  return [...slots.values()]
}

function extractImports(source) {
  const imports = []
  for (const match of source.matchAll(/from\s+["']([^"']+)["']/g)) imports.push(match[1])
  return imports
}

function extractIndexExports(source) {
  const componentExports = []
  const apiExports = []
  for (const line of source.split('\n')) {
    const componentMatch = line.match(/export\s+\{\s+default\s+as\s+(\w+)/)
    if (componentMatch) componentExports.push(componentMatch[1])
    else if (line.trim().startsWith('export ')) apiExports.push(line.trim())
  }
  return { componentExports, apiExports }
}

function summarizeFile(file) {
  const source = read(file.path)
  const script = source.match(/<script[\s\S]*?>([\s\S]*?)<\/script>/)?.[1] ?? ''
  const template = source.match(/<template>([\s\S]*?)<\/template>/)?.[1] ?? ''
  const { props, withDefaults } = extractProps(script)
  return {
    path: file.path,
    component: path.basename(file.path, '.vue'),
    props,
    withDefaults,
    emits: extractEmits(script),
    slots: extractSlots(template + '\n' + script),
    imports: extractImports(script),
  }
}

function propExample(component, prop) {
  const name = kebabCase(prop.name)
  if (prop.name === 'class') return `<${component} class="custom-class" />`

  const value = prop.type.includes('boolean')
    ? '"true"'
    : prop.type.includes('number')
      ? '"1"'
      : '"example"'
  return `<${component} :${name}=${value} />`
}

function eventExample(component, eventName) {
  const handler = eventName.replace(/[:-](\w)/g, (_, char) => char.toUpperCase()).replace(/[^\w]/g, '')
  return `<${component} @${eventName}="${handler}" />`
}

function slotExample(component, slotName) {
  if (slotName === 'default') {
    return `<${component}>内容</${component}>`
  }
  return `<${component}>\n  <template #${slotName}>自定义 ${slotName}</template>\n</${component}>`
}

function basicUsageExample(primaryComponent) {
  return `<${primaryComponent}>\n  示例内容\n</${primaryComponent}>`
}

function generatedDemoCode(item, indexExports) {
  if (item.name === 'form') {
    return `<script setup lang="ts">
import { FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
</script>

<template>
  <FormField name="email">
    <FormItem class="max-w-sm">
      <FormLabel>邮箱地址</FormLabel>
      <FormDescription>用于接收组件库发布通知。</FormDescription>
      <div class="h-9 rounded-[4px] border border-[#E2E4E9] bg-white px-3 py-2 text-sm text-[#434655]">team@example.com</div>
    </FormItem>
  </FormField>
</template>`
  }

  if (item.name === 'stepper') {
    return `<script setup lang="ts">
import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'
</script>

<template>
  <Stepper :default-value="2" class="w-full">
    <StepperItem :step="1">
      <StepperTrigger><StepperIndicator>1</StepperIndicator><StepperTitle>安装</StepperTitle><StepperDescription>添加组件</StepperDescription></StepperTrigger>
      <StepperSeparator />
    </StepperItem>
    <StepperItem :step="2">
      <StepperTrigger><StepperIndicator>2</StepperIndicator><StepperTitle>使用</StepperTitle><StepperDescription>组合页面</StepperDescription></StepperTrigger>
      <StepperSeparator />
    </StepperItem>
    <StepperItem :step="3">
      <StepperTrigger><StepperIndicator>3</StepperIndicator><StepperTitle>验证</StepperTitle><StepperDescription>运行检查</StepperDescription></StepperTrigger>
    </StepperItem>
  </Stepper>
</template>`
  }

  const primaryComponent = indexExports.componentExports[0] || pascalCase(item.name)
  const imports = indexExports.componentExports.length > 0 ? indexExports.componentExports.join(', ') : primaryComponent
  return `<script setup lang="ts">
import { ${imports} } from '@/components/ui/${item.name}'
</script>

<template>
  <${primaryComponent}>
    中文示例内容
  </${primaryComponent}>
</template>`
}

function customDemoCode(item) {
  if (!CUSTOM_DEMO_COMPONENTS.has(item.name)) return ''
  const file = path.join(root, 'app/components', `${pascalCase(item.name)}Demo.vue`)
  try {
    return readFileSync(file, 'utf8')
      .replaceAll('~~/registry/default/', '@/components/ui/')
      .replaceAll("import Input from '@/components/ui/input/Input.vue'", "import { Input } from '@/components/ui/input'")
  } catch {
    return ''
  }
}

function generateDoc(item) {
  const files = item.files.filter((file) => file.path.endsWith('.vue'))
  const indexFile = item.files.find((file) => file.path.endsWith('/index.ts'))
  const indexExports = indexFile ? extractIndexExports(read(indexFile.path)) : { componentExports: [], apiExports: [] }
  const components = files.map(summarizeFile)
  const primaryComponent = indexExports.componentExports[0] || pascalCase(item.name)
  const dependencies = unique(components.flatMap((component) => component.imports).filter((dependency) => EXTERNAL_PREFIXES.some((prefix) => dependency.startsWith(prefix))))
  const allProps = components.flatMap((component) => component.props.map((prop) => ({ ...prop, component: component.component })))
  const allEmits = components.flatMap((component) => component.emits.map((emit) => ({ ...emit, component: component.component })))
  const allSlots = components.flatMap((component) => component.slots.map((slot) => ({ ...slot, component: component.component })))

  const lines = [
    '---',
    `title: ${item.title ?? primaryComponent}`,
    `description: ${item.description ?? `${primaryComponent} 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。`}`,
    '---',
    '',
    `# ${item.title ?? primaryComponent}`,
    '',
    item.description ?? `${primaryComponent} 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。`,
    '',
    '## 设计定位',
    '',
    `${primaryComponent} 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。`,
    '',
    '## 安装',
    '',
    codeFence(`bunx shadcn-vue@latest add http://localhost:3000/r/${item.name}.json`, 'bash'),
    '',
    '## 导入',
    '',
    codeFence(`import { ${indexExports.componentExports.join(', ')} } from '@/components/ui/${item.name}'`, 'ts'),
    '',
    '## 基础用法',
    '',
    codeFence(basicUsageExample(primaryComponent)),
    '',
    '## 组件导出',
    '',
    ...indexExports.componentExports.map((name) => `- \`${name}\``),
    '',
    '## 源码 API',
    '',
    '以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。',
    '',
    '### Props',
    '',
  ]

  if (allProps.length === 0) {
    lines.push('源码中未发现显式本地 props。', '')
  } else {
    lines.push('| 组件 | Prop | 类型 / 来源 | 示例 |', '| --- | --- | --- | --- |')
    for (const prop of allProps) {
      lines.push(`| \`${prop.component}\` | \`${prop.name}\` | \`${inline(prop.type)}\` | \`${inline(propExample(prop.component, prop.name === 'props' ? { ...prop, name: 'exampleProp' } : prop))}\` |`)
    }
    lines.push('')
  }

  lines.push('### Events', '')
  if (allEmits.length === 0) {
    lines.push('源码中未发现显式本地事件。', '')
  } else {
    lines.push('| 组件 | 事件 | 类型 / 来源 | 示例 |', '| --- | --- | --- | --- |')
    for (const emit of allEmits) {
      lines.push(`| \`${emit.component}\` | \`${emit.name}\` | \`${inline(emit.type)}\` | \`${inline(eventExample(emit.component, emit.name))}\` |`)
    }
    lines.push('')
  }

  lines.push('### Slots', '')
  if (allSlots.length === 0) {
    lines.push('源码中未发现显式本地 slots。', '')
  } else {
    lines.push('| 组件 | Slot | 示例 |', '| --- | --- | --- |')
    for (const slot of allSlots) {
      lines.push(`| \`${slot.component}\` | \`${slot.name}\` | \`${inline(slotExample(slot.component, slot.name))}\` |`)
    }
    lines.push('')
  }

  lines.push('### Exports', '')
  if (indexExports.apiExports.length === 0) {
    lines.push('源码中未发现额外本地 API 导出。', '')
  } else {
    for (const api of indexExports.apiExports) lines.push(`- \`${api}\``)
    lines.push('')
  }

  lines.push('## API 示例', '')
  for (const prop of allProps) {
    const safeProp = prop.name === 'props' ? { ...prop, name: 'exampleProp' } : prop
    lines.push(`### ${prop.component}.${safeProp.name}`, '', codeFence(propExample(prop.component, safeProp)), '')
  }
  for (const emit of allEmits) {
    lines.push(`### ${emit.component}.${emit.name}`, '', codeFence(eventExample(emit.component, emit.name)), '')
  }
  for (const slot of allSlots) {
    lines.push(`### ${slot.component} slot: ${slot.name}`, '', codeFence(slotExample(slot.component, slot.name)), '')
  }

  lines.push('## 依赖', '')
  if (dependencies.length === 0) {
    lines.push('本地组件源码中未检测到外部运行时依赖。', '')
  } else {
    for (const dependency of dependencies) lines.push(`- \`${dependency}\``)
    lines.push('')
  }

  lines.push('## Registry', '', codeFence(`/r/${item.name}.json`, 'txt'), '')

  return `${lines.join('\n')}\n`
}

mkdirSync(docsDir, { recursive: true })
mkdirSync(appDataDir, { recursive: true })
const registryNames = new Set(registry.items.map((item) => `${item.name}.md`))
for (const file of readdirSync(docsDir)) {
  if (file.endsWith('.md') && !registryNames.has(file)) rmSync(path.join(docsDir, file))
}
for (const item of registry.items) {
  writeFileSync(path.join(docsDir, `${item.name}.md`), generateDoc(item))
}

const componentDocs = registry.items.map((item) => {
  const indexFile = item.files.find((file) => file.path.endsWith('/index.ts'))
  const indexExports = indexFile ? extractIndexExports(read(indexFile.path)) : { componentExports: [], apiExports: [] }
  const primaryComponent = indexExports.componentExports[0] || pascalCase(item.name)
  return {
    slug: item.name,
    title: item.title ?? pascalCase(item.name),
    description: item.description ?? `${primaryComponent} 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。`,
    primaryComponent,
    importPath: `@/components/ui/${item.name}`,
    registryPath: `/r/${item.name}.json`,
    componentExports: indexExports.componentExports,
    hasCustomDemo: CUSTOM_DEMO_COMPONENTS.has(item.name),
  }
})

const demoCodes = Object.fromEntries(registry.items.map((item) => {
  const indexFile = item.files.find((file) => file.path.endsWith('/index.ts'))
  const indexExports = indexFile ? extractIndexExports(read(indexFile.path)) : { componentExports: [], apiExports: [] }
  return [item.name, customDemoCode(item) || generatedDemoCode(item, indexExports)]
}))

writeFileSync(path.join(root, 'content/docs/components.json'), `${JSON.stringify(componentDocs, null, 2)}\n`)
writeFileSync(path.join(appDataDir, 'component-docs.ts'), `export const componentDocs = ${JSON.stringify(componentDocs, null, 2)} as const\n`)
writeFileSync(path.join(appDataDir, 'demo-codes.ts'), `export const demoCodes: Record<string, string> = {\n${Object.entries(demoCodes).map(([slug, code]) => `  ${JSON.stringify(slug)}: \`${escapeTemplateLiteral(code)}\``).join(',\n')}\n}\n`)

console.log(`Generated ${registry.items.length} component docs.`)
