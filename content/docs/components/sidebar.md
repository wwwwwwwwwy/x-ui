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
| `Sidebar` | `props` | `SidebarProps` | `<Sidebar :example-prop="example" />` |
| `SidebarContent` | `class` | `HTMLAttributes["class"]` | `<SidebarContent class="custom-class" />` |
| `SidebarFooter` | `class` | `HTMLAttributes["class"]` | `<SidebarFooter class="custom-class" />` |
| `SidebarGroup` | `class` | `HTMLAttributes["class"]` | `<SidebarGroup class="custom-class" />` |
| `SidebarGroupAction` | `props` | `PrimitiveProps & { class?: HTMLAttributes["class"] }` | `<SidebarGroupAction :example-prop="example" />` |
| `SidebarGroupContent` | `class` | `HTMLAttributes["class"]` | `<SidebarGroupContent class="custom-class" />` |
| `SidebarGroupLabel` | `props` | `PrimitiveProps & { class?: HTMLAttributes["class"] }` | `<SidebarGroupLabel :example-prop="example" />` |
| `SidebarHeader` | `class` | `HTMLAttributes["class"]` | `<SidebarHeader class="custom-class" />` |
| `SidebarInput` | `class` | `HTMLAttributes["class"]` | `<SidebarInput class="custom-class" />` |
| `SidebarInset` | `class` | `HTMLAttributes["class"]` | `<SidebarInset class="custom-class" />` |
| `SidebarMenu` | `class` | `HTMLAttributes["class"]` | `<SidebarMenu class="custom-class" />` |
| `SidebarMenuAction` | `props` | `PrimitiveProps & { showOnHover?: boolean class?: HTMLAttributes["class"] }` | `<SidebarMenuAction :example-prop="true" />` |
| `SidebarMenuBadge` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuBadge class="custom-class" />` |
| `SidebarMenuButton` | `props` | `SidebarMenuButtonProps & { tooltip?: string \| Component }` | `<SidebarMenuButton :example-prop="example" />` |
| `SidebarMenuButtonChild` | `props` | `SidebarMenuButtonProps` | `<SidebarMenuButtonChild :example-prop="example" />` |
| `SidebarMenuItem` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuItem class="custom-class" />` |
| `SidebarMenuSkeleton` | `showIcon` | `boolean` | `<SidebarMenuSkeleton :show-icon="true" />` |
| `SidebarMenuSkeleton` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuSkeleton class="custom-class" />` |
| `SidebarMenuSub` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuSub class="custom-class" />` |
| `SidebarMenuSubButton` | `props` | `PrimitiveProps & { size?: "sm" \| "md" isActive?: boolean class?: HTMLAttributes["class"] }` | `<SidebarMenuSubButton :example-prop="true" />` |
| `SidebarProvider` | `defaultOpen` | `boolean` | `<SidebarProvider :default-open="true" />` |
| `SidebarProvider` | `open` | `boolean` | `<SidebarProvider :open="true" />` |
| `SidebarProvider` | `class` | `HTMLAttributes["class"]` | `<SidebarProvider class="custom-class" />` |
| `SidebarRail` | `class` | `HTMLAttributes["class"]` | `<SidebarRail class="custom-class" />` |
| `SidebarSeparator` | `class` | `HTMLAttributes["class"]` | `<SidebarSeparator class="custom-class" />` |
| `SidebarTrigger` | `class` | `HTMLAttributes["class"]` | `<SidebarTrigger class="custom-class" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `SidebarProvider` | `update:open` | `[open: boolean]` | `<SidebarProvider @update:open="updateOpen" />` |

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

### Sidebar.exampleProp

```vue
<Sidebar :example-prop="example" />
```

### SidebarContent.class

```vue
<SidebarContent class="custom-class" />
```

### SidebarFooter.class

```vue
<SidebarFooter class="custom-class" />
```

### SidebarGroup.class

```vue
<SidebarGroup class="custom-class" />
```

### SidebarGroupAction.exampleProp

```vue
<SidebarGroupAction :example-prop="example" />
```

### SidebarGroupContent.class

```vue
<SidebarGroupContent class="custom-class" />
```

### SidebarGroupLabel.exampleProp

```vue
<SidebarGroupLabel :example-prop="example" />
```

### SidebarHeader.class

```vue
<SidebarHeader class="custom-class" />
```

### SidebarInput.class

```vue
<SidebarInput class="custom-class" />
```

### SidebarInset.class

```vue
<SidebarInset class="custom-class" />
```

### SidebarMenu.class

```vue
<SidebarMenu class="custom-class" />
```

### SidebarMenuAction.exampleProp

```vue
<SidebarMenuAction :example-prop="true" />
```

### SidebarMenuBadge.class

```vue
<SidebarMenuBadge class="custom-class" />
```

### SidebarMenuButton.exampleProp

```vue
<SidebarMenuButton :example-prop="example" />
```

### SidebarMenuButtonChild.exampleProp

```vue
<SidebarMenuButtonChild :example-prop="example" />
```

### SidebarMenuItem.class

```vue
<SidebarMenuItem class="custom-class" />
```

### SidebarMenuSkeleton.showIcon

```vue
<SidebarMenuSkeleton :show-icon="true" />
```

### SidebarMenuSkeleton.class

```vue
<SidebarMenuSkeleton class="custom-class" />
```

### SidebarMenuSub.class

```vue
<SidebarMenuSub class="custom-class" />
```

### SidebarMenuSubButton.exampleProp

```vue
<SidebarMenuSubButton :example-prop="true" />
```

### SidebarProvider.defaultOpen

```vue
<SidebarProvider :default-open="true" />
```

### SidebarProvider.open

```vue
<SidebarProvider :open="true" />
```

### SidebarProvider.class

```vue
<SidebarProvider class="custom-class" />
```

### SidebarRail.class

```vue
<SidebarRail class="custom-class" />
```

### SidebarSeparator.class

```vue
<SidebarSeparator class="custom-class" />
```

### SidebarTrigger.class

```vue
<SidebarTrigger class="custom-class" />
```

### SidebarProvider.update:open

```vue
<SidebarProvider @update:open="updateOpen" />
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

