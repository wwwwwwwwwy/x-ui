---
title: Field
description: Field 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Field

Field 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Field 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="field" src="field/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/field.json
```

## 导入

```ts
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from '@/components/ui/field'
```

## 基础用法

```vue
<Field>
  示例内容
</Field>
```

## 组件导出

- `Field`
- `FieldContent`
- `FieldDescription`
- `FieldError`
- `FieldGroup`
- `FieldLabel`
- `FieldLegend`
- `FieldSeparator`
- `FieldSet`
- `FieldTitle`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Field` | `class` | `HTMLAttributes["class"]` | `<Field class="border-primary" />` |
| `Field` | `orientation` | `FieldVariants["orientation"]` | `<Field :orientation="example" />` |
| `FieldContent` | `class` | `HTMLAttributes["class"]` | `<FieldContent class="border-primary" />` |
| `FieldDescription` | `class` | `HTMLAttributes["class"]` | `<FieldDescription class="border-primary" />` |
| `FieldError` | `class` | `HTMLAttributes["class"]` | `<FieldError class="border-primary" />` |
| `FieldError` | `errors` | `Array<{ message?: string } \| undefined>` | `<FieldError :errors="example" />` |
| `FieldGroup` | `class` | `HTMLAttributes["class"]` | `<FieldGroup class="border-primary" />` |
| `FieldLabel` | `class` | `HTMLAttributes["class"]` | `<FieldLabel class="border-primary" />` |
| `FieldLegend` | `class` | `HTMLAttributes["class"]` | `<FieldLegend class="border-primary" />` |
| `FieldLegend` | `variant` | `"legend" \| "label"` | `<FieldLegend variant="outline">示例内容</FieldLegend>` |
| `FieldSeparator` | `class` | `HTMLAttributes["class"]` | `<FieldSeparator class="border-primary" />` |
| `FieldSet` | `class` | `HTMLAttributes["class"]` | `<FieldSet class="border-primary" />` |
| `FieldTitle` | `class` | `HTMLAttributes["class"]` | `<FieldTitle class="border-primary" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Field` | `default` | `<Field>内容</Field>` |
| `FieldContent` | `default` | `<FieldContent>内容</FieldContent>` |
| `FieldDescription` | `default` | `<FieldDescription>内容</FieldDescription>` |
| `FieldError` | `default` | `<FieldError>内容</FieldError>` |
| `FieldGroup` | `default` | `<FieldGroup>内容</FieldGroup>` |
| `FieldLabel` | `default` | `<FieldLabel>内容</FieldLabel>` |
| `FieldLegend` | `default` | `<FieldLegend>内容</FieldLegend>` |
| `FieldSeparator` | `default` | `<FieldSeparator>内容</FieldSeparator>` |
| `FieldSet` | `default` | `<FieldSet>内容</FieldSet>` |
| `FieldTitle` | `default` | `<FieldTitle>内容</FieldTitle>` |

### Exports

- `export const fieldVariants = cva(`
- `export type FieldVariants = VariantProps<typeof fieldVariants>`

## API 示例

### Field.class

```vue
<Field class="border-primary" />
```

### Field.orientation

```vue
<Field :orientation="example" />
```

### FieldContent.class

```vue
<FieldContent class="border-primary" />
```

### FieldDescription.class

```vue
<FieldDescription class="border-primary" />
```

### FieldError.class

```vue
<FieldError class="border-primary" />
```

### FieldError.errors

```vue
<FieldError :errors="example" />
```

### FieldGroup.class

```vue
<FieldGroup class="border-primary" />
```

### FieldLabel.class

```vue
<FieldLabel class="border-primary" />
```

### FieldLegend.class

```vue
<FieldLegend class="border-primary" />
```

### FieldLegend.variant

```vue
<FieldLegend variant="outline">示例内容</FieldLegend>
```

### FieldSeparator.class

```vue
<FieldSeparator class="border-primary" />
```

### FieldSet.class

```vue
<FieldSet class="border-primary" />
```

### FieldTitle.class

```vue
<FieldTitle class="border-primary" />
```

### Field slot: default

```vue
<Field>内容</Field>
```

### FieldContent slot: default

```vue
<FieldContent>内容</FieldContent>
```

### FieldDescription slot: default

```vue
<FieldDescription>内容</FieldDescription>
```

### FieldError slot: default

```vue
<FieldError>内容</FieldError>
```

### FieldGroup slot: default

```vue
<FieldGroup>内容</FieldGroup>
```

### FieldLabel slot: default

```vue
<FieldLabel>内容</FieldLabel>
```

### FieldLegend slot: default

```vue
<FieldLegend>内容</FieldLegend>
```

### FieldSeparator slot: default

```vue
<FieldSeparator>内容</FieldSeparator>
```

### FieldSet slot: default

```vue
<FieldSet>内容</FieldSet>
```

### FieldTitle slot: default

```vue
<FieldTitle>内容</FieldTitle>
```

## 依赖

本地组件源码中未检测到外部运行时依赖。

## Registry

```txt
/r/field.json
```

