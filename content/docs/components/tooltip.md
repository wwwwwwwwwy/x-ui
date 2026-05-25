---
title: Tooltip
description: Tooltip 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Tooltip

Tooltip 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Tooltip 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="tooltip" src="tooltip/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/tooltip.json
```

## 导入

```ts
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
```

## 基础用法

```vue
<Tooltip>
  示例内容
</Tooltip>
```

## 组件导出

- `Tooltip`
- `TooltipContent`
- `TooltipProvider`
- `TooltipTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `TooltipContent` | `class` | `HTMLAttributes["class"]` | `<TooltipContent class="border-primary" />` |
| `Tooltip` | 类型引用 | `TooltipRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `TooltipProvider` | 类型引用 | `TooltipProviderProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `TooltipTrigger` | 类型引用 | `TooltipTriggerProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Tooltip` | 类型引用 | `TooltipRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `TooltipContent` | 类型引用 | `TooltipContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Tooltip` | `default` | `<Tooltip>内容</Tooltip>` |
| `TooltipContent` | `default` | `<TooltipContent>内容</TooltipContent>` |
| `TooltipProvider` | `default` | `<TooltipProvider>内容</TooltipProvider>` |
| `TooltipTrigger` | `default` | `<TooltipTrigger>内容</TooltipTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### TooltipContent.class

```vue
<TooltipContent class="border-primary" />
```

### Tooltip slot: default

```vue
<Tooltip>内容</Tooltip>
```

### TooltipContent slot: default

```vue
<TooltipContent>内容</TooltipContent>
```

### TooltipProvider slot: default

```vue
<TooltipProvider>内容</TooltipProvider>
```

### TooltipTrigger slot: default

```vue
<TooltipTrigger>内容</TooltipTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/tooltip.json
```

