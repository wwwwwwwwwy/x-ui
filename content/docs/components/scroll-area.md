---
title: ScrollArea
description: ScrollArea component documentation generated from source.
---

# ScrollArea

ScrollArea component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/scroll-area.json
```

## Import

```ts
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
```

## Basic Usage

```vue
<ScrollArea>
  Example content
</ScrollArea>
```

## Components

- `ScrollArea`
- `ScrollBar`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `ScrollArea` | `props` | `ScrollAreaRootProps & { class?: HTMLAttributes["class"] }` | `<ScrollArea :example-prop="example" />` |
| `ScrollBar` | `props` | `ScrollAreaScrollbarProps & { class?: HTMLAttributes["class"] }` | `<ScrollBar :example-prop="example" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `ScrollArea` | `default` | `<ScrollArea>Content</ScrollArea>` |

### Exports

No additional local API exports were found.

## API Examples

### ScrollArea.exampleProp

```vue
<ScrollArea :example-prop="example" />
```

### ScrollBar.exampleProp

```vue
<ScrollBar :example-prop="example" />
```

### ScrollArea slot: default

```vue
<ScrollArea>Content</ScrollArea>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/scroll-area.json
```

