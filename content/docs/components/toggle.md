---
title: Toggle
description: Toggle component documentation generated from source.
---

# Toggle

Toggle component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/toggle.json
```

## Import

```ts
import { Toggle } from '@/components/ui/toggle'
```

## Basic Usage

```vue
<Toggle>
  Example content
</Toggle>
```

## Components

- `Toggle`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Toggle` | `props` | `ToggleProps & { class?: HTMLAttributes["class"] variant?: ToggleVariants["variant"] size?: ToggleVariants["size"] }` | `<Toggle :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Toggle` | `emits` | `ToggleEmits` | `<Toggle @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Toggle` | `default` | `<Toggle>Content</Toggle>` |

### Exports

- `export const toggleVariants = cva(`
- `export type ToggleVariants = VariantProps<typeof toggleVariants>`

## API Examples

### Toggle.exampleProp

```vue
<Toggle :example-prop="example" />
```

### Toggle.emits

```vue
<Toggle @emits="emits" />
```

### Toggle slot: default

```vue
<Toggle>Content</Toggle>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/toggle.json
```

