---
title: TagsInput
description: TagsInput component documentation generated from source.
---

# TagsInput

TagsInput component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/tags-input.json
```

## Import

```ts
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'
```

## Basic Usage

```vue
<TagsInput>
  Example content
</TagsInput>
```

## Components

- `TagsInput`
- `TagsInputInput`
- `TagsInputItem`
- `TagsInputItemDelete`
- `TagsInputItemText`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `TagsInput` | `props` | `TagsInputRootProps & { class?: HTMLAttributes["class"] }` | `<TagsInput :example-prop="example" />` |
| `TagsInputInput` | `props` | `TagsInputInputProps & { class?: HTMLAttributes["class"] }` | `<TagsInputInput :example-prop="example" />` |
| `TagsInputItem` | `props` | `TagsInputItemProps & { class?: HTMLAttributes["class"] }` | `<TagsInputItem :example-prop="example" />` |
| `TagsInputItemDelete` | `props` | `TagsInputItemDeleteProps & { class?: HTMLAttributes["class"] }` | `<TagsInputItemDelete :example-prop="example" />` |
| `TagsInputItemText` | `props` | `TagsInputItemTextProps & { class?: HTMLAttributes["class"] }` | `<TagsInputItemText :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `TagsInput` | `emits` | `TagsInputRootEmits` | `<TagsInput @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `TagsInput` | `default` | `<TagsInput>Content</TagsInput>` |
| `TagsInputItem` | `default` | `<TagsInputItem>Content</TagsInputItem>` |
| `TagsInputItemDelete` | `default` | `<TagsInputItemDelete>Content</TagsInputItemDelete>` |

### Exports

No additional local API exports were found.

## API Examples

### TagsInput.exampleProp

```vue
<TagsInput :example-prop="example" />
```

### TagsInputInput.exampleProp

```vue
<TagsInputInput :example-prop="example" />
```

### TagsInputItem.exampleProp

```vue
<TagsInputItem :example-prop="example" />
```

### TagsInputItemDelete.exampleProp

```vue
<TagsInputItemDelete :example-prop="example" />
```

### TagsInputItemText.exampleProp

```vue
<TagsInputItemText :example-prop="example" />
```

### TagsInput.emits

```vue
<TagsInput @emits="emits" />
```

### TagsInput slot: default

```vue
<TagsInput>Content</TagsInput>
```

### TagsInputItem slot: default

```vue
<TagsInputItem>Content</TagsInputItem>
```

### TagsInputItemDelete slot: default

```vue
<TagsInputItemDelete>Content</TagsInputItemDelete>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/tags-input.json
```

