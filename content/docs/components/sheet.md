---
title: Sheet
description: Sheet component documentation generated from source.
---

# Sheet

Sheet component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/sheet.json
```

## Import

```ts
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
```

## Basic Usage

```vue
<Sheet>
  Example content
</Sheet>
```

## Components

- `Sheet`
- `SheetClose`
- `SheetContent`
- `SheetDescription`
- `SheetFooter`
- `SheetHeader`
- `SheetTitle`
- `SheetTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Sheet` | `props` | `DialogRootProps` | `<Sheet :example-prop="example" />` |
| `SheetClose` | `props` | `DialogCloseProps` | `<SheetClose :example-prop="example" />` |
| `SheetContent` | `props` | `SheetContentProps` | `<SheetContent :example-prop="example" />` |
| `SheetDescription` | `props` | `DialogDescriptionProps & { class?: HTMLAttributes["class"] }` | `<SheetDescription :example-prop="example" />` |
| `SheetFooter` | `class` | `HTMLAttributes["class"]` | `<SheetFooter class="custom-class" />` |
| `SheetHeader` | `class` | `HTMLAttributes["class"]` | `<SheetHeader class="custom-class" />` |
| `SheetTitle` | `props` | `DialogTitleProps & { class?: HTMLAttributes["class"] }` | `<SheetTitle :example-prop="example" />` |
| `SheetTrigger` | `props` | `DialogTriggerProps` | `<SheetTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Sheet` | `emits` | `DialogRootEmits` | `<Sheet @emits="emits" />` |
| `SheetContent` | `emits` | `DialogContentEmits` | `<SheetContent @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Sheet` | `default` | `<Sheet>Content</Sheet>` |
| `SheetClose` | `default` | `<SheetClose>Content</SheetClose>` |
| `SheetContent` | `default` | `<SheetContent>Content</SheetContent>` |
| `SheetDescription` | `default` | `<SheetDescription>Content</SheetDescription>` |
| `SheetFooter` | `default` | `<SheetFooter>Content</SheetFooter>` |
| `SheetHeader` | `default` | `<SheetHeader>Content</SheetHeader>` |
| `SheetTitle` | `default` | `<SheetTitle>Content</SheetTitle>` |
| `SheetTrigger` | `default` | `<SheetTrigger>Content</SheetTrigger>` |

### Exports

- `export const sheetVariants = cva(`
- `export type SheetVariants = VariantProps<typeof sheetVariants>`

## API Examples

### Sheet.exampleProp

```vue
<Sheet :example-prop="example" />
```

### SheetClose.exampleProp

```vue
<SheetClose :example-prop="example" />
```

### SheetContent.exampleProp

```vue
<SheetContent :example-prop="example" />
```

### SheetDescription.exampleProp

```vue
<SheetDescription :example-prop="example" />
```

### SheetFooter.class

```vue
<SheetFooter class="custom-class" />
```

### SheetHeader.class

```vue
<SheetHeader class="custom-class" />
```

### SheetTitle.exampleProp

```vue
<SheetTitle :example-prop="example" />
```

### SheetTrigger.exampleProp

```vue
<SheetTrigger :example-prop="example" />
```

### Sheet.emits

```vue
<Sheet @emits="emits" />
```

### SheetContent.emits

```vue
<SheetContent @emits="emits" />
```

### Sheet slot: default

```vue
<Sheet>Content</Sheet>
```

### SheetClose slot: default

```vue
<SheetClose>Content</SheetClose>
```

### SheetContent slot: default

```vue
<SheetContent>Content</SheetContent>
```

### SheetDescription slot: default

```vue
<SheetDescription>Content</SheetDescription>
```

### SheetFooter slot: default

```vue
<SheetFooter>Content</SheetFooter>
```

### SheetHeader slot: default

```vue
<SheetHeader>Content</SheetHeader>
```

### SheetTitle slot: default

```vue
<SheetTitle>Content</SheetTitle>
```

### SheetTrigger slot: default

```vue
<SheetTrigger>Content</SheetTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/sheet.json
```

