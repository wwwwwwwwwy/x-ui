---
title: NavigationMenu
description: NavigationMenu component documentation generated from source.
---

# NavigationMenu

NavigationMenu component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/navigation-menu.json
```

## Import

```ts
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from '@/components/ui/navigation-menu'
```

## Basic Usage

```vue
<NavigationMenu>
  Example content
</NavigationMenu>
```

## Components

- `NavigationMenu`
- `NavigationMenuContent`
- `NavigationMenuIndicator`
- `NavigationMenuItem`
- `NavigationMenuLink`
- `NavigationMenuList`
- `NavigationMenuTrigger`
- `NavigationMenuViewport`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `NavigationMenu` | `props` | `NavigationMenuRootProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenu :example-prop="example" />` |
| `NavigationMenuContent` | `props` | `NavigationMenuContentProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenuContent :example-prop="example" />` |
| `NavigationMenuIndicator` | `props` | `NavigationMenuIndicatorProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenuIndicator :example-prop="example" />` |
| `NavigationMenuItem` | `props` | `NavigationMenuItemProps` | `<NavigationMenuItem :example-prop="example" />` |
| `NavigationMenuLink` | `props` | `NavigationMenuLinkProps` | `<NavigationMenuLink :example-prop="example" />` |
| `NavigationMenuList` | `props` | `NavigationMenuListProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenuList :example-prop="example" />` |
| `NavigationMenuTrigger` | `props` | `NavigationMenuTriggerProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenuTrigger :example-prop="example" />` |
| `NavigationMenuViewport` | `props` | `NavigationMenuViewportProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenuViewport :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `NavigationMenu` | `emits` | `NavigationMenuRootEmits` | `<NavigationMenu @emits="emits" />` |
| `NavigationMenuContent` | `emits` | `NavigationMenuContentEmits` | `<NavigationMenuContent @emits="emits" />` |
| `NavigationMenuLink` | `emits` | `NavigationMenuLinkEmits` | `<NavigationMenuLink @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `NavigationMenu` | `default` | `<NavigationMenu>Content</NavigationMenu>` |
| `NavigationMenuContent` | `default` | `<NavigationMenuContent>Content</NavigationMenuContent>` |
| `NavigationMenuItem` | `default` | `<NavigationMenuItem>Content</NavigationMenuItem>` |
| `NavigationMenuLink` | `default` | `<NavigationMenuLink>Content</NavigationMenuLink>` |
| `NavigationMenuList` | `default` | `<NavigationMenuList>Content</NavigationMenuList>` |
| `NavigationMenuTrigger` | `default` | `<NavigationMenuTrigger>Content</NavigationMenuTrigger>` |

### Exports

- `export const navigationMenuTriggerStyle = cva(`

## API Examples

### NavigationMenu.exampleProp

```vue
<NavigationMenu :example-prop="example" />
```

### NavigationMenuContent.exampleProp

```vue
<NavigationMenuContent :example-prop="example" />
```

### NavigationMenuIndicator.exampleProp

```vue
<NavigationMenuIndicator :example-prop="example" />
```

### NavigationMenuItem.exampleProp

```vue
<NavigationMenuItem :example-prop="example" />
```

### NavigationMenuLink.exampleProp

```vue
<NavigationMenuLink :example-prop="example" />
```

### NavigationMenuList.exampleProp

```vue
<NavigationMenuList :example-prop="example" />
```

### NavigationMenuTrigger.exampleProp

```vue
<NavigationMenuTrigger :example-prop="example" />
```

### NavigationMenuViewport.exampleProp

```vue
<NavigationMenuViewport :example-prop="example" />
```

### NavigationMenu.emits

```vue
<NavigationMenu @emits="emits" />
```

### NavigationMenuContent.emits

```vue
<NavigationMenuContent @emits="emits" />
```

### NavigationMenuLink.emits

```vue
<NavigationMenuLink @emits="emits" />
```

### NavigationMenu slot: default

```vue
<NavigationMenu>Content</NavigationMenu>
```

### NavigationMenuContent slot: default

```vue
<NavigationMenuContent>Content</NavigationMenuContent>
```

### NavigationMenuItem slot: default

```vue
<NavigationMenuItem>Content</NavigationMenuItem>
```

### NavigationMenuLink slot: default

```vue
<NavigationMenuLink>Content</NavigationMenuLink>
```

### NavigationMenuList slot: default

```vue
<NavigationMenuList>Content</NavigationMenuList>
```

### NavigationMenuTrigger slot: default

```vue
<NavigationMenuTrigger>Content</NavigationMenuTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/navigation-menu.json
```

