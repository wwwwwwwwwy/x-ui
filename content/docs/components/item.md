---
title: Item
description: Item component documentation generated from source.
---

# Item

Item component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/item.json
```

## Import

```ts
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle } from '@/components/ui/item'
```

## Basic Usage

```vue
<Item>
  Example content
</Item>
```

## Components

- `Item`
- `ItemActions`
- `ItemContent`
- `ItemDescription`
- `ItemFooter`
- `ItemGroup`
- `ItemHeader`
- `ItemMedia`
- `ItemSeparator`
- `ItemTitle`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Item` | `props` | `PrimitiveProps & { class?: HTMLAttributes["class"] variant?: ItemVariants["variant"] size?: ItemVariants["size"] }` | `<Item :example-prop="example" />` |
| `ItemActions` | `class` | `HTMLAttributes["class"]` | `<ItemActions class="custom-class" />` |
| `ItemContent` | `class` | `HTMLAttributes["class"]` | `<ItemContent class="custom-class" />` |
| `ItemDescription` | `class` | `HTMLAttributes["class"]` | `<ItemDescription class="custom-class" />` |
| `ItemFooter` | `class` | `HTMLAttributes["class"]` | `<ItemFooter class="custom-class" />` |
| `ItemGroup` | `class` | `HTMLAttributes["class"]` | `<ItemGroup class="custom-class" />` |
| `ItemHeader` | `class` | `HTMLAttributes["class"]` | `<ItemHeader class="custom-class" />` |
| `ItemMedia` | `class` | `HTMLAttributes["class"]` | `<ItemMedia class="custom-class" />` |
| `ItemMedia` | `variant` | `ItemMediaVariants["variant"]` | `<ItemMedia :variant="example" />` |
| `ItemSeparator` | `props` | `SeparatorProps & { class?: HTMLAttributes["class"] }` | `<ItemSeparator :example-prop="example" />` |
| `ItemTitle` | `class` | `HTMLAttributes["class"]` | `<ItemTitle class="custom-class" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Item` | `default` | `<Item>Content</Item>` |
| `ItemActions` | `default` | `<ItemActions>Content</ItemActions>` |
| `ItemContent` | `default` | `<ItemContent>Content</ItemContent>` |
| `ItemDescription` | `default` | `<ItemDescription>Content</ItemDescription>` |
| `ItemFooter` | `default` | `<ItemFooter>Content</ItemFooter>` |
| `ItemGroup` | `default` | `<ItemGroup>Content</ItemGroup>` |
| `ItemHeader` | `default` | `<ItemHeader>Content</ItemHeader>` |
| `ItemMedia` | `default` | `<ItemMedia>Content</ItemMedia>` |
| `ItemTitle` | `default` | `<ItemTitle>Content</ItemTitle>` |

### Exports

- `export const itemVariants = cva(`
- `export const itemMediaVariants = cva(`
- `export type ItemVariants = VariantProps<typeof itemVariants>`
- `export type ItemMediaVariants = VariantProps<typeof itemMediaVariants>`

## API Examples

### Item.exampleProp

```vue
<Item :example-prop="example" />
```

### ItemActions.class

```vue
<ItemActions class="custom-class" />
```

### ItemContent.class

```vue
<ItemContent class="custom-class" />
```

### ItemDescription.class

```vue
<ItemDescription class="custom-class" />
```

### ItemFooter.class

```vue
<ItemFooter class="custom-class" />
```

### ItemGroup.class

```vue
<ItemGroup class="custom-class" />
```

### ItemHeader.class

```vue
<ItemHeader class="custom-class" />
```

### ItemMedia.class

```vue
<ItemMedia class="custom-class" />
```

### ItemMedia.variant

```vue
<ItemMedia :variant="example" />
```

### ItemSeparator.exampleProp

```vue
<ItemSeparator :example-prop="example" />
```

### ItemTitle.class

```vue
<ItemTitle class="custom-class" />
```

### Item slot: default

```vue
<Item>Content</Item>
```

### ItemActions slot: default

```vue
<ItemActions>Content</ItemActions>
```

### ItemContent slot: default

```vue
<ItemContent>Content</ItemContent>
```

### ItemDescription slot: default

```vue
<ItemDescription>Content</ItemDescription>
```

### ItemFooter slot: default

```vue
<ItemFooter>Content</ItemFooter>
```

### ItemGroup slot: default

```vue
<ItemGroup>Content</ItemGroup>
```

### ItemHeader slot: default

```vue
<ItemHeader>Content</ItemHeader>
```

### ItemMedia slot: default

```vue
<ItemMedia>Content</ItemMedia>
```

### ItemTitle slot: default

```vue
<ItemTitle>Content</ItemTitle>
```

## Dependencies

- `reka-ui`

## Registry

```txt
/r/item.json
```

