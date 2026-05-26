import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const registry = JSON.parse(readFileSync(path.join(root, 'registry.json'), 'utf8'))
const docsDir = path.join(root, 'content/docs/components')
const appDataDir = path.join(root, 'app/data')
const examplesDir = path.join(root, 'app/components/examples')

const EXTERNAL_PREFIXES = ['@vueuse/', '@unovis/', '@vee-validate/', 'class-variance-authority', 'embla-carousel-vue', '@meri-design/icon-vue', 'lucide-vue-next', 'reka-ui', 'vaul-vue', 'vee-validate', 'vue-sonner', 'zod']
const CUSTOM_DEMO_COMPONENTS = new Set(['button', 'badge', 'switch', 'input', 'table'])

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

function safeFileName(value) {
  return pascalCase(String(value).replace(/:/g, '-')) || 'Example'
}

function shortType(value) {
  return inline(value)
    .replace(/\s*&\s*/g, ' & ')
    .replace(/\s+/g, ' ')
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
      const localObjectFields = [...generic.matchAll(/\{([\s\S]*?)\}/g)]
        .flatMap((match) => match[1].split('\n'))
        .map((line) => line.trim())
        .map((line) => line.match(/^["']?([\w:-]+)["']?\??:\s*([^,]+)/))
        .filter(Boolean)
        .map((match) => ({ name: match[1], type: match[2].trim(), source: match[0] }))

      if (localObjectFields.length > 0) props.push(...localObjectFields)
      else props.push({ name: 'props', type: generic, source: generic, opaque: true })
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
    for (const match of generic.matchAll(/["']([\w:-]+)["']/g)) {
      emits.push({ name: match[1], type: 'typed event', source: generic })
    }
    for (const line of generic.split('\n')) {
      const match = line.trim().match(/^["']?([\w:-]+)["']?\??:\s*([^,]+)/)
      if (match) emits.push({ name: match[1], type: match[2].trim(), source: line.trim() })
    }
    if (emits.length === 0) emits.push({ name: 'emits', type: generic, source: generic, opaque: true })
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
  if (component === 'Input') {
    const inputExamples = {
      defaultValue: '<Input default-value="默认项目名称" />',
      modelValue: '<Input v-model="value" />',
      class: '<Input class="border-primary" />',
    }
    if (inputExamples[prop.name]) return inputExamples[prop.name]
  }

  if (component.startsWith('InputGroup')) {
    const inputGroupExamples = {
      InputGroup: {
        class: '<InputGroup class="max-w-md" />',
      },
      InputGroupAddon: {
        align: '<InputGroupAddon align="inline-start">https://</InputGroupAddon>',
        class: '<InputGroupAddon class="text-foreground">https://</InputGroupAddon>',
      },
      InputGroupButton: {
        variant: '<InputGroupButton variant="outline">检查</InputGroupButton>',
        size: '<InputGroupButton size="sm">提交</InputGroupButton>',
        class: '<InputGroupButton class="text-primary">检查</InputGroupButton>',
      },
      InputGroupInput: {
        class: '<InputGroupInput class="text-foreground" />',
      },
      InputGroupText: {
        class: '<InputGroupText class="text-foreground">可用</InputGroupText>',
      },
      InputGroupTextarea: {
        class: '<InputGroupTextarea class="min-h-24" />',
      },
    }
    const example = inputGroupExamples[component]?.[prop.name]
    if (example) return example
  }

  const genericExamples = {
    class: `<${component} class="border-primary" />`,
    variant: `<${component} variant="outline">示例内容</${component}>`,
    size: `<${component} size="sm">示例内容</${component}>`,
    defaultValue: `<${component} default-value="default" />`,
    modelValue: `<${component} v-model="value" />`,
    value: `<${component} value="item-1">示例内容</${component}>`,
    open: `<${component} v-model:open="open">示例内容</${component}>`,
    defaultOpen: `<${component} default-open>示例内容</${component}>`,
    disabled: `<${component} disabled>禁用状态</${component}>`,
    asChild: `<${component} as-child><button>自定义触发元素</button></${component}>`,
    as: `<${component} as="section">示例内容</${component}>`,
  }
  if (genericExamples[prop.name]) return genericExamples[prop.name]

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
  if (component === 'Input' && eventName === 'update:modelValue') {
    return '<Input v-model="value" />'
  }

  if (eventName.startsWith('update:')) {
    return `<${component} v-model:${kebabCase(eventName.replace('update:', ''))}="value" />`
  }

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
  if (primaryComponent === 'Input') {
    return '<Input v-model="value" placeholder="请输入内容" />'
  }

  return `<${primaryComponent}>\n  示例内容\n</${primaryComponent}>`
}

function importLine(imports, componentName) {
  return `import { ${imports.join(', ')} } from '@/components/ui/${componentName}'`
}

function exampleSource(item, indexExports) {
  const imports = indexExports.componentExports.length > 0 ? indexExports.componentExports : [pascalCase(item.name)]
  const sourceByName = {
    'accordion': `${importLine(['Accordion', 'AccordionContent', 'AccordionItem', 'AccordionTrigger'], item.name)}

<template>
  <Accordion type="single" collapsible class="w-full">
    <AccordionItem value="setup">
      <AccordionTrigger>如何安装组件？</AccordionTrigger>
      <AccordionContent>通过 registry 地址添加组件后，即可在业务页面中按目录导入使用。</AccordionContent>
    </AccordionItem>
    <AccordionItem value="usage">
      <AccordionTrigger>是否支持组合使用？</AccordionTrigger>
      <AccordionContent>支持。组件保持 shadcn-vue 的组合式结构，便于按场景拆分。</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>`,
    'alert': `${importLine(['Alert', 'AlertDescription', 'AlertTitle'], item.name)}

<template>
  <Alert>
    <AlertTitle>系统提醒</AlertTitle>
    <AlertDescription>本次发布包含组件样式和文档示例更新，请在上线前完成预览。</AlertDescription>
  </Alert>
</template>`,
    'alert-dialog': `${importLine(['AlertDialog', 'AlertDialogAction', 'AlertDialogCancel', 'AlertDialogContent', 'AlertDialogDescription', 'AlertDialogFooter', 'AlertDialogHeader', 'AlertDialogTitle', 'AlertDialogTrigger'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <AlertDialog :default-open="true">
    <AlertDialogTrigger as-child>
      <Button variant="destructive">删除项目</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>确认删除这个项目？</AlertDialogTitle>
        <AlertDialogDescription>该操作会移除当前示例项目，提交后不可撤销。</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>取消</AlertDialogCancel>
        <AlertDialogAction>确认删除</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>`,
    'aspect-ratio': `${importLine(['AspectRatio'], item.name)}

<template>
  <AspectRatio :ratio="16 / 9" class="overflow-hidden rounded-[8px] bg-[#eef4ff]">
    <div class="flex h-full items-center justify-center text-sm font-semibold text-[#2D5AF2]">16:9 内容预览区域</div>
  </AspectRatio>
</template>`,
    'avatar': `${importLine(['Avatar', 'AvatarFallback', 'AvatarImage'], item.name)}

<template>
  <div class="flex items-center gap-3">
    <Avatar>
      <AvatarImage src="https://dev.meos.center/meri-plus/avatar-default.png" alt="林清和" />
      <AvatarFallback>林</AvatarFallback>
    </Avatar>
    <div>
      <p class="text-sm font-semibold">林清和</p>
      <p class="text-xs text-[#434655]">产品设计负责人</p>
    </div>
  </div>
</template>`,
    'breadcrumb': `${importLine(['Breadcrumb', 'BreadcrumbEllipsis', 'BreadcrumbItem', 'BreadcrumbLink', 'BreadcrumbList', 'BreadcrumbPage', 'BreadcrumbSeparator'], item.name)}

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink href="#">文档</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbLink href="#">组件</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>面包屑</BreadcrumbPage></BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>`,
    'button-group': `${importLine(['ButtonGroup', 'ButtonGroupSeparator', 'ButtonGroupText'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <ButtonGroup>
    <Button>保存</Button>
    <ButtonGroupSeparator />
    <Button variant="outline">预览</Button>
    <ButtonGroupText>已同步</ButtonGroupText>
  </ButtonGroup>
</template>`,
    'calendar': `${importLine(['Calendar'], item.name)}

<template>
  <Calendar class="rounded-[8px] border border-[#E2E4E9] bg-white" />
</template>`,
    'card': `${importLine(['Card', 'CardContent', 'CardDescription', 'CardFooter', 'CardHeader', 'CardTitle'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <Card class="max-w-sm">
    <CardHeader>
      <CardTitle>组件发布</CardTitle>
      <CardDescription>发布前检查 registry、文档和静态构建状态。</CardDescription>
    </CardHeader>
    <CardContent class="text-sm text-[#434655]">当前版本已准备进入预览流程。</CardContent>
    <CardFooter><Button size="sm">查看详情</Button></CardFooter>
  </Card>
</template>`,
    'carousel': `${importLine(['Carousel', 'CarouselContent', 'CarouselItem', 'CarouselNext', 'CarouselPrevious'], item.name)}

<template>
  <Carousel class="mx-auto w-full max-w-sm">
    <CarouselContent>
      <CarouselItem v-for="demo in ['组件预览', '源码示例', '安装说明']" :key="demo">
        <div class="flex h-28 items-center justify-center rounded-[8px] border border-[#E2E4E9] bg-[#F5F6F7] text-sm font-semibold">{{ demo }}</div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>`,
    'chart': `<script setup lang="ts">
import { ref } from 'vue'
${importLine(['ChartLegend', 'ChartTooltip'], item.name)}

const chartItems = ref([
  { name: '访问量', color: '#2D5AF2' },
  { name: '转化率', color: '#19A55B' },
])
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2">
    <ChartTooltip title="本周数据" :data="[{ name: '访问量', color: '#2D5AF2', value: '12,480' }, { name: '转化率', color: '#19A55B', value: '8.6%' }]" />
    <ChartLegend v-model:items="chartItems" />
  </div>
</template>`,
    'collapsible': `<script setup lang="ts">
import { ref } from 'vue'
${importLine(['Collapsible', 'CollapsibleContent', 'CollapsibleTrigger'], item.name)}
import { Button } from '@/components/ui/button'

const open = ref(true)
</script>

<template>
  <Collapsible v-model:open="open" class="space-y-2">
    <div class="flex h-8 items-center justify-between rounded-[8px] border border-[#E2E4E9] px-4">
      <span class="text-sm font-semibold leading-8">高级设置</span>
      <CollapsibleTrigger as-child><Button size="sm" variant="outline">{{ open ? '收起' : '展开' }}</Button></CollapsibleTrigger>
    </div>
    <CollapsibleContent class="rounded-[8px] border border-[#E2E4E9] bg-[#F5F6F7] p-4 text-sm leading-8 text-[#434655]">这里展示可折叠的配置内容。</CollapsibleContent>
  </Collapsible>
</template>`,
    'combobox': `${importLine(['Combobox', 'ComboboxAnchor', 'ComboboxEmpty', 'ComboboxGroup', 'ComboboxInput', 'ComboboxItem', 'ComboboxList'], item.name)}

<template>
  <Combobox default-open open-on-focus>
    <ComboboxAnchor>
      <ComboboxInput placeholder="搜索组件..." />
    </ComboboxAnchor>
    <ComboboxList>
      <ComboboxEmpty>未找到组件</ComboboxEmpty>
      <ComboboxGroup heading="组件">
        <ComboboxItem value="button">按钮 Button</ComboboxItem>
        <ComboboxItem value="input">输入框 Input</ComboboxItem>
        <ComboboxItem value="select">选择器 Select</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>`,
    'command': `${importLine(['Command', 'CommandEmpty', 'CommandGroup', 'CommandInput', 'CommandItem', 'CommandList', 'CommandSeparator', 'CommandShortcut'], item.name)}

<template>
  <Command class="rounded-[8px] border border-[#E2E4E9]">
    <CommandInput placeholder="输入命令或组件名称..." />
    <CommandList>
      <CommandEmpty>暂无匹配结果</CommandEmpty>
      <CommandGroup heading="常用操作">
        <CommandItem value="创建组件">创建组件<CommandShortcut>⌘N</CommandShortcut></CommandItem>
        <CommandItem value="生成文档">生成文档<CommandShortcut>⌘G</CommandShortcut></CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="组件">
        <CommandItem value="按钮">按钮</CommandItem>
        <CommandItem value="输入框">输入框</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>`,
    'context-menu': `${importLine(['ContextMenu', 'ContextMenuContent', 'ContextMenuItem', 'ContextMenuLabel', 'ContextMenuSeparator', 'ContextMenuShortcut', 'ContextMenuTrigger'], item.name)}

<template>
  <ContextMenu>
    <ContextMenuTrigger class="flex h-28 items-center justify-center rounded-[8px] border border-dashed border-[#C4C5D8] text-sm text-[#434655]">右键打开上下文菜单</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>组件操作</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>复制名称<ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
      <ContextMenuItem>查看源码</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>`,
    'dialog': `${importLine(['Dialog', 'DialogContent', 'DialogDescription', 'DialogFooter', 'DialogHeader', 'DialogTitle', 'DialogTrigger'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        打开对话框
      </Button>
    </DialogTrigger>
    <DialogContent>
      <div class="text-sm text-muted-foreground">
        这是一个基础 Dialog 示例。
      </div>
    </DialogContent>
  </Dialog>
</template>`,
    'drawer': `${importLine(['Drawer', 'DrawerContent', 'DrawerDescription', 'DrawerFooter', 'DrawerHeader', 'DrawerTitle'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <Drawer :default-open="true" :modal="false">
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>任务详情</DrawerTitle>
        <DrawerDescription>从底部抽屉查看当前任务的执行状态。</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter><Button>完成</Button></DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>`,
    'dropdown-menu': `${importLine(['DropdownMenu', 'DropdownMenuContent', 'DropdownMenuGroup', 'DropdownMenuItem', 'DropdownMenuLabel', 'DropdownMenuSeparator', 'DropdownMenuShortcut', 'DropdownMenuTrigger'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <DropdownMenu :default-open="true">
    <DropdownMenuTrigger as-child><Button variant="outline">打开菜单</Button></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>项目操作</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>重命名<DropdownMenuShortcut>⌘R</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuItem>生成文档</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>`,
    'empty': `${importLine(['Empty', 'EmptyContent', 'EmptyDescription', 'EmptyHeader', 'EmptyMedia', 'EmptyTitle'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <Empty>
    <EmptyHeader>
      <EmptyMedia>空</EmptyMedia>
      <EmptyTitle>暂无组件记录</EmptyTitle>
      <EmptyDescription>添加第一个组件后，这里会显示最新状态。</EmptyDescription>
    </EmptyHeader>
    <EmptyContent><Button size="sm">新增组件</Button></EmptyContent>
  </Empty>
</template>`,
    'field': `${importLine(['Field', 'FieldDescription', 'FieldGroup', 'FieldLabel', 'FieldLegend', 'FieldSet', 'FieldTitle'], item.name)}

<template>
  <FieldGroup>
    <FieldSet>
      <FieldLegend>项目信息</FieldLegend>
      <Field orientation="vertical">
        <FieldLabel>项目名称</FieldLabel>
        <FieldTitle>x-ui registry</FieldTitle>
        <FieldDescription>用于管理组件文档和静态 registry。</FieldDescription>
      </Field>
    </FieldSet>
  </FieldGroup>
</template>`,
    'form': `${importLine(['FormDescription', 'FormField', 'FormItem', 'FormLabel'], item.name)}

<template>
  <FormField name="email">
    <FormItem class="max-w-sm">
      <FormLabel>邮箱地址</FormLabel>
      <FormDescription>用于接收组件库发布通知。</FormDescription>
      <div class="h-9 rounded-[4px] border border-[#E2E4E9] bg-white px-3 py-2 text-sm text-[#434655]">team@example.com</div>
    </FormItem>
  </FormField>
</template>`,
    'hover-card': `${importLine(['HoverCard', 'HoverCardContent', 'HoverCardTrigger'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <HoverCard :default-open="true">
    <HoverCardTrigger as-child><Button variant="link">查看维护者</Button></HoverCardTrigger>
    <HoverCardContent>
      <div class="space-y-1">
        <p class="text-sm font-semibold">林清和</p>
        <p class="text-xs text-[#434655]">负责组件规范、样式迁移和文档体验。</p>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>`,
    'item': `${importLine(['Item', 'ItemActions', 'ItemContent', 'ItemDescription', 'ItemFooter', 'ItemGroup', 'ItemHeader', 'ItemMedia', 'ItemSeparator', 'ItemTitle'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <ItemGroup class="gap-3">
    <Item>
      <ItemMedia>文</ItemMedia>
      <ItemContent>
        <ItemHeader><ItemTitle>组件文档</ItemTitle></ItemHeader>
        <ItemDescription>每个组件都提供中文示例和源码 API。</ItemDescription>
        <ItemFooter>刚刚更新</ItemFooter>
      </ItemContent>
      <ItemActions><Button size="sm" variant="outline">查看</Button></ItemActions>
    </Item>
    <ItemSeparator />
  </ItemGroup>
</template>`,
    'kbd': `${importLine(['Kbd', 'KbdGroup'], item.name)}

<template>
  <KbdGroup>
    <Kbd>⌘</Kbd>
    <Kbd>K</Kbd>
    <span class="ml-2 text-sm text-[#434655]">打开命令面板</span>
  </KbdGroup>
</template>`,
    'label': `${importLine(['Label'], item.name)}

<template>
  <div class="grid max-w-sm gap-2">
    <Label for="demo-label">项目名称</Label>
    <input id="demo-label" class="h-9 rounded-[4px] border border-[#E2E4E9] px-3 text-sm" value="x-ui registry">
  </div>
</template>`,
    'menubar': `${importLine(['Menubar', 'MenubarContent', 'MenubarItem', 'MenubarMenu', 'MenubarSeparator', 'MenubarShortcut', 'MenubarTrigger'], item.name)}

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>文件</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>新建组件<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
        <MenubarItem>保存文档</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>导出 registry</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>`,
    'navigation-menu': `${importLine(['NavigationMenu', 'NavigationMenuContent', 'NavigationMenuItem', 'NavigationMenuLink', 'NavigationMenuList', 'NavigationMenuTrigger'], item.name)}

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>组件</NavigationMenuTrigger>
        <NavigationMenuContent class="w-64 p-4">
          <NavigationMenuLink class="block rounded-[4px] p-3 hover:bg-[#F5F6F7]">基础控件</NavigationMenuLink>
          <NavigationMenuLink class="block rounded-[4px] p-3 hover:bg-[#F5F6F7]">反馈组件</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>`,
    'number-field': `${importLine(['NumberField', 'NumberFieldContent', 'NumberFieldDecrement', 'NumberFieldIncrement', 'NumberFieldInput'], item.name)}

<template>
  <NumberField :default-value="3" :min="1" :max="10" class="max-w-36">
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>`,
    'pagination': `${importLine(['Pagination', 'PaginationContent', 'PaginationEllipsis', 'PaginationItem', 'PaginationNext', 'PaginationPrevious'], item.name)}

<template>
  <Pagination :total="80" :items-per-page="10" :sibling-count="1" show-edges :default-page="2">
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious>上一页</PaginationPrevious>
      <template v-for="(page, index) in items" :key="index">
        <PaginationItem v-if="page.type === 'page'" :value="page.value" :is-active="page.value === 2">{{ page.value }}</PaginationItem>
        <PaginationEllipsis v-else />
      </template>
      <PaginationNext>下一页</PaginationNext>
    </PaginationContent>
  </Pagination>
</template>`,
    'pin-input': `<script setup lang="ts">
import { ref } from 'vue'
${importLine(['PinInput', 'PinInputGroup', 'PinInputSeparator', 'PinInputSlot'], item.name)}

const value = ref(['2', '4', '6'])
</script>

<template>
  <PinInput v-model="value">
    <PinInputGroup>
      <PinInputSlot v-for="index in 3" :key="index" :index="index - 1" />
    </PinInputGroup>
    <PinInputSeparator />
    <PinInputGroup>
      <PinInputSlot v-for="index in 3" :key="index" :index="index + 2" />
    </PinInputGroup>
  </PinInput>
</template>`,
    'popover': `${importLine(['Popover', 'PopoverContent', 'PopoverTrigger'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <Popover :default-open="true">
    <PopoverTrigger as-child><Button variant="outline">查看发布信息</Button></PopoverTrigger>
    <PopoverContent>
      <p class="text-sm font-semibold">发布窗口</p>
      <p class="mt-1 text-xs text-[#434655]">建议在验证通过后进行静态部署。</p>
    </PopoverContent>
  </Popover>
</template>`,
    'progress': `${importLine(['Progress'], item.name)}

<template>
  <div class="space-y-2">
    <div class="flex justify-between text-sm"><span>文档生成进度</span><span>72%</span></div>
    <Progress :model-value="72" />
  </div>
</template>`,
    'radio-group': `<script setup lang="ts">
import { ref } from 'vue'
${importLine(['RadioGroup', 'RadioGroupItem'], item.name)}

const value = ref('weekly')
</script>

<template>
  <RadioGroup v-model="value" class="grid gap-3">
    <label class="flex items-center gap-2"><RadioGroupItem value="daily" />每日同步</label>
    <label class="flex items-center gap-2"><RadioGroupItem value="weekly" />每周同步</label>
    <label class="flex items-center gap-2"><RadioGroupItem value="manual" />手动同步</label>
  </RadioGroup>
</template>`,
    'range-calendar': `${importLine(['RangeCalendar'], item.name)}

<template>
  <RangeCalendar class="rounded-[8px] border border-[#E2E4E9] bg-white" />
</template>`,
    'resizable': `${importLine(['ResizableHandle', 'ResizablePanel', 'ResizablePanelGroup'], item.name)}

<template>
  <ResizablePanelGroup direction="horizontal" class="h-32 rounded-[8px] border border-[#E2E4E9]">
    <ResizablePanel :default-size="45" class="flex items-center justify-center text-sm">导航</ResizablePanel>
    <ResizableHandle with-handle />
    <ResizablePanel :default-size="55" class="flex items-center justify-center text-sm">内容</ResizablePanel>
  </ResizablePanelGroup>
</template>`,
    'scroll-area': `${importLine(['ScrollArea'], item.name)}

<template>
  <ScrollArea class="h-32 rounded-[8px] border border-[#E2E4E9] p-4">
    <div v-for="demo in ['按钮', '输入框', '选择器', '表格', '弹窗', '提示', '标签', '分页']" :key="demo" class="border-b border-[#E2E4E9] py-2 text-sm">{{ demo }}</div>
  </ScrollArea>
</template>`,
    'select': `${importLine(['Select', 'SelectContent', 'SelectGroup', 'SelectItem', 'SelectLabel', 'SelectTrigger', 'SelectValue'], item.name)}

<template>
  <Select :default-value="'preview'" :default-open="true">
    <SelectTrigger class="w-56"><SelectValue placeholder="选择发布环境" /></SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>环境</SelectLabel>
        <SelectItem value="preview">预览环境</SelectItem>
        <SelectItem value="production">生产环境</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>`,
    'separator': `${importLine(['Separator'], item.name)}

<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm font-semibold">组件文档</p>
      <p class="text-xs text-[#434655]">源码 API、示例和 registry 地址。</p>
    </div>
    <Separator />
    <div class="text-sm">下一步：运行静态构建验证。</div>
  </div>
</template>`,
    'sheet': `${importLine(['Sheet', 'SheetContent', 'SheetDescription', 'SheetFooter', 'SheetHeader', 'SheetTitle', 'SheetTrigger'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <Sheet>
    <SheetTrigger as-child><Button>打开侧边面板</Button></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>发布检查</SheetTitle>
        <SheetDescription>确认文档、registry 和类型检查均已通过。</SheetDescription>
      </SheetHeader>
      <SheetFooter><Button>确认</Button></SheetFooter>
    </SheetContent>
  </Sheet>
</template>`,
    'sidebar': `${importLine(['Sidebar', 'SidebarContent', 'SidebarFooter', 'SidebarGroup', 'SidebarGroupContent', 'SidebarGroupLabel', 'SidebarHeader', 'SidebarInset', 'SidebarMenu', 'SidebarMenuButton', 'SidebarMenuItem', 'SidebarProvider', 'SidebarTrigger'], item.name)}

<template>
  <SidebarProvider default-open class="min-h-64 rounded-[8px] border border-[#E2E4E9]">
    <Sidebar collapsible="none" class="w-56 border-r border-[#E2E4E9]">
      <SidebarHeader class="p-3 font-semibold">X UI</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>组件</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem><SidebarMenuButton>按钮</SidebarMenuButton></SidebarMenuItem>
              <SidebarMenuItem><SidebarMenuButton>输入框</SidebarMenuButton></SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter class="p-3 text-xs text-[#434655]">文档预览</SidebarFooter>
    </Sidebar>
    <SidebarInset class="min-h-64 p-4">
      <SidebarTrigger />
      <p class="mt-4 text-sm text-[#434655]">侧边栏组件用于构建后台和文档导航。</p>
    </SidebarInset>
  </SidebarProvider>
</template>`,
    'skeleton': `${importLine(['Skeleton'], item.name)}

<template>
  <div class="space-y-3">
    <Skeleton class="h-4 w-40" />
    <Skeleton class="h-4 w-64" />
    <Skeleton class="h-20 w-full rounded-[8px]" />
  </div>
</template>`,
    'slider': `<script setup lang="ts">
import { ref } from 'vue'
${importLine(['Slider'], item.name)}
import { Label } from '@/components/ui/label'

const value = ref([64])
</script>

<template>
  <div class="space-y-3">
    <Label>音量：{{ value[0] }}%</Label>
    <Slider v-model="value" :max="100" :step="1" />
  </div>
</template>`,
    'sonner': `${importLine(['Toaster'], item.name)}

<template>
  <div class="space-y-4">
    <Toaster />
    <p class="text-sm font-semibold">通知容器已挂载</p>
    <p class="text-xs text-[#434655]">业务页面可通过 vue-sonner 的 toast 方法触发中文通知。</p>
  </div>
</template>`,
    'spinner': `${importLine(['Spinner'], item.name)}

<template>
  <div class="flex items-center gap-3">
    <Spinner />
    <span class="text-sm text-[#434655]">正在生成组件文档...</span>
  </div>
</template>`,
    'stepper': `${importLine(['Stepper', 'StepperDescription', 'StepperIndicator', 'StepperItem', 'StepperSeparator', 'StepperTitle', 'StepperTrigger'], item.name)}

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
</template>`,
    'tabs': `${importLine(['Tabs', 'TabsContent', 'TabsList', 'TabsTrigger'], item.name)}

<template>
  <Tabs default-value="preview" class="w-full">
    <TabsList><TabsTrigger value="preview">预览</TabsTrigger><TabsTrigger value="code">源码</TabsTrigger></TabsList>
    <TabsContent value="preview">这里展示组件交互效果。</TabsContent>
    <TabsContent value="code">这里展示示例源码。</TabsContent>
  </Tabs>
</template>`,
    'tags-input': `<script setup lang="ts">
import { ref } from 'vue'
${importLine(['TagsInput', 'TagsInputInput', 'TagsInputItem', 'TagsInputItemDelete', 'TagsInputItemText'], item.name)}

const tags = ref(['设计系统', '组件库'])
</script>

<template>
  <TagsInput v-model="tags">
    <TagsInputItem v-for="tag in tags" :key="tag" :value="tag">
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputInput placeholder="输入标签..." />
  </TagsInput>
</template>`,
    'textarea': `${importLine(['Textarea'], item.name)}

<template>
  <Textarea placeholder="请输入组件说明..." class="min-h-28" />
</template>`,
    'toggle': `${importLine(['Toggle'], item.name)}

<template>
  <Toggle>启用预览</Toggle>
</template>`,
    'toggle-group': `${importLine(['ToggleGroup', 'ToggleGroupItem'], item.name)}

<template>
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="docs">文档</ToggleGroupItem>
    <ToggleGroupItem value="registry">Registry</ToggleGroupItem>
    <ToggleGroupItem value="theme">主题</ToggleGroupItem>
  </ToggleGroup>
</template>`,
    'tooltip': `${importLine(['Tooltip', 'TooltipContent', 'TooltipProvider', 'TooltipTrigger'], item.name)}
import { Button } from '@/components/ui/button'

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :default-open="true">
      <TooltipTrigger as-child><Button variant="outline">悬停查看提示</Button></TooltipTrigger>
      <TooltipContent>这是一个中文 Tooltip 示例。</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>`,
  }

  if (sourceByName[item.name]) return sourceByName[item.name]

  const primaryComponent = imports[0]
  return `${importLine(imports, item.name)}

<template>
  <div class="rounded-[8px] border border-[#E2E4E9] bg-white p-5">
    <${primaryComponent}>
      中文示例内容
    </${primaryComponent}>
  </div>
</template>`
}

function withScriptSetup(source) {
  if (source.trimStart().startsWith('<script')) return `${source.trim()}\n`
  const [scriptPart, ...rest] = source.split('\n\n')
  return `<script setup lang="ts">\n${scriptPart}\n</script>\n\n${rest.join('\n\n').trim()}\n`
}

function customDemoSource(item) {
  if (!CUSTOM_DEMO_COMPONENTS.has(item.name)) return ''
  const file = path.join(root, 'app/components', `${pascalCase(item.name)}Demo.vue`)
  try {
    return readFileSync(file, 'utf8')
      .replaceAll('~~/registry/default/', '@/components/ui/')
      .replaceAll("import Input from '@/components/ui/input/Input.vue'", "import { Input } from '@/components/ui/input'")
      .replaceAll('marketing已接受', 'marketingAccepted')
      .replaceAll("'Not 已接受'", "'未接受'")
      .replaceAll('total金额', 'totalAmount')
  } catch {
    return ''
  }
}

function componentExampleSource(item, indexExports) {
  if (item.name === 'input') return inputBasicExampleSource()
  if (item.name === 'checkbox') return checkboxBasicExampleSource()
  if (item.name === 'combobox') return comboboxBasicExampleSource()
  if (item.name === 'select') return selectBasicExampleSource()

  return (customDemoSource(item) || withScriptSetup(exampleSource(item, indexExports))).trimEnd() + '\n'
}

function buttonVariantExampleSource() {
  return `<script setup lang="ts">
import { Button } from '@/components/ui/button'

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'

const variants: Array<{ value: ButtonVariant, label: string }> = [
  { value: 'default', label: '默认按钮' },
  { value: 'destructive', label: '危险按钮' },
  { value: 'outline', label: '描边按钮' },
  { value: 'secondary', label: '次要按钮' },
  { value: 'ghost', label: '幽灵按钮' },
  { value: 'link', label: '链接按钮' },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button
      v-for="item in variants"
      :key="item.value"
      :variant="item.value"
    >
      {{ item.label }}
    </Button>
  </div>
</template>
`
}

function buttonSizeExampleSource() {
  return `<script setup lang="ts">
import { Button } from '@/components/ui/button'

type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'

const sizes: Array<{ value: ButtonSize, label: string, icon?: boolean }> = [
  { value: 'default', label: '默认尺寸' },
  { value: 'sm', label: '小尺寸' },
  { value: 'lg', label: '大尺寸' },
  { value: 'icon', label: '图标尺寸', icon: true },
  { value: 'icon-sm', label: '小图标尺寸', icon: true },
  { value: 'icon-lg', label: '大图标尺寸', icon: true },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button
      v-for="item in sizes"
      :key="item.value"
      :size="item.value"
      :aria-label="item.icon ? item.label : undefined"
    >
      <span v-if="item.icon" aria-hidden="true">+</span>
      <span v-else>{{ item.label }}</span>
    </Button>
  </div>
</template>
`
}

function buttonDisabledExampleSource() {
  return `<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button disabled>
      禁用按钮
    </Button>
    <Button variant="outline" disabled>
      禁用描边
    </Button>
    <Button variant="secondary" disabled>
      禁用次要
    </Button>
    <Button variant="ghost" disabled>
      禁用幽灵
    </Button>
    <Button variant="link" disabled>
      禁用链接
    </Button>
  </div>
</template>
`
}

function buttonLoadingExampleSource() {
  return `<script setup lang="ts">
import { RefreshCw } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button loading>
      保存中
    </Button>
    <Button loading variant="outline" :loading-icon="RefreshCw">
      同步数据
    </Button>
    <Button loading variant="secondary">
      <template #loading-icon>
        <span class="block size-4 rounded-full border-2 border-current border-t-transparent" />
      </template>
      自定义图标
    </Button>
  </div>
</template>
`
}

function avatarClassExampleSource() {
  return `<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Avatar class="border border-primary text-primary">
      <AvatarImage src="https://dev.meos.center/meri-plus/avatar-default.png" alt="林清和" />
      <AvatarFallback>林</AvatarFallback>
    </Avatar>
  </div>
</template>
`
}

function avatarSizeExampleSource() {
  return `<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const sizes = [
  { value: 'sm', label: '小' },
  { value: 'base', label: '中' },
  { value: 'lg', label: '大' },
] as const
</script>

<template>
  <div class="flex flex-wrap items-end gap-4">
    <Avatar v-for="item in sizes" :key="item.value" :size="item.value">
      <AvatarImage src="https://dev.meos.center/meri-plus/avatar-default.png" :alt="item.label" />
      <AvatarFallback>{{ item.label }}</AvatarFallback>
    </Avatar>
  </div>
</template>
`
}

function avatarShapeExampleSource() {
  return `<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const shapes = [
  { value: 'circle', label: '圆形' },
  { value: 'square', label: '方形' },
] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <Avatar v-for="item in shapes" :key="item.value" :shape="item.value" size="base">
      <AvatarImage src="https://dev.meos.center/meri-plus/avatar-default.png" :alt="item.label" />
      <AvatarFallback>{{ item.label }}</AvatarFallback>
    </Avatar>
  </div>
</template>
`
}

function avatarDefaultSlotExampleSource() {
  return `<script setup lang="ts">
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Avatar>
      <AvatarFallback>林</AvatarFallback>
    </Avatar>
  </div>
</template>
`
}

function avatarImageExampleSource() {
  return `<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Avatar size="base">
      <AvatarImage src="https://dev.meos.center/meri-plus/avatar-default.png" alt="默认头像" />
      <AvatarFallback>头像</AvatarFallback>
    </Avatar>
  </div>
</template>
`
}

function avatarFallbackExampleSource() {
  return `<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Avatar size="base">
      <AvatarImage src="/avatar-not-found.png" alt="加载失败头像" />
      <AvatarFallback>林</AvatarFallback>
    </Avatar>
  </div>
</template>
`
}

function checkboxBasicExampleSource() {
  return `<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="terms" />
    <Label for="terms">接受服务条款</Label>
  </div>
</template>
`
}

function checkboxCheckedExampleSource() {
  return `<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="checked" default-value />
    <Label for="checked">默认选中</Label>
  </div>
</template>
`
}

function checkboxDisabledExampleSource() {
  return `<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="grid gap-3">
    <div class="flex items-center gap-2">
      <Checkbox id="disabled" disabled />
      <Label for="disabled" class="text-muted-foreground">禁用未选中</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox id="disabled-checked" disabled default-value />
      <Label for="disabled-checked" class="text-muted-foreground">禁用已选中</Label>
    </div>
  </div>
</template>
`
}

function checkboxModelValueExampleSource() {
  return `<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const checked = ref(false)
</script>

<template>
  <div class="grid gap-2">
    <div class="flex items-center gap-2">
      <Checkbox id="sync" v-model="checked" />
      <Label for="sync">同步到受控值</Label>
    </div>
    <p class="text-sm text-muted-foreground">
      当前状态：{{ checked ? '已选中' : '未选中' }}
    </p>
  </div>
</template>
`
}

function checkboxClassExampleSource() {
  return `<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="custom-style" class="border-primary text-primary data-[state=checked]:bg-primary" />
    <Label for="custom-style">自定义样式</Label>
  </div>
</template>
`
}

function checkboxDefaultSlotExampleSource() {
  return `<script setup lang="ts">
import { Minus } from 'lucide-vue-next'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="custom-icon" default-value>
      <Minus class="h-4 w-4" />
    </Checkbox>
    <Label for="custom-icon">自定义选中图标</Label>
  </div>
</template>
`
}

function checkboxGroupExampleSource() {
  return `<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex items-center gap-3">
      <Checkbox id="terms" />
      <Label for="terms">接受服务条款</Label>
    </div>

    <div class="flex items-start gap-3">
      <Checkbox id="terms-2" :default-value="true" />
      <div class="grid gap-2">
        <Label for="terms-2">接受服务条款</Label>
        <p class="text-sm text-muted-foreground">
          勾选后表示你同意当前产品的服务条款和隐私说明。
        </p>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <Checkbox id="toggle" disabled />
      <Label for="toggle">启用消息通知</Label>
    </div>

    <Label class="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
      <Checkbox
        id="toggle-2"
        :default-value="true"
        class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
      />
      <div class="grid gap-1.5 font-normal">
        <p class="text-sm font-medium leading-none">
          启用消息通知
        </p>
        <p class="text-sm text-muted-foreground">
          你可以随时开启或关闭消息通知。
        </p>
      </div>
    </Label>
  </div>
</template>
`
}

function comboboxBasicExampleSource() {
  return `<script setup lang="ts">
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox'
</script>

<template>
  <Combobox default-open open-on-focus>
    <ComboboxAnchor>
      <ComboboxInput placeholder="搜索组件..." />
    </ComboboxAnchor>
    <ComboboxList>
      <ComboboxEmpty>未找到组件</ComboboxEmpty>
      <ComboboxGroup heading="组件">
        <ComboboxItem value="button">按钮 Button</ComboboxItem>
        <ComboboxItem value="input">输入框 Input</ComboboxItem>
        <ComboboxItem value="select">选择器 Select</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
`
}

function comboboxControlledExampleSource() {
  return `<script setup lang="ts">
import { ref } from 'vue'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox'

const value = ref('input')
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <Combobox v-model="value" open-on-focus>
      <ComboboxAnchor>
        <ComboboxInput placeholder="选择组件..." />
      </ComboboxAnchor>
      <ComboboxList>
        <ComboboxEmpty>未找到组件</ComboboxEmpty>
        <ComboboxGroup heading="组件">
          <ComboboxItem value="button">按钮 Button</ComboboxItem>
          <ComboboxItem value="input">输入框 Input</ComboboxItem>
          <ComboboxItem value="select">选择器 Select</ComboboxItem>
        </ComboboxGroup>
      </ComboboxList>
    </Combobox>
    <p class="text-sm text-muted-foreground">
      当前选中：{{ value }}
    </p>
  </div>
</template>
`
}

function comboboxMultipleExampleSource() {
  return `<script setup lang="ts">
import { ref } from 'vue'
import { Check } from 'lucide-vue-next'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList } from '@/components/ui/combobox'

const value = ref<string[]>(['button', 'input'])
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <Combobox v-model="value" multiple open-on-focus>
      <ComboboxAnchor>
        <ComboboxInput placeholder="搜索组件..." />
      </ComboboxAnchor>
      <ComboboxList>
        <ComboboxEmpty>未找到组件</ComboboxEmpty>
        <ComboboxGroup heading="组件">
          <ComboboxItem value="button">
            按钮 Button
            <ComboboxItemIndicator><Check /></ComboboxItemIndicator>
          </ComboboxItem>
          <ComboboxItem value="input">
            输入框 Input
            <ComboboxItemIndicator><Check /></ComboboxItemIndicator>
          </ComboboxItem>
          <ComboboxItem value="select">
            选择器 Select
            <ComboboxItemIndicator><Check /></ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxList>
    </Combobox>
    <p class="text-sm text-muted-foreground">
      已选择：{{ value.join('、') }}
    </p>
  </div>
</template>
`
}

function comboboxGroupsExampleSource() {
  return `<script setup lang="ts">
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList, ComboboxSeparator } from '@/components/ui/combobox'
</script>

<template>
  <Combobox default-open open-on-focus>
    <ComboboxAnchor>
      <ComboboxInput placeholder="搜索资源..." />
    </ComboboxAnchor>
    <ComboboxList>
      <ComboboxEmpty>未找到资源</ComboboxEmpty>
      <ComboboxGroup heading="基础组件">
        <ComboboxItem value="button">按钮 Button</ComboboxItem>
        <ComboboxItem value="input">输入框 Input</ComboboxItem>
      </ComboboxGroup>
      <ComboboxSeparator />
      <ComboboxGroup heading="反馈组件">
        <ComboboxItem value="alert">提示 Alert</ComboboxItem>
        <ComboboxItem value="tooltip">气泡 Tooltip</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
`
}

function comboboxEmptyExampleSource() {
  return `<script setup lang="ts">
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxInput, ComboboxList } from '@/components/ui/combobox'
</script>

<template>
  <Combobox default-open open-on-focus>
    <ComboboxAnchor>
      <ComboboxInput model-value="没有结果" placeholder="搜索组件..." />
    </ComboboxAnchor>
    <ComboboxList>
      <ComboboxEmpty>未找到匹配结果</ComboboxEmpty>
    </ComboboxList>
  </Combobox>
</template>
`
}

function comboboxTriggerExampleSource() {
  return `<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList, ComboboxTrigger } from '@/components/ui/combobox'
</script>

<template>
  <Combobox default-open open-on-focus>
    <ComboboxAnchor>
      <ComboboxInput placeholder="搜索组件..." />
      <ComboboxTrigger>
        <ChevronsUpDown class="size-4 text-muted-foreground" />
      </ComboboxTrigger>
    </ComboboxAnchor>
    <ComboboxList>
      <ComboboxEmpty>未找到组件</ComboboxEmpty>
      <ComboboxGroup heading="组件">
        <ComboboxItem value="button">按钮 Button</ComboboxItem>
        <ComboboxItem value="input">输入框 Input</ComboboxItem>
        <ComboboxItem value="select">选择器 Select</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
`
}

function selectBasicExampleSource() {
  return `<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
</script>

<template>
  <Select :default-value="'preview'" :default-open="true">
    <SelectTrigger>
      <SelectValue placeholder="选择发布环境" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>环境</SelectLabel>
        <SelectItem value="preview">预览环境</SelectItem>
        <SelectItem value="production">生产环境</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
`
}

function selectControlledExampleSource() {
  return `<script setup lang="ts">
import { ref } from 'vue'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

const value = ref('weekly')
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <Select v-model="value">
      <SelectTrigger>
        <SelectValue placeholder="选择同步频率" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>同步频率</SelectLabel>
          <SelectItem value="daily">每日同步</SelectItem>
          <SelectItem value="weekly">每周同步</SelectItem>
          <SelectItem value="manual">手动同步</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <p class="text-sm text-muted-foreground">
      当前选中：{{ value }}
    </p>
  </div>
</template>
`
}

function selectFruitsExampleSource() {
  return `<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
</script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">
          Apple
        </SelectItem>
        <SelectItem value="banana">
          Banana
        </SelectItem>
        <SelectItem value="blueberry">
          Blueberry
        </SelectItem>
        <SelectItem value="grapes">
          Grapes
        </SelectItem>
        <SelectItem value="pineapple">
          Pineapple
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
`
}

function selectGroupsExampleSource() {
  return `<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
</script>

<template>
  <Select :default-open="true">
    <SelectTrigger>
      <SelectValue placeholder="选择组件" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>基础组件</SelectLabel>
        <SelectItem value="button">按钮 Button</SelectItem>
        <SelectItem value="input">输入框 Input</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>反馈组件</SelectLabel>
        <SelectItem value="alert">提示 Alert</SelectItem>
        <SelectItem value="tooltip">气泡 Tooltip</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
`
}

function selectDisabledItemExampleSource() {
  return `<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
</script>

<template>
  <Select :default-open="true">
    <SelectTrigger>
      <SelectValue placeholder="选择发布环境" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>环境</SelectLabel>
        <SelectItem value="preview">预览环境</SelectItem>
        <SelectItem value="production">生产环境</SelectItem>
        <SelectItem value="disabled" disabled>维护中</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
`
}

function selectScrollExampleSource() {
  return `<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue } from '@/components/ui/select'

const options = Array.from({ length: 16 }, (_, index) => ({
  value: \`option-\${index + 1}\`,
  label: \`选项 \${index + 1}\`,
}))
</script>

<template>
  <Select :default-open="true">
    <SelectTrigger>
      <SelectValue placeholder="选择长列表选项" />
    </SelectTrigger>
    <SelectContent class="max-h-48">
      <SelectScrollUpButton />
      <SelectGroup>
        <SelectLabel>长列表</SelectLabel>
        <SelectItem v-for="item in options" :key="item.value" :value="item.value">
          {{ item.label }}
        </SelectItem>
      </SelectGroup>
      <SelectScrollDownButton />
    </SelectContent>
  </Select>
</template>
`
}

function selectItemTextExampleSource() {
  return `<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectItemText, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
</script>

<template>
  <Select :default-value="'design'" :default-open="true">
    <SelectTrigger>
      <SelectValue placeholder="选择团队" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>团队</SelectLabel>
        <SelectItem value="design">
          <SelectItemText>
            设计团队
          </SelectItemText>
        </SelectItem>
        <SelectItem value="engineering">
          <SelectItemText>
            工程团队
          </SelectItemText>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
`
}

function inputBasicExampleSource() {
  return `<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="grid w-full max-w-sm gap-2">
    <Input placeholder="请输入项目名称" />
  </div>
</template>
`
}

function inputDefaultValueExampleSource() {
  return `<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="grid w-full max-w-sm gap-2">
    <Input default-value="默认项目名称" />
  </div>
</template>
`
}

function inputModelValueExampleSource() {
  return `<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'

const value = ref('组件文档')
</script>

<template>
  <div class="grid w-full max-w-sm gap-3">
    <Input v-model="value" placeholder="请输入文档名称" />
    <p class="text-sm text-muted-foreground">
      当前输入：{{ value || '暂无内容' }}
    </p>
  </div>
</template>
`
}

function inputClassExampleSource() {
  return `<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="grid w-full max-w-sm gap-3">
    <Input
      class="border-primary bg-accent"
      placeholder="自定义 class 样式"
    />
  </div>
</template>
`
}

function inputDisabledExampleSource() {
  return `<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="grid w-full max-w-sm gap-3">
    <Input disabled model-value="禁用输入内容" />
  </div>
</template>
`
}

function inputGroupInlineExampleSource() {
  return `<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
</script>

<template>
  <div class="grid w-full max-w-md gap-3">
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <Search class="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="搜索组件名称" />
      <InputGroupText>⌘K</InputGroupText>
    </InputGroup>
  </div>
</template>
`
}

function inputGroupIconExampleSource() {
  return `<script setup lang="ts">
import { Check, CreditCard, Info, Mail, Search, Star } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="搜索组件..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput type="email" placeholder="输入邮箱" />
      <InputGroupAddon>
        <Mail />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="银行卡号" />
      <InputGroupAddon>
        <CreditCard />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Check />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="收藏项目" />
      <InputGroupAddon align="inline-end">
        <Star />
        <Info />
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
`
}

function inputGroupTextExampleSource() {
  return `<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example" class="!pl-0.5" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="输入用户名" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@company.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupTextarea placeholder="输入消息" />
      <InputGroupAddon align="block-end">
        <InputGroupText class="text-xs text-muted-foreground">
          还可输入 120 个字符
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
`
}

function inputGroupButtonExampleSource() {
  return `<script setup lang="ts">
import { Check, Copy, Star } from 'lucide-vue-next'
import { ref } from 'vue'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'

const copied = ref(false)
const favorite = ref(false)
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="https://x.com/x-ui" readonly />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label="复制链接"
          title="复制链接"
          size="icon-xs"
          @click="copied = !copied"
        >
          <Check v-if="copied" />
          <Copy v-else />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup class="[--radius:9999px]">
      <InputGroupAddon class="pl-3 text-muted-foreground">
        https://
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-xs"
          @click="favorite = !favorite"
        >
          <Star :class="favorite ? 'fill-primary stroke-primary' : ''" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="输入搜索内容..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="secondary">
          搜索
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
`
}

function inputGroupTooltipExampleSource() {
  return `<script setup lang="ts">
import { HelpCircle, Info } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="输入密码" type="password" />
      <InputGroupAddon align="inline-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <InputGroupButton variant="ghost" aria-label="密码说明" size="icon-xs">
                <Info />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>密码至少需要 8 个字符。</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="输入 API Key" />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <InputGroupAddon>
              <InputGroupButton variant="ghost" aria-label="查看帮助" size="icon-xs">
                <HelpCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </TooltipTrigger>
          <TooltipContent side="left">点击查看 API Key 获取方式。</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </InputGroup>
  </div>
</template>
`
}

function inputGroupTextareaExampleSource() {
  return `<script setup lang="ts">
import { Braces, Copy, CornerDownLeft, RefreshCw } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
</script>

<template>
  <div class="grid w-full max-w-md gap-4">
    <InputGroup>
      <InputGroupTextarea
        placeholder="console.log('Hello, world!');"
        class="min-h-[200px]"
      />
      <InputGroupAddon align="block-start" class="border-b">
        <InputGroupText class="font-mono">
          <Braces />
          script.js
        </InputGroupText>
        <InputGroupButton class="ml-auto" size="icon-xs">
          <RefreshCw />
        </InputGroupButton>
        <InputGroupButton variant="ghost" size="icon-xs">
          <Copy />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupAddon align="block-end" class="border-t">
        <InputGroupText>Line 1, Column 1</InputGroupText>
        <InputGroupButton size="sm" class="ml-auto" variant="default">
          运行
          <CornerDownLeft />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
`
}

function inputGroupSpinnerExampleSource() {
  return `<script setup lang="ts">
import { Loader } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup data-disabled>
      <InputGroupInput placeholder="正在搜索..." disabled />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup data-disabled>
      <InputGroupInput placeholder="正在保存更改..." disabled />
      <InputGroupAddon align="inline-end">
        <InputGroupText>保存中...</InputGroupText>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup data-disabled>
      <InputGroupInput placeholder="正在刷新数据..." disabled />
      <InputGroupAddon>
        <Loader class="animate-spin" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText class="text-muted-foreground">
          请稍候...
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
`
}

function inputGroupLabelExampleSource() {
  return `<script setup lang="ts">
import { Info } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput id="username" placeholder="x-ui" />
      <InputGroupAddon>
        <Label for="username">@</Label>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput id="email" placeholder="x-ui@example.com" />
      <InputGroupAddon align="block-start">
        <Label for="email" class="text-foreground">
          Email
        </Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <InputGroupButton variant="ghost" aria-label="邮箱说明" class="ml-auto rounded-full" size="icon-xs">
                <Info />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>我们会用它发送通知。</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
`
}

function inputGroupDropdownExampleSource() {
  return `<script setup lang="ts">
import { ChevronDown, MoreHorizontal } from 'lucide-vue-next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="输入文件名" />
      <InputGroupAddon align="inline-end">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <InputGroupButton variant="ghost" aria-label="更多" size="icon-xs">
              <MoreHorizontal />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>设置</DropdownMenuItem>
            <DropdownMenuItem>复制路径</DropdownMenuItem>
            <DropdownMenuItem>打开位置</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup class="[--radius:1rem]">
      <InputGroupInput placeholder="输入搜索内容" />
      <InputGroupAddon align="inline-end">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <InputGroupButton variant="ghost" class="!pr-1.5 text-xs">
              搜索范围
              <ChevronDown class="size-3" />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="[--radius:0.95rem]">
            <DropdownMenuItem>组件文档</DropdownMenuItem>
            <DropdownMenuItem>开发规范</DropdownMenuItem>
            <DropdownMenuItem>更新记录</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
`
}

function inputGroupButtonGroupExampleSource() {
  return `<script setup lang="ts">
import { Link2 } from 'lucide-vue-next'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="grid w-full max-w-sm">
    <ButtonGroup class="!gap-0">
      <ButtonGroupText as-child>
        <Label for="url">https://</Label>
      </ButtonGroupText>
      <InputGroup>
        <InputGroupInput id="url" />
        <InputGroupAddon align="inline-end">
          <Link2 />
        </InputGroupAddon>
      </InputGroup>
      <ButtonGroupText>.com</ButtonGroupText>
    </ButtonGroup>
  </div>
</template>
`
}

function inputGroupCustomInputExampleSource() {
  return `<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupButton } from '@/components/ui/input-group'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <textarea
        data-slot="input-group-control"
        class="flex min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-[14px] outline-none"
        placeholder="自动增高 textarea..."
      />
      <InputGroupAddon align="block-end">
        <InputGroupButton class="ml-auto" size="sm" variant="default">
          提交
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
`
}

function tooltipPlacementExampleSource() {
  return `<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const placements = [
  { label: 'Top', side: 'top', content: '顶部提示' },
  { label: 'Right', side: 'right', content: '右侧提示' },
  { label: 'Bottom', side: 'bottom', content: '底部提示' },
  { label: 'Left', side: 'left', content: '左侧提示' },
] as const
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <TooltipProvider v-for="item in placements" :key="item.side" :delay-duration="0">
      <Tooltip :open="true">
        <TooltipTrigger as-child>
          <Button variant="outline">
            {{ item.label }}
          </Button>
        </TooltipTrigger>
        <TooltipContent :side="item.side">
          {{ item.content }}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
`
}

function tooltipSideOffsetExampleSource(offset, label) {
  return `<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :default-open="true">
      <TooltipTrigger as-child>
        <Button variant="outline">
          ${label}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top" :side-offset="${offset}">
        sideOffset = ${offset}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
`
}

function tooltipAlignOffsetExampleSource(align, offset, label) {
  return `<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :default-open="true">
      <TooltipTrigger as-child>
        <Button variant="outline">
          ${label}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top" align="${align}" :align-offset="${offset}">
        alignOffset = ${offset}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
`
}

function sheetSideExampleSource(side, label, title) {
  return `<script setup lang="ts">
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        ${label}
      </Button>
    </SheetTrigger>
    <SheetContent side="${side}">
      <SheetHeader>
        <SheetTitle>${title}</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
`
}

function sheetClassExampleSource(componentName, tagName) {
  return `<script setup lang="ts">
import { ${componentName} } from '@/components/ui/sheet'
</script>

<template>
  <${tagName} class="border-primary">
    示例内容
  </${tagName}>
</template>
`
}

function sheetWrappedApiExampleSource(title, body, side = 'right') {
  return `<script setup lang="ts">
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        打开
      </Button>
    </SheetTrigger>
    <SheetContent side="${side}">
      <SheetHeader>
        <SheetTitle>${title}</SheetTitle>
        <SheetDescription>
          ${body}
        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <SheetClose as-child>
          <Button variant="outline">
            关闭
          </Button>
        </SheetClose>
        <Button>
          保存
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
`
}

function apiPreviewExampleSource(item, api) {
  const component = api.component
  const example = api.kind === 'prop'
    ? propExample(component, api)
    : api.kind === 'event'
      ? eventExample(component, api.name)
      : slotExample(component, api.name)

  const imports = api.indexExports.componentExports.length > 0 ? api.indexExports.componentExports : [pascalCase(item.name)]
  const literalExample = {
    class: example.replace(/ class="[^"]*"/, ' class="border-primary text-primary"').replace(' />', `>自定义样式</${component}>`),
    variant: (() => {
      if (component === 'Alert') return '<Alert variant="destructive">危险提示</Alert>'
      if (component === 'EmptyMedia') return '<EmptyMedia variant="icon">空</EmptyMedia>'
      return example.replace('示例内容', '变体示例')
    })(),
    size: example.replace('示例内容', '尺寸示例'),
    shape: example.replace(':shape="example"', 'shape="square"'),
    default: example.replace('内容', '默认插槽内容'),
  }[api.name] ?? example

  return `<script setup lang="ts">
${importLine(imports, item.name)}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    ${literalExample.replaceAll('\n', '\n    ')}
  </div>
</template>
`
}

function extraExampleSources(item) {
  if (item.name === 'button') return [
    {
      fileName: 'Variants.vue',
      title: 'Variant 变体',
      previewName: 'button variant',
      source: buttonVariantExampleSource(),
    },
    {
      fileName: 'Sizes.vue',
      title: 'Size 尺寸',
      previewName: 'button size',
      source: buttonSizeExampleSource(),
    },
    {
      fileName: 'Disabled.vue',
      title: 'Disabled 禁用',
      previewName: 'button disabled',
      source: buttonDisabledExampleSource(),
    },
    {
      fileName: 'Loading.vue',
      title: 'Loading 加载中',
      previewName: 'button loading',
      source: buttonLoadingExampleSource(),
    },
  ]

  if (item.name === 'input') return [
    {
      fileName: 'DefaultValue.vue',
      title: 'DefaultValue 默认值',
      previewName: 'input default value',
      source: inputDefaultValueExampleSource(),
    },
    {
      fileName: 'ModelValue.vue',
      title: 'ModelValue 受控值',
      previewName: 'input model value',
      source: inputModelValueExampleSource(),
    },
    {
      fileName: 'Class.vue',
      title: 'Class 自定义样式',
      previewName: 'input class',
      source: inputClassExampleSource(),
    },
    {
      fileName: 'Disabled.vue',
      title: 'Disabled 禁用',
      previewName: 'input disabled',
      source: inputDisabledExampleSource(),
    },
  ]

  if (item.name === 'avatar') return [
    {
      fileName: 'AvatarClass.vue',
      title: 'Avatar.class',
      previewName: 'avatar Avatar class',
      source: avatarClassExampleSource(),
    },
    {
      fileName: 'AvatarSize.vue',
      title: 'Avatar.size',
      previewName: 'avatar Avatar size',
      source: avatarSizeExampleSource(),
    },
    {
      fileName: 'AvatarShape.vue',
      title: 'Avatar.shape',
      previewName: 'avatar Avatar shape',
      source: avatarShapeExampleSource(),
    },
    {
      fileName: 'AvatarDefaultSlot.vue',
      title: 'Avatar slot: default',
      previewName: 'avatar Avatar default slot',
      source: avatarDefaultSlotExampleSource(),
    },
    {
      fileName: 'AvatarImageSlot.vue',
      title: 'AvatarImage 图片',
      previewName: 'avatar AvatarImage image',
      source: avatarImageExampleSource(),
    },
    {
      fileName: 'AvatarFallbackSlot.vue',
      title: 'AvatarFallback 回退',
      previewName: 'avatar AvatarFallback fallback',
      source: avatarFallbackExampleSource(),
    },
  ]

  if (item.name === 'checkbox') return [
    {
      fileName: 'Group.vue',
      title: 'Group 组合用法',
      previewName: 'checkbox group',
      source: checkboxGroupExampleSource(),
    },
    {
      fileName: 'Checked.vue',
      title: 'Checked 默认选中',
      previewName: 'checkbox checked',
      source: checkboxCheckedExampleSource(),
    },
    {
      fileName: 'Disabled.vue',
      title: 'Disabled 禁用',
      previewName: 'checkbox disabled',
      source: checkboxDisabledExampleSource(),
    },
    {
      fileName: 'ModelValue.vue',
      title: 'ModelValue 受控值',
      previewName: 'checkbox model value',
      source: checkboxModelValueExampleSource(),
    },
    {
      fileName: 'CheckboxClass.vue',
      title: 'Checkbox.class',
      previewName: 'checkbox Checkbox class',
      source: checkboxClassExampleSource(),
    },
    {
      fileName: 'CheckboxDefaultSlot.vue',
      title: 'Checkbox slot: default',
      previewName: 'checkbox Checkbox default slot',
      source: checkboxDefaultSlotExampleSource(),
    },
  ]

  if (item.name === 'combobox') return [
    {
      fileName: 'Controlled.vue',
      title: 'ModelValue 受控值',
      previewName: 'combobox controlled',
      source: comboboxControlledExampleSource(),
    },
    {
      fileName: 'Multiple.vue',
      title: 'Multiple 多选',
      previewName: 'combobox multiple',
      source: comboboxMultipleExampleSource(),
    },
    {
      fileName: 'Groups.vue',
      title: 'Group 分组选项',
      previewName: 'combobox groups',
      source: comboboxGroupsExampleSource(),
    },
    {
      fileName: 'Empty.vue',
      title: 'Empty 空状态',
      previewName: 'combobox empty',
      source: comboboxEmptyExampleSource(),
    },
    {
      fileName: 'Trigger.vue',
      title: 'Trigger 触发按钮',
      previewName: 'combobox trigger',
      source: comboboxTriggerExampleSource(),
    },
  ]

  if (item.name === 'dialog') return [
    {
      fileName: 'Basic.vue',
      title: '基础示例',
      previewName: 'dialog basic',
      source: `<script setup lang="ts">
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        打开对话框
      </Button>
    </DialogTrigger>
    <DialogContent>
      <div class="text-sm text-muted-foreground">
        这是一个基础 Dialog 示例。
      </div>
    </DialogContent>
  </Dialog>
</template>
`,
    },
    {
      fileName: 'Detail.vue',
      title: '标题 / 描述 / 底部操作',
      previewName: 'dialog detail',
      source: `<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Dialog :default-open="true">
    <DialogTrigger as-child>
      <Button variant="outline">
        编辑资料
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>编辑资料</DialogTitle>
        <DialogDescription>更新团队成员的基础信息。</DialogDescription>
      </DialogHeader>
      <div class="rounded-[8px] bg-[#F5F6F7] p-4 text-sm">
        姓名：林清和
      </div>
      <DialogFooter>
        <Button variant="outline">
          取消
        </Button>
        <Button>
          保存更改
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
`,
    },
    {
      fileName: 'Scroll.vue',
      title: 'Scroll 长内容',
      previewName: 'dialog scroll',
      source: `<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogScrollContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        查看长内容
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>发布检查</DialogTitle>
        <DialogDescription>确认文档、registry 和类型检查均已通过。</DialogDescription>
      </DialogHeader>
      <DialogScrollContent class="max-h-40 rounded-[8px] border border-[#E2E4E9] bg-[#F5F6F7] p-4 text-sm text-[#434655]">
        <p>1. 文档内容已更新。</p>
        <p>2. registry 构建通过。</p>
        <p>3. 类型检查通过。</p>
        <p>4. 预览页已验证。</p>
        <p>5. 其余内容用于测试滚动容器。</p>
        <p>6. 继续补充多行内容。</p>
        <p>7. 确认滚动区域可以正常显示。</p>
      </DialogScrollContent>
    </DialogContent>
  </Dialog>
</template>
`,
    },
  ]

  if (item.name === 'select') return [
    {
      fileName: 'Fruits.vue',
      title: 'Fruits 基础选择',
      previewName: 'select fruits',
      source: selectFruitsExampleSource(),
    },
    {
      fileName: 'Controlled.vue',
      title: 'ModelValue 受控值',
      previewName: 'select controlled',
      source: selectControlledExampleSource(),
    },
    {
      fileName: 'Groups.vue',
      title: 'Group 分组选项',
      previewName: 'select groups',
      source: selectGroupsExampleSource(),
    },
    {
      fileName: 'DisabledItem.vue',
      title: 'Disabled 禁用选项',
      previewName: 'select disabled item',
      source: selectDisabledItemExampleSource(),
    },
    {
      fileName: 'Scroll.vue',
      title: 'Scroll 长列表',
      previewName: 'select scroll',
      source: selectScrollExampleSource(),
    },
    {
      fileName: 'ItemText.vue',
      title: 'ItemText 自定义文本',
      previewName: 'select item text',
      source: selectItemTextExampleSource(),
    },
  ]

  if (item.name === 'input-group') return [
    {
      fileName: 'Icon.vue',
      title: 'Icon 图标',
      previewName: 'input-group icon',
      source: inputGroupIconExampleSource(),
    },
    {
      fileName: 'Text.vue',
      title: 'Text 文本',
      previewName: 'input-group text',
      source: inputGroupTextExampleSource(),
    },
    {
      fileName: 'Button.vue',
      title: 'Button 操作按钮',
      previewName: 'input-group button',
      source: inputGroupButtonExampleSource(),
    },
    {
      fileName: 'Tooltip.vue',
      title: 'Tooltip 提示',
      previewName: 'input-group tooltip',
      source: inputGroupTooltipExampleSource(),
    },
    {
      fileName: 'Textarea.vue',
      title: 'Textarea 多行输入',
      previewName: 'input-group textarea',
      source: inputGroupTextareaExampleSource(),
    },
    {
      fileName: 'Spinner.vue',
      title: 'Spinner 加载',
      previewName: 'input-group spinner',
      source: inputGroupSpinnerExampleSource(),
    },
    {
      fileName: 'Label.vue',
      title: 'Label 标签',
      previewName: 'input-group label',
      source: inputGroupLabelExampleSource(),
    },
    {
      fileName: 'Dropdown.vue',
      title: 'Dropdown 下拉菜单',
      previewName: 'input-group dropdown',
      source: inputGroupDropdownExampleSource(),
    },
    {
      fileName: 'ButtonGroup.vue',
      title: 'ButtonGroup 按钮组',
      previewName: 'input-group button group',
      source: inputGroupButtonGroupExampleSource(),
    },
    {
      fileName: 'CustomInput.vue',
      title: 'Custom Input 自定义输入',
      previewName: 'input-group custom input',
      source: inputGroupCustomInputExampleSource(),
    },
  ]

  if (item.name === 'sheet') return [
    {
      fileName: 'RightSide.vue',
      title: 'RightSide 右侧展开',
      previewName: 'sheet right side',
      source: sheetSideExampleSource('right', '右侧展开', '右侧 Sheet'),
    },
    {
      fileName: 'LeftSide.vue',
      title: 'LeftSide 左侧展开',
      previewName: 'sheet left side',
      source: sheetSideExampleSource('left', '左侧展开', '左侧 Sheet'),
    },
    {
      fileName: 'SheetDescription.vue',
      title: 'SheetDescription 说明文本',
      previewName: 'sheet description',
      source: sheetWrappedApiExampleSource('说明文本', '确认文档、registry 和类型检查均已通过。'),
    },
    {
      fileName: 'SheetFooter.vue',
      title: 'SheetFooter 底部操作',
      previewName: 'sheet footer',
      source: sheetWrappedApiExampleSource('底部操作', 'SheetFooter 负责放置底部动作。'),
    },
    {
      fileName: 'SheetHeader.vue',
      title: 'SheetHeader 标题区',
      previewName: 'sheet header',
      source: sheetWrappedApiExampleSource('标题区', 'SheetHeader 负责放置标题与说明。'),
    },
    {
      fileName: 'SheetTitle.vue',
      title: 'SheetTitle 标题',
      previewName: 'sheet title',
      source: sheetWrappedApiExampleSource('发布检查', 'SheetTitle 用于强调当前面板标题。'),
    },
    {
      fileName: 'SheetClose.vue',
      title: 'SheetClose 关闭',
      previewName: 'sheet close',
      source: sheetWrappedApiExampleSource('关闭示例', 'SheetClose 可以通过 as-child 组合到按钮里。'),
    },
    {
      fileName: 'SheetTrigger.vue',
      title: 'SheetTrigger 触发',
      previewName: 'sheet trigger',
      source: sheetWrappedApiExampleSource('触发示例', 'SheetTrigger 负责打开 Sheet。'),
    },
  ]

  if (item.name === 'tooltip') return [
    {
      fileName: 'Placement.vue',
      title: 'Placement 位置控制',
      previewName: 'tooltip placement',
      source: tooltipPlacementExampleSource(),
    },
    {
      fileName: 'SideOffsetSmall.vue',
      title: 'SideOffset 小间距',
      previewName: 'tooltip side offset small',
      source: tooltipSideOffsetExampleSource(4, 'SideOffset 4'),
    },
    {
      fileName: 'SideOffsetLarge.vue',
      title: 'SideOffset 大间距',
      previewName: 'tooltip side offset large',
      source: tooltipSideOffsetExampleSource(16, 'SideOffset 16'),
    },
    {
      fileName: 'AlignOffsetSmall.vue',
      title: 'AlignOffset Start',
      previewName: 'tooltip align offset start',
      source: tooltipAlignOffsetExampleSource('start', 20, 'Start + 20'),
    },
    {
      fileName: 'AlignOffsetLarge.vue',
      title: 'AlignOffset End',
      previewName: 'tooltip align offset end',
      source: tooltipAlignOffsetExampleSource('end', -20, 'End - 20'),
    },
    {
      fileName: 'Arrow.vue',
      title: 'Arrow 三角标',
      previewName: 'tooltip arrow',
      source: `<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :default-open="true">
      <TooltipTrigger as-child>
        <Button variant="outline">
          Arrow 三角标
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        TooltipContent 默认带箭头
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
`,
    },
    {
      fileName: 'DefaultOpen.vue',
      title: 'DefaultOpen 默认展开',
      previewName: 'tooltip default open',
      source: `<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :open="true">
      <TooltipTrigger as-child>
        <Button variant="outline">
          默认展开
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        Tooltip 默认展开状态
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
`,
    },
  ]

  return []
}

function hasBasicExample(item) {
  return item.name !== 'input-group'
}

function isCompletedComponent(item) {
  return new Set([
    'button',
    'input',
    'textarea',
    'separator',
    'label',
    'card',
    'scroll-area',
    'button-group',
    'input-group',
  ]).has(item.name)
}

function isPreviewSafeApi(item, api) {
  if (item.name === 'avatar') return false
  if (item.name === 'checkbox') return false
  if (item.name === 'combobox') return false
  if (item.name === 'select') return false

  const safeComponents = new Set([
    'Alert',
    'AlertDescription',
    'AlertTitle',
    'AspectRatio',
    'Avatar',
    'Badge',
    'Checkbox',
    'Empty',
    'EmptyContent',
    'EmptyDescription',
    'EmptyHeader',
    'EmptyMedia',
    'EmptyTitle',
    'Kbd',
    'KbdGroup',
    'Progress',
    'Skeleton',
    'Spinner',
    'Switch',
    'Table',
    'TableBody',
    'TableCaption',
    'TableCell',
    'TableEmpty',
    'TableFooter',
    'TableHead',
    'TableHeader',
    'TableRow',
    'Toggle',
  ])

  if (api.kind === 'event') return false
  if (item.name === 'toggle') return true
  return safeComponents.has(api.component)
}

function buildDocModel(item) {
  const files = item.files.filter((file) => file.path.endsWith('.vue'))
  const indexFile = item.files.find((file) => file.path.endsWith('/index.ts'))
  const indexExports = indexFile ? extractIndexExports(read(indexFile.path)) : { componentExports: [], apiExports: [] }
  const components = files.map(summarizeFile)
  const primaryComponent = indexExports.componentExports[0] || pascalCase(item.name)
  const dependencies = unique(components.flatMap((component) => component.imports).filter((dependency) => EXTERNAL_PREFIXES.some((prefix) => dependency.startsWith(prefix))))
  const extractedProps = components.flatMap((component) => component.props.map((prop) => ({ ...prop, component: component.component })))
  const extractedEmits = components.flatMap((component) => component.emits.map((emit) => ({ ...emit, component: component.component })))
  const allProps = item.name === 'input'
    ? [
        { component: 'Input', name: 'defaultValue', type: 'string | number', source: 'Props.defaultValue' },
        { component: 'Input', name: 'modelValue', type: 'string | number', source: 'Props.modelValue' },
        { component: 'Input', name: 'class', type: 'HTMLAttributes["class"]', source: 'Props.class' },
      ]
    : item.name === 'input-group'
      ? extractedProps.flatMap((prop) => {
          if (prop.component !== 'InputGroupButton' || prop.name !== 'props') return [prop]
          return [
            { component: 'InputGroupButton', name: 'variant', type: 'ButtonVariants["variant"]', source: 'InputGroupButtonProps.variant' },
            { component: 'InputGroupButton', name: 'size', type: 'InputGroupButtonVariants["size"]', source: 'InputGroupButtonProps.size' },
            { component: 'InputGroupButton', name: 'class', type: 'HTMLAttributes["class"]', source: 'InputGroupButtonProps.class' },
          ]
        })
    : extractedProps
  const allEmits = item.name === 'input'
    ? [
        { component: 'Input', name: 'update:modelValue', type: 'payload: string | number', source: 'defineEmits' },
      ]
    : extractedEmits
  const exampleProps = allProps.filter((prop) => !prop.opaque)
  const referencedProps = allProps.filter((prop) => prop.opaque)
  const exampleEmits = allEmits.filter((emit) => !emit.opaque)
  const referencedEmits = allEmits.filter((emit) => emit.opaque)
  const allSlots = components.flatMap((component) => component.slots.map((slot) => ({ ...slot, component: component.component })))
  const apiExamples = isCompletedComponent(item)
    ? []
    : [
        ...exampleProps.map((api) => ({ ...api, kind: 'prop', fileName: `${api.component}${safeFileName(api.name)}.vue`, title: `${api.component}.${api.name}`, previewName: `${item.name} ${api.component} ${api.name}`, indexExports })),
        ...exampleEmits.map((api) => ({ ...api, kind: 'event', fileName: `${api.component}${safeFileName(api.name)}Event.vue`, title: `${api.component}.${api.name}`, previewName: `${item.name} ${api.component} ${api.name}`, indexExports })),
        ...allSlots.map((api) => ({ ...api, kind: 'slot', fileName: `${api.component}${safeFileName(api.name)}Slot.vue`, title: `${api.component} slot: ${api.name}`, previewName: `${item.name} ${api.component} ${api.name} slot`, indexExports })),
      ].filter((api) => isPreviewSafeApi(item, api))

  return {
    files,
    indexExports,
    components,
    primaryComponent,
    dependencies,
    allProps,
    allEmits,
    exampleProps,
    referencedProps,
    exampleEmits,
    referencedEmits,
    allSlots,
    apiExamples,
  }
}

function generateDoc(item, model = buildDocModel(item)) {
  const { indexExports, primaryComponent, dependencies, allProps, allEmits, exampleProps, referencedProps, exampleEmits, referencedEmits, allSlots, apiExamples } = model

  const examplePreviewLines = [
    '## 示例预览',
    '',
  ]

  if (hasBasicExample(item)) {
    examplePreviewLines.push(
      '### 基础示例',
      '',
      `::component-preview{name="${item.name}" src="${item.name}/Basic.vue"}`,
      '::',
      '',
    )
  }

  examplePreviewLines.push(
    ...extraExampleSources(item).flatMap((example) => [
      `### ${example.title}`,
      '',
      `::component-preview{name="${example.previewName}" src="${item.name}/${example.fileName}"}`,
      '::',
      '',
    ]),
  )

  examplePreviewLines.push(
    ...apiExamples.flatMap((example) => [
      `### ${example.title}`,
      '',
      `::component-preview{name="${example.previewName}" src="${item.name}/${example.fileName}"}`,
      '::',
      '',
    ]),
  )

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
    ...examplePreviewLines,
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
    for (const prop of exampleProps) {
      lines.push(`| \`${prop.component}\` | \`${prop.name}\` | \`${shortType(prop.type)}\` | \`${inline(propExample(prop.component, prop.name === 'props' ? { ...prop, name: 'exampleProp' } : prop))}\` |`)
    }
    for (const prop of referencedProps) {
      lines.push(`| \`${prop.component}\` | 类型引用 | \`${shortType(prop.type)}\` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |`)
    }
    lines.push('')
  }

  lines.push('### Events', '')
  if (allEmits.length === 0) {
    lines.push('源码中未发现显式本地事件。', '')
  } else {
    lines.push('| 组件 | 事件 | 类型 / 来源 | 示例 |', '| --- | --- | --- | --- |')
    for (const emit of exampleEmits) {
      lines.push(`| \`${emit.component}\` | \`${emit.name}\` | \`${inline(emit.type)}\` | \`${inline(eventExample(emit.component, emit.name))}\` |`)
    }
    for (const emit of referencedEmits) {
      lines.push(`| \`${emit.component}\` | 类型引用 | \`${shortType(emit.type)}\` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |`)
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
  for (const prop of exampleProps) {
    const safeProp = prop.name === 'props' ? { ...prop, name: 'exampleProp' } : prop
    lines.push(`### ${prop.component}.${safeProp.name}`, '', codeFence(propExample(prop.component, safeProp)), '')
  }
  for (const emit of exampleEmits) {
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
mkdirSync(examplesDir, { recursive: true })

const registryNames = new Set(registry.items.map((item) => `${item.name}.md`))
for (const file of readdirSync(docsDir)) {
  if (file.endsWith('.md') && !registryNames.has(file)) rmSync(path.join(docsDir, file))
}

const exampleNames = new Set(registry.items.map((item) => item.name))
for (const entry of readdirSync(examplesDir, { withFileTypes: true })) {
  if (entry.isDirectory() && !exampleNames.has(entry.name)) rmSync(path.join(examplesDir, entry.name), { recursive: true, force: true })
}

let generatedItemCount = 0

for (const item of registry.items) {
  if (isCompletedComponent(item)) continue

  generatedItemCount += 1
  const indexFile = item.files.find((file) => file.path.endsWith('/index.ts'))
  const indexExports = indexFile ? extractIndexExports(read(indexFile.path)) : { componentExports: [], apiExports: [] }
  const docModel = buildDocModel(item)
  const itemExampleDir = path.join(examplesDir, item.name)
  mkdirSync(itemExampleDir, { recursive: true })
  const expectedExampleFiles = new Set([
    ...(hasBasicExample(item) ? ['Basic.vue'] : []),
    ...extraExampleSources(item).map((example) => example.fileName),
    ...docModel.apiExamples.map((example) => example.fileName),
  ])
  for (const file of readdirSync(itemExampleDir)) {
    if (file.endsWith('.vue') && !expectedExampleFiles.has(file)) rmSync(path.join(itemExampleDir, file))
  }
  if (hasBasicExample(item)) {
    writeFileSync(path.join(itemExampleDir, 'Basic.vue'), componentExampleSource(item, indexExports))
  }
  for (const example of extraExampleSources(item)) {
    writeFileSync(path.join(itemExampleDir, example.fileName), example.source)
  }
  for (const example of docModel.apiExamples) {
    writeFileSync(path.join(itemExampleDir, example.fileName), apiPreviewExampleSource(item, example))
  }
  writeFileSync(path.join(docsDir, `${item.name}.md`), generateDoc(item, docModel))
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
    examplePath: hasBasicExample(item) ? `${item.name}/Basic.vue` : undefined,
  }
})

writeFileSync(path.join(root, 'content/docs/components.json'), `${JSON.stringify(componentDocs, null, 2)}\n`)
writeFileSync(path.join(appDataDir, 'component-docs.ts'), `export const componentDocs = ${JSON.stringify(componentDocs, null, 2)} as const\n`)

console.log(`Generated ${generatedItemCount} pending component docs and examples.`)
