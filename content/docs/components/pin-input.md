---
title: PinInput
description: PinInput component documentation generated from source.
---

# PinInput

PinInput component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/pin-input.json
```

## Import

```ts
import { PinInput, PinInputGroup, PinInputSeparator, PinInputSlot } from '@/components/ui/pin-input'
```

## Basic Usage

```vue
<PinInput>
  Example content
</PinInput>
```

## Components

- `PinInput`
- `PinInputGroup`
- `PinInputSeparator`
- `PinInputSlot`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `PinInput` | `props` | `PinInputRootProps<Type> & { class?: HTMLAttributes["class"] }` | `<PinInput :example-prop="example" />` |
| `PinInputGroup` | `props` | `PrimitiveProps & { class?: HTMLAttributes["class"] }` | `<PinInputGroup :example-prop="example" />` |
| `PinInputSeparator` | `props` | `PrimitiveProps` | `<PinInputSeparator :example-prop="example" />` |
| `PinInputSlot` | `props` | `PinInputInputProps & { class?: HTMLAttributes["class"] }` | `<PinInputSlot :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `PinInput` | `emits` | `PinInputRootEmits<Type>` | `<PinInput @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `PinInput` | `default` | `<PinInput>Content</PinInput>` |
| `PinInputGroup` | `default` | `<PinInputGroup>Content</PinInputGroup>` |
| `PinInputSeparator` | `default` | `<PinInputSeparator>Content</PinInputSeparator>` |

### Exports

No additional local API exports were found.

## API Examples

### PinInput.exampleProp

```vue
<PinInput :example-prop="example" />
```

### PinInputGroup.exampleProp

```vue
<PinInputGroup :example-prop="example" />
```

### PinInputSeparator.exampleProp

```vue
<PinInputSeparator :example-prop="example" />
```

### PinInputSlot.exampleProp

```vue
<PinInputSlot :example-prop="example" />
```

### PinInput.emits

```vue
<PinInput @emits="emits" />
```

### PinInput slot: default

```vue
<PinInput>Content</PinInput>
```

### PinInputGroup slot: default

```vue
<PinInputGroup>Content</PinInputGroup>
```

### PinInputSeparator slot: default

```vue
<PinInputSeparator>Content</PinInputSeparator>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/pin-input.json
```

