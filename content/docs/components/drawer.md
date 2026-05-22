---
title: Drawer
description: Drawer component documentation generated from source.
---

# Drawer

Drawer component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/drawer.json
```

## Import

```ts
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerTitle } from '@/components/ui/drawer'
```

## Basic Usage

```vue
<Drawer>
  Example content
</Drawer>
```

## Components

- `Drawer`
- `DrawerContent`
- `DrawerDescription`
- `DrawerFooter`
- `DrawerHeader`
- `DrawerOverlay`
- `DrawerTitle`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Drawer` | `props` | `DrawerRootProps` | `<Drawer :example-prop="example" />` |
| `DrawerContent` | `props` | `DialogContentProps & { class?: HTMLAttributes["class"] }` | `<DrawerContent :example-prop="example" />` |
| `DrawerDescription` | `props` | `DrawerDescriptionProps & { class?: HTMLAttributes["class"] }` | `<DrawerDescription :example-prop="example" />` |
| `DrawerFooter` | `class` | `HTMLAttributes["class"]` | `<DrawerFooter class="custom-class" />` |
| `DrawerHeader` | `class` | `HTMLAttributes["class"]` | `<DrawerHeader class="custom-class" />` |
| `DrawerOverlay` | `props` | `DialogOverlayProps & { class?: HTMLAttributes["class"] }` | `<DrawerOverlay :example-prop="example" />` |
| `DrawerTitle` | `props` | `DrawerTitleProps & { class?: HTMLAttributes["class"] }` | `<DrawerTitle :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Drawer` | `emits` | `DrawerRootEmits` | `<Drawer @emits="emits" />` |
| `DrawerContent` | `emits` | `DialogContentEmits` | `<DrawerContent @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Drawer` | `default` | `<Drawer>Content</Drawer>` |
| `DrawerContent` | `default` | `<DrawerContent>Content</DrawerContent>` |
| `DrawerDescription` | `default` | `<DrawerDescription>Content</DrawerDescription>` |
| `DrawerFooter` | `default` | `<DrawerFooter>Content</DrawerFooter>` |
| `DrawerHeader` | `default` | `<DrawerHeader>Content</DrawerHeader>` |
| `DrawerTitle` | `default` | `<DrawerTitle>Content</DrawerTitle>` |

### Exports

- `export { DrawerClose, DrawerPortal, DrawerTrigger } from "vaul-vue"`

## API Examples

### Drawer.exampleProp

```vue
<Drawer :example-prop="example" />
```

### DrawerContent.exampleProp

```vue
<DrawerContent :example-prop="example" />
```

### DrawerDescription.exampleProp

```vue
<DrawerDescription :example-prop="example" />
```

### DrawerFooter.class

```vue
<DrawerFooter class="custom-class" />
```

### DrawerHeader.class

```vue
<DrawerHeader class="custom-class" />
```

### DrawerOverlay.exampleProp

```vue
<DrawerOverlay :example-prop="example" />
```

### DrawerTitle.exampleProp

```vue
<DrawerTitle :example-prop="example" />
```

### Drawer.emits

```vue
<Drawer @emits="emits" />
```

### DrawerContent.emits

```vue
<DrawerContent @emits="emits" />
```

### Drawer slot: default

```vue
<Drawer>Content</Drawer>
```

### DrawerContent slot: default

```vue
<DrawerContent>Content</DrawerContent>
```

### DrawerDescription slot: default

```vue
<DrawerDescription>Content</DrawerDescription>
```

### DrawerFooter slot: default

```vue
<DrawerFooter>Content</DrawerFooter>
```

### DrawerHeader slot: default

```vue
<DrawerHeader>Content</DrawerHeader>
```

### DrawerTitle slot: default

```vue
<DrawerTitle>Content</DrawerTitle>
```

## Dependencies

- `vaul-vue`
- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/drawer.json
```

