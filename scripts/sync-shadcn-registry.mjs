import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const sourceDir = path.join(root, 'registry/shadcn/default')
const outputManifest = path.join(root, 'registry.shadcn.json')
const listPath = path.join(root, 'registry/shadcn/components.json')

const components = [
  'accordion',
  'alert',
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'badge',
  'breadcrumb',
  'button',
  'button-group',
  'calendar',
  'card',
  'carousel',
  'chart',
  'checkbox',
  'collapsible',
  'combobox',
  'command',
  'context-menu',
  'dialog',
  'drawer',
  'dropdown-menu',
  'empty',
  'field',
  'form',
  'hover-card',
  'input',
  'input-group',
  'item',
  'kbd',
  'label',
  'menubar',
  'navigation-menu',
  'number-field',
  'pagination',
  'pin-input',
  'popover',
  'progress',
  'radio-group',
  'range-calendar',
  'resizable',
  'scroll-area',
  'select',
  'separator',
  'sheet',
  'sidebar',
  'skeleton',
  'slider',
  'sonner',
  'spinner',
  'stepper',
  'switch',
  'table',
  'tabs',
  'tags-input',
  'textarea',
  'toggle',
  'toggle-group',
  'tooltip',
]

const knownUnavailable = [
  'data-table',
  'date-picker',
  'input-otp',
  'native-select',
  'toast',
  'typography',
]

async function shadcnView(name) {
  const response = await fetch(`https://shadcn-vue.com/r/styles/default/${name}.json`)

  if (!response.ok) {
    throw new Error(`Unable to fetch ${name}: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

function targetPath(filePath) {
  return filePath.replace(/^ui\//, 'registry/shadcn/default/')
}

rmSync(sourceDir, { force: true, recursive: true })
mkdirSync(sourceDir, { recursive: true })

const items = []
const synced = []

for (const name of components) {
  const item = await shadcnView(name)
  const files = item.files.map((file) => {
    const rewrittenPath = targetPath(file.path)
    const absolutePath = path.join(root, rewrittenPath)
    mkdirSync(path.dirname(absolutePath), { recursive: true })
    writeFileSync(absolutePath, file.content)

    return {
      ...file,
      path: rewrittenPath,
      target: rewrittenPath.replace(/^registry\/shadcn\/default\//, 'components/ui/'),
    }
  })

  items.push({
    ...item,
    files,
  })
  synced.push(name)
}

const manifest = {
  $schema: 'https://shadcn-vue.com/schema/registry.json',
  name: 'x-ui-shadcn',
  homepage: 'https://your-domain.com',
  items,
}

mkdirSync(path.dirname(listPath), { recursive: true })
writeFileSync(outputManifest, `${JSON.stringify(manifest, null, 2)}\n`)
writeFileSync(
  listPath,
  `${JSON.stringify(
    {
      synced,
      unavailable: knownUnavailable,
      generatedAt: new Date().toISOString(),
    },
    null,
    2,
  )}\n`,
)

const currentPackage = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'))
const dependencies = {
  '@unovis/ts': '^1.6.5',
  '@unovis/vue': '^1.6.5',
  '@vee-validate/zod': '^4.15.1',
  '@vueuse/core': '^14.3.0',
  'embla-carousel-vue': '^8.6.0',
  'vaul-vue': '^0.4.1',
  'vee-validate': '^4.15.1',
  'vue-sonner': '^2.0.9',
  zod: '^4.4.3',
}

currentPackage.dependencies = {
  ...currentPackage.dependencies,
  ...dependencies,
}

writeFileSync(path.join(root, 'package.json'), `${JSON.stringify(currentPackage, null, 2)}\n`)

console.log(`Synced ${synced.length} shadcn-vue registry items.`)
console.log(`Unavailable upstream items: ${knownUnavailable.join(', ')}`)
