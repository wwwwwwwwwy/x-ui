---
title: Input
description: Input 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Input

Input 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Input 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

::component-preview{name="input" src="input/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/input.json
```

## 导入

```ts
import { Input } from '@/components/ui/input'
```

## 基础用法

```vue
<Input>
  示例内容
</Input>
```

## 组件导出

- `Input`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Input` | `defaultValue` | `string \| number` | `<Input :default-value="1" />` |
| `Input` | `modelValue` | `string \| number` | `<Input :model-value="1" />` |
| `Input` | `class` | `HTMLAttributes["class"]` | `<Input class="custom-class" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Input` | `emits` | `{ (e: "update:modelValue", payload: string \| number): void }` | `<Input @emits="emits" />` |

### Slots

源码中未发现显式本地 slots。

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Input.defaultValue

```vue
<Input :default-value="1" />
```

### Input.modelValue

```vue
<Input :model-value="1" />
```

### Input.class

```vue
<Input class="custom-class" />
```

### Input.emits

```vue
<Input @emits="emits" />
```

## 依赖

- `@vueuse/core`

## Registry

```txt
/r/input.json
```

