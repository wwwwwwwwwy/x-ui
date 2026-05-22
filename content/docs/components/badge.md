---
title: Badge
description: Badge component documentation generated from source.
---

# Badge

Badge component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/badge.json
```

## Import

```ts
import { Badge } from '@/components/ui/badge'
```

## Basic Usage

```vue
<Badge>
  Example content
</Badge>
```

## Components

- `Badge`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Badge` | `variant` | `BadgeVariants["variant"]` | `<Badge :variant="example" />` |
| `Badge` | `class` | `HTMLAttributes["class"]` | `<Badge class="custom-class" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Badge` | `default` | `<Badge>Content</Badge>` |

### Exports

- `export const badgeVariants = cva(`
- `export type BadgeVariants = VariantProps<typeof badgeVariants>`

## API Examples

### Badge.variant

```vue
<Badge :variant="example" />
```

### Badge.class

```vue
<Badge class="custom-class" />
```

### Badge slot: default

```vue
<Badge>Content</Badge>
```

## Dependencies

No external runtime dependencies were detected in local component source.

## Registry

```txt
/r/badge.json
```

