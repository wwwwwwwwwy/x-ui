---
title: Collapsible
description: Collapsible component documentation generated from source.
---

# Collapsible

Collapsible component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/collapsible.json
```

## Import

```ts
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
```

## Basic Usage

```vue
<Collapsible>
  Example content
</Collapsible>
```

## Components

- `Collapsible`
- `CollapsibleContent`
- `CollapsibleTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Collapsible` | `props` | `CollapsibleRootProps` | `<Collapsible :example-prop="example" />` |
| `CollapsibleContent` | `props` | `CollapsibleContentProps` | `<CollapsibleContent :example-prop="example" />` |
| `CollapsibleTrigger` | `props` | `CollapsibleTriggerProps` | `<CollapsibleTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Collapsible` | `emits` | `CollapsibleRootEmits` | `<Collapsible @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Collapsible` | `default` | `<Collapsible>Content</Collapsible>` |
| `CollapsibleContent` | `default` | `<CollapsibleContent>Content</CollapsibleContent>` |
| `CollapsibleTrigger` | `default` | `<CollapsibleTrigger>Content</CollapsibleTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### Collapsible.exampleProp

```vue
<Collapsible :example-prop="example" />
```

### CollapsibleContent.exampleProp

```vue
<CollapsibleContent :example-prop="example" />
```

### CollapsibleTrigger.exampleProp

```vue
<CollapsibleTrigger :example-prop="example" />
```

### Collapsible.emits

```vue
<Collapsible @emits="emits" />
```

### Collapsible slot: default

```vue
<Collapsible>Content</Collapsible>
```

### CollapsibleContent slot: default

```vue
<CollapsibleContent>Content</CollapsibleContent>
```

### CollapsibleTrigger slot: default

```vue
<CollapsibleTrigger>Content</CollapsibleTrigger>
```

## Dependencies

- `reka-ui`

## Registry

```txt
/r/collapsible.json
```

