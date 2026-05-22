---
title: Empty
description: Empty 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Empty

Empty 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Empty 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

::component-preview{name="empty" src="empty/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/empty.json
```

## 导入

```ts
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
```

## 基础用法

```vue
<Empty>
  示例内容
</Empty>
```

## 组件导出

- `Empty`
- `EmptyContent`
- `EmptyDescription`
- `EmptyHeader`
- `EmptyMedia`
- `EmptyTitle`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Empty` | `class` | `HTMLAttributes["class"]` | `<Empty class="custom-class" />` |
| `EmptyContent` | `class` | `HTMLAttributes["class"]` | `<EmptyContent class="custom-class" />` |
| `EmptyDescription` | `class` | `HTMLAttributes["class"]` | `<EmptyDescription class="custom-class" />` |
| `EmptyHeader` | `class` | `HTMLAttributes["class"]` | `<EmptyHeader class="custom-class" />` |
| `EmptyMedia` | `class` | `HTMLAttributes["class"]` | `<EmptyMedia class="custom-class" />` |
| `EmptyMedia` | `variant` | `EmptyMediaVariants["variant"]` | `<EmptyMedia :variant="example" />` |
| `EmptyTitle` | `class` | `HTMLAttributes["class"]` | `<EmptyTitle class="custom-class" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Empty` | `default` | `<Empty>内容</Empty>` |
| `EmptyContent` | `default` | `<EmptyContent>内容</EmptyContent>` |
| `EmptyDescription` | `default` | `<EmptyDescription>内容</EmptyDescription>` |
| `EmptyHeader` | `default` | `<EmptyHeader>内容</EmptyHeader>` |
| `EmptyMedia` | `default` | `<EmptyMedia>内容</EmptyMedia>` |
| `EmptyTitle` | `default` | `<EmptyTitle>内容</EmptyTitle>` |

### Exports

- `export const emptyMediaVariants = cva(`
- `export type EmptyMediaVariants = VariantProps<typeof emptyMediaVariants>`

## API 示例

### Empty.class

```vue
<Empty class="custom-class" />
```

### EmptyContent.class

```vue
<EmptyContent class="custom-class" />
```

### EmptyDescription.class

```vue
<EmptyDescription class="custom-class" />
```

### EmptyHeader.class

```vue
<EmptyHeader class="custom-class" />
```

### EmptyMedia.class

```vue
<EmptyMedia class="custom-class" />
```

### EmptyMedia.variant

```vue
<EmptyMedia :variant="example" />
```

### EmptyTitle.class

```vue
<EmptyTitle class="custom-class" />
```

### Empty slot: default

```vue
<Empty>内容</Empty>
```

### EmptyContent slot: default

```vue
<EmptyContent>内容</EmptyContent>
```

### EmptyDescription slot: default

```vue
<EmptyDescription>内容</EmptyDescription>
```

### EmptyHeader slot: default

```vue
<EmptyHeader>内容</EmptyHeader>
```

### EmptyMedia slot: default

```vue
<EmptyMedia>内容</EmptyMedia>
```

### EmptyTitle slot: default

```vue
<EmptyTitle>内容</EmptyTitle>
```

## 依赖

本地组件源码中未检测到外部运行时依赖。

## Registry

```txt
/r/empty.json
```

