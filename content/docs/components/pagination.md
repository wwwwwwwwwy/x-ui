---
title: Pagination
description: Pagination 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Pagination

Pagination 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Pagination 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/pagination.json
```

## 导入

```ts
import { Pagination, PaginationContent, PaginationEllipsis, PaginationFirst, PaginationItem, PaginationLast, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
```

## 基础用法

```vue
<Pagination>
  示例内容
</Pagination>
```

## 组件导出

- `Pagination`
- `PaginationContent`
- `PaginationEllipsis`
- `PaginationFirst`
- `PaginationItem`
- `PaginationLast`
- `PaginationNext`
- `PaginationPrevious`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Pagination` | `props` | `PaginationRootProps & { class?: HTMLAttributes["class"] }` | `<Pagination :example-prop="example" />` |
| `PaginationContent` | `props` | `PaginationListProps & { class?: HTMLAttributes["class"] }` | `<PaginationContent :example-prop="example" />` |
| `PaginationEllipsis` | `props` | `PaginationEllipsisProps & { class?: HTMLAttributes["class"] }` | `<PaginationEllipsis :example-prop="example" />` |
| `PaginationFirst` | `props` | `PaginationFirstProps & { size?: ButtonVariants["size"] class?: HTMLAttributes["class"] }` | `<PaginationFirst :example-prop="example" />` |
| `PaginationItem` | `props` | `PaginationListItemProps & { size?: ButtonVariants["size"] class?: HTMLAttributes["class"] isActive?: boolean }` | `<PaginationItem :example-prop="true" />` |
| `PaginationLast` | `props` | `PaginationLastProps & { size?: ButtonVariants["size"] class?: HTMLAttributes["class"] }` | `<PaginationLast :example-prop="example" />` |
| `PaginationNext` | `props` | `PaginationNextProps & { size?: ButtonVariants["size"] class?: HTMLAttributes["class"] }` | `<PaginationNext :example-prop="example" />` |
| `PaginationPrevious` | `props` | `PaginationPrevProps & { size?: ButtonVariants["size"] class?: HTMLAttributes["class"] }` | `<PaginationPrevious :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Pagination` | `emits` | `PaginationRootEmits` | `<Pagination @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Pagination` | `default` | `<Pagination>内容</Pagination>` |
| `PaginationContent` | `default` | `<PaginationContent>内容</PaginationContent>` |
| `PaginationEllipsis` | `default` | `<PaginationEllipsis>内容</PaginationEllipsis>` |
| `PaginationFirst` | `default` | `<PaginationFirst>内容</PaginationFirst>` |
| `PaginationItem` | `default` | `<PaginationItem>内容</PaginationItem>` |
| `PaginationLast` | `default` | `<PaginationLast>内容</PaginationLast>` |
| `PaginationNext` | `default` | `<PaginationNext>内容</PaginationNext>` |
| `PaginationPrevious` | `default` | `<PaginationPrevious>内容</PaginationPrevious>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Pagination.exampleProp

```vue
<Pagination :example-prop="example" />
```

### PaginationContent.exampleProp

```vue
<PaginationContent :example-prop="example" />
```

### PaginationEllipsis.exampleProp

```vue
<PaginationEllipsis :example-prop="example" />
```

### PaginationFirst.exampleProp

```vue
<PaginationFirst :example-prop="example" />
```

### PaginationItem.exampleProp

```vue
<PaginationItem :example-prop="true" />
```

### PaginationLast.exampleProp

```vue
<PaginationLast :example-prop="example" />
```

### PaginationNext.exampleProp

```vue
<PaginationNext :example-prop="example" />
```

### PaginationPrevious.exampleProp

```vue
<PaginationPrevious :example-prop="example" />
```

### Pagination.emits

```vue
<Pagination @emits="emits" />
```

### Pagination slot: default

```vue
<Pagination>内容</Pagination>
```

### PaginationContent slot: default

```vue
<PaginationContent>内容</PaginationContent>
```

### PaginationEllipsis slot: default

```vue
<PaginationEllipsis>内容</PaginationEllipsis>
```

### PaginationFirst slot: default

```vue
<PaginationFirst>内容</PaginationFirst>
```

### PaginationItem slot: default

```vue
<PaginationItem>内容</PaginationItem>
```

### PaginationLast slot: default

```vue
<PaginationLast>内容</PaginationLast>
```

### PaginationNext slot: default

```vue
<PaginationNext>内容</PaginationNext>
```

### PaginationPrevious slot: default

```vue
<PaginationPrevious>内容</PaginationPrevious>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/pagination.json
```

