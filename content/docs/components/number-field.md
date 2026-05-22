---
title: NumberField
description: NumberField 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# NumberField

NumberField 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

NumberField 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/number-field.json
```

## 导入

```ts
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field'
```

## 基础用法

```vue
<NumberField>
  示例内容
</NumberField>
```

## 组件导出

- `NumberField`
- `NumberFieldContent`
- `NumberFieldDecrement`
- `NumberFieldIncrement`
- `NumberFieldInput`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `NumberField` | `props` | `NumberFieldRootProps & { class?: HTMLAttributes["class"] }` | `<NumberField :example-prop="example" />` |
| `NumberFieldContent` | `class` | `HTMLAttributes["class"]` | `<NumberFieldContent class="custom-class" />` |
| `NumberFieldDecrement` | `props` | `NumberFieldDecrementProps & { class?: HTMLAttributes["class"] }` | `<NumberFieldDecrement :example-prop="example" />` |
| `NumberFieldIncrement` | `props` | `NumberFieldIncrementProps & { class?: HTMLAttributes["class"] }` | `<NumberFieldIncrement :example-prop="example" />` |
| `NumberFieldInput` | `class` | `HTMLAttributes["class"]` | `<NumberFieldInput class="custom-class" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `NumberField` | `emits` | `NumberFieldRootEmits` | `<NumberField @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `NumberField` | `default` | `<NumberField>内容</NumberField>` |
| `NumberFieldContent` | `default` | `<NumberFieldContent>内容</NumberFieldContent>` |
| `NumberFieldDecrement` | `default` | `<NumberFieldDecrement>内容</NumberFieldDecrement>` |
| `NumberFieldIncrement` | `default` | `<NumberFieldIncrement>内容</NumberFieldIncrement>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### NumberField.exampleProp

```vue
<NumberField :example-prop="example" />
```

### NumberFieldContent.class

```vue
<NumberFieldContent class="custom-class" />
```

### NumberFieldDecrement.exampleProp

```vue
<NumberFieldDecrement :example-prop="example" />
```

### NumberFieldIncrement.exampleProp

```vue
<NumberFieldIncrement :example-prop="example" />
```

### NumberFieldInput.class

```vue
<NumberFieldInput class="custom-class" />
```

### NumberField.emits

```vue
<NumberField @emits="emits" />
```

### NumberField slot: default

```vue
<NumberField>内容</NumberField>
```

### NumberFieldContent slot: default

```vue
<NumberFieldContent>内容</NumberFieldContent>
```

### NumberFieldDecrement slot: default

```vue
<NumberFieldDecrement>内容</NumberFieldDecrement>
```

### NumberFieldIncrement slot: default

```vue
<NumberFieldIncrement>内容</NumberFieldIncrement>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `@meri-design/icon-vue`

## Registry

```txt
/r/number-field.json
```

