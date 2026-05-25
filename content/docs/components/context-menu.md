---
title: ContextMenu
description: ContextMenu 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# ContextMenu

ContextMenu 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

ContextMenu 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

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
| `ContextMenuCheckboxItem` | `class` | `HTMLAttributes["class"]` | `<ContextMenuCheckboxItem class="border-primary" />` |
| `ContextMenuContent` | `class` | `HTMLAttributes["class"]` | `<ContextMenuContent class="border-primary" />` |
| `ContextMenuItem` | `class` | `HTMLAttributes["class"]` | `<ContextMenuItem class="border-primary" />` |
| `ContextMenuLabel` | `class` | `HTMLAttributes["class"]` | `<ContextMenuLabel class="border-primary" />` |
| `ContextMenuRadioItem` | `class` | `HTMLAttributes["class"]` | `<ContextMenuRadioItem class="border-primary" />` |
| `ContextMenuSeparator` | `class` | `HTMLAttributes["class"]` | `<ContextMenuSeparator class="border-primary" />` |
| `ContextMenuShortcut` | `class` | `HTMLAttributes["class"]` | `<ContextMenuShortcut class="border-primary" />` |
| `ContextMenuSubContent` | `class` | `HTMLAttributes["class"]` | `<ContextMenuSubContent class="border-primary" />` |
| `ContextMenuSubTrigger` | `class` | `HTMLAttributes["class"]` | `<ContextMenuSubTrigger class="border-primary" />` |
| `ContextMenu` | 类型引用 | `ContextMenuRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `ContextMenuGroup` | 类型引用 | `ContextMenuGroupProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `ContextMenuPortal` | 类型引用 | `ContextMenuPortalProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `ContextMenuRadioGroup` | 类型引用 | `ContextMenuRadioGroupProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `ContextMenuSub` | 类型引用 | `ContextMenuSubProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `ContextMenuTrigger` | 类型引用 | `ContextMenuTriggerProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ContextMenu` | 类型引用 | `ContextMenuRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `ContextMenuCheckboxItem` | 类型引用 | `ContextMenuCheckboxItemEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `ContextMenuContent` | 类型引用 | `ContextMenuContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `ContextMenuItem` | 类型引用 | `ContextMenuItemEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `ContextMenuRadioGroup` | 类型引用 | `ContextMenuRadioGroupEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `ContextMenuRadioItem` | 类型引用 | `ContextMenuRadioItemEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `ContextMenuSub` | 类型引用 | `ContextMenuSubEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `ContextMenuSubContent` | 类型引用 | `DropdownMenuSubContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

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

### ContextMenuCheckboxItem.class

```vue
<ContextMenuCheckboxItem class="border-primary" />
```

### ContextMenuContent.class

```vue
<ContextMenuContent class="border-primary" />
```

### ContextMenuItem.class

```vue
<ContextMenuItem class="border-primary" />
```

### ContextMenuLabel.class

```vue
<ContextMenuLabel class="border-primary" />
```

### ContextMenuRadioItem.class

```vue
<ContextMenuRadioItem class="border-primary" />
```

### ContextMenuSeparator.class

```vue
<ContextMenuSeparator class="border-primary" />
```

### ContextMenuShortcut.class

```vue
<ContextMenuShortcut class="border-primary" />
```

### ContextMenuSubContent.class

```vue
<ContextMenuSubContent class="border-primary" />
```

### ContextMenuSubTrigger.class

```vue
<ContextMenuSubTrigger class="border-primary" />
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

