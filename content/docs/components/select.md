---
title: Select
description: Select component documentation generated from source.
---

# Select

Select component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/select.json
```

## Import

```ts
import { Select, SelectContent, SelectGroup, SelectItem, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
```

## Basic Usage

```vue
<Select>
  Example content
</Select>
```

## Components

- `Select`
- `SelectContent`
- `SelectGroup`
- `SelectItem`
- `SelectItemText`
- `SelectLabel`
- `SelectScrollDownButton`
- `SelectScrollUpButton`
- `SelectSeparator`
- `SelectTrigger`
- `SelectValue`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Select` | `props` | `SelectRootProps` | `<Select :example-prop="example" />` |
| `SelectContent` | `props` | `SelectContentProps & { class?: HTMLAttributes["class"] }` | `<SelectContent :example-prop="example" />` |
| `SelectGroup` | `props` | `SelectGroupProps & { class?: HTMLAttributes["class"] }` | `<SelectGroup :example-prop="example" />` |
| `SelectItem` | `props` | `SelectItemProps & { class?: HTMLAttributes["class"] }` | `<SelectItem :example-prop="example" />` |
| `SelectItemText` | `props` | `SelectItemTextProps` | `<SelectItemText :example-prop="example" />` |
| `SelectLabel` | `props` | `SelectLabelProps & { class?: HTMLAttributes["class"] }` | `<SelectLabel :example-prop="example" />` |
| `SelectScrollDownButton` | `props` | `SelectScrollDownButtonProps & { class?: HTMLAttributes["class"] }` | `<SelectScrollDownButton :example-prop="example" />` |
| `SelectScrollUpButton` | `props` | `SelectScrollUpButtonProps & { class?: HTMLAttributes["class"] }` | `<SelectScrollUpButton :example-prop="example" />` |
| `SelectSeparator` | `props` | `SelectSeparatorProps & { class?: HTMLAttributes["class"] }` | `<SelectSeparator :example-prop="example" />` |
| `SelectTrigger` | `props` | `SelectTriggerProps & { class?: HTMLAttributes["class"] }` | `<SelectTrigger :example-prop="example" />` |
| `SelectValue` | `props` | `SelectValueProps` | `<SelectValue :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Select` | `emits` | `SelectRootEmits` | `<Select @emits="emits" />` |
| `SelectContent` | `emits` | `SelectContentEmits` | `<SelectContent @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Select` | `default` | `<Select>Content</Select>` |
| `SelectContent` | `default` | `<SelectContent>Content</SelectContent>` |
| `SelectGroup` | `default` | `<SelectGroup>Content</SelectGroup>` |
| `SelectItem` | `default` | `<SelectItem>Content</SelectItem>` |
| `SelectItemText` | `default` | `<SelectItemText>Content</SelectItemText>` |
| `SelectLabel` | `default` | `<SelectLabel>Content</SelectLabel>` |
| `SelectScrollDownButton` | `default` | `<SelectScrollDownButton>Content</SelectScrollDownButton>` |
| `SelectScrollUpButton` | `default` | `<SelectScrollUpButton>Content</SelectScrollUpButton>` |
| `SelectTrigger` | `default` | `<SelectTrigger>Content</SelectTrigger>` |
| `SelectValue` | `default` | `<SelectValue>Content</SelectValue>` |

### Exports

No additional local API exports were found.

## API Examples

### Select.exampleProp

```vue
<Select :example-prop="example" />
```

### SelectContent.exampleProp

```vue
<SelectContent :example-prop="example" />
```

### SelectGroup.exampleProp

```vue
<SelectGroup :example-prop="example" />
```

### SelectItem.exampleProp

```vue
<SelectItem :example-prop="example" />
```

### SelectItemText.exampleProp

```vue
<SelectItemText :example-prop="example" />
```

### SelectLabel.exampleProp

```vue
<SelectLabel :example-prop="example" />
```

### SelectScrollDownButton.exampleProp

```vue
<SelectScrollDownButton :example-prop="example" />
```

### SelectScrollUpButton.exampleProp

```vue
<SelectScrollUpButton :example-prop="example" />
```

### SelectSeparator.exampleProp

```vue
<SelectSeparator :example-prop="example" />
```

### SelectTrigger.exampleProp

```vue
<SelectTrigger :example-prop="example" />
```

### SelectValue.exampleProp

```vue
<SelectValue :example-prop="example" />
```

### Select.emits

```vue
<Select @emits="emits" />
```

### SelectContent.emits

```vue
<SelectContent @emits="emits" />
```

### Select slot: default

```vue
<Select>Content</Select>
```

### SelectContent slot: default

```vue
<SelectContent>Content</SelectContent>
```

### SelectGroup slot: default

```vue
<SelectGroup>Content</SelectGroup>
```

### SelectItem slot: default

```vue
<SelectItem>Content</SelectItem>
```

### SelectItemText slot: default

```vue
<SelectItemText>Content</SelectItemText>
```

### SelectLabel slot: default

```vue
<SelectLabel>Content</SelectLabel>
```

### SelectScrollDownButton slot: default

```vue
<SelectScrollDownButton>Content</SelectScrollDownButton>
```

### SelectScrollUpButton slot: default

```vue
<SelectScrollUpButton>Content</SelectScrollUpButton>
```

### SelectTrigger slot: default

```vue
<SelectTrigger>Content</SelectTrigger>
```

### SelectValue slot: default

```vue
<SelectValue>Content</SelectValue>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/select.json
```

