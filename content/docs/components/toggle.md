---
title: Toggle
description: Toggle 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Toggle

Toggle 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Toggle 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="toggle" src="toggle/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/toggle.json
```

## 导入

```ts
import { Toggle } from '@/components/ui/toggle'
```

## 基础用法

```vue
<Toggle>
  示例内容
</Toggle>
```

## 组件导出

- `Toggle`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Toggle` | `props` | `ToggleProps & { class?: HTMLAttributes["class"] variant?: ToggleVariants["variant"] size?: ToggleVariants["size"] }` | `<Toggle :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Toggle` | `emits` | `ToggleEmits` | `<Toggle @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Toggle` | `default` | `<Toggle>内容</Toggle>` |

### Exports

- `export const toggleVariants = cva(`
- `export type ToggleVariants = VariantProps<typeof toggleVariants>`

## API 示例

### Toggle.exampleProp

```vue
<Toggle :example-prop="example" />
```

### Toggle.emits

```vue
<Toggle @emits="emits" />
```

### Toggle slot: default

```vue
<Toggle>内容</Toggle>
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/toggle.json
```

