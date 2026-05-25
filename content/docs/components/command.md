---
title: Command
description: Command 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Command

Command 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Command 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="command" src="command/Basic.vue"}
::

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
| `Command` | `class` | `HTMLAttributes["class"]` | `<Command class="border-primary" />` |
| `CommandEmpty` | `class` | `HTMLAttributes["class"]` | `<CommandEmpty class="border-primary" />` |
| `CommandGroup` | `class` | `HTMLAttributes["class"]` | `<CommandGroup class="border-primary" />` |
| `CommandGroup` | `heading` | `string` | `<CommandGroup :heading="example" />` |
| `CommandInput` | `class` | `HTMLAttributes["class"]` | `<CommandInput class="border-primary" />` |
| `CommandItem` | `class` | `HTMLAttributes["class"]` | `<CommandItem class="border-primary" />` |
| `CommandList` | `class` | `HTMLAttributes["class"]` | `<CommandList class="border-primary" />` |
| `CommandSeparator` | `class` | `HTMLAttributes["class"]` | `<CommandSeparator class="border-primary" />` |
| `CommandShortcut` | `class` | `HTMLAttributes["class"]` | `<CommandShortcut class="border-primary" />` |
| `CommandDialog` | 类型引用 | `DialogRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Command` | 类型引用 | `ListboxRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `CommandDialog` | 类型引用 | `DialogRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `CommandItem` | 类型引用 | `ListboxItemEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

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

### Command.class

```vue
<Command class="border-primary" />
```

### CommandEmpty.class

```vue
<CommandEmpty class="border-primary" />
```

### CommandGroup.class

```vue
<CommandGroup class="border-primary" />
```

### CommandGroup.heading

```vue
<CommandGroup :heading="example" />
```

### CommandInput.class

```vue
<CommandInput class="border-primary" />
```

### CommandItem.class

```vue
<CommandItem class="border-primary" />
```

### CommandList.class

```vue
<CommandList class="border-primary" />
```

### CommandSeparator.class

```vue
<CommandSeparator class="border-primary" />
```

### CommandShortcut.class

```vue
<CommandShortcut class="border-primary" />
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
- `lucide-vue-next`

## Registry

```txt
/r/command.json
```

