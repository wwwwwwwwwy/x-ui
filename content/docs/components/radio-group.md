---
title: RadioGroup
description: RadioGroup component documentation generated from source.
---

# RadioGroup

RadioGroup component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/radio-group.json
```

## Import

```ts
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
```

## Basic Usage

```vue
<RadioGroup>
  Example content
</RadioGroup>
```

## Components

- `RadioGroup`
- `RadioGroupItem`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `RadioGroup` | `props` | `RadioGroupRootProps & { class?: HTMLAttributes["class"] }` | `<RadioGroup :example-prop="example" />` |
| `RadioGroupItem` | `props` | `RadioGroupItemProps & { class?: HTMLAttributes["class"] }` | `<RadioGroupItem :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `RadioGroup` | `emits` | `RadioGroupRootEmits` | `<RadioGroup @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `RadioGroup` | `default` | `<RadioGroup>Content</RadioGroup>` |

### Exports

No additional local API exports were found.

## API Examples

### RadioGroup.exampleProp

```vue
<RadioGroup :example-prop="example" />
```

### RadioGroupItem.exampleProp

```vue
<RadioGroupItem :example-prop="example" />
```

### RadioGroup.emits

```vue
<RadioGroup @emits="emits" />
```

### RadioGroup slot: default

```vue
<RadioGroup>Content</RadioGroup>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/radio-group.json
```

