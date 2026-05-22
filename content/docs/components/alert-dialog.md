---
title: AlertDialog
description: AlertDialog component documentation generated from source.
---

# AlertDialog

AlertDialog component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/alert-dialog.json
```

## Import

```ts
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
```

## Basic Usage

```vue
<AlertDialog>
  Example content
</AlertDialog>
```

## Components

- `AlertDialog`
- `AlertDialogAction`
- `AlertDialogCancel`
- `AlertDialogContent`
- `AlertDialogDescription`
- `AlertDialogFooter`
- `AlertDialogHeader`
- `AlertDialogTitle`
- `AlertDialogTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `AlertDialog` | `props` | `AlertDialogProps` | `<AlertDialog :example-prop="example" />` |
| `AlertDialogAction` | `props` | `AlertDialogActionProps & { class?: HTMLAttributes["class"] }` | `<AlertDialogAction :example-prop="example" />` |
| `AlertDialogCancel` | `props` | `AlertDialogCancelProps & { class?: HTMLAttributes["class"] }` | `<AlertDialogCancel :example-prop="example" />` |
| `AlertDialogContent` | `props` | `AlertDialogContentProps & { class?: HTMLAttributes["class"] }` | `<AlertDialogContent :example-prop="example" />` |
| `AlertDialogDescription` | `props` | `AlertDialogDescriptionProps & { class?: HTMLAttributes["class"] }` | `<AlertDialogDescription :example-prop="example" />` |
| `AlertDialogFooter` | `class` | `HTMLAttributes["class"]` | `<AlertDialogFooter class="custom-class" />` |
| `AlertDialogHeader` | `class` | `HTMLAttributes["class"]` | `<AlertDialogHeader class="custom-class" />` |
| `AlertDialogTitle` | `props` | `AlertDialogTitleProps & { class?: HTMLAttributes["class"] }` | `<AlertDialogTitle :example-prop="example" />` |
| `AlertDialogTrigger` | `props` | `AlertDialogTriggerProps` | `<AlertDialogTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `AlertDialog` | `emits` | `AlertDialogEmits` | `<AlertDialog @emits="emits" />` |
| `AlertDialogContent` | `emits` | `AlertDialogContentEmits` | `<AlertDialogContent @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `AlertDialog` | `default` | `<AlertDialog>Content</AlertDialog>` |
| `AlertDialogAction` | `default` | `<AlertDialogAction>Content</AlertDialogAction>` |
| `AlertDialogCancel` | `default` | `<AlertDialogCancel>Content</AlertDialogCancel>` |
| `AlertDialogContent` | `default` | `<AlertDialogContent>Content</AlertDialogContent>` |
| `AlertDialogDescription` | `default` | `<AlertDialogDescription>Content</AlertDialogDescription>` |
| `AlertDialogFooter` | `default` | `<AlertDialogFooter>Content</AlertDialogFooter>` |
| `AlertDialogHeader` | `default` | `<AlertDialogHeader>Content</AlertDialogHeader>` |
| `AlertDialogTitle` | `default` | `<AlertDialogTitle>Content</AlertDialogTitle>` |
| `AlertDialogTrigger` | `default` | `<AlertDialogTrigger>Content</AlertDialogTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### AlertDialog.exampleProp

```vue
<AlertDialog :example-prop="example" />
```

### AlertDialogAction.exampleProp

```vue
<AlertDialogAction :example-prop="example" />
```

### AlertDialogCancel.exampleProp

```vue
<AlertDialogCancel :example-prop="example" />
```

### AlertDialogContent.exampleProp

```vue
<AlertDialogContent :example-prop="example" />
```

### AlertDialogDescription.exampleProp

```vue
<AlertDialogDescription :example-prop="example" />
```

### AlertDialogFooter.class

```vue
<AlertDialogFooter class="custom-class" />
```

### AlertDialogHeader.class

```vue
<AlertDialogHeader class="custom-class" />
```

### AlertDialogTitle.exampleProp

```vue
<AlertDialogTitle :example-prop="example" />
```

### AlertDialogTrigger.exampleProp

```vue
<AlertDialogTrigger :example-prop="example" />
```

### AlertDialog.emits

```vue
<AlertDialog @emits="emits" />
```

### AlertDialogContent.emits

```vue
<AlertDialogContent @emits="emits" />
```

### AlertDialog slot: default

```vue
<AlertDialog>Content</AlertDialog>
```

### AlertDialogAction slot: default

```vue
<AlertDialogAction>Content</AlertDialogAction>
```

### AlertDialogCancel slot: default

```vue
<AlertDialogCancel>Content</AlertDialogCancel>
```

### AlertDialogContent slot: default

```vue
<AlertDialogContent>Content</AlertDialogContent>
```

### AlertDialogDescription slot: default

```vue
<AlertDialogDescription>Content</AlertDialogDescription>
```

### AlertDialogFooter slot: default

```vue
<AlertDialogFooter>Content</AlertDialogFooter>
```

### AlertDialogHeader slot: default

```vue
<AlertDialogHeader>Content</AlertDialogHeader>
```

### AlertDialogTitle slot: default

```vue
<AlertDialogTitle>Content</AlertDialogTitle>
```

### AlertDialogTrigger slot: default

```vue
<AlertDialogTrigger>Content</AlertDialogTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/alert-dialog.json
```

