---
title: HoverCard
description: HoverCard component documentation generated from source.
---

# HoverCard

HoverCard component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/hover-card.json
```

## Import

```ts
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
```

## Basic Usage

```vue
<HoverCard>
  Example content
</HoverCard>
```

## Components

- `HoverCard`
- `HoverCardContent`
- `HoverCardTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `HoverCard` | `props` | `HoverCardRootProps` | `<HoverCard :example-prop="example" />` |
| `HoverCardContent` | `props` | `HoverCardContentProps & { class?: HTMLAttributes["class"] }` | `<HoverCardContent :example-prop="example" />` |
| `HoverCardTrigger` | `props` | `HoverCardTriggerProps` | `<HoverCardTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `HoverCard` | `emits` | `HoverCardRootEmits` | `<HoverCard @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `HoverCard` | `default` | `<HoverCard>Content</HoverCard>` |
| `HoverCardContent` | `default` | `<HoverCardContent>Content</HoverCardContent>` |
| `HoverCardTrigger` | `default` | `<HoverCardTrigger>Content</HoverCardTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### HoverCard.exampleProp

```vue
<HoverCard :example-prop="example" />
```

### HoverCardContent.exampleProp

```vue
<HoverCardContent :example-prop="example" />
```

### HoverCardTrigger.exampleProp

```vue
<HoverCardTrigger :example-prop="example" />
```

### HoverCard.emits

```vue
<HoverCard @emits="emits" />
```

### HoverCard slot: default

```vue
<HoverCard>Content</HoverCard>
```

### HoverCardContent slot: default

```vue
<HoverCardContent>Content</HoverCardContent>
```

### HoverCardTrigger slot: default

```vue
<HoverCardTrigger>Content</HoverCardTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/hover-card.json
```

