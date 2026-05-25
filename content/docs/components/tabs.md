---
title: Tabs
description: Tabs 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Tabs

Tabs 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Tabs 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="tabs" src="tabs/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/tabs.json
```

## 导入

```ts
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
```

## 基础用法

```vue
<Tabs>
  示例内容
</Tabs>
```

## 组件导出

- `Tabs`
- `TabsContent`
- `TabsList`
- `TabsTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `TabsContent` | `class` | `HTMLAttributes["class"]` | `<TabsContent class="border-primary" />` |
| `TabsList` | `class` | `HTMLAttributes["class"]` | `<TabsList class="border-primary" />` |
| `TabsTrigger` | `class` | `HTMLAttributes["class"]` | `<TabsTrigger class="border-primary" />` |
| `Tabs` | 类型引用 | `TabsRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Tabs` | 类型引用 | `TabsRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Tabs` | `default` | `<Tabs>内容</Tabs>` |
| `TabsContent` | `default` | `<TabsContent>内容</TabsContent>` |
| `TabsList` | `default` | `<TabsList>内容</TabsList>` |
| `TabsTrigger` | `default` | `<TabsTrigger>内容</TabsTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### TabsContent.class

```vue
<TabsContent class="border-primary" />
```

### TabsList.class

```vue
<TabsList class="border-primary" />
```

### TabsTrigger.class

```vue
<TabsTrigger class="border-primary" />
```

### Tabs slot: default

```vue
<Tabs>内容</Tabs>
```

### TabsContent slot: default

```vue
<TabsContent>内容</TabsContent>
```

### TabsList slot: default

```vue
<TabsList>内容</TabsList>
```

### TabsTrigger slot: default

```vue
<TabsTrigger>内容</TabsTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/tabs.json
```

