---
title: Stepper
description: Stepper component documentation generated from source.
---

# Stepper

Stepper component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/stepper.json
```

## Import

```ts
import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'
```

## Basic Usage

```vue
<Stepper>
  Example content
</Stepper>
```

## Components

- `Stepper`
- `StepperDescription`
- `StepperIndicator`
- `StepperItem`
- `StepperSeparator`
- `StepperTitle`
- `StepperTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Stepper` | `props` | `StepperRootProps & { class?: HTMLAttributes["class"] }` | `<Stepper :example-prop="example" />` |
| `StepperDescription` | `props` | `StepperDescriptionProps & { class?: HTMLAttributes["class"] }` | `<StepperDescription :example-prop="example" />` |
| `StepperIndicator` | `props` | `StepperIndicatorProps & { class?: HTMLAttributes["class"] }` | `<StepperIndicator :example-prop="example" />` |
| `StepperItem` | `props` | `StepperItemProps & { class?: HTMLAttributes["class"] }` | `<StepperItem :example-prop="example" />` |
| `StepperSeparator` | `props` | `StepperSeparatorProps & { class?: HTMLAttributes["class"] }` | `<StepperSeparator :example-prop="example" />` |
| `StepperTitle` | `props` | `StepperTitleProps & { class?: HTMLAttributes["class"] }` | `<StepperTitle :example-prop="example" />` |
| `StepperTrigger` | `props` | `StepperTriggerProps & { class?: HTMLAttributes["class"] }` | `<StepperTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Stepper` | `emits` | `StepperRootEmits` | `<Stepper @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Stepper` | `default` | `<Stepper>Content</Stepper>` |
| `StepperDescription` | `default` | `<StepperDescription>Content</StepperDescription>` |
| `StepperIndicator` | `default` | `<StepperIndicator>Content</StepperIndicator>` |
| `StepperItem` | `default` | `<StepperItem>Content</StepperItem>` |
| `StepperTitle` | `default` | `<StepperTitle>Content</StepperTitle>` |
| `StepperTrigger` | `default` | `<StepperTrigger>Content</StepperTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### Stepper.exampleProp

```vue
<Stepper :example-prop="example" />
```

### StepperDescription.exampleProp

```vue
<StepperDescription :example-prop="example" />
```

### StepperIndicator.exampleProp

```vue
<StepperIndicator :example-prop="example" />
```

### StepperItem.exampleProp

```vue
<StepperItem :example-prop="example" />
```

### StepperSeparator.exampleProp

```vue
<StepperSeparator :example-prop="example" />
```

### StepperTitle.exampleProp

```vue
<StepperTitle :example-prop="example" />
```

### StepperTrigger.exampleProp

```vue
<StepperTrigger :example-prop="example" />
```

### Stepper.emits

```vue
<Stepper @emits="emits" />
```

### Stepper slot: default

```vue
<Stepper>Content</Stepper>
```

### StepperDescription slot: default

```vue
<StepperDescription>Content</StepperDescription>
```

### StepperIndicator slot: default

```vue
<StepperIndicator>Content</StepperIndicator>
```

### StepperItem slot: default

```vue
<StepperItem>Content</StepperItem>
```

### StepperTitle slot: default

```vue
<StepperTitle>Content</StepperTitle>
```

### StepperTrigger slot: default

```vue
<StepperTrigger>Content</StepperTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/stepper.json
```

