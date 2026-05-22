---
title: Popover
description: Popover component documentation generated from source.
---

# Popover

Popover component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/popover.json
```

## Import

```ts
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
```

## Basic Usage

```vue
<Popover>
  Example content
</Popover>
```

## Components

- `Popover`
- `PopoverContent`
- `PopoverTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Popover` | `props` | `PopoverRootProps` | `<Popover :example-prop="example" />` |
| `PopoverContent` | `props` | `PopoverContentProps & { class?: HTMLAttributes["class"] }` | `<PopoverContent :example-prop="example" />` |
| `PopoverTrigger` | `props` | `PopoverTriggerProps` | `<PopoverTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Popover` | `emits` | `PopoverRootEmits` | `<Popover @emits="emits" />` |
| `PopoverContent` | `emits` | `PopoverContentEmits` | `<PopoverContent @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Popover` | `default` | `<Popover>Content</Popover>` |
| `PopoverContent` | `default` | `<PopoverContent>Content</PopoverContent>` |
| `PopoverTrigger` | `default` | `<PopoverTrigger>Content</PopoverTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### Popover.exampleProp

```vue
<Popover :example-prop="example" />
```

### PopoverContent.exampleProp

```vue
<PopoverContent :example-prop="example" />
```

### PopoverTrigger.exampleProp

```vue
<PopoverTrigger :example-prop="example" />
```

### Popover.emits

```vue
<Popover @emits="emits" />
```

### PopoverContent.emits

```vue
<PopoverContent @emits="emits" />
```

### Popover slot: default

```vue
<Popover>Content</Popover>
```

### PopoverContent slot: default

```vue
<PopoverContent>Content</PopoverContent>
```

### PopoverTrigger slot: default

```vue
<PopoverTrigger>Content</PopoverTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/popover.json
```

