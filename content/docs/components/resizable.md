---
title: ResizableHandle
description: ResizableHandle component documentation generated from source.
---

# ResizableHandle

ResizableHandle component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/resizable.json
```

## Import

```ts
import { ResizableHandle, ResizablePanelGroup } from '@/components/ui/resizable'
```

## Basic Usage

```vue
<ResizableHandle>
  Example content
</ResizableHandle>
```

## Components

- `ResizableHandle`
- `ResizablePanelGroup`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `ResizableHandle` | `props` | `SplitterResizeHandleProps & { class?: HTMLAttributes["class"], withHandle?: boolean }` | `<ResizableHandle :example-prop="true" />` |
| `ResizablePanelGroup` | `props` | `SplitterGroupProps & { class?: HTMLAttributes["class"] }` | `<ResizablePanelGroup :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `ResizableHandle` | `emits` | `SplitterResizeHandleEmits` | `<ResizableHandle @emits="emits" />` |
| `ResizablePanelGroup` | `emits` | `SplitterGroupEmits` | `<ResizablePanelGroup @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `ResizablePanelGroup` | `default` | `<ResizablePanelGroup>Content</ResizablePanelGroup>` |

### Exports

- `export { SplitterPanel as ResizablePanel } from "reka-ui"`

## API Examples

### ResizableHandle.exampleProp

```vue
<ResizableHandle :example-prop="true" />
```

### ResizablePanelGroup.exampleProp

```vue
<ResizablePanelGroup :example-prop="example" />
```

### ResizableHandle.emits

```vue
<ResizableHandle @emits="emits" />
```

### ResizablePanelGroup.emits

```vue
<ResizablePanelGroup @emits="emits" />
```

### ResizablePanelGroup slot: default

```vue
<ResizablePanelGroup>Content</ResizablePanelGroup>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/resizable.json
```

