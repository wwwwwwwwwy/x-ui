import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const examplesDir = path.join(root, 'app/components/examples')
const reportPath = path.join(root, 'docs/development/official-example-sync-report.md')
const officialBase = 'https://www.shadcn-vue.com'

const components = readdirSync(path.join(root, 'registry/default'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()

const manualExamples = {
  'aspect-ratio': `<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>

<template>
  <AspectRatio :ratio="16 / 9">
    <img
      src="https://dev.meos.center/meri-plus/avatar-default.png"
      alt="示例图片"
      class="h-full w-full rounded-[4px] object-cover"
    >
  </AspectRatio>
</template>
`,
  'badge': `<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <Badge variant="outline">
    标签
  </Badge>
</template>
`,
  'button-group': `<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <ButtonGroup>
      <Button>保存</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">预览</Button>
      <ButtonGroupText>已同步</ButtonGroupText>
    </ButtonGroup>
  </div>
</template>
`,
  'calendar': `<script setup lang="ts">
import { Calendar } from '@/components/ui/calendar'
</script>

<template>
  <Calendar />
</template>
`,
  'carousel': `<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
</script>

<template>
  <Carousel class="w-full max-w-xs">
    <CarouselContent>
      <CarouselItem v-for="i in 5" :key="i">
        <div class="p-1">
          <Card>
            <CardContent class="flex aspect-square items-center justify-center p-6">
              <span class="text-4xl font-semibold">{{ i }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
`,
  'collapsible': `<script setup lang="ts">
import { ref } from 'vue'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
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
</template>
`,
  'chart': readExisting('chart'),
  'combobox': readExisting('combobox'),
  'command': `<script setup lang="ts">
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
</script>

<template>
  <Command class="rounded-[8px] border">
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
</template>
`,
  'context-menu': `<script setup lang="ts">
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from '@/components/ui/context-menu'
</script>

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
</template>
`,
  'drawer': readExisting('drawer'),
  'empty': `<script setup lang="ts">
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Empty>
    <EmptyHeader>
      <EmptyMedia>空</EmptyMedia>
      <EmptyTitle>暂无组件记录</EmptyTitle>
      <EmptyDescription>添加第一个组件后，这里会显示最新状态。</EmptyDescription>
    </EmptyHeader>
    <EmptyContent><Button size="sm">新增组件</Button></EmptyContent>
  </Empty>
</template>
`,
  'field': `<script setup lang="ts">
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from '@/components/ui/field'
</script>

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
</template>
`,
  'form': readExisting('form'),
  'hover-card': `<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
</script>

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
</template>
`,
  'input': `<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="grid w-full max-w-sm gap-2">
    <Input placeholder="请输入项目名称" />
  </div>
</template>
`,
  'pagination': `<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
</script>

<template>
  <Pagination :total="80" :items-per-page="10" :sibling-count="1" show-edges :default-page="2">
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious>上一页</PaginationPrevious>
      <template v-for="(page, index) in items" :key="index">
        <PaginationItem
          v-if="page.type === 'page'"
          :value="page.value"
          :is-active="page.value === 2"
        >
          {{ page.value }}
        </PaginationItem>
        <PaginationEllipsis v-else />
      </template>
      <PaginationNext>下一页</PaginationNext>
    </PaginationContent>
  </Pagination>
</template>
`,
  'input-group': `<script setup lang="ts">
import { SearchIcon } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
</script>

<template>
  <InputGroup>
    <InputGroupInput placeholder="搜索组件..." />
    <InputGroupAddon>
      <SearchIcon />
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <InputGroupButton>搜索</InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
</template>
`,
  'number-field': readExisting('number-field'),
  'range-calendar': readExisting('range-calendar'),
  'sidebar': `<script setup lang="ts">
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
</script>

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
</template>
`,
  'slider': `<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

const value = ref([64])
</script>

<template>
  <div class="space-y-3">
    <Label>音量：{{ value[0] }}%</Label>
    <Slider v-model="value" :max="100" :step="1" />
  </div>
</template>
`,
  'spinner': `<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <div class="flex items-center gap-3">
    <Spinner />
    <span class="text-sm text-[#434655]">正在加载...</span>
  </div>
</template>
`,
  'sonner': `<script setup lang="ts">
import { toast } from 'vue-sonner'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button @click="() => toast('我的第一条通知')">
    显示通知
  </Button>
</template>
`,
}

const textReplacements = [
  ['Is it accessible?', '是否可访问？'],
  ['Yes. It adheres to the WAI-ARIA design pattern.', '是的。它遵循 WAI-ARIA 设计模式。'],
  ['Heads up!', '请注意！'],
  ['You can add components and dependencies to your app using the cli.', '你可以使用 CLI 向应用添加组件和依赖。'],
  ['Open', '打开'],
  ['Are you absolutely sure?', '你确定要继续吗？'],
  ['This action cannot be undone. This will permanently delete your account and remove your data from our servers.', '此操作无法撤销。这将永久删除你的账户，并从服务器移除你的数据。'],
  ['Cancel', '取消'],
  ['Continue', '继续'],
  ['Home', '首页'],
  ['Components', '组件'],
  ['Breadcrumb', '面包屑'],
  ['Button', '按钮'],
  ['Accept terms and conditions', '接受条款和条件'],
  ['Can I use this in my project?', '我可以在项目中使用它吗？'],
  ['Yes. Free to use for personal and commercial projects. No attribution required.', '可以。个人和商业项目均可免费使用，无需署名。'],
  ['Right click here', '在这里右键'],
  ['Profile', '个人资料'],
  ['Billing', '账单'],
  ['Team', '团队'],
  ['Subscription', '订阅'],
  ['My first toast', '我的第一条通知'],
  ['Give me a toast', '显示通知'],
  ['Select a fruit', '选择水果'],
  ['Fruits', '水果'],
  ['Apple', '苹果'],
  ['Banana', '香蕉'],
  ['Blueberry', '蓝莓'],
  ['Grapes', '葡萄'],
  ['Pineapple', '菠萝'],
  ['Account', '账户'],
  ['Password', '密码'],
  ['Tabs', '标签页'],
  ['Make changes to your account here.', '在这里修改你的账户信息。'],
  ['Change your password here.', '在这里修改你的密码。'],
]

const importReplacements = [
  ["from '@lucide/vue'", "from 'lucide-vue-next'"],
  ["from 'lucide-vue-next'", "from 'lucide-vue-next'"],
  ["@/components/ui", '@/components/ui'],
]

const report = []

for (const component of components) {
  const exampleDir = path.join(examplesDir, component)
  const examplePath = path.join(exampleDir, 'Basic.vue')
  mkdirSync(exampleDir, { recursive: true })

  try {
    const manual = manualExamples[component]
    if (manual) {
      writeFileSync(examplePath, ensureTrailingNewline(manual))
      report.push({ component, status: 'adapted', note: '使用当前项目可编译的官方等价示例。' })
      continue
    }

    const official = await fetchOfficialUsage(component)
    if (!official) {
      report.push({ component, status: 'kept', note: '官方页面没有找到可稳定抽取的 Usage Vue 示例，保留当前示例。' })
      continue
    }

    const adapted = adaptExample(official, component)
    writeFileSync(examplePath, ensureTrailingNewline(adapted))
    report.push({ component, status: 'synced', note: '已同步官方 Usage 示例并翻译可见文案。' })
  } catch (error) {
    report.push({ component, status: 'kept', note: `同步失败，保留当前示例：${error.message}` })
  }
}

writeFileSync(reportPath, renderReport(report))

function readExisting(component) {
  try {
    return readFileSync(path.join(examplesDir, component, 'Basic.vue'), 'utf8')
  } catch {
    return ''
  }
}

async function fetchOfficialUsage(component) {
  const pageUrl = `${officialBase}/docs/components/${component}`
  const page = await fetch(pageUrl)
  if (!page.ok) return ''

  const html = await page.text()
  const payloadPath = html.match(/\/docs\/components\/[^"']+\/_payload\.json\?[^"']+/)?.[0]
  if (!payloadPath) return ''

  const payload = await fetch(new URL(payloadPath, officialBase).href).then((response) => response.json())
  const rawbody = findRawbody(payload)
  if (!rawbody) return ''

  return firstVueBlockAfterUsage(rawbody)
}

function findRawbody(value) {
  let result = ''
  walk(value, (item) => {
    if (!result && typeof item === 'string' && item.includes('## Usage') && item.includes('```vue')) {
      result = item
    }
  })
  return result
}

function firstVueBlockAfterUsage(markdown) {
  const usageIndex = markdown.indexOf('## Usage')
  const source = usageIndex >= 0 ? markdown.slice(usageIndex) : markdown
  const match = source.match(/```vue[^\n]*\n([\s\S]*?)```/)
  return match?.[1]?.trim() ?? ''
}

function walk(value, visitor) {
  visitor(value)
  if (Array.isArray(value)) {
    value.forEach((item) => walk(item, visitor))
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach((item) => walk(item, visitor))
  }
}

function adaptExample(source, component) {
  let code = source.trim()
  for (const [from, to] of importReplacements) code = code.replaceAll(from, to)
  code = code.replaceAll('variant="default | outline | secondary | destructive"', 'variant="outline"')
  code = code.replaceAll('href="/components"', 'href="/docs"')
  code = code.replace(/src="\.\.\."/g, 'src="https://dev.meos.center/meri-plus/avatar-default.png"')
  code = code.replace(/alt="Image"/g, 'alt="示例图片"')
  code = code.replace(/rounded-md/g, 'rounded-[4px]')
  code = code.replace(
    /This action cannot be undone\. This will permanently delete your account\s+and remove your data from our servers\./g,
    '此操作无法撤销。这将永久删除你的账户，并从服务器移除你的数据。',
  )

  code = translateTemplateText(code)

  if (component === 'alert-dialog') {
    code = code.replace('<AlertDialogTrigger>打开</AlertDialogTrigger>', '<AlertDialogTrigger as-child><Button variant="outline">打开</Button></AlertDialogTrigger>')
    code = addImport(code, "import { Button } from '@/components/ui/button'")
  }

  return code
}

function addImport(code, importLine) {
  if (code.includes(importLine)) return code
  return code.replace('</script>', `${importLine}\n</script>`)
}

function translateTemplateText(code) {
  const scriptBlocks = []
  const withoutScripts = code.replace(/<script[\s\S]*?<\/script>/g, (match) => {
    const marker = `__SCRIPT_BLOCK_${scriptBlocks.length}__`
    scriptBlocks.push(match)
    return marker
  })

  const translated = withoutScripts.replace(/>([^<>]+)</g, (match, text) => {
    let translated = text
    for (const [from, to] of textReplacements) translated = translated.replaceAll(from, to)
    return `>${translated}<`
  })

  return scriptBlocks.reduce((source, block, index) => source.replace(`__SCRIPT_BLOCK_${index}__`, block), translated)
}

function renderReport(items) {
  const rows = items.map((item) => `| \`${item.component}\` | ${item.status} | ${item.note} |`).join('\n')
  const summary = items.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] ?? 0) + 1
    return acc
  }, {})

  return `# 官方示例同步报告

本文档由 \`scripts/sync-official-basic-examples.mjs\` 生成，记录从 shadcn-vue 官方文档同步基础示例的结果。

## 汇总

- synced：${summary.synced ?? 0}
- adapted：${summary.adapted ?? 0}
- kept：${summary.kept ?? 0}

## 明细

| 组件 | 状态 | 说明 |
| --- | --- | --- |
${rows}
`
}

function ensureTrailingNewline(value) {
  return `${value.trimEnd()}\n`
}
