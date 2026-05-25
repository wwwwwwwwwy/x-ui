---
title: Collapsible
description: Collapsible 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Collapsible

Collapsible 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Collapsible 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="collapsible" src="collapsible/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/collapsible.json
```

## 导入

```ts
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
```

## 基础用法

```vue
<Collapsible>
  示例内容
</Collapsible>
```

## 组件导出

- `Collapsible`
- `CollapsibleContent`
- `CollapsibleTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Collapsible` | 类型引用 | `CollapsibleRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `CollapsibleContent` | 类型引用 | `CollapsibleContentProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `CollapsibleTrigger` | 类型引用 | `CollapsibleTriggerProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Collapsible` | 类型引用 | `CollapsibleRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Collapsible` | `default` | `<Collapsible>内容</Collapsible>` |
| `CollapsibleContent` | `default` | `<CollapsibleContent>内容</CollapsibleContent>` |
| `CollapsibleTrigger` | `default` | `<CollapsibleTrigger>内容</CollapsibleTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Collapsible slot: default

```vue
<Collapsible>内容</Collapsible>
```

### CollapsibleContent slot: default

```vue
<CollapsibleContent>内容</CollapsibleContent>
```

### CollapsibleTrigger slot: default

```vue
<CollapsibleTrigger>内容</CollapsibleTrigger>
```

## 依赖

- `reka-ui`

## Registry

```txt
/r/collapsible.json
```

