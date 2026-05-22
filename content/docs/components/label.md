---
title: Label
description: Label component documentation generated from source.
---

# Label

Label component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/label.json
```

## Import

```ts
import { Label } from '@/components/ui/label'
```

## Basic Usage

```vue
<Label>
  Example content
</Label>
```

## Components

- `Label`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Label` | `props` | `LabelProps & { class?: HTMLAttributes["class"] }` | `<Label :example-prop="example" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Label` | `default` | `<Label>Content</Label>` |

### Exports

No additional local API exports were found.

## API Examples

### Label.exampleProp

```vue
<Label :example-prop="example" />
```

### Label slot: default

```vue
<Label>Content</Label>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/label.json
```

