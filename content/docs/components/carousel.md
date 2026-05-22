---
title: Carousel
description: Carousel 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Carousel

Carousel 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Carousel 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/carousel.json
```

## 导入

```ts
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
```

## 基础用法

```vue
<Carousel>
  示例内容
</Carousel>
```

## 组件导出

- `Carousel`
- `CarouselContent`
- `CarouselItem`
- `CarouselNext`
- `CarouselPrevious`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Carousel` | `props` | `CarouselProps & WithClassAsProps` | `<Carousel :example-prop="example" />` |
| `CarouselContent` | `props` | `WithClassAsProps` | `<CarouselContent :example-prop="example" />` |
| `CarouselItem` | `props` | `WithClassAsProps` | `<CarouselItem :example-prop="example" />` |
| `CarouselNext` | `props` | `WithClassAsProps` | `<CarouselNext :example-prop="example" />` |
| `CarouselPrevious` | `props` | `WithClassAsProps` | `<CarouselPrevious :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Carousel` | `emits` | `CarouselEmits` | `<Carousel @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Carousel` | `default` | `<Carousel>内容</Carousel>` |
| `CarouselContent` | `default` | `<CarouselContent>内容</CarouselContent>` |
| `CarouselItem` | `default` | `<CarouselItem>内容</CarouselItem>` |
| `CarouselNext` | `default` | `<CarouselNext>内容</CarouselNext>` |
| `CarouselPrevious` | `default` | `<CarouselPrevious>内容</CarouselPrevious>` |

### Exports

- `export type {`
- `export { useCarousel } from "./useCarousel"`

## API 示例

### Carousel.exampleProp

```vue
<Carousel :example-prop="example" />
```

### CarouselContent.exampleProp

```vue
<CarouselContent :example-prop="example" />
```

### CarouselItem.exampleProp

```vue
<CarouselItem :example-prop="example" />
```

### CarouselNext.exampleProp

```vue
<CarouselNext :example-prop="example" />
```

### CarouselPrevious.exampleProp

```vue
<CarouselPrevious :example-prop="example" />
```

### Carousel.emits

```vue
<Carousel @emits="emits" />
```

### Carousel slot: default

```vue
<Carousel>内容</Carousel>
```

### CarouselContent slot: default

```vue
<CarouselContent>内容</CarouselContent>
```

### CarouselItem slot: default

```vue
<CarouselItem>内容</CarouselItem>
```

### CarouselNext slot: default

```vue
<CarouselNext>内容</CarouselNext>
```

### CarouselPrevious slot: default

```vue
<CarouselPrevious>内容</CarouselPrevious>
```

## 依赖

- `@meri-design/icon-vue`

## Registry

```txt
/r/carousel.json
```

