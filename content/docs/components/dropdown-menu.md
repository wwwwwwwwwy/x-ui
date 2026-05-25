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
| `DropdownMenuCheckboxItem` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuCheckboxItem class="border-primary" />` |
| `DropdownMenuContent` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuContent class="border-primary" />` |
| `DropdownMenuItem` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuItem class="border-primary" />` |
| `DropdownMenuLabel` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuLabel class="border-primary" />` |
| `DropdownMenuRadioItem` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuRadioItem class="border-primary" />` |
| `DropdownMenuSeparator` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuSeparator class="border-primary" />` |
| `DropdownMenuShortcut` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuShortcut class="border-primary" />` |
| `DropdownMenuSubContent` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuSubContent class="border-primary" />` |
| `DropdownMenuSubTrigger` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuSubTrigger class="border-primary" />` |
| `DropdownMenu` | 类型引用 | `DropdownMenuRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `DropdownMenuGroup` | 类型引用 | `DropdownMenuGroupProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `DropdownMenuRadioGroup` | 类型引用 | `DropdownMenuRadioGroupProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `DropdownMenuSub` | 类型引用 | `DropdownMenuSubProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `DropdownMenuTrigger` | 类型引用 | `DropdownMenuTriggerProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `DropdownMenu` | 类型引用 | `DropdownMenuRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `DropdownMenuCheckboxItem` | 类型引用 | `DropdownMenuCheckboxItemEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `DropdownMenuContent` | 类型引用 | `DropdownMenuContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `DropdownMenuRadioGroup` | 类型引用 | `DropdownMenuRadioGroupEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `DropdownMenuRadioItem` | 类型引用 | `DropdownMenuRadioItemEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `DropdownMenuSub` | 类型引用 | `DropdownMenuSubEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `DropdownMenuSubContent` | 类型引用 | `DropdownMenuSubContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

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

### DropdownMenuCheckboxItem.class

```vue
<DropdownMenuCheckboxItem class="border-primary" />
```

### DropdownMenuContent.class

```vue
<DropdownMenuContent class="border-primary" />
```

### DropdownMenuItem.class

```vue
<DropdownMenuItem class="border-primary" />
```

### DropdownMenuLabel.class

```vue
<DropdownMenuLabel class="border-primary" />
```

### DropdownMenuRadioItem.class

```vue
<DropdownMenuRadioItem class="border-primary" />
```

### DropdownMenuSeparator.class

```vue
<DropdownMenuSeparator class="border-primary" />
```

### DropdownMenuShortcut.class

```vue
<DropdownMenuShortcut class="border-primary" />
```

### DropdownMenuSubContent.class

```vue
<DropdownMenuSubContent class="border-primary" />
```

### DropdownMenuSubTrigger.class

```vue
<DropdownMenuSubTrigger class="border-primary" />
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

