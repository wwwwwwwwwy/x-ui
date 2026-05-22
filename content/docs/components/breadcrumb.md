---
title: Breadcrumb
description: Breadcrumb 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Breadcrumb

Breadcrumb 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Breadcrumb 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="breadcrumb" src="breadcrumb/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/breadcrumb.json
```

## 导入

```ts
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
```

## 基础用法

```vue
<Breadcrumb>
  示例内容
</Breadcrumb>
```

## 组件导出

- `Breadcrumb`
- `BreadcrumbEllipsis`
- `BreadcrumbItem`
- `BreadcrumbLink`
- `BreadcrumbList`
- `BreadcrumbPage`
- `BreadcrumbSeparator`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Breadcrumb` | `class` | `HTMLAttributes["class"]` | `<Breadcrumb class="custom-class" />` |
| `BreadcrumbEllipsis` | `class` | `HTMLAttributes["class"]` | `<BreadcrumbEllipsis class="custom-class" />` |
| `BreadcrumbItem` | `class` | `HTMLAttributes["class"]` | `<BreadcrumbItem class="custom-class" />` |
| `BreadcrumbLink` | `props` | `PrimitiveProps & { class?: HTMLAttributes["class"] }` | `<BreadcrumbLink :example-prop="example" />` |
| `BreadcrumbList` | `class` | `HTMLAttributes["class"]` | `<BreadcrumbList class="custom-class" />` |
| `BreadcrumbPage` | `class` | `HTMLAttributes["class"]` | `<BreadcrumbPage class="custom-class" />` |
| `BreadcrumbSeparator` | `class` | `HTMLAttributes["class"]` | `<BreadcrumbSeparator class="custom-class" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Breadcrumb` | `default` | `<Breadcrumb>内容</Breadcrumb>` |
| `BreadcrumbEllipsis` | `default` | `<BreadcrumbEllipsis>内容</BreadcrumbEllipsis>` |
| `BreadcrumbItem` | `default` | `<BreadcrumbItem>内容</BreadcrumbItem>` |
| `BreadcrumbLink` | `default` | `<BreadcrumbLink>内容</BreadcrumbLink>` |
| `BreadcrumbList` | `default` | `<BreadcrumbList>内容</BreadcrumbList>` |
| `BreadcrumbPage` | `default` | `<BreadcrumbPage>内容</BreadcrumbPage>` |
| `BreadcrumbSeparator` | `default` | `<BreadcrumbSeparator>内容</BreadcrumbSeparator>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Breadcrumb.class

```vue
<Breadcrumb class="custom-class" />
```

### BreadcrumbEllipsis.class

```vue
<BreadcrumbEllipsis class="custom-class" />
```

### BreadcrumbItem.class

```vue
<BreadcrumbItem class="custom-class" />
```

### BreadcrumbLink.exampleProp

```vue
<BreadcrumbLink :example-prop="example" />
```

### BreadcrumbList.class

```vue
<BreadcrumbList class="custom-class" />
```

### BreadcrumbPage.class

```vue
<BreadcrumbPage class="custom-class" />
```

### BreadcrumbSeparator.class

```vue
<BreadcrumbSeparator class="custom-class" />
```

### Breadcrumb slot: default

```vue
<Breadcrumb>内容</Breadcrumb>
```

### BreadcrumbEllipsis slot: default

```vue
<BreadcrumbEllipsis>内容</BreadcrumbEllipsis>
```

### BreadcrumbItem slot: default

```vue
<BreadcrumbItem>内容</BreadcrumbItem>
```

### BreadcrumbLink slot: default

```vue
<BreadcrumbLink>内容</BreadcrumbLink>
```

### BreadcrumbList slot: default

```vue
<BreadcrumbList>内容</BreadcrumbList>
```

### BreadcrumbPage slot: default

```vue
<BreadcrumbPage>内容</BreadcrumbPage>
```

### BreadcrumbSeparator slot: default

```vue
<BreadcrumbSeparator>内容</BreadcrumbSeparator>
```

## 依赖

- `lucide-vue-next`
- `reka-ui`

## Registry

```txt
/r/breadcrumb.json
```

