---
title: Command
description: Command 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Command

Command 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Command 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/command.json
```

## 导入

```ts
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
```

## 基础用法

```vue
<Command>
  示例内容
</Command>
```

## 组件导出

- `Command`
- `CommandDialog`
- `CommandEmpty`
- `CommandGroup`
- `CommandInput`
- `CommandItem`
- `CommandList`
- `CommandSeparator`
- `CommandShortcut`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
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

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Command` | `emits` | `ListboxRootEmits` | `<Command @emits="emits" />` |
| `CommandDialog` | `emits` | `DialogRootEmits` | `<CommandDialog @emits="emits" />` |
| `CommandItem` | `emits` | `ListboxItemEmits` | `<CommandItem @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Command` | `default` | `<Command>内容</Command>` |
| `CommandDialog` | `default` | `<CommandDialog>内容</CommandDialog>` |
| `CommandEmpty` | `default` | `<CommandEmpty>内容</CommandEmpty>` |
| `CommandGroup` | `default` | `<CommandGroup>内容</CommandGroup>` |
| `CommandItem` | `default` | `<CommandItem>内容</CommandItem>` |
| `CommandList` | `default` | `<CommandList>内容</CommandList>` |
| `CommandSeparator` | `default` | `<CommandSeparator>内容</CommandSeparator>` |
| `CommandShortcut` | `default` | `<CommandShortcut>内容</CommandShortcut>` |

### Exports

- `export const [useCommand, provideCommandContext] = createContext<{`
- `export const [useCommandGroup, provideCommandGroupContext] = createContext<{`

## API 示例

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
<Command>内容</Command>
```

### CommandDialog slot: default

```vue
<CommandDialog>内容</CommandDialog>
```

### CommandEmpty slot: default

```vue
<CommandEmpty>内容</CommandEmpty>
```

### CommandGroup slot: default

```vue
<CommandGroup>内容</CommandGroup>
```

### CommandItem slot: default

```vue
<CommandItem>内容</CommandItem>
```

### CommandList slot: default

```vue
<CommandList>内容</CommandList>
```

### CommandSeparator slot: default

```vue
<CommandSeparator>内容</CommandSeparator>
```

### CommandShortcut slot: default

```vue
<CommandShortcut>内容</CommandShortcut>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `@meri-design/icon-vue`

## Registry

```txt
/r/command.json
```

