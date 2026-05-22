---
title: Input
description: Input component documentation generated from source.
---

# Input

Input component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/input.json
```

## Import

```ts
import { Input } from '@/components/ui/input'
```

## Basic Usage

```vue
<Input>
  Example content
</Input>
```

## Components

- `Input`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Input` | `defaultValue` | `string \| number` | `<Input :default-value="1" />` |
| `Input` | `modelValue` | `string \| number` | `<Input :model-value="1" />` |
| `Input` | `class` | `HTMLAttributes["class"]` | `<Input class="custom-class" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Input` | `emits` | `{ (e: "update:modelValue", payload: string \| number): void }` | `<Input @emits="emits" />` |

### Slots

No explicit local slots were found in source.

### Exports

No additional local API exports were found.

## API Examples

### Input.defaultValue

```vue
<Input :default-value="1" />
```

### Input.modelValue

```vue
<Input :model-value="1" />
```

### Input.class

```vue
<Input class="custom-class" />
```

### Input.emits

```vue
<Input @emits="emits" />
```

## Dependencies

- `@vueuse/core`

## Registry

```txt
/r/input.json
```

