---
title: Popover
description: Popover 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Popover

Popover 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Popover 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/popover.json
```

## 导入

```ts
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
```

## 基础用法

```vue
<Popover>
  示例内容
</Popover>
```

## 组件导出

- `Popover`
- `PopoverContent`
- `PopoverTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Popover` | `props` | `PopoverRootProps` | `<Popover :example-prop="example" />` |
| `PopoverContent` | `props` | `PopoverContentProps & { class?: HTMLAttributes["class"] }` | `<PopoverContent :example-prop="example" />` |
| `PopoverTrigger` | `props` | `PopoverTriggerProps` | `<PopoverTrigger :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Popover` | `emits` | `PopoverRootEmits` | `<Popover @emits="emits" />` |
| `PopoverContent` | `emits` | `PopoverContentEmits` | `<PopoverContent @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Popover` | `default` | `<Popover>内容</Popover>` |
| `PopoverContent` | `default` | `<PopoverContent>内容</PopoverContent>` |
| `PopoverTrigger` | `default` | `<PopoverTrigger>内容</PopoverTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Popover.exampleProp

```vue
<Popover :example-prop="example" />
```

### PopoverContent.exampleProp

```vue
<PopoverContent :example-prop="example" />
```

### PopoverTrigger.exampleProp

```vue
<PopoverTrigger :example-prop="example" />
```

### Popover.emits

```vue
<Popover @emits="emits" />
```

### PopoverContent.emits

```vue
<PopoverContent @emits="emits" />
```

### Popover slot: default

```vue
<Popover>内容</Popover>
```

### PopoverContent slot: default

```vue
<PopoverContent>内容</PopoverContent>
```

### PopoverTrigger slot: default

```vue
<PopoverTrigger>内容</PopoverTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/popover.json
```

