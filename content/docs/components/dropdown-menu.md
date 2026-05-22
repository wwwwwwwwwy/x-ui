---
title: DropdownMenu
description: DropdownMenu 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# DropdownMenu

DropdownMenu 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

DropdownMenu 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="dropdown-menu" src="dropdown-menu/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/dropdown-menu.json
```

## 导入

```ts
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
```

## 基础用法

```vue
<DropdownMenu>
  示例内容
</DropdownMenu>
```

## 组件导出

- `DropdownMenu`
- `DropdownMenuCheckboxItem`
- `DropdownMenuContent`
- `DropdownMenuGroup`
- `DropdownMenuItem`
- `DropdownMenuLabel`
- `DropdownMenuRadioGroup`
- `DropdownMenuRadioItem`
- `DropdownMenuSeparator`
- `DropdownMenuShortcut`
- `DropdownMenuSub`
- `DropdownMenuSubContent`
- `DropdownMenuSubTrigger`
- `DropdownMenuTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `DropdownMenu` | `props` | `DropdownMenuRootProps` | `<DropdownMenu :example-prop="example" />` |
| `DropdownMenuCheckboxItem` | `props` | `DropdownMenuCheckboxItemProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuCheckboxItem :example-prop="example" />` |
| `DropdownMenuContent` | `props` | `DropdownMenuContentProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuContent :example-prop="example" />` |
| `DropdownMenuGroup` | `props` | `DropdownMenuGroupProps` | `<DropdownMenuGroup :example-prop="example" />` |
| `DropdownMenuItem` | `props` | `DropdownMenuItemProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<DropdownMenuItem :example-prop="true" />` |
| `DropdownMenuLabel` | `props` | `DropdownMenuLabelProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<DropdownMenuLabel :example-prop="true" />` |
| `DropdownMenuRadioGroup` | `props` | `DropdownMenuRadioGroupProps` | `<DropdownMenuRadioGroup :example-prop="example" />` |
| `DropdownMenuRadioItem` | `props` | `DropdownMenuRadioItemProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuRadioItem :example-prop="example" />` |
| `DropdownMenuSeparator` | `props` | `DropdownMenuSeparatorProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuSeparator :example-prop="example" />` |
| `DropdownMenuShortcut` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuShortcut class="custom-class" />` |
| `DropdownMenuSub` | `props` | `DropdownMenuSubProps` | `<DropdownMenuSub :example-prop="example" />` |
| `DropdownMenuSubContent` | `props` | `DropdownMenuSubContentProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuSubContent :example-prop="example" />` |
| `DropdownMenuSubTrigger` | `props` | `DropdownMenuSubTriggerProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuSubTrigger :example-prop="example" />` |
| `DropdownMenuTrigger` | `props` | `DropdownMenuTriggerProps` | `<DropdownMenuTrigger :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `DropdownMenu` | `emits` | `DropdownMenuRootEmits` | `<DropdownMenu @emits="emits" />` |
| `DropdownMenuCheckboxItem` | `emits` | `DropdownMenuCheckboxItemEmits` | `<DropdownMenuCheckboxItem @emits="emits" />` |
| `DropdownMenuContent` | `emits` | `DropdownMenuContentEmits` | `<DropdownMenuContent @emits="emits" />` |
| `DropdownMenuRadioGroup` | `emits` | `DropdownMenuRadioGroupEmits` | `<DropdownMenuRadioGroup @emits="emits" />` |
| `DropdownMenuRadioItem` | `emits` | `DropdownMenuRadioItemEmits` | `<DropdownMenuRadioItem @emits="emits" />` |
| `DropdownMenuSub` | `emits` | `DropdownMenuSubEmits` | `<DropdownMenuSub @emits="emits" />` |
| `DropdownMenuSubContent` | `emits` | `DropdownMenuSubContentEmits` | `<DropdownMenuSubContent @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `DropdownMenu` | `default` | `<DropdownMenu>内容</DropdownMenu>` |
| `DropdownMenuCheckboxItem` | `default` | `<DropdownMenuCheckboxItem>内容</DropdownMenuCheckboxItem>` |
| `DropdownMenuContent` | `default` | `<DropdownMenuContent>内容</DropdownMenuContent>` |
| `DropdownMenuGroup` | `default` | `<DropdownMenuGroup>内容</DropdownMenuGroup>` |
| `DropdownMenuItem` | `default` | `<DropdownMenuItem>内容</DropdownMenuItem>` |
| `DropdownMenuLabel` | `default` | `<DropdownMenuLabel>内容</DropdownMenuLabel>` |
| `DropdownMenuRadioGroup` | `default` | `<DropdownMenuRadioGroup>内容</DropdownMenuRadioGroup>` |
| `DropdownMenuRadioItem` | `default` | `<DropdownMenuRadioItem>内容</DropdownMenuRadioItem>` |
| `DropdownMenuShortcut` | `default` | `<DropdownMenuShortcut>内容</DropdownMenuShortcut>` |
| `DropdownMenuSub` | `default` | `<DropdownMenuSub>内容</DropdownMenuSub>` |
| `DropdownMenuSubContent` | `default` | `<DropdownMenuSubContent>内容</DropdownMenuSubContent>` |
| `DropdownMenuSubTrigger` | `default` | `<DropdownMenuSubTrigger>内容</DropdownMenuSubTrigger>` |
| `DropdownMenuTrigger` | `default` | `<DropdownMenuTrigger>内容</DropdownMenuTrigger>` |

### Exports

- `export { DropdownMenuPortal } from "reka-ui"`

## API 示例

### DropdownMenu.exampleProp

```vue
<DropdownMenu :example-prop="example" />
```

### DropdownMenuCheckboxItem.exampleProp

```vue
<DropdownMenuCheckboxItem :example-prop="example" />
```

### DropdownMenuContent.exampleProp

```vue
<DropdownMenuContent :example-prop="example" />
```

### DropdownMenuGroup.exampleProp

```vue
<DropdownMenuGroup :example-prop="example" />
```

### DropdownMenuItem.exampleProp

```vue
<DropdownMenuItem :example-prop="true" />
```

### DropdownMenuLabel.exampleProp

```vue
<DropdownMenuLabel :example-prop="true" />
```

### DropdownMenuRadioGroup.exampleProp

```vue
<DropdownMenuRadioGroup :example-prop="example" />
```

### DropdownMenuRadioItem.exampleProp

```vue
<DropdownMenuRadioItem :example-prop="example" />
```

### DropdownMenuSeparator.exampleProp

```vue
<DropdownMenuSeparator :example-prop="example" />
```

### DropdownMenuShortcut.class

```vue
<DropdownMenuShortcut class="custom-class" />
```

### DropdownMenuSub.exampleProp

```vue
<DropdownMenuSub :example-prop="example" />
```

### DropdownMenuSubContent.exampleProp

```vue
<DropdownMenuSubContent :example-prop="example" />
```

### DropdownMenuSubTrigger.exampleProp

```vue
<DropdownMenuSubTrigger :example-prop="example" />
```

### DropdownMenuTrigger.exampleProp

```vue
<DropdownMenuTrigger :example-prop="example" />
```

### DropdownMenu.emits

```vue
<DropdownMenu @emits="emits" />
```

### DropdownMenuCheckboxItem.emits

```vue
<DropdownMenuCheckboxItem @emits="emits" />
```

### DropdownMenuContent.emits

```vue
<DropdownMenuContent @emits="emits" />
```

### DropdownMenuRadioGroup.emits

```vue
<DropdownMenuRadioGroup @emits="emits" />
```

### DropdownMenuRadioItem.emits

```vue
<DropdownMenuRadioItem @emits="emits" />
```

### DropdownMenuSub.emits

```vue
<DropdownMenuSub @emits="emits" />
```

### DropdownMenuSubContent.emits

```vue
<DropdownMenuSubContent @emits="emits" />
```

### DropdownMenu slot: default

```vue
<DropdownMenu>内容</DropdownMenu>
```

### DropdownMenuCheckboxItem slot: default

```vue
<DropdownMenuCheckboxItem>内容</DropdownMenuCheckboxItem>
```

### DropdownMenuContent slot: default

```vue
<DropdownMenuContent>内容</DropdownMenuContent>
```

### DropdownMenuGroup slot: default

```vue
<DropdownMenuGroup>内容</DropdownMenuGroup>
```

### DropdownMenuItem slot: default

```vue
<DropdownMenuItem>内容</DropdownMenuItem>
```

### DropdownMenuLabel slot: default

```vue
<DropdownMenuLabel>内容</DropdownMenuLabel>
```

### DropdownMenuRadioGroup slot: default

```vue
<DropdownMenuRadioGroup>内容</DropdownMenuRadioGroup>
```

### DropdownMenuRadioItem slot: default

```vue
<DropdownMenuRadioItem>内容</DropdownMenuRadioItem>
```

### DropdownMenuShortcut slot: default

```vue
<DropdownMenuShortcut>内容</DropdownMenuShortcut>
```

### DropdownMenuSub slot: default

```vue
<DropdownMenuSub>内容</DropdownMenuSub>
```

### DropdownMenuSubContent slot: default

```vue
<DropdownMenuSubContent>内容</DropdownMenuSubContent>
```

### DropdownMenuSubTrigger slot: default

```vue
<DropdownMenuSubTrigger>内容</DropdownMenuSubTrigger>
```

### DropdownMenuTrigger slot: default

```vue
<DropdownMenuTrigger>内容</DropdownMenuTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/dropdown-menu.json
```

