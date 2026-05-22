---
title: Menubar
description: Menubar component documentation generated from source.
---

# Menubar

Menubar component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/menubar.json
```

## Import

```ts
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar'
```

## Basic Usage

```vue
<Menubar>
  Example content
</Menubar>
```

## Components

- `Menubar`
- `MenubarCheckboxItem`
- `MenubarContent`
- `MenubarGroup`
- `MenubarItem`
- `MenubarLabel`
- `MenubarMenu`
- `MenubarRadioGroup`
- `MenubarRadioItem`
- `MenubarSeparator`
- `MenubarShortcut`
- `MenubarSub`
- `MenubarSubContent`
- `MenubarSubTrigger`
- `MenubarTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Menubar` | `props` | `MenubarRootProps & { class?: HTMLAttributes["class"] }` | `<Menubar :example-prop="example" />` |
| `MenubarCheckboxItem` | `props` | `MenubarCheckboxItemProps & { class?: HTMLAttributes["class"] }` | `<MenubarCheckboxItem :example-prop="example" />` |
| `MenubarContent` | `props` | `MenubarContentProps & { class?: HTMLAttributes["class"] }` | `<MenubarContent :example-prop="example" />` |
| `MenubarGroup` | `props` | `MenubarGroupProps` | `<MenubarGroup :example-prop="example" />` |
| `MenubarItem` | `props` | `MenubarItemProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<MenubarItem :example-prop="true" />` |
| `MenubarLabel` | `props` | `MenubarLabelProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<MenubarLabel :example-prop="true" />` |
| `MenubarMenu` | `props` | `MenubarMenuProps` | `<MenubarMenu :example-prop="example" />` |
| `MenubarRadioGroup` | `props` | `MenubarRadioGroupProps` | `<MenubarRadioGroup :example-prop="example" />` |
| `MenubarRadioItem` | `props` | `MenubarRadioItemProps & { class?: HTMLAttributes["class"] }` | `<MenubarRadioItem :example-prop="example" />` |
| `MenubarSeparator` | `props` | `MenubarSeparatorProps & { class?: HTMLAttributes["class"] }` | `<MenubarSeparator :example-prop="example" />` |
| `MenubarShortcut` | `class` | `HTMLAttributes["class"]` | `<MenubarShortcut class="custom-class" />` |
| `MenubarSub` | `props` | `MenubarSubRootProps` | `<MenubarSub :example-prop="example" />` |
| `MenubarSubContent` | `props` | `MenubarSubContentProps & { class?: HTMLAttributes["class"] }` | `<MenubarSubContent :example-prop="example" />` |
| `MenubarSubTrigger` | `props` | `MenubarSubTriggerProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<MenubarSubTrigger :example-prop="true" />` |
| `MenubarTrigger` | `props` | `MenubarTriggerProps & { class?: HTMLAttributes["class"] }` | `<MenubarTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Menubar` | `emits` | `MenubarRootEmits` | `<Menubar @emits="emits" />` |
| `MenubarCheckboxItem` | `emits` | `MenubarCheckboxItemEmits` | `<MenubarCheckboxItem @emits="emits" />` |
| `MenubarItem` | `emits` | `MenubarItemEmits` | `<MenubarItem @emits="emits" />` |
| `MenubarRadioGroup` | `emits` | `MenubarRadioGroupEmits` | `<MenubarRadioGroup @emits="emits" />` |
| `MenubarRadioItem` | `emits` | `MenubarRadioItemEmits` | `<MenubarRadioItem @emits="emits" />` |
| `MenubarSub` | `emits` | `MenubarSubEmits` | `<MenubarSub @emits="emits" />` |
| `MenubarSubContent` | `emits` | `MenubarSubContentEmits` | `<MenubarSubContent @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Menubar` | `default` | `<Menubar>Content</Menubar>` |
| `MenubarCheckboxItem` | `default` | `<MenubarCheckboxItem>Content</MenubarCheckboxItem>` |
| `MenubarContent` | `default` | `<MenubarContent>Content</MenubarContent>` |
| `MenubarGroup` | `default` | `<MenubarGroup>Content</MenubarGroup>` |
| `MenubarItem` | `default` | `<MenubarItem>Content</MenubarItem>` |
| `MenubarLabel` | `default` | `<MenubarLabel>Content</MenubarLabel>` |
| `MenubarMenu` | `default` | `<MenubarMenu>Content</MenubarMenu>` |
| `MenubarRadioGroup` | `default` | `<MenubarRadioGroup>Content</MenubarRadioGroup>` |
| `MenubarRadioItem` | `default` | `<MenubarRadioItem>Content</MenubarRadioItem>` |
| `MenubarShortcut` | `default` | `<MenubarShortcut>Content</MenubarShortcut>` |
| `MenubarSub` | `default` | `<MenubarSub>Content</MenubarSub>` |
| `MenubarSubContent` | `default` | `<MenubarSubContent>Content</MenubarSubContent>` |
| `MenubarSubTrigger` | `default` | `<MenubarSubTrigger>Content</MenubarSubTrigger>` |
| `MenubarTrigger` | `default` | `<MenubarTrigger>Content</MenubarTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### Menubar.exampleProp

```vue
<Menubar :example-prop="example" />
```

### MenubarCheckboxItem.exampleProp

```vue
<MenubarCheckboxItem :example-prop="example" />
```

### MenubarContent.exampleProp

```vue
<MenubarContent :example-prop="example" />
```

### MenubarGroup.exampleProp

```vue
<MenubarGroup :example-prop="example" />
```

### MenubarItem.exampleProp

```vue
<MenubarItem :example-prop="true" />
```

### MenubarLabel.exampleProp

```vue
<MenubarLabel :example-prop="true" />
```

### MenubarMenu.exampleProp

```vue
<MenubarMenu :example-prop="example" />
```

### MenubarRadioGroup.exampleProp

```vue
<MenubarRadioGroup :example-prop="example" />
```

### MenubarRadioItem.exampleProp

```vue
<MenubarRadioItem :example-prop="example" />
```

### MenubarSeparator.exampleProp

```vue
<MenubarSeparator :example-prop="example" />
```

### MenubarShortcut.class

```vue
<MenubarShortcut class="custom-class" />
```

### MenubarSub.exampleProp

```vue
<MenubarSub :example-prop="example" />
```

### MenubarSubContent.exampleProp

```vue
<MenubarSubContent :example-prop="example" />
```

### MenubarSubTrigger.exampleProp

```vue
<MenubarSubTrigger :example-prop="true" />
```

### MenubarTrigger.exampleProp

```vue
<MenubarTrigger :example-prop="example" />
```

### Menubar.emits

```vue
<Menubar @emits="emits" />
```

### MenubarCheckboxItem.emits

```vue
<MenubarCheckboxItem @emits="emits" />
```

### MenubarItem.emits

```vue
<MenubarItem @emits="emits" />
```

### MenubarRadioGroup.emits

```vue
<MenubarRadioGroup @emits="emits" />
```

### MenubarRadioItem.emits

```vue
<MenubarRadioItem @emits="emits" />
```

### MenubarSub.emits

```vue
<MenubarSub @emits="emits" />
```

### MenubarSubContent.emits

```vue
<MenubarSubContent @emits="emits" />
```

### Menubar slot: default

```vue
<Menubar>Content</Menubar>
```

### MenubarCheckboxItem slot: default

```vue
<MenubarCheckboxItem>Content</MenubarCheckboxItem>
```

### MenubarContent slot: default

```vue
<MenubarContent>Content</MenubarContent>
```

### MenubarGroup slot: default

```vue
<MenubarGroup>Content</MenubarGroup>
```

### MenubarItem slot: default

```vue
<MenubarItem>Content</MenubarItem>
```

### MenubarLabel slot: default

```vue
<MenubarLabel>Content</MenubarLabel>
```

### MenubarMenu slot: default

```vue
<MenubarMenu>Content</MenubarMenu>
```

### MenubarRadioGroup slot: default

```vue
<MenubarRadioGroup>Content</MenubarRadioGroup>
```

### MenubarRadioItem slot: default

```vue
<MenubarRadioItem>Content</MenubarRadioItem>
```

### MenubarShortcut slot: default

```vue
<MenubarShortcut>Content</MenubarShortcut>
```

### MenubarSub slot: default

```vue
<MenubarSub>Content</MenubarSub>
```

### MenubarSubContent slot: default

```vue
<MenubarSubContent>Content</MenubarSubContent>
```

### MenubarSubTrigger slot: default

```vue
<MenubarSubTrigger>Content</MenubarSubTrigger>
```

### MenubarTrigger slot: default

```vue
<MenubarTrigger>Content</MenubarTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/menubar.json
```

