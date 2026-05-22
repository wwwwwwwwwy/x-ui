---
title: InputGroup
description: InputGroup component documentation generated from source.
---

# InputGroup

InputGroup component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/input-group.json
```

## Import

```ts
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
```

## Basic Usage

```vue
<InputGroup>
  Example content
</InputGroup>
```

## Components

- `InputGroup`
- `InputGroupAddon`
- `InputGroupButton`
- `InputGroupInput`
- `InputGroupText`
- `InputGroupTextarea`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `InputGroup` | `class` | `HTMLAttributes["class"]` | `<InputGroup class="custom-class" />` |
| `InputGroupAddon` | `align` | `InputGroupVariants["align"]` | `<InputGroupAddon :align="example" />` |
| `InputGroupAddon` | `class` | `HTMLAttributes["class"]` | `<InputGroupAddon class="custom-class" />` |
| `InputGroupButton` | `props` | `InputGroupButtonProps` | `<InputGroupButton :example-prop="example" />` |
| `InputGroupInput` | `class` | `HTMLAttributes["class"]` | `<InputGroupInput class="custom-class" />` |
| `InputGroupText` | `class` | `HTMLAttributes["class"]` | `<InputGroupText class="custom-class" />` |
| `InputGroupTextarea` | `class` | `HTMLAttributes["class"]` | `<InputGroupTextarea class="custom-class" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `InputGroup` | `default` | `<InputGroup>Content</InputGroup>` |
| `InputGroupAddon` | `default` | `<InputGroupAddon>Content</InputGroupAddon>` |
| `InputGroupButton` | `default` | `<InputGroupButton>Content</InputGroupButton>` |
| `InputGroupText` | `default` | `<InputGroupText>Content</InputGroupText>` |

### Exports

- `export const inputGroupAddonVariants = cva(`
- `export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>`
- `export const inputGroupButtonVariants = cva(`
- `export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>`
- `export interface InputGroupButtonProps {`

## API Examples

### InputGroup.class

```vue
<InputGroup class="custom-class" />
```

### InputGroupAddon.align

```vue
<InputGroupAddon :align="example" />
```

### InputGroupAddon.class

```vue
<InputGroupAddon class="custom-class" />
```

### InputGroupButton.exampleProp

```vue
<InputGroupButton :example-prop="example" />
```

### InputGroupInput.class

```vue
<InputGroupInput class="custom-class" />
```

### InputGroupText.class

```vue
<InputGroupText class="custom-class" />
```

### InputGroupTextarea.class

```vue
<InputGroupTextarea class="custom-class" />
```

### InputGroup slot: default

```vue
<InputGroup>Content</InputGroup>
```

### InputGroupAddon slot: default

```vue
<InputGroupAddon>Content</InputGroupAddon>
```

### InputGroupButton slot: default

```vue
<InputGroupButton>Content</InputGroupButton>
```

### InputGroupText slot: default

```vue
<InputGroupText>Content</InputGroupText>
```

## Dependencies

No external runtime dependencies were detected in local component source.

## Registry

```txt
/r/input-group.json
```

