---
title: Alert
description: Alert component documentation generated from source.
---

# Alert

Alert component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/alert.json
```

## Import

```ts
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
```

## Basic Usage

```vue
<Alert>
  Example content
</Alert>
```

## Components

- `Alert`
- `AlertDescription`
- `AlertTitle`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Alert` | `class` | `HTMLAttributes["class"]` | `<Alert class="custom-class" />` |
| `Alert` | `variant` | `AlertVariants["variant"]` | `<Alert :variant="example" />` |
| `AlertDescription` | `class` | `HTMLAttributes["class"]` | `<AlertDescription class="custom-class" />` |
| `AlertTitle` | `class` | `HTMLAttributes["class"]` | `<AlertTitle class="custom-class" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Alert` | `default` | `<Alert>Content</Alert>` |
| `AlertDescription` | `default` | `<AlertDescription>Content</AlertDescription>` |
| `AlertTitle` | `default` | `<AlertTitle>Content</AlertTitle>` |

### Exports

- `export const alertVariants = cva(`
- `export type AlertVariants = VariantProps<typeof alertVariants>`

## API Examples

### Alert.class

```vue
<Alert class="custom-class" />
```

### Alert.variant

```vue
<Alert :variant="example" />
```

### AlertDescription.class

```vue
<AlertDescription class="custom-class" />
```

### AlertTitle.class

```vue
<AlertTitle class="custom-class" />
```

### Alert slot: default

```vue
<Alert>Content</Alert>
```

### AlertDescription slot: default

```vue
<AlertDescription>Content</AlertDescription>
```

### AlertTitle slot: default

```vue
<AlertTitle>Content</AlertTitle>
```

## Dependencies

No external runtime dependencies were detected in local component source.

## Registry

```txt
/r/alert.json
```

