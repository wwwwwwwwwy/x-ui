---
title: Toaster
description: Toaster component documentation generated from source.
---

# Toaster

Toaster component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/sonner.json
```

## Import

```ts
import { Toaster } from '@/components/ui/sonner'
```

## Basic Usage

```vue
<Toaster>
  Example content
</Toaster>
```

## Components

- `Toaster`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Sonner` | `props` | `ToasterProps` | `<Sonner :example-prop="example" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Sonner` | `success-icon` | `<Sonner> <template #success-icon>Custom success-icon</template> </Sonner>` |

### Exports

No additional local API exports were found.

## API Examples

### Sonner.exampleProp

```vue
<Sonner :example-prop="example" />
```

### Sonner slot: success-icon

```vue
<Sonner>
  <template #success-icon>Custom success-icon</template>
</Sonner>
```

## Dependencies

- `vue-sonner`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/sonner.json
```

