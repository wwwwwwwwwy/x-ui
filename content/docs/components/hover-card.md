---
title: HoverCard
description: HoverCard 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# HoverCard

HoverCard 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

HoverCard 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="hover-card" src="hover-card/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/hover-card.json
```

## 导入

```ts
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
```

## 基础用法

```vue
<HoverCard>
  示例内容
</HoverCard>
```

## 组件导出

- `HoverCard`
- `HoverCardContent`
- `HoverCardTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `HoverCardContent` | `class` | `HTMLAttributes["class"]` | `<HoverCardContent class="border-primary" />` |
| `HoverCard` | 类型引用 | `HoverCardRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `HoverCardTrigger` | 类型引用 | `HoverCardTriggerProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `HoverCard` | 类型引用 | `HoverCardRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `HoverCard` | `default` | `<HoverCard>内容</HoverCard>` |
| `HoverCardContent` | `default` | `<HoverCardContent>内容</HoverCardContent>` |
| `HoverCardTrigger` | `default` | `<HoverCardTrigger>内容</HoverCardTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### HoverCardContent.class

```vue
<HoverCardContent class="border-primary" />
```

### HoverCard slot: default

```vue
<HoverCard>内容</HoverCard>
```

### HoverCardContent slot: default

```vue
<HoverCardContent>内容</HoverCardContent>
```

### HoverCardTrigger slot: default

```vue
<HoverCardTrigger>内容</HoverCardTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/hover-card.json
```

