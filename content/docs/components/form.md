---
title: FormControl
description: FormControl component documentation generated from source.
---

# FormControl

FormControl component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/form.json
```

## Import

```ts
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
```

## Basic Usage

```vue
<FormControl>
  Example content
</FormControl>
```

## Components

- `FormControl`
- `FormDescription`
- `FormItem`
- `FormLabel`
- `FormMessage`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `FormDescription` | `class` | `HTMLAttributes["class"]` | `<FormDescription class="custom-class" />` |
| `FormItem` | `class` | `HTMLAttributes["class"]` | `<FormItem class="custom-class" />` |
| `FormLabel` | `props` | `LabelProps & { class?: HTMLAttributes["class"] }` | `<FormLabel :example-prop="example" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `FormControl` | `default` | `<FormControl>Content</FormControl>` |
| `FormDescription` | `default` | `<FormDescription>Content</FormDescription>` |
| `FormItem` | `default` | `<FormItem>Content</FormItem>` |
| `FormLabel` | `default` | `<FormLabel>Content</FormLabel>` |

### Exports

- `export { FORM_ITEM_INJECTION_KEY } from "./injectionKeys"`
- `export { Form, Field as FormField } from "vee-validate"`

## API Examples

### FormDescription.class

```vue
<FormDescription class="custom-class" />
```

### FormItem.class

```vue
<FormItem class="custom-class" />
```

### FormLabel.exampleProp

```vue
<FormLabel :example-prop="example" />
```

### FormControl slot: default

```vue
<FormControl>Content</FormControl>
```

### FormDescription slot: default

```vue
<FormDescription>Content</FormDescription>
```

### FormItem slot: default

```vue
<FormItem>Content</FormItem>
```

### FormLabel slot: default

```vue
<FormLabel>Content</FormLabel>
```

## Dependencies

- `reka-ui`
- `vee-validate`

## Registry

```txt
/r/form.json
```

