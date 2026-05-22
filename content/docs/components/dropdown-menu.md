---
title: DropdownMenu
description: DropdownMenu component documentation generated from source.
---

# DropdownMenu

DropdownMenu component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/dropdown-menu.json
```

## Import

```ts
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
```

## Basic Usage

```vue
<DropdownMenu>
  Example content
</DropdownMenu>
```

## Components

- `DropdownMenu`
- `DropdownMenuCheckboxItem`
- `DropdownMenuContent`
- `DropdownMenuGroup`
- `DropdownMenuItem`
- `DropdownMenuLabel`
- `DropdownMenuRadioGroup`
- `DropdownMenuRadioItem`
- `DropdownMenuSeparator`
- `DropdownMenuShortcut`
- `DropdownMenuSub`
- `DropdownMenuSubContent`
- `DropdownMenuSubTrigger`
- `DropdownMenuTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `DropdownMenu` | `props` | `DropdownMenuRootProps` | `<DropdownMenu :example-prop="example" />` |
| `DropdownMenuCheckboxItem` | `props` | `DropdownMenuCheckboxItemProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuCheckboxItem :example-prop="example" />` |
| `DropdownMenuContent` | `props` | `DropdownMenuContentProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuContent :example-prop="example" />` |
| `DropdownMenuGroup` | `props` | `DropdownMenuGroupProps` | `<DropdownMenuGroup :example-prop="example" />` |
| `DropdownMenuItem` | `props` | `DropdownMenuItemProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<DropdownMenuItem :example-prop="true" />` |
| `DropdownMenuLabel` | `props` | `DropdownMenuLabelProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<DropdownMenuLabel :example-prop="true" />` |
| `DropdownMenuRadioGroup` | `props` | `DropdownMenuRadioGroupProps` | `<DropdownMenuRadioGroup :example-prop="example" />` |
| `DropdownMenuRadioItem` | `props` | `DropdownMenuRadioItemProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuRadioItem :example-prop="example" />` |
| `DropdownMenuSeparator` | `props` | `DropdownMenuSeparatorProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuSeparator :example-prop="example" />` |
| `DropdownMenuShortcut` | `class` | `HTMLAttributes["class"]` | `<DropdownMenuShortcut class="custom-class" />` |
| `DropdownMenuSub` | `props` | `DropdownMenuSubProps` | `<DropdownMenuSub :example-prop="example" />` |
| `DropdownMenuSubContent` | `props` | `DropdownMenuSubContentProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuSubContent :example-prop="example" />` |
| `DropdownMenuSubTrigger` | `props` | `DropdownMenuSubTriggerProps & { class?: HTMLAttributes["class"] }` | `<DropdownMenuSubTrigger :example-prop="example" />` |
| `DropdownMenuTrigger` | `props` | `DropdownMenuTriggerProps` | `<DropdownMenuTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `DropdownMenu` | `emits` | `DropdownMenuRootEmits` | `<DropdownMenu @emits="emits" />` |
| `DropdownMenuCheckboxItem` | `emits` | `DropdownMenuCheckboxItemEmits` | `<DropdownMenuCheckboxItem @emits="emits" />` |
| `DropdownMenuContent` | `emits` | `DropdownMenuContentEmits` | `<DropdownMenuContent @emits="emits" />` |
| `DropdownMenuRadioGroup` | `emits` | `DropdownMenuRadioGroupEmits` | `<DropdownMenuRadioGroup @emits="emits" />` |
| `DropdownMenuRadioItem` | `emits` | `DropdownMenuRadioItemEmits` | `<DropdownMenuRadioItem @emits="emits" />` |
| `DropdownMenuSub` | `emits` | `DropdownMenuSubEmits` | `<DropdownMenuSub @emits="emits" />` |
| `DropdownMenuSubContent` | `emits` | `DropdownMenuSubContentEmits` | `<DropdownMenuSubContent @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `DropdownMenu` | `default` | `<DropdownMenu>Content</DropdownMenu>` |
| `DropdownMenuCheckboxItem` | `default` | `<DropdownMenuCheckboxItem>Content</DropdownMenuCheckboxItem>` |
| `DropdownMenuContent` | `default` | `<DropdownMenuContent>Content</DropdownMenuContent>` |
| `DropdownMenuGroup` | `default` | `<DropdownMenuGroup>Content</DropdownMenuGroup>` |
| `DropdownMenuItem` | `default` | `<DropdownMenuItem>Content</DropdownMenuItem>` |
| `DropdownMenuLabel` | `default` | `<DropdownMenuLabel>Content</DropdownMenuLabel>` |
| `DropdownMenuRadioGroup` | `default` | `<DropdownMenuRadioGroup>Content</DropdownMenuRadioGroup>` |
| `DropdownMenuRadioItem` | `default` | `<DropdownMenuRadioItem>Content</DropdownMenuRadioItem>` |
| `DropdownMenuShortcut` | `default` | `<DropdownMenuShortcut>Content</DropdownMenuShortcut>` |
| `DropdownMenuSub` | `default` | `<DropdownMenuSub>Content</DropdownMenuSub>` |
| `DropdownMenuSubContent` | `default` | `<DropdownMenuSubContent>Content</DropdownMenuSubContent>` |
| `DropdownMenuSubTrigger` | `default` | `<DropdownMenuSubTrigger>Content</DropdownMenuSubTrigger>` |
| `DropdownMenuTrigger` | `default` | `<DropdownMenuTrigger>Content</DropdownMenuTrigger>` |

### Exports

- `export { DropdownMenuPortal } from "reka-ui"`

## API Examples

### DropdownMenu.exampleProp

```vue
<DropdownMenu :example-prop="example" />
```

### DropdownMenuCheckboxItem.exampleProp

```vue
<DropdownMenuCheckboxItem :example-prop="example" />
```

### DropdownMenuContent.exampleProp

```vue
<DropdownMenuContent :example-prop="example" />
```

### DropdownMenuGroup.exampleProp

```vue
<DropdownMenuGroup :example-prop="example" />
```

### DropdownMenuItem.exampleProp

```vue
<DropdownMenuItem :example-prop="true" />
```

### DropdownMenuLabel.exampleProp

```vue
<DropdownMenuLabel :example-prop="true" />
```

### DropdownMenuRadioGroup.exampleProp

```vue
<DropdownMenuRadioGroup :example-prop="example" />
```

### DropdownMenuRadioItem.exampleProp

```vue
<DropdownMenuRadioItem :example-prop="example" />
```

### DropdownMenuSeparator.exampleProp

```vue
<DropdownMenuSeparator :example-prop="example" />
```

### DropdownMenuShortcut.class

```vue
<DropdownMenuShortcut class="custom-class" />
```

### DropdownMenuSub.exampleProp

```vue
<DropdownMenuSub :example-prop="example" />
```

### DropdownMenuSubContent.exampleProp

```vue
<DropdownMenuSubContent :example-prop="example" />
```

### DropdownMenuSubTrigger.exampleProp

```vue
<DropdownMenuSubTrigger :example-prop="example" />
```

### DropdownMenuTrigger.exampleProp

```vue
<DropdownMenuTrigger :example-prop="example" />
```

### DropdownMenu.emits

```vue
<DropdownMenu @emits="emits" />
```

### DropdownMenuCheckboxItem.emits

```vue
<DropdownMenuCheckboxItem @emits="emits" />
```

### DropdownMenuContent.emits

```vue
<DropdownMenuContent @emits="emits" />
```

### DropdownMenuRadioGroup.emits

```vue
<DropdownMenuRadioGroup @emits="emits" />
```

### DropdownMenuRadioItem.emits

```vue
<DropdownMenuRadioItem @emits="emits" />
```

### DropdownMenuSub.emits

```vue
<DropdownMenuSub @emits="emits" />
```

### DropdownMenuSubContent.emits

```vue
<DropdownMenuSubContent @emits="emits" />
```

### DropdownMenu slot: default

```vue
<DropdownMenu>Content</DropdownMenu>
```

### DropdownMenuCheckboxItem slot: default

```vue
<DropdownMenuCheckboxItem>Content</DropdownMenuCheckboxItem>
```

### DropdownMenuContent slot: default

```vue
<DropdownMenuContent>Content</DropdownMenuContent>
```

### DropdownMenuGroup slot: default

```vue
<DropdownMenuGroup>Content</DropdownMenuGroup>
```

### DropdownMenuItem slot: default

```vue
<DropdownMenuItem>Content</DropdownMenuItem>
```

### DropdownMenuLabel slot: default

```vue
<DropdownMenuLabel>Content</DropdownMenuLabel>
```

### DropdownMenuRadioGroup slot: default

```vue
<DropdownMenuRadioGroup>Content</DropdownMenuRadioGroup>
```

### DropdownMenuRadioItem slot: default

```vue
<DropdownMenuRadioItem>Content</DropdownMenuRadioItem>
```

### DropdownMenuShortcut slot: default

```vue
<DropdownMenuShortcut>Content</DropdownMenuShortcut>
```

### DropdownMenuSub slot: default

```vue
<DropdownMenuSub>Content</DropdownMenuSub>
```

### DropdownMenuSubContent slot: default

```vue
<DropdownMenuSubContent>Content</DropdownMenuSubContent>
```

### DropdownMenuSubTrigger slot: default

```vue
<DropdownMenuSubTrigger>Content</DropdownMenuSubTrigger>
```

### DropdownMenuTrigger slot: default

```vue
<DropdownMenuTrigger>Content</DropdownMenuTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/dropdown-menu.json
```

