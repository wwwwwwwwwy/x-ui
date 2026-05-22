---
title: Field
description: Field component documentation generated from source.
---

# Field

Field component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/field.json
```

## Import

```ts
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from '@/components/ui/field'
```

## Basic Usage

```vue
<Field>
  Example content
</Field>
```

## Components

- `Field`
- `FieldContent`
- `FieldDescription`
- `FieldError`
- `FieldGroup`
- `FieldLabel`
- `FieldLegend`
- `FieldSeparator`
- `FieldSet`
- `FieldTitle`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Field` | `class` | `HTMLAttributes["class"]` | `<Field class="custom-class" />` |
| `Field` | `orientation` | `FieldVariants["orientation"]` | `<Field :orientation="example" />` |
| `FieldContent` | `class` | `HTMLAttributes["class"]` | `<FieldContent class="custom-class" />` |
| `FieldDescription` | `class` | `HTMLAttributes["class"]` | `<FieldDescription class="custom-class" />` |
| `FieldError` | `class` | `HTMLAttributes["class"]` | `<FieldError class="custom-class" />` |
| `FieldError` | `errors` | `Array<{ message?: string } \| undefined>` | `<FieldError :errors="example" />` |
| `FieldGroup` | `class` | `HTMLAttributes["class"]` | `<FieldGroup class="custom-class" />` |
| `FieldLabel` | `class` | `HTMLAttributes["class"]` | `<FieldLabel class="custom-class" />` |
| `FieldLegend` | `class` | `HTMLAttributes["class"]` | `<FieldLegend class="custom-class" />` |
| `FieldLegend` | `variant` | `"legend" \| "label"` | `<FieldLegend :variant="example" />` |
| `FieldSeparator` | `class` | `HTMLAttributes["class"]` | `<FieldSeparator class="custom-class" />` |
| `FieldSet` | `class` | `HTMLAttributes["class"]` | `<FieldSet class="custom-class" />` |
| `FieldTitle` | `class` | `HTMLAttributes["class"]` | `<FieldTitle class="custom-class" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Field` | `default` | `<Field>Content</Field>` |
| `FieldContent` | `default` | `<FieldContent>Content</FieldContent>` |
| `FieldDescription` | `default` | `<FieldDescription>Content</FieldDescription>` |
| `FieldError` | `default` | `<FieldError>Content</FieldError>` |
| `FieldGroup` | `default` | `<FieldGroup>Content</FieldGroup>` |
| `FieldLabel` | `default` | `<FieldLabel>Content</FieldLabel>` |
| `FieldLegend` | `default` | `<FieldLegend>Content</FieldLegend>` |
| `FieldSeparator` | `default` | `<FieldSeparator>Content</FieldSeparator>` |
| `FieldSet` | `default` | `<FieldSet>Content</FieldSet>` |
| `FieldTitle` | `default` | `<FieldTitle>Content</FieldTitle>` |

### Exports

- `export const fieldVariants = cva(`
- `export type FieldVariants = VariantProps<typeof fieldVariants>`

## API Examples

### Field.class

```vue
<Field class="custom-class" />
```

### Field.orientation

```vue
<Field :orientation="example" />
```

### FieldContent.class

```vue
<FieldContent class="custom-class" />
```

### FieldDescription.class

```vue
<FieldDescription class="custom-class" />
```

### FieldError.class

```vue
<FieldError class="custom-class" />
```

### FieldError.errors

```vue
<FieldError :errors="example" />
```

### FieldGroup.class

```vue
<FieldGroup class="custom-class" />
```

### FieldLabel.class

```vue
<FieldLabel class="custom-class" />
```

### FieldLegend.class

```vue
<FieldLegend class="custom-class" />
```

### FieldLegend.variant

```vue
<FieldLegend :variant="example" />
```

### FieldSeparator.class

```vue
<FieldSeparator class="custom-class" />
```

### FieldSet.class

```vue
<FieldSet class="custom-class" />
```

### FieldTitle.class

```vue
<FieldTitle class="custom-class" />
```

### Field slot: default

```vue
<Field>Content</Field>
```

### FieldContent slot: default

```vue
<FieldContent>Content</FieldContent>
```

### FieldDescription slot: default

```vue
<FieldDescription>Content</FieldDescription>
```

### FieldError slot: default

```vue
<FieldError>Content</FieldError>
```

### FieldGroup slot: default

```vue
<FieldGroup>Content</FieldGroup>
```

### FieldLabel slot: default

```vue
<FieldLabel>Content</FieldLabel>
```

### FieldLegend slot: default

```vue
<FieldLegend>Content</FieldLegend>
```

### FieldSeparator slot: default

```vue
<FieldSeparator>Content</FieldSeparator>
```

### FieldSet slot: default

```vue
<FieldSet>Content</FieldSet>
```

### FieldTitle slot: default

```vue
<FieldTitle>Content</FieldTitle>
```

## Dependencies

No external runtime dependencies were detected in local component source.

## Registry

```txt
/r/field.json
```

