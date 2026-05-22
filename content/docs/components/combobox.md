---
title: Combobox
description: Combobox component documentation generated from source.
---

# Combobox

Combobox component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/combobox.json
```

## Import

```ts
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList, ComboboxSeparator } from '@/components/ui/combobox'
```

## Basic Usage

```vue
<Combobox>
  Example content
</Combobox>
```

## Components

- `Combobox`
- `ComboboxAnchor`
- `ComboboxEmpty`
- `ComboboxGroup`
- `ComboboxInput`
- `ComboboxItem`
- `ComboboxList`
- `ComboboxSeparator`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Combobox` | `props` | `ComboboxRootProps` | `<Combobox :example-prop="example" />` |
| `ComboboxAnchor` | `props` | `ComboboxAnchorProps & { class?: HTMLAttributes["class"] }` | `<ComboboxAnchor :example-prop="example" />` |
| `ComboboxEmpty` | `props` | `ComboboxEmptyProps & { class?: HTMLAttributes["class"] }` | `<ComboboxEmpty :example-prop="example" />` |
| `ComboboxGroup` | `props` | `ComboboxGroupProps & { class?: HTMLAttributes["class"] heading?: string }` | `<ComboboxGroup :example-prop="example" />` |
| `ComboboxInput` | `props` | `ComboboxInputProps & { class?: HTMLAttributes["class"] }` | `<ComboboxInput :example-prop="example" />` |
| `ComboboxItem` | `props` | `ComboboxItemProps & { class?: HTMLAttributes["class"] }` | `<ComboboxItem :example-prop="example" />` |
| `ComboboxList` | `props` | `ComboboxContentProps & { class?: HTMLAttributes["class"] }` | `<ComboboxList :example-prop="example" />` |
| `ComboboxSeparator` | `props` | `ComboboxSeparatorProps & { class?: HTMLAttributes["class"] }` | `<ComboboxSeparator :example-prop="example" />` |
| `ComboboxTrigger` | `props` | `ComboboxTriggerProps & { class?: HTMLAttributes["class"] }` | `<ComboboxTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Combobox` | `emits` | `ComboboxRootEmits` | `<Combobox @emits="emits" />` |
| `ComboboxInput` | `emits` | `ComboboxInputEmits` | `<ComboboxInput @emits="emits" />` |
| `ComboboxItem` | `emits` | `ComboboxItemEmits` | `<ComboboxItem @emits="emits" />` |
| `ComboboxList` | `emits` | `ComboboxContentEmits` | `<ComboboxList @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Combobox` | `default` | `<Combobox>Content</Combobox>` |
| `ComboboxAnchor` | `default` | `<ComboboxAnchor>Content</ComboboxAnchor>` |
| `ComboboxEmpty` | `default` | `<ComboboxEmpty>Content</ComboboxEmpty>` |
| `ComboboxGroup` | `default` | `<ComboboxGroup>Content</ComboboxGroup>` |
| `ComboboxInput` | `default` | `<ComboboxInput>Content</ComboboxInput>` |
| `ComboboxItem` | `default` | `<ComboboxItem>Content</ComboboxItem>` |
| `ComboboxList` | `default` | `<ComboboxList>Content</ComboboxList>` |
| `ComboboxSeparator` | `default` | `<ComboboxSeparator>Content</ComboboxSeparator>` |
| `ComboboxTrigger` | `default` | `<ComboboxTrigger>Content</ComboboxTrigger>` |

### Exports

- `export { ComboboxCancel, ComboboxItemIndicator, ComboboxTrigger } from "reka-ui"`

## API Examples

### Combobox.exampleProp

```vue
<Combobox :example-prop="example" />
```

### ComboboxAnchor.exampleProp

```vue
<ComboboxAnchor :example-prop="example" />
```

### ComboboxEmpty.exampleProp

```vue
<ComboboxEmpty :example-prop="example" />
```

### ComboboxGroup.exampleProp

```vue
<ComboboxGroup :example-prop="example" />
```

### ComboboxInput.exampleProp

```vue
<ComboboxInput :example-prop="example" />
```

### ComboboxItem.exampleProp

```vue
<ComboboxItem :example-prop="example" />
```

### ComboboxList.exampleProp

```vue
<ComboboxList :example-prop="example" />
```

### ComboboxSeparator.exampleProp

```vue
<ComboboxSeparator :example-prop="example" />
```

### ComboboxTrigger.exampleProp

```vue
<ComboboxTrigger :example-prop="example" />
```

### Combobox.emits

```vue
<Combobox @emits="emits" />
```

### ComboboxInput.emits

```vue
<ComboboxInput @emits="emits" />
```

### ComboboxItem.emits

```vue
<ComboboxItem @emits="emits" />
```

### ComboboxList.emits

```vue
<ComboboxList @emits="emits" />
```

### Combobox slot: default

```vue
<Combobox>Content</Combobox>
```

### ComboboxAnchor slot: default

```vue
<ComboboxAnchor>Content</ComboboxAnchor>
```

### ComboboxEmpty slot: default

```vue
<ComboboxEmpty>Content</ComboboxEmpty>
```

### ComboboxGroup slot: default

```vue
<ComboboxGroup>Content</ComboboxGroup>
```

### ComboboxInput slot: default

```vue
<ComboboxInput>Content</ComboboxInput>
```

### ComboboxItem slot: default

```vue
<ComboboxItem>Content</ComboboxItem>
```

### ComboboxList slot: default

```vue
<ComboboxList>Content</ComboboxList>
```

### ComboboxSeparator slot: default

```vue
<ComboboxSeparator>Content</ComboboxSeparator>
```

### ComboboxTrigger slot: default

```vue
<ComboboxTrigger>Content</ComboboxTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/combobox.json
```

