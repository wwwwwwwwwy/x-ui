---
title: Empty
description: Empty component documentation generated from source.
---

# Empty

Empty component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/empty.json
```

## Import

```ts
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
```

## Basic Usage

```vue
<Empty>
  Example content
</Empty>
```

## Components

- `Empty`
- `EmptyContent`
- `EmptyDescription`
- `EmptyHeader`
- `EmptyMedia`
- `EmptyTitle`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Empty` | `class` | `HTMLAttributes["class"]` | `<Empty class="custom-class" />` |
| `EmptyContent` | `class` | `HTMLAttributes["class"]` | `<EmptyContent class="custom-class" />` |
| `EmptyDescription` | `class` | `HTMLAttributes["class"]` | `<EmptyDescription class="custom-class" />` |
| `EmptyHeader` | `class` | `HTMLAttributes["class"]` | `<EmptyHeader class="custom-class" />` |
| `EmptyMedia` | `class` | `HTMLAttributes["class"]` | `<EmptyMedia class="custom-class" />` |
| `EmptyMedia` | `variant` | `EmptyMediaVariants["variant"]` | `<EmptyMedia :variant="example" />` |
| `EmptyTitle` | `class` | `HTMLAttributes["class"]` | `<EmptyTitle class="custom-class" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Empty` | `default` | `<Empty>Content</Empty>` |
| `EmptyContent` | `default` | `<EmptyContent>Content</EmptyContent>` |
| `EmptyDescription` | `default` | `<EmptyDescription>Content</EmptyDescription>` |
| `EmptyHeader` | `default` | `<EmptyHeader>Content</EmptyHeader>` |
| `EmptyMedia` | `default` | `<EmptyMedia>Content</EmptyMedia>` |
| `EmptyTitle` | `default` | `<EmptyTitle>Content</EmptyTitle>` |

### Exports

- `export const emptyMediaVariants = cva(`
- `export type EmptyMediaVariants = VariantProps<typeof emptyMediaVariants>`

## API Examples

### Empty.class

```vue
<Empty class="custom-class" />
```

### EmptyContent.class

```vue
<EmptyContent class="custom-class" />
```

### EmptyDescription.class

```vue
<EmptyDescription class="custom-class" />
```

### EmptyHeader.class

```vue
<EmptyHeader class="custom-class" />
```

### EmptyMedia.class

```vue
<EmptyMedia class="custom-class" />
```

### EmptyMedia.variant

```vue
<EmptyMedia :variant="example" />
```

### EmptyTitle.class

```vue
<EmptyTitle class="custom-class" />
```

### Empty slot: default

```vue
<Empty>Content</Empty>
```

### EmptyContent slot: default

```vue
<EmptyContent>Content</EmptyContent>
```

### EmptyDescription slot: default

```vue
<EmptyDescription>Content</EmptyDescription>
```

### EmptyHeader slot: default

```vue
<EmptyHeader>Content</EmptyHeader>
```

### EmptyMedia slot: default

```vue
<EmptyMedia>Content</EmptyMedia>
```

### EmptyTitle slot: default

```vue
<EmptyTitle>Content</EmptyTitle>
```

## Dependencies

No external runtime dependencies were detected in local component source.

## Registry

```txt
/r/empty.json
```

