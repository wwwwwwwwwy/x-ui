---
title: ToggleGroup
description: ToggleGroup component documentation generated from source.
---

# ToggleGroup

ToggleGroup component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/toggle-group.json
```

## Import

```ts
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
```

## Basic Usage

```vue
<ToggleGroup>
  Example content
</ToggleGroup>
```

## Components

- `ToggleGroup`
- `ToggleGroupItem`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `ToggleGroup` | `props` | `ToggleGroupRootProps & { class?: HTMLAttributes["class"] variant?: ToggleGroupVariants["variant"] size?: ToggleGroupVariants["size"] }` | `<ToggleGroup :example-prop="example" />` |
| `ToggleGroupItem` | `props` | `ToggleGroupItemProps & { class?: HTMLAttributes["class"] variant?: ToggleGroupVariants["variant"] size?: ToggleGroupVariants["size"] }` | `<ToggleGroupItem :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `ToggleGroup` | `emits` | `ToggleGroupRootEmits` | `<ToggleGroup @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `ToggleGroup` | `default` | `<ToggleGroup>Content</ToggleGroup>` |
| `ToggleGroupItem` | `default` | `<ToggleGroupItem>Content</ToggleGroupItem>` |

### Exports

No additional local API exports were found.

## API Examples

### ToggleGroup.exampleProp

```vue
<ToggleGroup :example-prop="example" />
```

### ToggleGroupItem.exampleProp

```vue
<ToggleGroupItem :example-prop="example" />
```

### ToggleGroup.emits

```vue
<ToggleGroup @emits="emits" />
```

### ToggleGroup slot: default

```vue
<ToggleGroup>Content</ToggleGroup>
```

### ToggleGroupItem slot: default

```vue
<ToggleGroupItem>Content</ToggleGroupItem>
```

## Dependencies

- `class-variance-authority`
- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/toggle-group.json
```

