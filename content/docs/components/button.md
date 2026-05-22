---
title: Button
description: Button component documentation generated from source.
---

# Button

Button component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/button.json
```

## Import

```ts
import { Button } from '@/components/ui/button'
```

## Basic Usage

```vue
<Button>
  Example content
</Button>
```

## Components

- `Button`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Button` | `props` | `Props` | `<Button :example-prop="example" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Button` | `default` | `<Button>Content</Button>` |

### Exports

- `export const buttonVariants = cva(`
- `export type ButtonVariants = VariantProps<typeof buttonVariants>`

## API Examples

### Button.exampleProp

```vue
<Button :example-prop="example" />
```

### Button slot: default

```vue
<Button>Content</Button>
```

## Dependencies

- `reka-ui`

## Registry

```txt
/r/button.json
```

