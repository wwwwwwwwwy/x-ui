---
title: Checkbox
description: Checkbox component documentation generated from source.
---

# Checkbox

Checkbox component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/checkbox.json
```

## Import

```ts
import { Checkbox } from '@/components/ui/checkbox'
```

## Basic Usage

```vue
<Checkbox>
  Example content
</Checkbox>
```

## Components

- `Checkbox`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Checkbox` | `props` | `CheckboxRootProps & { class?: HTMLAttributes["class"] }` | `<Checkbox :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Checkbox` | `emits` | `CheckboxRootEmits` | `<Checkbox @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Checkbox` | `default` | `<Checkbox>Content</Checkbox>` |

### Exports

No additional local API exports were found.

## API Examples

### Checkbox.exampleProp

```vue
<Checkbox :example-prop="example" />
```

### Checkbox.emits

```vue
<Checkbox @emits="emits" />
```

### Checkbox slot: default

```vue
<Checkbox>Content</Checkbox>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/checkbox.json
```

