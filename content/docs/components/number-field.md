---
title: NumberField
description: NumberField component documentation generated from source.
---

# NumberField

NumberField component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/number-field.json
```

## Import

```ts
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field'
```

## Basic Usage

```vue
<NumberField>
  Example content
</NumberField>
```

## Components

- `NumberField`
- `NumberFieldContent`
- `NumberFieldDecrement`
- `NumberFieldIncrement`
- `NumberFieldInput`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `NumberField` | `props` | `NumberFieldRootProps & { class?: HTMLAttributes["class"] }` | `<NumberField :example-prop="example" />` |
| `NumberFieldContent` | `class` | `HTMLAttributes["class"]` | `<NumberFieldContent class="custom-class" />` |
| `NumberFieldDecrement` | `props` | `NumberFieldDecrementProps & { class?: HTMLAttributes["class"] }` | `<NumberFieldDecrement :example-prop="example" />` |
| `NumberFieldIncrement` | `props` | `NumberFieldIncrementProps & { class?: HTMLAttributes["class"] }` | `<NumberFieldIncrement :example-prop="example" />` |
| `NumberFieldInput` | `class` | `HTMLAttributes["class"]` | `<NumberFieldInput class="custom-class" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `NumberField` | `emits` | `NumberFieldRootEmits` | `<NumberField @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `NumberField` | `default` | `<NumberField>Content</NumberField>` |
| `NumberFieldContent` | `default` | `<NumberFieldContent>Content</NumberFieldContent>` |
| `NumberFieldDecrement` | `default` | `<NumberFieldDecrement>Content</NumberFieldDecrement>` |
| `NumberFieldIncrement` | `default` | `<NumberFieldIncrement>Content</NumberFieldIncrement>` |

### Exports

No additional local API exports were found.

## API Examples

### NumberField.exampleProp

```vue
<NumberField :example-prop="example" />
```

### NumberFieldContent.class

```vue
<NumberFieldContent class="custom-class" />
```

### NumberFieldDecrement.exampleProp

```vue
<NumberFieldDecrement :example-prop="example" />
```

### NumberFieldIncrement.exampleProp

```vue
<NumberFieldIncrement :example-prop="example" />
```

### NumberFieldInput.class

```vue
<NumberFieldInput class="custom-class" />
```

### NumberField.emits

```vue
<NumberField @emits="emits" />
```

### NumberField slot: default

```vue
<NumberField>Content</NumberField>
```

### NumberFieldContent slot: default

```vue
<NumberFieldContent>Content</NumberFieldContent>
```

### NumberFieldDecrement slot: default

```vue
<NumberFieldDecrement>Content</NumberFieldDecrement>
```

### NumberFieldIncrement slot: default

```vue
<NumberFieldIncrement>Content</NumberFieldIncrement>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/number-field.json
```

