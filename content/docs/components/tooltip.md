---
title: Tooltip
description: Tooltip component documentation generated from source.
---

# Tooltip

Tooltip component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/tooltip.json
```

## Import

```ts
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
```

## Basic Usage

```vue
<Tooltip>
  Example content
</Tooltip>
```

## Components

- `Tooltip`
- `TooltipContent`
- `TooltipProvider`
- `TooltipTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Tooltip` | `props` | `TooltipRootProps` | `<Tooltip :example-prop="example" />` |
| `TooltipContent` | `props` | `TooltipContentProps & { class?: HTMLAttributes["class"] }` | `<TooltipContent :example-prop="example" />` |
| `TooltipProvider` | `props` | `TooltipProviderProps` | `<TooltipProvider :example-prop="example" />` |
| `TooltipTrigger` | `props` | `TooltipTriggerProps` | `<TooltipTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Tooltip` | `emits` | `TooltipRootEmits` | `<Tooltip @emits="emits" />` |
| `TooltipContent` | `emits` | `TooltipContentEmits` | `<TooltipContent @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Tooltip` | `default` | `<Tooltip>Content</Tooltip>` |
| `TooltipContent` | `default` | `<TooltipContent>Content</TooltipContent>` |
| `TooltipProvider` | `default` | `<TooltipProvider>Content</TooltipProvider>` |
| `TooltipTrigger` | `default` | `<TooltipTrigger>Content</TooltipTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### Tooltip.exampleProp

```vue
<Tooltip :example-prop="example" />
```

### TooltipContent.exampleProp

```vue
<TooltipContent :example-prop="example" />
```

### TooltipProvider.exampleProp

```vue
<TooltipProvider :example-prop="example" />
```

### TooltipTrigger.exampleProp

```vue
<TooltipTrigger :example-prop="example" />
```

### Tooltip.emits

```vue
<Tooltip @emits="emits" />
```

### TooltipContent.emits

```vue
<TooltipContent @emits="emits" />
```

### Tooltip slot: default

```vue
<Tooltip>Content</Tooltip>
```

### TooltipContent slot: default

```vue
<TooltipContent>Content</TooltipContent>
```

### TooltipProvider slot: default

```vue
<TooltipProvider>Content</TooltipProvider>
```

### TooltipTrigger slot: default

```vue
<TooltipTrigger>Content</TooltipTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/tooltip.json
```

