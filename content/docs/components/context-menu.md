---
title: ContextMenu
description: ContextMenu component documentation generated from source.
---

# ContextMenu

ContextMenu component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/context-menu.json
```

## Import

```ts
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '@/components/ui/context-menu'
```

## Basic Usage

```vue
<ContextMenu>
  Example content
</ContextMenu>
```

## Components

- `ContextMenu`
- `ContextMenuCheckboxItem`
- `ContextMenuContent`
- `ContextMenuGroup`
- `ContextMenuItem`
- `ContextMenuLabel`
- `ContextMenuRadioGroup`
- `ContextMenuRadioItem`
- `ContextMenuSeparator`
- `ContextMenuShortcut`
- `ContextMenuSub`
- `ContextMenuSubContent`
- `ContextMenuSubTrigger`
- `ContextMenuTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `ContextMenu` | `props` | `ContextMenuRootProps` | `<ContextMenu :example-prop="example" />` |
| `ContextMenuCheckboxItem` | `props` | `ContextMenuCheckboxItemProps & { class?: HTMLAttributes["class"] }` | `<ContextMenuCheckboxItem :example-prop="example" />` |
| `ContextMenuContent` | `props` | `ContextMenuContentProps & { class?: HTMLAttributes["class"] }` | `<ContextMenuContent :example-prop="example" />` |
| `ContextMenuGroup` | `props` | `ContextMenuGroupProps` | `<ContextMenuGroup :example-prop="example" />` |
| `ContextMenuItem` | `props` | `ContextMenuItemProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<ContextMenuItem :example-prop="true" />` |
| `ContextMenuLabel` | `props` | `ContextMenuLabelProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<ContextMenuLabel :example-prop="true" />` |
| `ContextMenuPortal` | `props` | `ContextMenuPortalProps` | `<ContextMenuPortal :example-prop="example" />` |
| `ContextMenuRadioGroup` | `props` | `ContextMenuRadioGroupProps` | `<ContextMenuRadioGroup :example-prop="example" />` |
| `ContextMenuRadioItem` | `props` | `ContextMenuRadioItemProps & { class?: HTMLAttributes["class"] }` | `<ContextMenuRadioItem :example-prop="example" />` |
| `ContextMenuSeparator` | `props` | `ContextMenuSeparatorProps & { class?: HTMLAttributes["class"] }` | `<ContextMenuSeparator :example-prop="example" />` |
| `ContextMenuShortcut` | `class` | `HTMLAttributes["class"]` | `<ContextMenuShortcut class="custom-class" />` |
| `ContextMenuSub` | `props` | `ContextMenuSubProps` | `<ContextMenuSub :example-prop="example" />` |
| `ContextMenuSubContent` | `props` | `DropdownMenuSubContentProps & { class?: HTMLAttributes["class"] }` | `<ContextMenuSubContent :example-prop="example" />` |
| `ContextMenuSubTrigger` | `props` | `ContextMenuSubTriggerProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<ContextMenuSubTrigger :example-prop="true" />` |
| `ContextMenuTrigger` | `props` | `ContextMenuTriggerProps` | `<ContextMenuTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `ContextMenu` | `emits` | `ContextMenuRootEmits` | `<ContextMenu @emits="emits" />` |
| `ContextMenuCheckboxItem` | `emits` | `ContextMenuCheckboxItemEmits` | `<ContextMenuCheckboxItem @emits="emits" />` |
| `ContextMenuContent` | `emits` | `ContextMenuContentEmits` | `<ContextMenuContent @emits="emits" />` |
| `ContextMenuItem` | `emits` | `ContextMenuItemEmits` | `<ContextMenuItem @emits="emits" />` |
| `ContextMenuRadioGroup` | `emits` | `ContextMenuRadioGroupEmits` | `<ContextMenuRadioGroup @emits="emits" />` |
| `ContextMenuRadioItem` | `emits` | `ContextMenuRadioItemEmits` | `<ContextMenuRadioItem @emits="emits" />` |
| `ContextMenuSub` | `emits` | `ContextMenuSubEmits` | `<ContextMenuSub @emits="emits" />` |
| `ContextMenuSubContent` | `emits` | `DropdownMenuSubContentEmits` | `<ContextMenuSubContent @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `ContextMenu` | `default` | `<ContextMenu>Content</ContextMenu>` |
| `ContextMenuCheckboxItem` | `default` | `<ContextMenuCheckboxItem>Content</ContextMenuCheckboxItem>` |
| `ContextMenuContent` | `default` | `<ContextMenuContent>Content</ContextMenuContent>` |
| `ContextMenuGroup` | `default` | `<ContextMenuGroup>Content</ContextMenuGroup>` |
| `ContextMenuItem` | `default` | `<ContextMenuItem>Content</ContextMenuItem>` |
| `ContextMenuLabel` | `default` | `<ContextMenuLabel>Content</ContextMenuLabel>` |
| `ContextMenuPortal` | `default` | `<ContextMenuPortal>Content</ContextMenuPortal>` |
| `ContextMenuRadioGroup` | `default` | `<ContextMenuRadioGroup>Content</ContextMenuRadioGroup>` |
| `ContextMenuRadioItem` | `default` | `<ContextMenuRadioItem>Content</ContextMenuRadioItem>` |
| `ContextMenuShortcut` | `default` | `<ContextMenuShortcut>Content</ContextMenuShortcut>` |
| `ContextMenuSub` | `default` | `<ContextMenuSub>Content</ContextMenuSub>` |
| `ContextMenuSubContent` | `default` | `<ContextMenuSubContent>Content</ContextMenuSubContent>` |
| `ContextMenuSubTrigger` | `default` | `<ContextMenuSubTrigger>Content</ContextMenuSubTrigger>` |
| `ContextMenuTrigger` | `default` | `<ContextMenuTrigger>Content</ContextMenuTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### ContextMenu.exampleProp

```vue
<ContextMenu :example-prop="example" />
```

### ContextMenuCheckboxItem.exampleProp

```vue
<ContextMenuCheckboxItem :example-prop="example" />
```

### ContextMenuContent.exampleProp

```vue
<ContextMenuContent :example-prop="example" />
```

### ContextMenuGroup.exampleProp

```vue
<ContextMenuGroup :example-prop="example" />
```

### ContextMenuItem.exampleProp

```vue
<ContextMenuItem :example-prop="true" />
```

### ContextMenuLabel.exampleProp

```vue
<ContextMenuLabel :example-prop="true" />
```

### ContextMenuPortal.exampleProp

```vue
<ContextMenuPortal :example-prop="example" />
```

### ContextMenuRadioGroup.exampleProp

```vue
<ContextMenuRadioGroup :example-prop="example" />
```

### ContextMenuRadioItem.exampleProp

```vue
<ContextMenuRadioItem :example-prop="example" />
```

### ContextMenuSeparator.exampleProp

```vue
<ContextMenuSeparator :example-prop="example" />
```

### ContextMenuShortcut.class

```vue
<ContextMenuShortcut class="custom-class" />
```

### ContextMenuSub.exampleProp

```vue
<ContextMenuSub :example-prop="example" />
```

### ContextMenuSubContent.exampleProp

```vue
<ContextMenuSubContent :example-prop="example" />
```

### ContextMenuSubTrigger.exampleProp

```vue
<ContextMenuSubTrigger :example-prop="true" />
```

### ContextMenuTrigger.exampleProp

```vue
<ContextMenuTrigger :example-prop="example" />
```

### ContextMenu.emits

```vue
<ContextMenu @emits="emits" />
```

### ContextMenuCheckboxItem.emits

```vue
<ContextMenuCheckboxItem @emits="emits" />
```

### ContextMenuContent.emits

```vue
<ContextMenuContent @emits="emits" />
```

### ContextMenuItem.emits

```vue
<ContextMenuItem @emits="emits" />
```

### ContextMenuRadioGroup.emits

```vue
<ContextMenuRadioGroup @emits="emits" />
```

### ContextMenuRadioItem.emits

```vue
<ContextMenuRadioItem @emits="emits" />
```

### ContextMenuSub.emits

```vue
<ContextMenuSub @emits="emits" />
```

### ContextMenuSubContent.emits

```vue
<ContextMenuSubContent @emits="emits" />
```

### ContextMenu slot: default

```vue
<ContextMenu>Content</ContextMenu>
```

### ContextMenuCheckboxItem slot: default

```vue
<ContextMenuCheckboxItem>Content</ContextMenuCheckboxItem>
```

### ContextMenuContent slot: default

```vue
<ContextMenuContent>Content</ContextMenuContent>
```

### ContextMenuGroup slot: default

```vue
<ContextMenuGroup>Content</ContextMenuGroup>
```

### ContextMenuItem slot: default

```vue
<ContextMenuItem>Content</ContextMenuItem>
```

### ContextMenuLabel slot: default

```vue
<ContextMenuLabel>Content</ContextMenuLabel>
```

### ContextMenuPortal slot: default

```vue
<ContextMenuPortal>Content</ContextMenuPortal>
```

### ContextMenuRadioGroup slot: default

```vue
<ContextMenuRadioGroup>Content</ContextMenuRadioGroup>
```

### ContextMenuRadioItem slot: default

```vue
<ContextMenuRadioItem>Content</ContextMenuRadioItem>
```

### ContextMenuShortcut slot: default

```vue
<ContextMenuShortcut>Content</ContextMenuShortcut>
```

### ContextMenuSub slot: default

```vue
<ContextMenuSub>Content</ContextMenuSub>
```

### ContextMenuSubContent slot: default

```vue
<ContextMenuSubContent>Content</ContextMenuSubContent>
```

### ContextMenuSubTrigger slot: default

```vue
<ContextMenuSubTrigger>Content</ContextMenuSubTrigger>
```

### ContextMenuTrigger slot: default

```vue
<ContextMenuTrigger>Content</ContextMenuTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/context-menu.json
```

