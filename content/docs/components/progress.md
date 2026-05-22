---
title: Progress
description: Progress component documentation generated from source.
---

# Progress

Progress component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/progress.json
```

## Import

```ts
import { Progress } from '@/components/ui/progress'
```

## Basic Usage

```vue
<Progress>
  Example content
</Progress>
```

## Components

- `Progress`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Progress` | `props` | `ProgressRootProps & { class?: HTMLAttributes["class"] }` | `<Progress :example-prop="example" />` |

### Events

No explicit local events were found in source.

### Slots

No explicit local slots were found in source.

### Exports

No additional local API exports were found.

## API Examples

### Progress.exampleProp

```vue
<Progress :example-prop="example" />
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/progress.json
```

