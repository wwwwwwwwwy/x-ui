---
title: ButtonGroup
description: ButtonGroup component documentation generated from source.
---

# ButtonGroup

ButtonGroup component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/button-group.json
```

## Import

```ts
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
```

## Basic Usage

```vue
<ButtonGroup>
  Example content
</ButtonGroup>
```

## Components

- `ButtonGroup`
- `ButtonGroupSeparator`
- `ButtonGroupText`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `ButtonGroup` | `class` | `HTMLAttributes["class"]` | `<ButtonGroup class="custom-class" />` |
| `ButtonGroup` | `orientation` | `ButtonGroupVariants["orientation"]` | `<ButtonGroup :orientation="example" />` |
| `ButtonGroupSeparator` | `props` | `SeparatorProps & { class?: HTMLAttributes["class"] }` | `<ButtonGroupSeparator :example-prop="example" />` |
| `ButtonGroupText` | `props` | `Props` | `<ButtonGroupText :example-prop="example" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `ButtonGroup` | `default` | `<ButtonGroup>Content</ButtonGroup>` |
| `ButtonGroupText` | `default` | `<ButtonGroupText>Content</ButtonGroupText>` |

### Exports

- `export const buttonGroupVariants = cva(`
- `export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>`

## API Examples

### ButtonGroup.class

```vue
<ButtonGroup class="custom-class" />
```

### ButtonGroup.orientation

```vue
<ButtonGroup :orientation="example" />
```

### ButtonGroupSeparator.exampleProp

```vue
<ButtonGroupSeparator :example-prop="example" />
```

### ButtonGroupText.exampleProp

```vue
<ButtonGroupText :example-prop="example" />
```

### ButtonGroup slot: default

```vue
<ButtonGroup>Content</ButtonGroup>
```

### ButtonGroupText slot: default

```vue
<ButtonGroupText>Content</ButtonGroupText>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/button-group.json
```

