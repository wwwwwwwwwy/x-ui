---
title: Breadcrumb
description: Breadcrumb component documentation generated from source.
---

# Breadcrumb

Breadcrumb component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/breadcrumb.json
```

## Import

```ts
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
```

## Basic Usage

```vue
<Breadcrumb>
  Example content
</Breadcrumb>
```

## Components

- `Breadcrumb`
- `BreadcrumbEllipsis`
- `BreadcrumbItem`
- `BreadcrumbLink`
- `BreadcrumbList`
- `BreadcrumbPage`
- `BreadcrumbSeparator`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Breadcrumb` | `class` | `HTMLAttributes["class"]` | `<Breadcrumb class="custom-class" />` |
| `BreadcrumbEllipsis` | `class` | `HTMLAttributes["class"]` | `<BreadcrumbEllipsis class="custom-class" />` |
| `BreadcrumbItem` | `class` | `HTMLAttributes["class"]` | `<BreadcrumbItem class="custom-class" />` |
| `BreadcrumbLink` | `props` | `PrimitiveProps & { class?: HTMLAttributes["class"] }` | `<BreadcrumbLink :example-prop="example" />` |
| `BreadcrumbList` | `class` | `HTMLAttributes["class"]` | `<BreadcrumbList class="custom-class" />` |
| `BreadcrumbPage` | `class` | `HTMLAttributes["class"]` | `<BreadcrumbPage class="custom-class" />` |
| `BreadcrumbSeparator` | `class` | `HTMLAttributes["class"]` | `<BreadcrumbSeparator class="custom-class" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Breadcrumb` | `default` | `<Breadcrumb>Content</Breadcrumb>` |
| `BreadcrumbEllipsis` | `default` | `<BreadcrumbEllipsis>Content</BreadcrumbEllipsis>` |
| `BreadcrumbItem` | `default` | `<BreadcrumbItem>Content</BreadcrumbItem>` |
| `BreadcrumbLink` | `default` | `<BreadcrumbLink>Content</BreadcrumbLink>` |
| `BreadcrumbList` | `default` | `<BreadcrumbList>Content</BreadcrumbList>` |
| `BreadcrumbPage` | `default` | `<BreadcrumbPage>Content</BreadcrumbPage>` |
| `BreadcrumbSeparator` | `default` | `<BreadcrumbSeparator>Content</BreadcrumbSeparator>` |

### Exports

No additional local API exports were found.

## API Examples

### Breadcrumb.class

```vue
<Breadcrumb class="custom-class" />
```

### BreadcrumbEllipsis.class

```vue
<BreadcrumbEllipsis class="custom-class" />
```

### BreadcrumbItem.class

```vue
<BreadcrumbItem class="custom-class" />
```

### BreadcrumbLink.exampleProp

```vue
<BreadcrumbLink :example-prop="example" />
```

### BreadcrumbList.class

```vue
<BreadcrumbList class="custom-class" />
```

### BreadcrumbPage.class

```vue
<BreadcrumbPage class="custom-class" />
```

### BreadcrumbSeparator.class

```vue
<BreadcrumbSeparator class="custom-class" />
```

### Breadcrumb slot: default

```vue
<Breadcrumb>Content</Breadcrumb>
```

### BreadcrumbEllipsis slot: default

```vue
<BreadcrumbEllipsis>Content</BreadcrumbEllipsis>
```

### BreadcrumbItem slot: default

```vue
<BreadcrumbItem>Content</BreadcrumbItem>
```

### BreadcrumbLink slot: default

```vue
<BreadcrumbLink>Content</BreadcrumbLink>
```

### BreadcrumbList slot: default

```vue
<BreadcrumbList>Content</BreadcrumbList>
```

### BreadcrumbPage slot: default

```vue
<BreadcrumbPage>Content</BreadcrumbPage>
```

### BreadcrumbSeparator slot: default

```vue
<BreadcrumbSeparator>Content</BreadcrumbSeparator>
```

## Dependencies

- `reka-ui`

## Registry

```txt
/r/breadcrumb.json
```

