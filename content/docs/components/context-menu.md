---
title: ContextMenu
description: ContextMenu 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# ContextMenu

ContextMenu 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

ContextMenu 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

::component-preview{name="context-menu" src="context-menu/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/context-menu.json
```

## 导入

```ts
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '@/components/ui/context-menu'
```

## 基础用法

```vue
<ContextMenu>
  示例内容
</ContextMenu>
```

## 组件导出

- `ContextMenu`
- `ContextMenuCheckboxItem`
- `ContextMenuContent`
- `ContextMenuGroup`
- `ContextMenuItem`
- `ContextMenuLabel`
- `ContextMenuRadioGroup`
- `ContextMenuRadioItem`
- `ContextMenuSeparator`
- `ContextMenuShortcut`
- `ContextMenuSub`
- `ContextMenuSubContent`
- `ContextMenuSubTrigger`
- `ContextMenuTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ContextMenu` | `props` | `ContextMenuRootProps` | `<ContextMenu :example-prop="example" />` |
| `ContextMenuCheckboxItem` | `props` | `ContextMenuCheckboxItemProps & { class?: HTMLAttributes["class"] }` | `<ContextMenuCheckboxItem :example-prop="example" />` |
| `ContextMenuContent` | `props` | `ContextMenuContentProps & { class?: HTMLAttributes["class"] }` | `<ContextMenuContent :example-prop="example" />` |
| `ContextMenuGroup` | `props` | `ContextMenuGroupProps` | `<ContextMenuGroup :example-prop="example" />` |
| `ContextMenuItem` | `props` | `ContextMenuItemProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<ContextMenuItem :example-prop="true" />` |
| `ContextMenuLabel` | `props` | `ContextMenuLabelProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<ContextMenuLabel :example-prop="true" />` |
| `ContextMenuPortal` | `props` | `ContextMenuPortalProps` | `<ContextMenuPortal :example-prop="example" />` |
| `ContextMenuRadioGroup` | `props` | `ContextMenuRadioGroupProps` | `<ContextMenuRadioGroup :example-prop="example" />` |
| `ContextMenuRadioItem` | `props` | `ContextMenuRadioItemProps & { class?: HTMLAttributes["class"] }` | `<ContextMenuRadioItem :example-prop="example" />` |
| `ContextMenuSeparator` | `props` | `ContextMenuSeparatorProps & { class?: HTMLAttributes["class"] }` | `<ContextMenuSeparator :example-prop="example" />` |
| `ContextMenuShortcut` | `class` | `HTMLAttributes["class"]` | `<ContextMenuShortcut class="custom-class" />` |
| `ContextMenuSub` | `props` | `ContextMenuSubProps` | `<ContextMenuSub :example-prop="example" />` |
| `ContextMenuSubContent` | `props` | `DropdownMenuSubContentProps & { class?: HTMLAttributes["class"] }` | `<ContextMenuSubContent :example-prop="example" />` |
| `ContextMenuSubTrigger` | `props` | `ContextMenuSubTriggerProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<ContextMenuSubTrigger :example-prop="true" />` |
| `ContextMenuTrigger` | `props` | `ContextMenuTriggerProps` | `<ContextMenuTrigger :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ContextMenu` | `emits` | `ContextMenuRootEmits` | `<ContextMenu @emits="emits" />` |
| `ContextMenuCheckboxItem` | `emits` | `ContextMenuCheckboxItemEmits` | `<ContextMenuCheckboxItem @emits="emits" />` |
| `ContextMenuContent` | `emits` | `ContextMenuContentEmits` | `<ContextMenuContent @emits="emits" />` |
| `ContextMenuItem` | `emits` | `ContextMenuItemEmits` | `<ContextMenuItem @emits="emits" />` |
| `ContextMenuRadioGroup` | `emits` | `ContextMenuRadioGroupEmits` | `<ContextMenuRadioGroup @emits="emits" />` |
| `ContextMenuRadioItem` | `emits` | `ContextMenuRadioItemEmits` | `<ContextMenuRadioItem @emits="emits" />` |
| `ContextMenuSub` | `emits` | `ContextMenuSubEmits` | `<ContextMenuSub @emits="emits" />` |
| `ContextMenuSubContent` | `emits` | `DropdownMenuSubContentEmits` | `<ContextMenuSubContent @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `ContextMenu` | `default` | `<ContextMenu>内容</ContextMenu>` |
| `ContextMenuCheckboxItem` | `default` | `<ContextMenuCheckboxItem>内容</ContextMenuCheckboxItem>` |
| `ContextMenuContent` | `default` | `<ContextMenuContent>内容</ContextMenuContent>` |
| `ContextMenuGroup` | `default` | `<ContextMenuGroup>内容</ContextMenuGroup>` |
| `ContextMenuItem` | `default` | `<ContextMenuItem>内容</ContextMenuItem>` |
| `ContextMenuLabel` | `default` | `<ContextMenuLabel>内容</ContextMenuLabel>` |
| `ContextMenuPortal` | `default` | `<ContextMenuPortal>内容</ContextMenuPortal>` |
| `ContextMenuRadioGroup` | `default` | `<ContextMenuRadioGroup>内容</ContextMenuRadioGroup>` |
| `ContextMenuRadioItem` | `default` | `<ContextMenuRadioItem>内容</ContextMenuRadioItem>` |
| `ContextMenuShortcut` | `default` | `<ContextMenuShortcut>内容</ContextMenuShortcut>` |
| `ContextMenuSub` | `default` | `<ContextMenuSub>内容</ContextMenuSub>` |
| `ContextMenuSubContent` | `default` | `<ContextMenuSubContent>内容</ContextMenuSubContent>` |
| `ContextMenuSubTrigger` | `default` | `<ContextMenuSubTrigger>内容</ContextMenuSubTrigger>` |
| `ContextMenuTrigger` | `default` | `<ContextMenuTrigger>内容</ContextMenuTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### ContextMenu.exampleProp

```vue
<ContextMenu :example-prop="example" />
```

### ContextMenuCheckboxItem.exampleProp

```vue
<ContextMenuCheckboxItem :example-prop="example" />
```

### ContextMenuContent.exampleProp

```vue
<ContextMenuContent :example-prop="example" />
```

### ContextMenuGroup.exampleProp

```vue
<ContextMenuGroup :example-prop="example" />
```

### ContextMenuItem.exampleProp

```vue
<ContextMenuItem :example-prop="true" />
```

### ContextMenuLabel.exampleProp

```vue
<ContextMenuLabel :example-prop="true" />
```

### ContextMenuPortal.exampleProp

```vue
<ContextMenuPortal :example-prop="example" />
```

### ContextMenuRadioGroup.exampleProp

```vue
<ContextMenuRadioGroup :example-prop="example" />
```

### ContextMenuRadioItem.exampleProp

```vue
<ContextMenuRadioItem :example-prop="example" />
```

### ContextMenuSeparator.exampleProp

```vue
<ContextMenuSeparator :example-prop="example" />
```

### ContextMenuShortcut.class

```vue
<ContextMenuShortcut class="custom-class" />
```

### ContextMenuSub.exampleProp

```vue
<ContextMenuSub :example-prop="example" />
```

### ContextMenuSubContent.exampleProp

```vue
<ContextMenuSubContent :example-prop="example" />
```

### ContextMenuSubTrigger.exampleProp

```vue
<ContextMenuSubTrigger :example-prop="true" />
```

### ContextMenuTrigger.exampleProp

```vue
<ContextMenuTrigger :example-prop="example" />
```

### ContextMenu.emits

```vue
<ContextMenu @emits="emits" />
```

### ContextMenuCheckboxItem.emits

```vue
<ContextMenuCheckboxItem @emits="emits" />
```

### ContextMenuContent.emits

```vue
<ContextMenuContent @emits="emits" />
```

### ContextMenuItem.emits

```vue
<ContextMenuItem @emits="emits" />
```

### ContextMenuRadioGroup.emits

```vue
<ContextMenuRadioGroup @emits="emits" />
```

### ContextMenuRadioItem.emits

```vue
<ContextMenuRadioItem @emits="emits" />
```

### ContextMenuSub.emits

```vue
<ContextMenuSub @emits="emits" />
```

### ContextMenuSubContent.emits

```vue
<ContextMenuSubContent @emits="emits" />
```

### ContextMenu slot: default

```vue
<ContextMenu>内容</ContextMenu>
```

### ContextMenuCheckboxItem slot: default

```vue
<ContextMenuCheckboxItem>内容</ContextMenuCheckboxItem>
```

### ContextMenuContent slot: default

```vue
<ContextMenuContent>内容</ContextMenuContent>
```

### ContextMenuGroup slot: default

```vue
<ContextMenuGroup>内容</ContextMenuGroup>
```

### ContextMenuItem slot: default

```vue
<ContextMenuItem>内容</ContextMenuItem>
```

### ContextMenuLabel slot: default

```vue
<ContextMenuLabel>内容</ContextMenuLabel>
```

### ContextMenuPortal slot: default

```vue
<ContextMenuPortal>内容</ContextMenuPortal>
```

### ContextMenuRadioGroup slot: default

```vue
<ContextMenuRadioGroup>内容</ContextMenuRadioGroup>
```

### ContextMenuRadioItem slot: default

```vue
<ContextMenuRadioItem>内容</ContextMenuRadioItem>
```

### ContextMenuShortcut slot: default

```vue
<ContextMenuShortcut>内容</ContextMenuShortcut>
```

### ContextMenuSub slot: default

```vue
<ContextMenuSub>内容</ContextMenuSub>
```

### ContextMenuSubContent slot: default

```vue
<ContextMenuSubContent>内容</ContextMenuSubContent>
```

### ContextMenuSubTrigger slot: default

```vue
<ContextMenuSubTrigger>内容</ContextMenuSubTrigger>
```

### ContextMenuTrigger slot: default

```vue
<ContextMenuTrigger>内容</ContextMenuTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/context-menu.json
```

