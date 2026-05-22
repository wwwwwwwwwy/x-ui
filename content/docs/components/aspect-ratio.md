---
title: AspectRatio
description: AspectRatio 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# AspectRatio

AspectRatio 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

AspectRatio 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

::component-preview{name="aspect-ratio" src="aspect-ratio/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/aspect-ratio.json
```

## 导入

```ts
import { AspectRatio } from '@/components/ui/aspect-ratio'
```

## 基础用法

```vue
<AspectRatio>
  示例内容
</AspectRatio>
```

## 组件导出

- `AspectRatio`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `AspectRatio` | `props` | `AspectRatioProps` | `<AspectRatio :example-prop="example" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `AspectRatio` | `default` | `<AspectRatio>内容</AspectRatio>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### AspectRatio.exampleProp

```vue
<AspectRatio :example-prop="example" />
```

### AspectRatio slot: default

```vue
<AspectRatio>内容</AspectRatio>
```

## 依赖

- `reka-ui`

## Registry

```txt
/r/aspect-ratio.json
```

