---
title: Sidebar
description: Sidebar 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Sidebar

Sidebar 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Sidebar 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="sidebar" src="sidebar/Basic.vue"}
::

### Menu 状态与操作

::component-preview{name="sidebar menu states" src="sidebar/MenuStates.vue"}
::

### SidebarInput 搜索

::component-preview{name="sidebar input" src="sidebar/Input.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/sidebar.json
```

## 导入

```ts
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger } from '@/components/ui/sidebar'
```

## 基础用法

```vue
<Sidebar>
  示例内容
</Sidebar>
```

## 组件导出

- `Sidebar`
- `SidebarContent`
- `SidebarFooter`
- `SidebarGroup`
- `SidebarGroupAction`
- `SidebarGroupContent`
- `SidebarGroupLabel`
- `SidebarHeader`
- `SidebarInput`
- `SidebarInset`
- `SidebarMenu`
- `SidebarMenuAction`
- `SidebarMenuBadge`
- `SidebarMenuButton`
- `SidebarMenuItem`
- `SidebarMenuSkeleton`
- `SidebarMenuSub`
- `SidebarMenuSubButton`
- `SidebarMenuSubItem`
- `SidebarProvider`
- `SidebarRail`
- `SidebarSeparator`
- `SidebarTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `SidebarContent` | `class` | `HTMLAttributes["class"]` | `<SidebarContent class="border-primary" />` |
| `SidebarFooter` | `class` | `HTMLAttributes["class"]` | `<SidebarFooter class="border-primary" />` |
| `SidebarGroup` | `class` | `HTMLAttributes["class"]` | `<SidebarGroup class="border-primary" />` |
| `SidebarGroupAction` | `class` | `HTMLAttributes["class"]` | `<SidebarGroupAction class="border-primary" />` |
| `SidebarGroupContent` | `class` | `HTMLAttributes["class"]` | `<SidebarGroupContent class="border-primary" />` |
| `SidebarGroupLabel` | `class` | `HTMLAttributes["class"]` | `<SidebarGroupLabel class="border-primary" />` |
| `SidebarHeader` | `class` | `HTMLAttributes["class"]` | `<SidebarHeader class="border-primary" />` |
| `SidebarInput` | `class` | `HTMLAttributes["class"]` | `<SidebarInput class="border-primary" />` |
| `SidebarInset` | `class` | `HTMLAttributes["class"]` | `<SidebarInset class="border-primary" />` |
| `SidebarMenu` | `class` | `HTMLAttributes["class"]` | `<SidebarMenu class="border-primary" />` |
| `SidebarMenuAction` | `showOnHover` | `boolean` | `<SidebarMenuAction :show-on-hover="true" />` |
| `SidebarMenuAction` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuAction class="border-primary" />` |
| `SidebarMenuBadge` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuBadge class="border-primary" />` |
| `SidebarMenuButton` | `tooltip` | `string \| Component` | `<SidebarMenuButton :tooltip="example" />` |
| `SidebarMenuItem` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuItem class="border-primary" />` |
| `SidebarMenuSkeleton` | `showIcon` | `boolean` | `<SidebarMenuSkeleton :show-icon="true" />` |
| `SidebarMenuSkeleton` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuSkeleton class="border-primary" />` |
| `SidebarMenuSub` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuSub class="border-primary" />` |
| `SidebarMenuSubButton` | `size` | `"sm" \| "md"` | `<SidebarMenuSubButton size="sm">示例内容</SidebarMenuSubButton>` |
| `SidebarMenuSubButton` | `isActive` | `boolean` | `<SidebarMenuSubButton :is-active="true" />` |
| `SidebarMenuSubButton` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuSubButton class="border-primary" />` |
| `SidebarProvider` | `defaultOpen` | `boolean` | `<SidebarProvider default-open>示例内容</SidebarProvider>` |
| `SidebarProvider` | `open` | `boolean` | `<SidebarProvider v-model:open="open">示例内容</SidebarProvider>` |
| `SidebarProvider` | `class` | `HTMLAttributes["class"]` | `<SidebarProvider class="border-primary" />` |
| `SidebarRail` | `class` | `HTMLAttributes["class"]` | `<SidebarRail class="border-primary" />` |
| `SidebarSeparator` | `class` | `HTMLAttributes["class"]` | `<SidebarSeparator class="border-primary" />` |
| `SidebarTrigger` | `class` | `HTMLAttributes["class"]` | `<SidebarTrigger class="border-primary" />` |
| `Sidebar` | 类型引用 | `SidebarProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `SidebarMenuButtonChild` | 类型引用 | `SidebarMenuButtonProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `SidebarProvider` | `update:open` | `typed event` | `<SidebarProvider v-model:open="value" />` |
| `SidebarProvider` | `update:open` | `[open: boolean]` | `<SidebarProvider v-model:open="value" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Sidebar` | `default` | `<Sidebar>内容</Sidebar>` |
| `SidebarContent` | `default` | `<SidebarContent>内容</SidebarContent>` |
| `SidebarFooter` | `default` | `<SidebarFooter>内容</SidebarFooter>` |
| `SidebarGroup` | `default` | `<SidebarGroup>内容</SidebarGroup>` |
| `SidebarGroupAction` | `default` | `<SidebarGroupAction>内容</SidebarGroupAction>` |
| `SidebarGroupContent` | `default` | `<SidebarGroupContent>内容</SidebarGroupContent>` |
| `SidebarGroupLabel` | `default` | `<SidebarGroupLabel>内容</SidebarGroupLabel>` |
| `SidebarHeader` | `default` | `<SidebarHeader>内容</SidebarHeader>` |
| `SidebarInput` | `default` | `<SidebarInput>内容</SidebarInput>` |
| `SidebarInset` | `default` | `<SidebarInset>内容</SidebarInset>` |
| `SidebarMenu` | `default` | `<SidebarMenu>内容</SidebarMenu>` |
| `SidebarMenuAction` | `default` | `<SidebarMenuAction>内容</SidebarMenuAction>` |
| `SidebarMenuBadge` | `default` | `<SidebarMenuBadge>内容</SidebarMenuBadge>` |
| `SidebarMenuButton` | `default` | `<SidebarMenuButton>内容</SidebarMenuButton>` |
| `SidebarMenuButtonChild` | `default` | `<SidebarMenuButtonChild>内容</SidebarMenuButtonChild>` |
| `SidebarMenuItem` | `default` | `<SidebarMenuItem>内容</SidebarMenuItem>` |
| `SidebarMenuSub` | `default` | `<SidebarMenuSub>内容</SidebarMenuSub>` |
| `SidebarMenuSubButton` | `default` | `<SidebarMenuSubButton>内容</SidebarMenuSubButton>` |
| `SidebarMenuSubItem` | `default` | `<SidebarMenuSubItem>内容</SidebarMenuSubItem>` |
| `SidebarProvider` | `default` | `<SidebarProvider>内容</SidebarProvider>` |
| `SidebarRail` | `default` | `<SidebarRail>内容</SidebarRail>` |
| `SidebarSeparator` | `default` | `<SidebarSeparator>内容</SidebarSeparator>` |

### Exports

- `export interface SidebarProps {`
- `export { useSidebar } from "./utils"`
- `export const sidebarMenuButtonVariants = cva(`
- `export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>`

## API 示例

### SidebarContent.class

```vue
<SidebarContent class="border-primary" />
```

### SidebarFooter.class

```vue
<SidebarFooter class="border-primary" />
```

### SidebarGroup.class

```vue
<SidebarGroup class="border-primary" />
```

### SidebarGroupAction.class

```vue
<SidebarGroupAction class="border-primary" />
```

### SidebarGroupContent.class

```vue
<SidebarGroupContent class="border-primary" />
```

### SidebarGroupLabel.class

```vue
<SidebarGroupLabel class="border-primary" />
```

### SidebarHeader.class

```vue
<SidebarHeader class="border-primary" />
```

### SidebarInput.class

```vue
<SidebarInput class="border-primary" />
```

### SidebarInset.class

```vue
<SidebarInset class="border-primary" />
```

### SidebarMenu.class

```vue
<SidebarMenu class="border-primary" />
```

### SidebarMenuAction.showOnHover

```vue
<SidebarMenuAction :show-on-hover="true" />
```

### SidebarMenuAction.class

```vue
<SidebarMenuAction class="border-primary" />
```

### SidebarMenuBadge.class

```vue
<SidebarMenuBadge class="border-primary" />
```

### SidebarMenuButton.tooltip

```vue
<SidebarMenuButton :tooltip="example" />
```

### SidebarMenuItem.class

```vue
<SidebarMenuItem class="border-primary" />
```

### SidebarMenuSkeleton.showIcon

```vue
<SidebarMenuSkeleton :show-icon="true" />
```

### SidebarMenuSkeleton.class

```vue
<SidebarMenuSkeleton class="border-primary" />
```

### SidebarMenuSub.class

```vue
<SidebarMenuSub class="border-primary" />
```

### SidebarMenuSubButton.size

```vue
<SidebarMenuSubButton size="sm">示例内容</SidebarMenuSubButton>
```

### SidebarMenuSubButton.isActive

```vue
<SidebarMenuSubButton :is-active="true" />
```

### SidebarMenuSubButton.class

```vue
<SidebarMenuSubButton class="border-primary" />
```

### SidebarProvider.defaultOpen

```vue
<SidebarProvider default-open>示例内容</SidebarProvider>
```

### SidebarProvider.open

```vue
<SidebarProvider v-model:open="open">示例内容</SidebarProvider>
```

### SidebarProvider.class

```vue
<SidebarProvider class="border-primary" />
```

### SidebarRail.class

```vue
<SidebarRail class="border-primary" />
```

### SidebarSeparator.class

```vue
<SidebarSeparator class="border-primary" />
```

### SidebarTrigger.class

```vue
<SidebarTrigger class="border-primary" />
```

### SidebarProvider.update:open

```vue
<SidebarProvider v-model:open="value" />
```

### SidebarProvider.update:open

```vue
<SidebarProvider v-model:open="value" />
```

### Sidebar slot: default

```vue
<Sidebar>内容</Sidebar>
```

### SidebarContent slot: default

```vue
<SidebarContent>内容</SidebarContent>
```

### SidebarFooter slot: default

```vue
<SidebarFooter>内容</SidebarFooter>
```

### SidebarGroup slot: default

```vue
<SidebarGroup>内容</SidebarGroup>
```

### SidebarGroupAction slot: default

```vue
<SidebarGroupAction>内容</SidebarGroupAction>
```

### SidebarGroupContent slot: default

```vue
<SidebarGroupContent>内容</SidebarGroupContent>
```

### SidebarGroupLabel slot: default

```vue
<SidebarGroupLabel>内容</SidebarGroupLabel>
```

### SidebarHeader slot: default

```vue
<SidebarHeader>内容</SidebarHeader>
```

### SidebarInput slot: default

```vue
<SidebarInput>内容</SidebarInput>
```

### SidebarInset slot: default

```vue
<SidebarInset>内容</SidebarInset>
```

### SidebarMenu slot: default

```vue
<SidebarMenu>内容</SidebarMenu>
```

### SidebarMenuAction slot: default

```vue
<SidebarMenuAction>内容</SidebarMenuAction>
```

### SidebarMenuBadge slot: default

```vue
<SidebarMenuBadge>内容</SidebarMenuBadge>
```

### SidebarMenuButton slot: default

```vue
<SidebarMenuButton>内容</SidebarMenuButton>
```

### SidebarMenuButtonChild slot: default

```vue
<SidebarMenuButtonChild>内容</SidebarMenuButtonChild>
```

### SidebarMenuItem slot: default

```vue
<SidebarMenuItem>内容</SidebarMenuItem>
```

### SidebarMenuSub slot: default

```vue
<SidebarMenuSub>内容</SidebarMenuSub>
```

### SidebarMenuSubButton slot: default

```vue
<SidebarMenuSubButton>内容</SidebarMenuSubButton>
```

### SidebarMenuSubItem slot: default

```vue
<SidebarMenuSubItem>内容</SidebarMenuSubItem>
```

### SidebarProvider slot: default

```vue
<SidebarProvider>内容</SidebarProvider>
```

### SidebarRail slot: default

```vue
<SidebarRail>内容</SidebarRail>
```

### SidebarSeparator slot: default

```vue
<SidebarSeparator>内容</SidebarSeparator>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/sidebar.json
```

