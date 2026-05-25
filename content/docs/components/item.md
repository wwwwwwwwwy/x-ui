---
title: Item
description: Item 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Item

Item 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Item 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="item" src="item/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/item.json
```

## 导入

```ts
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle } from '@/components/ui/item'
```

## 基础用法

```vue
<Item>
  示例内容
</Item>
```

## 组件导出

- `Item`
- `ItemActions`
- `ItemContent`
- `ItemDescription`
- `ItemFooter`
- `ItemGroup`
- `ItemHeader`
- `ItemMedia`
- `ItemSeparator`
- `ItemTitle`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Item` | `class` | `HTMLAttributes["class"]` | `<Item class="border-primary" />` |
| `Item` | `variant` | `ItemVariants["variant"]` | `<Item variant="outline">示例内容</Item>` |
| `Item` | `size` | `ItemVariants["size"]` | `<Item size="sm">示例内容</Item>` |
| `ItemActions` | `class` | `HTMLAttributes["class"]` | `<ItemActions class="border-primary" />` |
| `ItemContent` | `class` | `HTMLAttributes["class"]` | `<ItemContent class="border-primary" />` |
| `ItemDescription` | `class` | `HTMLAttributes["class"]` | `<ItemDescription class="border-primary" />` |
| `ItemFooter` | `class` | `HTMLAttributes["class"]` | `<ItemFooter class="border-primary" />` |
| `ItemGroup` | `class` | `HTMLAttributes["class"]` | `<ItemGroup class="border-primary" />` |
| `ItemHeader` | `class` | `HTMLAttributes["class"]` | `<ItemHeader class="border-primary" />` |
| `ItemMedia` | `class` | `HTMLAttributes["class"]` | `<ItemMedia class="border-primary" />` |
| `ItemMedia` | `variant` | `ItemMediaVariants["variant"]` | `<ItemMedia variant="outline">示例内容</ItemMedia>` |
| `ItemSeparator` | `class` | `HTMLAttributes["class"]` | `<ItemSeparator class="border-primary" />` |
| `ItemTitle` | `class` | `HTMLAttributes["class"]` | `<ItemTitle class="border-primary" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Item` | `default` | `<Item>内容</Item>` |
| `ItemActions` | `default` | `<ItemActions>内容</ItemActions>` |
| `ItemContent` | `default` | `<ItemContent>内容</ItemContent>` |
| `ItemDescription` | `default` | `<ItemDescription>内容</ItemDescription>` |
| `ItemFooter` | `default` | `<ItemFooter>内容</ItemFooter>` |
| `ItemGroup` | `default` | `<ItemGroup>内容</ItemGroup>` |
| `ItemHeader` | `default` | `<ItemHeader>内容</ItemHeader>` |
| `ItemMedia` | `default` | `<ItemMedia>内容</ItemMedia>` |
| `ItemTitle` | `default` | `<ItemTitle>内容</ItemTitle>` |

### Exports

- `export const itemVariants = cva(`
- `export const itemMediaVariants = cva(`
- `export type ItemVariants = VariantProps<typeof itemVariants>`
- `export type ItemMediaVariants = VariantProps<typeof itemMediaVariants>`

## API 示例

### Item.class

```vue
<Item class="border-primary" />
```

### Item.variant

```vue
<Item variant="outline">示例内容</Item>
```

### Item.size

```vue
<Item size="sm">示例内容</Item>
```

### ItemActions.class

```vue
<ItemActions class="border-primary" />
```

### ItemContent.class

```vue
<ItemContent class="border-primary" />
```

### ItemDescription.class

```vue
<ItemDescription class="border-primary" />
```

### ItemFooter.class

```vue
<ItemFooter class="border-primary" />
```

### ItemGroup.class

```vue
<ItemGroup class="border-primary" />
```

### ItemHeader.class

```vue
<ItemHeader class="border-primary" />
```

### ItemMedia.class

```vue
<ItemMedia class="border-primary" />
```

### ItemMedia.variant

```vue
<ItemMedia variant="outline">示例内容</ItemMedia>
```

### ItemSeparator.class

```vue
<ItemSeparator class="border-primary" />
```

### ItemTitle.class

```vue
<ItemTitle class="border-primary" />
```

### Item slot: default

```vue
<Item>内容</Item>
```

### ItemActions slot: default

```vue
<ItemActions>内容</ItemActions>
```

### ItemContent slot: default

```vue
<ItemContent>内容</ItemContent>
```

### ItemDescription slot: default

```vue
<ItemDescription>内容</ItemDescription>
```

### ItemFooter slot: default

```vue
<ItemFooter>内容</ItemFooter>
```

### ItemGroup slot: default

```vue
<ItemGroup>内容</ItemGroup>
```

### ItemHeader slot: default

```vue
<ItemHeader>内容</ItemHeader>
```

### ItemMedia slot: default

```vue
<ItemMedia>内容</ItemMedia>
```

### ItemTitle slot: default

```vue
<ItemTitle>内容</ItemTitle>
```

## 依赖

- `reka-ui`

## Registry

```txt
/r/item.json
```

