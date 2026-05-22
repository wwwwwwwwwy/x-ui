---
title: Textarea
description: Textarea component documentation generated from source.
---

# Textarea

Textarea component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/textarea.json
```

## Import

```ts
import { Textarea } from '@/components/ui/textarea'
```

## Basic Usage

```vue
<Textarea>
  Example content
</Textarea>
```

## Components

- `Textarea`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Textarea` | `class` | `HTMLAttributes["class"]` | `<Textarea class="custom-class" />` |
| `Textarea` | `defaultValue` | `string \| number` | `<Textarea :default-value="1" />` |
| `Textarea` | `modelValue` | `string \| number` | `<Textarea :model-value="1" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Textarea` | `emits` | `{ (e: "update:modelValue", payload: string \| number): void }` | `<Textarea @emits="emits" />` |

### Slots

No explicit local slots were found in source.

### Exports

No additional local API exports were found.

## API Examples

### Textarea.class

```vue
<Textarea class="custom-class" />
```

### Textarea.defaultValue

```vue
<Textarea :default-value="1" />
```

### Textarea.modelValue

```vue
<Textarea :model-value="1" />
```

### Textarea.emits

```vue
<Textarea @emits="emits" />
```

## Dependencies

- `@vueuse/core`

## Registry

```txt
/r/textarea.json
```

