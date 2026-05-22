---
title: Slider
description: Slider component documentation generated from source.
---

# Slider

Slider component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/slider.json
```

## Import

```ts
import { Slider } from '@/components/ui/slider'
```

## Basic Usage

```vue
<Slider>
  Example content
</Slider>
```

## Components

- `Slider`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Slider` | `props` | `SliderRootProps & { class?: HTMLAttributes["class"] }` | `<Slider :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Slider` | `emits` | `SliderRootEmits` | `<Slider @emits="emits" />` |

### Slots

No explicit local slots were found in source.

### Exports

No additional local API exports were found.

## API Examples

### Slider.exampleProp

```vue
<Slider :example-prop="example" />
```

### Slider.emits

```vue
<Slider @emits="emits" />
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/slider.json
```

