---
title: Dialog
description: Dialog component documentation generated from source.
---

# Dialog

Dialog component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/dialog.json
```

## Import

```ts
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogScrollContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
```

## Basic Usage

```vue
<Dialog>
  Example content
</Dialog>
```

## Components

- `Dialog`
- `DialogClose`
- `DialogContent`
- `DialogDescription`
- `DialogFooter`
- `DialogHeader`
- `DialogScrollContent`
- `DialogTitle`
- `DialogTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Dialog` | `props` | `DialogRootProps` | `<Dialog :example-prop="example" />` |
| `DialogClose` | `props` | `DialogCloseProps` | `<DialogClose :example-prop="example" />` |
| `DialogContent` | `props` | `DialogContentProps & { class?: HTMLAttributes["class"] }` | `<DialogContent :example-prop="example" />` |
| `DialogDescription` | `props` | `DialogDescriptionProps & { class?: HTMLAttributes["class"] }` | `<DialogDescription :example-prop="example" />` |
| `DialogFooter` | `class` | `HTMLAttributes["class"]` | `<DialogFooter class="custom-class" />` |
| `DialogHeader` | `class` | `HTMLAttributes["class"]` | `<DialogHeader class="custom-class" />` |
| `DialogScrollContent` | `props` | `DialogContentProps & { class?: HTMLAttributes["class"] }` | `<DialogScrollContent :example-prop="example" />` |
| `DialogTitle` | `props` | `DialogTitleProps & { class?: HTMLAttributes["class"] }` | `<DialogTitle :example-prop="example" />` |
| `DialogTrigger` | `props` | `DialogTriggerProps` | `<DialogTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Dialog` | `emits` | `DialogRootEmits` | `<Dialog @emits="emits" />` |
| `DialogContent` | `emits` | `DialogContentEmits` | `<DialogContent @emits="emits" />` |
| `DialogScrollContent` | `emits` | `DialogContentEmits` | `<DialogScrollContent @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Dialog` | `default` | `<Dialog>Content</Dialog>` |
| `DialogClose` | `default` | `<DialogClose>Content</DialogClose>` |
| `DialogContent` | `default` | `<DialogContent>Content</DialogContent>` |
| `DialogDescription` | `default` | `<DialogDescription>Content</DialogDescription>` |
| `DialogFooter` | `default` | `<DialogFooter>Content</DialogFooter>` |
| `DialogHeader` | `default` | `<DialogHeader>Content</DialogHeader>` |
| `DialogScrollContent` | `default` | `<DialogScrollContent>Content</DialogScrollContent>` |
| `DialogTitle` | `default` | `<DialogTitle>Content</DialogTitle>` |
| `DialogTrigger` | `default` | `<DialogTrigger>Content</DialogTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### Dialog.exampleProp

```vue
<Dialog :example-prop="example" />
```

### DialogClose.exampleProp

```vue
<DialogClose :example-prop="example" />
```

### DialogContent.exampleProp

```vue
<DialogContent :example-prop="example" />
```

### DialogDescription.exampleProp

```vue
<DialogDescription :example-prop="example" />
```

### DialogFooter.class

```vue
<DialogFooter class="custom-class" />
```

### DialogHeader.class

```vue
<DialogHeader class="custom-class" />
```

### DialogScrollContent.exampleProp

```vue
<DialogScrollContent :example-prop="example" />
```

### DialogTitle.exampleProp

```vue
<DialogTitle :example-prop="example" />
```

### DialogTrigger.exampleProp

```vue
<DialogTrigger :example-prop="example" />
```

### Dialog.emits

```vue
<Dialog @emits="emits" />
```

### DialogContent.emits

```vue
<DialogContent @emits="emits" />
```

### DialogScrollContent.emits

```vue
<DialogScrollContent @emits="emits" />
```

### Dialog slot: default

```vue
<Dialog>Content</Dialog>
```

### DialogClose slot: default

```vue
<DialogClose>Content</DialogClose>
```

### DialogContent slot: default

```vue
<DialogContent>Content</DialogContent>
```

### DialogDescription slot: default

```vue
<DialogDescription>Content</DialogDescription>
```

### DialogFooter slot: default

```vue
<DialogFooter>Content</DialogFooter>
```

### DialogHeader slot: default

```vue
<DialogHeader>Content</DialogHeader>
```

### DialogScrollContent slot: default

```vue
<DialogScrollContent>Content</DialogScrollContent>
```

### DialogTitle slot: default

```vue
<DialogTitle>Content</DialogTitle>
```

### DialogTrigger slot: default

```vue
<DialogTrigger>Content</DialogTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/dialog.json
```

