---
title: Switch
description: Switch component documentation generated from source.
---

# Switch

Switch component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/switch.json
```

## Import

```ts
import { Switch } from '@/components/ui/switch'
```

## Basic Usage

```vue
<Switch>
  Example content
</Switch>
```

## Components

- `Switch`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Switch` | `props` | `SwitchRootProps & { class?: HTMLAttributes["class"] }` | `<Switch :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Switch` | `emits` | `SwitchRootEmits` | `<Switch @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Switch` | `thumb` | `<Switch> <template #thumb>Custom thumb</template> </Switch>` |

### Exports

No additional local API exports were found.

## API Examples

### Switch.exampleProp

```vue
<Switch :example-prop="example" />
```

### Switch.emits

```vue
<Switch @emits="emits" />
```

### Switch slot: thumb

```vue
<Switch>
  <template #thumb>Custom thumb</template>
</Switch>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/switch.json
```

