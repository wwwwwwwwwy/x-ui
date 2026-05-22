---
title: Stepper
description: Stepper 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Stepper

Stepper 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Stepper 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="stepper" src="stepper/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/stepper.json
```

## 导入

```ts
import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'
```

## 基础用法

```vue
<Stepper>
  示例内容
</Stepper>
```

## 组件导出

- `Stepper`
- `StepperDescription`
- `StepperIndicator`
- `StepperItem`
- `StepperSeparator`
- `StepperTitle`
- `StepperTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Stepper` | `props` | `StepperRootProps & { class?: HTMLAttributes["class"] }` | `<Stepper :example-prop="example" />` |
| `StepperDescription` | `props` | `StepperDescriptionProps & { class?: HTMLAttributes["class"] }` | `<StepperDescription :example-prop="example" />` |
| `StepperIndicator` | `props` | `StepperIndicatorProps & { class?: HTMLAttributes["class"] }` | `<StepperIndicator :example-prop="example" />` |
| `StepperItem` | `props` | `StepperItemProps & { class?: HTMLAttributes["class"] }` | `<StepperItem :example-prop="example" />` |
| `StepperSeparator` | `props` | `StepperSeparatorProps & { class?: HTMLAttributes["class"] }` | `<StepperSeparator :example-prop="example" />` |
| `StepperTitle` | `props` | `StepperTitleProps & { class?: HTMLAttributes["class"] }` | `<StepperTitle :example-prop="example" />` |
| `StepperTrigger` | `props` | `StepperTriggerProps & { class?: HTMLAttributes["class"] }` | `<StepperTrigger :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Stepper` | `emits` | `StepperRootEmits` | `<Stepper @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Stepper` | `default` | `<Stepper>内容</Stepper>` |
| `StepperDescription` | `default` | `<StepperDescription>内容</StepperDescription>` |
| `StepperIndicator` | `default` | `<StepperIndicator>内容</StepperIndicator>` |
| `StepperItem` | `default` | `<StepperItem>内容</StepperItem>` |
| `StepperTitle` | `default` | `<StepperTitle>内容</StepperTitle>` |
| `StepperTrigger` | `default` | `<StepperTrigger>内容</StepperTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Stepper.exampleProp

```vue
<Stepper :example-prop="example" />
```

### StepperDescription.exampleProp

```vue
<StepperDescription :example-prop="example" />
```

### StepperIndicator.exampleProp

```vue
<StepperIndicator :example-prop="example" />
```

### StepperItem.exampleProp

```vue
<StepperItem :example-prop="example" />
```

### StepperSeparator.exampleProp

```vue
<StepperSeparator :example-prop="example" />
```

### StepperTitle.exampleProp

```vue
<StepperTitle :example-prop="example" />
```

### StepperTrigger.exampleProp

```vue
<StepperTrigger :example-prop="example" />
```

### Stepper.emits

```vue
<Stepper @emits="emits" />
```

### Stepper slot: default

```vue
<Stepper>内容</Stepper>
```

### StepperDescription slot: default

```vue
<StepperDescription>内容</StepperDescription>
```

### StepperIndicator slot: default

```vue
<StepperIndicator>内容</StepperIndicator>
```

### StepperItem slot: default

```vue
<StepperItem>内容</StepperItem>
```

### StepperTitle slot: default

```vue
<StepperTitle>内容</StepperTitle>
```

### StepperTrigger slot: default

```vue
<StepperTrigger>内容</StepperTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/stepper.json
```

