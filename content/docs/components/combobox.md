---
title: Combobox
description: Combobox 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Combobox

Combobox 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Combobox 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/combobox.json
```

## 导入

```ts
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList, ComboboxSeparator } from '@/components/ui/combobox'
```

## 基础用法

```vue
<Combobox>
  示例内容
</Combobox>
```

## 组件导出

- `Combobox`
- `ComboboxAnchor`
- `ComboboxEmpty`
- `ComboboxGroup`
- `ComboboxInput`
- `ComboboxItem`
- `ComboboxList`
- `ComboboxSeparator`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Combobox` | `props` | `ComboboxRootProps` | `<Combobox :example-prop="example" />` |
| `ComboboxAnchor` | `props` | `ComboboxAnchorProps & { class?: HTMLAttributes["class"] }` | `<ComboboxAnchor :example-prop="example" />` |
| `ComboboxEmpty` | `props` | `ComboboxEmptyProps & { class?: HTMLAttributes["class"] }` | `<ComboboxEmpty :example-prop="example" />` |
| `ComboboxGroup` | `props` | `ComboboxGroupProps & { class?: HTMLAttributes["class"] heading?: string }` | `<ComboboxGroup :example-prop="example" />` |
| `ComboboxInput` | `props` | `ComboboxInputProps & { class?: HTMLAttributes["class"] }` | `<ComboboxInput :example-prop="example" />` |
| `ComboboxItem` | `props` | `ComboboxItemProps & { class?: HTMLAttributes["class"] }` | `<ComboboxItem :example-prop="example" />` |
| `ComboboxList` | `props` | `ComboboxContentProps & { class?: HTMLAttributes["class"] }` | `<ComboboxList :example-prop="example" />` |
| `ComboboxSeparator` | `props` | `ComboboxSeparatorProps & { class?: HTMLAttributes["class"] }` | `<ComboboxSeparator :example-prop="example" />` |
| `ComboboxTrigger` | `props` | `ComboboxTriggerProps & { class?: HTMLAttributes["class"] }` | `<ComboboxTrigger :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Combobox` | `emits` | `ComboboxRootEmits` | `<Combobox @emits="emits" />` |
| `ComboboxInput` | `emits` | `ComboboxInputEmits` | `<ComboboxInput @emits="emits" />` |
| `ComboboxItem` | `emits` | `ComboboxItemEmits` | `<ComboboxItem @emits="emits" />` |
| `ComboboxList` | `emits` | `ComboboxContentEmits` | `<ComboboxList @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Combobox` | `default` | `<Combobox>内容</Combobox>` |
| `ComboboxAnchor` | `default` | `<ComboboxAnchor>内容</ComboboxAnchor>` |
| `ComboboxEmpty` | `default` | `<ComboboxEmpty>内容</ComboboxEmpty>` |
| `ComboboxGroup` | `default` | `<ComboboxGroup>内容</ComboboxGroup>` |
| `ComboboxInput` | `default` | `<ComboboxInput>内容</ComboboxInput>` |
| `ComboboxItem` | `default` | `<ComboboxItem>内容</ComboboxItem>` |
| `ComboboxList` | `default` | `<ComboboxList>内容</ComboboxList>` |
| `ComboboxSeparator` | `default` | `<ComboboxSeparator>内容</ComboboxSeparator>` |
| `ComboboxTrigger` | `default` | `<ComboboxTrigger>内容</ComboboxTrigger>` |

### Exports

- `export { ComboboxCancel, ComboboxItemIndicator, ComboboxTrigger } from "reka-ui"`

## API 示例

### Combobox.exampleProp

```vue
<Combobox :example-prop="example" />
```

### ComboboxAnchor.exampleProp

```vue
<ComboboxAnchor :example-prop="example" />
```

### ComboboxEmpty.exampleProp

```vue
<ComboboxEmpty :example-prop="example" />
```

### ComboboxGroup.exampleProp

```vue
<ComboboxGroup :example-prop="example" />
```

### ComboboxInput.exampleProp

```vue
<ComboboxInput :example-prop="example" />
```

### ComboboxItem.exampleProp

```vue
<ComboboxItem :example-prop="example" />
```

### ComboboxList.exampleProp

```vue
<ComboboxList :example-prop="example" />
```

### ComboboxSeparator.exampleProp

```vue
<ComboboxSeparator :example-prop="example" />
```

### ComboboxTrigger.exampleProp

```vue
<ComboboxTrigger :example-prop="example" />
```

### Combobox.emits

```vue
<Combobox @emits="emits" />
```

### ComboboxInput.emits

```vue
<ComboboxInput @emits="emits" />
```

### ComboboxItem.emits

```vue
<ComboboxItem @emits="emits" />
```

### ComboboxList.emits

```vue
<ComboboxList @emits="emits" />
```

### Combobox slot: default

```vue
<Combobox>内容</Combobox>
```

### ComboboxAnchor slot: default

```vue
<ComboboxAnchor>内容</ComboboxAnchor>
```

### ComboboxEmpty slot: default

```vue
<ComboboxEmpty>内容</ComboboxEmpty>
```

### ComboboxGroup slot: default

```vue
<ComboboxGroup>内容</ComboboxGroup>
```

### ComboboxInput slot: default

```vue
<ComboboxInput>内容</ComboboxInput>
```

### ComboboxItem slot: default

```vue
<ComboboxItem>内容</ComboboxItem>
```

### ComboboxList slot: default

```vue
<ComboboxList>内容</ComboboxList>
```

### ComboboxSeparator slot: default

```vue
<ComboboxSeparator>内容</ComboboxSeparator>
```

### ComboboxTrigger slot: default

```vue
<ComboboxTrigger>内容</ComboboxTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/combobox.json
```

