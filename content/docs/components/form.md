---
title: FormControl
description: FormControl 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# FormControl

FormControl 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

FormControl 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

::component-preview{name="form" src="form/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/form.json
```

## 导入

```ts
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
```

## 基础用法

```vue
<FormControl>
  示例内容
</FormControl>
```

## 组件导出

- `FormControl`
- `FormDescription`
- `FormItem`
- `FormLabel`
- `FormMessage`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `FormDescription` | `class` | `HTMLAttributes["class"]` | `<FormDescription class="custom-class" />` |
| `FormItem` | `class` | `HTMLAttributes["class"]` | `<FormItem class="custom-class" />` |
| `FormLabel` | `props` | `LabelProps & { class?: HTMLAttributes["class"] }` | `<FormLabel :example-prop="example" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `FormControl` | `default` | `<FormControl>内容</FormControl>` |
| `FormDescription` | `default` | `<FormDescription>内容</FormDescription>` |
| `FormItem` | `default` | `<FormItem>内容</FormItem>` |
| `FormLabel` | `default` | `<FormLabel>内容</FormLabel>` |

### Exports

- `export { FORM_ITEM_INJECTION_KEY } from "./injectionKeys"`
- `export { Form, Field as FormField } from "vee-validate"`

## API 示例

### FormDescription.class

```vue
<FormDescription class="custom-class" />
```

### FormItem.class

```vue
<FormItem class="custom-class" />
```

### FormLabel.exampleProp

```vue
<FormLabel :example-prop="example" />
```

### FormControl slot: default

```vue
<FormControl>内容</FormControl>
```

### FormDescription slot: default

```vue
<FormDescription>内容</FormDescription>
```

### FormItem slot: default

```vue
<FormItem>内容</FormItem>
```

### FormLabel slot: default

```vue
<FormLabel>内容</FormLabel>
```

## 依赖

- `reka-ui`
- `vee-validate`

## Registry

```txt
/r/form.json
```

