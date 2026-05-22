import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const registry = JSON.parse(readFileSync(path.join(root, 'registry.json'), 'utf8'))
const docsDir = path.join(root, 'content/docs/components')
const appDataDir = path.join(root, 'app/data')

const EXTERNAL_PREFIXES = ['@vueuse/', '@unovis/', '@vee-validate/', 'class-variance-authority', 'embla-carousel-vue', 'lucide-vue-next', 'reka-ui', 'vaul-vue', 'vee-validate', 'vue-sonner', 'zod']

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
    return `<${component}>Content</${component}>`
  }
  return `<${component}>\n  <template #${slotName}>Custom ${slotName}</template>\n</${component}>`
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
    `description: ${item.description ?? `${primaryComponent} component documentation generated from source.`}`,
    '---',
    '',
    `# ${item.title ?? primaryComponent}`,
    '',
    item.description ?? `${primaryComponent} component documentation generated from local source APIs.`,
    '',
    '## Install',
    '',
    codeFence(`bunx shadcn-vue@latest add http://localhost:3000/r/${item.name}.json`, 'bash'),
    '',
    '## Import',
    '',
    codeFence(`import { ${indexExports.componentExports.join(', ')} } from '@/components/ui/${item.name}'`, 'ts'),
    '',
    '## Basic Usage',
    '',
    codeFence(`<${primaryComponent}>\n  Example content\n</${primaryComponent}>`),
    '',
    '## Components',
    '',
    ...indexExports.componentExports.map((name) => `- \`${name}\``),
    '',
    '## Source API',
    '',
    'The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.',
    '',
    '### Props',
    '',
  ]

  if (allProps.length === 0) {
    lines.push('No explicit local props were found in source.', '')
  } else {
    lines.push('| Component | Prop | Type / Source | Example |', '| --- | --- | --- | --- |')
    for (const prop of allProps) {
      lines.push(`| \`${prop.component}\` | \`${prop.name}\` | \`${inline(prop.type)}\` | \`${inline(propExample(prop.component, prop.name === 'props' ? { ...prop, name: 'exampleProp' } : prop))}\` |`)
    }
    lines.push('')
  }

  lines.push('### Events', '')
  if (allEmits.length === 0) {
    lines.push('No explicit local events were found in source.', '')
  } else {
    lines.push('| Component | Event | Type / Source | Example |', '| --- | --- | --- | --- |')
    for (const emit of allEmits) {
      lines.push(`| \`${emit.component}\` | \`${emit.name}\` | \`${inline(emit.type)}\` | \`${inline(eventExample(emit.component, emit.name))}\` |`)
    }
    lines.push('')
  }

  lines.push('### Slots', '')
  if (allSlots.length === 0) {
    lines.push('No explicit local slots were found in source.', '')
  } else {
    lines.push('| Component | Slot | Example |', '| --- | --- | --- |')
    for (const slot of allSlots) {
      lines.push(`| \`${slot.component}\` | \`${slot.name}\` | \`${inline(slotExample(slot.component, slot.name))}\` |`)
    }
    lines.push('')
  }

  lines.push('### Exports', '')
  if (indexExports.apiExports.length === 0) {
    lines.push('No additional local API exports were found.', '')
  } else {
    for (const api of indexExports.apiExports) lines.push(`- \`${api}\``)
    lines.push('')
  }

  lines.push('## API Examples', '')
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

  lines.push('## Dependencies', '')
  if (dependencies.length === 0) {
    lines.push('No external runtime dependencies were detected in local component source.', '')
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

const componentDocs = registry.items.map((item) => ({
  slug: item.name,
  title: item.title ?? pascalCase(item.name),
  description: item.description ?? `${pascalCase(item.name)} component documentation.`,
}))

writeFileSync(path.join(root, 'content/docs/components.json'), `${JSON.stringify(componentDocs, null, 2)}\n`)
writeFileSync(path.join(appDataDir, 'component-docs.ts'), `export const componentDocs = ${JSON.stringify(componentDocs, null, 2)} as const\n`)

console.log(`Generated ${registry.items.length} component docs.`)
