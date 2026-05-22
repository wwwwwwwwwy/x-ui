---
title: Pagination
description: Pagination component documentation generated from source.
---

# Pagination

Pagination component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/pagination.json
```

## Import

```ts
import { Pagination, PaginationContent, PaginationEllipsis, PaginationFirst, PaginationItem, PaginationLast, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
```

## Basic Usage

```vue
<Pagination>
  Example content
</Pagination>
```

## Components

- `Pagination`
- `PaginationContent`
- `PaginationEllipsis`
- `PaginationFirst`
- `PaginationItem`
- `PaginationLast`
- `PaginationNext`
- `PaginationPrevious`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
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

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Pagination` | `emits` | `PaginationRootEmits` | `<Pagination @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Pagination` | `default` | `<Pagination>Content</Pagination>` |
| `PaginationContent` | `default` | `<PaginationContent>Content</PaginationContent>` |
| `PaginationEllipsis` | `default` | `<PaginationEllipsis>Content</PaginationEllipsis>` |
| `PaginationFirst` | `default` | `<PaginationFirst>Content</PaginationFirst>` |
| `PaginationItem` | `default` | `<PaginationItem>Content</PaginationItem>` |
| `PaginationLast` | `default` | `<PaginationLast>Content</PaginationLast>` |
| `PaginationNext` | `default` | `<PaginationNext>Content</PaginationNext>` |
| `PaginationPrevious` | `default` | `<PaginationPrevious>Content</PaginationPrevious>` |

### Exports

No additional local API exports were found.

## API Examples

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
<Pagination>Content</Pagination>
```

### PaginationContent slot: default

```vue
<PaginationContent>Content</PaginationContent>
```

### PaginationEllipsis slot: default

```vue
<PaginationEllipsis>Content</PaginationEllipsis>
```

### PaginationFirst slot: default

```vue
<PaginationFirst>Content</PaginationFirst>
```

### PaginationItem slot: default

```vue
<PaginationItem>Content</PaginationItem>
```

### PaginationLast slot: default

```vue
<PaginationLast>Content</PaginationLast>
```

### PaginationNext slot: default

```vue
<PaginationNext>Content</PaginationNext>
```

### PaginationPrevious slot: default

```vue
<PaginationPrevious>Content</PaginationPrevious>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/pagination.json
```

