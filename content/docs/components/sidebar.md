---
title: Sidebar
description: Sidebar component documentation generated from source.
---

# Sidebar

Sidebar component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/sidebar.json
```

## Import

```ts
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger } from '@/components/ui/sidebar'
```

## Basic Usage

```vue
<Sidebar>
  Example content
</Sidebar>
```

## Components

- `Sidebar`
- `SidebarContent`
- `SidebarFooter`
- `SidebarGroup`
- `SidebarGroupAction`
- `SidebarGroupContent`
- `SidebarGroupLabel`
- `SidebarHeader`
- `SidebarInput`
- `SidebarInset`
- `SidebarMenu`
- `SidebarMenuAction`
- `SidebarMenuBadge`
- `SidebarMenuButton`
- `SidebarMenuItem`
- `SidebarMenuSkeleton`
- `SidebarMenuSub`
- `SidebarMenuSubButton`
- `SidebarMenuSubItem`
- `SidebarProvider`
- `SidebarRail`
- `SidebarSeparator`
- `SidebarTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Sidebar` | `props` | `SidebarProps` | `<Sidebar :example-prop="example" />` |
| `SidebarContent` | `class` | `HTMLAttributes["class"]` | `<SidebarContent class="custom-class" />` |
| `SidebarFooter` | `class` | `HTMLAttributes["class"]` | `<SidebarFooter class="custom-class" />` |
| `SidebarGroup` | `class` | `HTMLAttributes["class"]` | `<SidebarGroup class="custom-class" />` |
| `SidebarGroupAction` | `props` | `PrimitiveProps & { class?: HTMLAttributes["class"] }` | `<SidebarGroupAction :example-prop="example" />` |
| `SidebarGroupContent` | `class` | `HTMLAttributes["class"]` | `<SidebarGroupContent class="custom-class" />` |
| `SidebarGroupLabel` | `props` | `PrimitiveProps & { class?: HTMLAttributes["class"] }` | `<SidebarGroupLabel :example-prop="example" />` |
| `SidebarHeader` | `class` | `HTMLAttributes["class"]` | `<SidebarHeader class="custom-class" />` |
| `SidebarInput` | `class` | `HTMLAttributes["class"]` | `<SidebarInput class="custom-class" />` |
| `SidebarInset` | `class` | `HTMLAttributes["class"]` | `<SidebarInset class="custom-class" />` |
| `SidebarMenu` | `class` | `HTMLAttributes["class"]` | `<SidebarMenu class="custom-class" />` |
| `SidebarMenuAction` | `props` | `PrimitiveProps & { showOnHover?: boolean class?: HTMLAttributes["class"] }` | `<SidebarMenuAction :example-prop="true" />` |
| `SidebarMenuBadge` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuBadge class="custom-class" />` |
| `SidebarMenuButton` | `props` | `SidebarMenuButtonProps & { tooltip?: string \| Component }` | `<SidebarMenuButton :example-prop="example" />` |
| `SidebarMenuButtonChild` | `props` | `SidebarMenuButtonProps` | `<SidebarMenuButtonChild :example-prop="example" />` |
| `SidebarMenuItem` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuItem class="custom-class" />` |
| `SidebarMenuSkeleton` | `showIcon` | `boolean` | `<SidebarMenuSkeleton :show-icon="true" />` |
| `SidebarMenuSkeleton` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuSkeleton class="custom-class" />` |
| `SidebarMenuSub` | `class` | `HTMLAttributes["class"]` | `<SidebarMenuSub class="custom-class" />` |
| `SidebarMenuSubButton` | `props` | `PrimitiveProps & { size?: "sm" \| "md" isActive?: boolean class?: HTMLAttributes["class"] }` | `<SidebarMenuSubButton :example-prop="true" />` |
| `SidebarProvider` | `defaultOpen` | `boolean` | `<SidebarProvider :default-open="true" />` |
| `SidebarProvider` | `open` | `boolean` | `<SidebarProvider :open="true" />` |
| `SidebarProvider` | `class` | `HTMLAttributes["class"]` | `<SidebarProvider class="custom-class" />` |
| `SidebarRail` | `class` | `HTMLAttributes["class"]` | `<SidebarRail class="custom-class" />` |
| `SidebarSeparator` | `class` | `HTMLAttributes["class"]` | `<SidebarSeparator class="custom-class" />` |
| `SidebarTrigger` | `class` | `HTMLAttributes["class"]` | `<SidebarTrigger class="custom-class" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `SidebarProvider` | `update:open` | `[open: boolean]` | `<SidebarProvider @update:open="updateOpen" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Sidebar` | `default` | `<Sidebar>Content</Sidebar>` |
| `SidebarContent` | `default` | `<SidebarContent>Content</SidebarContent>` |
| `SidebarFooter` | `default` | `<SidebarFooter>Content</SidebarFooter>` |
| `SidebarGroup` | `default` | `<SidebarGroup>Content</SidebarGroup>` |
| `SidebarGroupAction` | `default` | `<SidebarGroupAction>Content</SidebarGroupAction>` |
| `SidebarGroupContent` | `default` | `<SidebarGroupContent>Content</SidebarGroupContent>` |
| `SidebarGroupLabel` | `default` | `<SidebarGroupLabel>Content</SidebarGroupLabel>` |
| `SidebarHeader` | `default` | `<SidebarHeader>Content</SidebarHeader>` |
| `SidebarInput` | `default` | `<SidebarInput>Content</SidebarInput>` |
| `SidebarInset` | `default` | `<SidebarInset>Content</SidebarInset>` |
| `SidebarMenu` | `default` | `<SidebarMenu>Content</SidebarMenu>` |
| `SidebarMenuAction` | `default` | `<SidebarMenuAction>Content</SidebarMenuAction>` |
| `SidebarMenuBadge` | `default` | `<SidebarMenuBadge>Content</SidebarMenuBadge>` |
| `SidebarMenuButton` | `default` | `<SidebarMenuButton>Content</SidebarMenuButton>` |
| `SidebarMenuButtonChild` | `default` | `<SidebarMenuButtonChild>Content</SidebarMenuButtonChild>` |
| `SidebarMenuItem` | `default` | `<SidebarMenuItem>Content</SidebarMenuItem>` |
| `SidebarMenuSub` | `default` | `<SidebarMenuSub>Content</SidebarMenuSub>` |
| `SidebarMenuSubButton` | `default` | `<SidebarMenuSubButton>Content</SidebarMenuSubButton>` |
| `SidebarMenuSubItem` | `default` | `<SidebarMenuSubItem>Content</SidebarMenuSubItem>` |
| `SidebarProvider` | `default` | `<SidebarProvider>Content</SidebarProvider>` |
| `SidebarRail` | `default` | `<SidebarRail>Content</SidebarRail>` |
| `SidebarSeparator` | `default` | `<SidebarSeparator>Content</SidebarSeparator>` |

### Exports

- `export interface SidebarProps {`
- `export { useSidebar } from "./utils"`
- `export const sidebarMenuButtonVariants = cva(`
- `export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>`

## API Examples

### Sidebar.exampleProp

```vue
<Sidebar :example-prop="example" />
```

### SidebarContent.class

```vue
<SidebarContent class="custom-class" />
```

### SidebarFooter.class

```vue
<SidebarFooter class="custom-class" />
```

### SidebarGroup.class

```vue
<SidebarGroup class="custom-class" />
```

### SidebarGroupAction.exampleProp

```vue
<SidebarGroupAction :example-prop="example" />
```

### SidebarGroupContent.class

```vue
<SidebarGroupContent class="custom-class" />
```

### SidebarGroupLabel.exampleProp

```vue
<SidebarGroupLabel :example-prop="example" />
```

### SidebarHeader.class

```vue
<SidebarHeader class="custom-class" />
```

### SidebarInput.class

```vue
<SidebarInput class="custom-class" />
```

### SidebarInset.class

```vue
<SidebarInset class="custom-class" />
```

### SidebarMenu.class

```vue
<SidebarMenu class="custom-class" />
```

### SidebarMenuAction.exampleProp

```vue
<SidebarMenuAction :example-prop="true" />
```

### SidebarMenuBadge.class

```vue
<SidebarMenuBadge class="custom-class" />
```

### SidebarMenuButton.exampleProp

```vue
<SidebarMenuButton :example-prop="example" />
```

### SidebarMenuButtonChild.exampleProp

```vue
<SidebarMenuButtonChild :example-prop="example" />
```

### SidebarMenuItem.class

```vue
<SidebarMenuItem class="custom-class" />
```

### SidebarMenuSkeleton.showIcon

```vue
<SidebarMenuSkeleton :show-icon="true" />
```

### SidebarMenuSkeleton.class

```vue
<SidebarMenuSkeleton class="custom-class" />
```

### SidebarMenuSub.class

```vue
<SidebarMenuSub class="custom-class" />
```

### SidebarMenuSubButton.exampleProp

```vue
<SidebarMenuSubButton :example-prop="true" />
```

### SidebarProvider.defaultOpen

```vue
<SidebarProvider :default-open="true" />
```

### SidebarProvider.open

```vue
<SidebarProvider :open="true" />
```

### SidebarProvider.class

```vue
<SidebarProvider class="custom-class" />
```

### SidebarRail.class

```vue
<SidebarRail class="custom-class" />
```

### SidebarSeparator.class

```vue
<SidebarSeparator class="custom-class" />
```

### SidebarTrigger.class

```vue
<SidebarTrigger class="custom-class" />
```

### SidebarProvider.update:open

```vue
<SidebarProvider @update:open="updateOpen" />
```

### Sidebar slot: default

```vue
<Sidebar>Content</Sidebar>
```

### SidebarContent slot: default

```vue
<SidebarContent>Content</SidebarContent>
```

### SidebarFooter slot: default

```vue
<SidebarFooter>Content</SidebarFooter>
```

### SidebarGroup slot: default

```vue
<SidebarGroup>Content</SidebarGroup>
```

### SidebarGroupAction slot: default

```vue
<SidebarGroupAction>Content</SidebarGroupAction>
```

### SidebarGroupContent slot: default

```vue
<SidebarGroupContent>Content</SidebarGroupContent>
```

### SidebarGroupLabel slot: default

```vue
<SidebarGroupLabel>Content</SidebarGroupLabel>
```

### SidebarHeader slot: default

```vue
<SidebarHeader>Content</SidebarHeader>
```

### SidebarInput slot: default

```vue
<SidebarInput>Content</SidebarInput>
```

### SidebarInset slot: default

```vue
<SidebarInset>Content</SidebarInset>
```

### SidebarMenu slot: default

```vue
<SidebarMenu>Content</SidebarMenu>
```

### SidebarMenuAction slot: default

```vue
<SidebarMenuAction>Content</SidebarMenuAction>
```

### SidebarMenuBadge slot: default

```vue
<SidebarMenuBadge>Content</SidebarMenuBadge>
```

### SidebarMenuButton slot: default

```vue
<SidebarMenuButton>Content</SidebarMenuButton>
```

### SidebarMenuButtonChild slot: default

```vue
<SidebarMenuButtonChild>Content</SidebarMenuButtonChild>
```

### SidebarMenuItem slot: default

```vue
<SidebarMenuItem>Content</SidebarMenuItem>
```

### SidebarMenuSub slot: default

```vue
<SidebarMenuSub>Content</SidebarMenuSub>
```

### SidebarMenuSubButton slot: default

```vue
<SidebarMenuSubButton>Content</SidebarMenuSubButton>
```

### SidebarMenuSubItem slot: default

```vue
<SidebarMenuSubItem>Content</SidebarMenuSubItem>
```

### SidebarProvider slot: default

```vue
<SidebarProvider>Content</SidebarProvider>
```

### SidebarRail slot: default

```vue
<SidebarRail>Content</SidebarRail>
```

### SidebarSeparator slot: default

```vue
<SidebarSeparator>Content</SidebarSeparator>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/sidebar.json
```

