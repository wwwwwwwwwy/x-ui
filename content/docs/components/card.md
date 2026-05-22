---
title: Card
description: Card 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Card

Card 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Card 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="card" src="card/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/card.json
```

## 导入

```ts
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
```

## 基础用法

```vue
<Card>
  示例内容
</Card>
```

## 组件导出

- `Card`
- `CardContent`
- `CardDescription`
- `CardFooter`
- `CardHeader`
- `CardTitle`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Card` | `class` | `HTMLAttributes["class"]` | `<Card class="custom-class" />` |
| `CardContent` | `class` | `HTMLAttributes["class"]` | `<CardContent class="custom-class" />` |
| `CardDescription` | `class` | `HTMLAttributes["class"]` | `<CardDescription class="custom-class" />` |
| `CardFooter` | `class` | `HTMLAttributes["class"]` | `<CardFooter class="custom-class" />` |
| `CardHeader` | `class` | `HTMLAttributes["class"]` | `<CardHeader class="custom-class" />` |
| `CardTitle` | `class` | `HTMLAttributes["class"]` | `<CardTitle class="custom-class" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Card` | `default` | `<Card>内容</Card>` |
| `CardContent` | `default` | `<CardContent>内容</CardContent>` |
| `CardDescription` | `default` | `<CardDescription>内容</CardDescription>` |
| `CardFooter` | `default` | `<CardFooter>内容</CardFooter>` |
| `CardHeader` | `default` | `<CardHeader>内容</CardHeader>` |
| `CardTitle` | `default` | `<CardTitle>内容</CardTitle>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Card.class

```vue
<Card class="custom-class" />
```

### CardContent.class

```vue
<CardContent class="custom-class" />
```

### CardDescription.class

```vue
<CardDescription class="custom-class" />
```

### CardFooter.class

```vue
<CardFooter class="custom-class" />
```

### CardHeader.class

```vue
<CardHeader class="custom-class" />
```

### CardTitle.class

```vue
<CardTitle class="custom-class" />
```

### Card slot: default

```vue
<Card>内容</Card>
```

### CardContent slot: default

```vue
<CardContent>内容</CardContent>
```

### CardDescription slot: default

```vue
<CardDescription>内容</CardDescription>
```

### CardFooter slot: default

```vue
<CardFooter>内容</CardFooter>
```

### CardHeader slot: default

```vue
<CardHeader>内容</CardHeader>
```

### CardTitle slot: default

```vue
<CardTitle>内容</CardTitle>
```

## 依赖

本地组件源码中未检测到外部运行时依赖。

## Registry

```txt
/r/card.json
```

