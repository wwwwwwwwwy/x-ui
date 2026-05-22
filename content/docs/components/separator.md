---
title: Separator
description: Separator 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Separator

Separator 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Separator 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="separator" src="separator/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/separator.json
```

## 导入

```ts
import { Separator } from '@/components/ui/separator'
```

## 基础用法

```vue
<Separator>
  示例内容
</Separator>
```

## 组件导出

- `Separator`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Separator` | `props` | `SeparatorProps & { class?: HTMLAttributes["class"] }` | `<Separator :example-prop="example" />` |

### Events

源码中未发现显式本地事件。

### Slots

源码中未发现显式本地 slots。

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Separator.exampleProp

```vue
<Separator :example-prop="example" />
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/separator.json
```

