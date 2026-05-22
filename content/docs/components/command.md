---
title: Command
description: Command component documentation generated from source.
---

# Command

Command component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/command.json
```

## Import

```ts
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
```

## Basic Usage

```vue
<Command>
  Example content
</Command>
```

## Components

- `Command`
- `CommandDialog`
- `CommandEmpty`
- `CommandGroup`
- `CommandInput`
- `CommandItem`
- `CommandList`
- `CommandSeparator`
- `CommandShortcut`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Command` | `props` | `ListboxRootProps & { class?: HTMLAttributes["class"] }` | `<Command :example-prop="example" />` |
| `CommandDialog` | `props` | `DialogRootProps` | `<CommandDialog :example-prop="example" />` |
| `CommandEmpty` | `props` | `PrimitiveProps & { class?: HTMLAttributes["class"] }` | `<CommandEmpty :example-prop="example" />` |
| `CommandGroup` | `props` | `ListboxGroupProps & { class?: HTMLAttributes["class"] heading?: string }` | `<CommandGroup :example-prop="example" />` |
| `CommandInput` | `props` | `ListboxFilterProps & { class?: HTMLAttributes["class"] }` | `<CommandInput :example-prop="example" />` |
| `CommandItem` | `props` | `ListboxItemProps & { class?: HTMLAttributes["class"] }` | `<CommandItem :example-prop="example" />` |
| `CommandList` | `props` | `ListboxContentProps & { class?: HTMLAttributes["class"] }` | `<CommandList :example-prop="example" />` |
| `CommandSeparator` | `props` | `SeparatorProps & { class?: HTMLAttributes["class"] }` | `<CommandSeparator :example-prop="example" />` |
| `CommandShortcut` | `class` | `HTMLAttributes["class"]` | `<CommandShortcut class="custom-class" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Command` | `emits` | `ListboxRootEmits` | `<Command @emits="emits" />` |
| `CommandDialog` | `emits` | `DialogRootEmits` | `<CommandDialog @emits="emits" />` |
| `CommandItem` | `emits` | `ListboxItemEmits` | `<CommandItem @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Command` | `default` | `<Command>Content</Command>` |
| `CommandDialog` | `default` | `<CommandDialog>Content</CommandDialog>` |
| `CommandEmpty` | `default` | `<CommandEmpty>Content</CommandEmpty>` |
| `CommandGroup` | `default` | `<CommandGroup>Content</CommandGroup>` |
| `CommandItem` | `default` | `<CommandItem>Content</CommandItem>` |
| `CommandList` | `default` | `<CommandList>Content</CommandList>` |
| `CommandSeparator` | `default` | `<CommandSeparator>Content</CommandSeparator>` |
| `CommandShortcut` | `default` | `<CommandShortcut>Content</CommandShortcut>` |

### Exports

- `export const [useCommand, provideCommandContext] = createContext<{`
- `export const [useCommandGroup, provideCommandGroupContext] = createContext<{`

## API Examples

### Command.exampleProp

```vue
<Command :example-prop="example" />
```

### CommandDialog.exampleProp

```vue
<CommandDialog :example-prop="example" />
```

### CommandEmpty.exampleProp

```vue
<CommandEmpty :example-prop="example" />
```

### CommandGroup.exampleProp

```vue
<CommandGroup :example-prop="example" />
```

### CommandInput.exampleProp

```vue
<CommandInput :example-prop="example" />
```

### CommandItem.exampleProp

```vue
<CommandItem :example-prop="example" />
```

### CommandList.exampleProp

```vue
<CommandList :example-prop="example" />
```

### CommandSeparator.exampleProp

```vue
<CommandSeparator :example-prop="example" />
```

### CommandShortcut.class

```vue
<CommandShortcut class="custom-class" />
```

### Command.emits

```vue
<Command @emits="emits" />
```

### CommandDialog.emits

```vue
<CommandDialog @emits="emits" />
```

### CommandItem.emits

```vue
<CommandItem @emits="emits" />
```

### Command slot: default

```vue
<Command>Content</Command>
```

### CommandDialog slot: default

```vue
<CommandDialog>Content</CommandDialog>
```

### CommandEmpty slot: default

```vue
<CommandEmpty>Content</CommandEmpty>
```

### CommandGroup slot: default

```vue
<CommandGroup>Content</CommandGroup>
```

### CommandItem slot: default

```vue
<CommandItem>Content</CommandItem>
```

### CommandList slot: default

```vue
<CommandList>Content</CommandList>
```

### CommandSeparator slot: default

```vue
<CommandSeparator>Content</CommandSeparator>
```

### CommandShortcut slot: default

```vue
<CommandShortcut>Content</CommandShortcut>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/command.json
```

