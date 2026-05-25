---
title: Combobox
description: Combobox 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Combobox

Combobox 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Combobox 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="combobox" src="combobox/Basic.vue"}
::

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
| `ComboboxAnchor` | `class` | `HTMLAttributes["class"]` | `<ComboboxAnchor class="border-primary" />` |
| `ComboboxEmpty` | `class` | `HTMLAttributes["class"]` | `<ComboboxEmpty class="border-primary" />` |
| `ComboboxGroup` | `class` | `HTMLAttributes["class"]` | `<ComboboxGroup class="border-primary" />` |
| `ComboboxGroup` | `heading` | `string` | `<ComboboxGroup :heading="example" />` |
| `ComboboxInput` | `class` | `HTMLAttributes["class"]` | `<ComboboxInput class="border-primary" />` |
| `ComboboxItem` | `class` | `HTMLAttributes["class"]` | `<ComboboxItem class="border-primary" />` |
| `ComboboxList` | `class` | `HTMLAttributes["class"]` | `<ComboboxList class="border-primary" />` |
| `ComboboxSeparator` | `class` | `HTMLAttributes["class"]` | `<ComboboxSeparator class="border-primary" />` |
| `ComboboxTrigger` | `class` | `HTMLAttributes["class"]` | `<ComboboxTrigger class="border-primary" />` |
| `Combobox` | 类型引用 | `ComboboxRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Combobox` | 类型引用 | `ComboboxRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `ComboboxInput` | 类型引用 | `ComboboxInputEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `ComboboxItem` | 类型引用 | `ComboboxItemEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `ComboboxList` | 类型引用 | `ComboboxContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

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

### ComboboxAnchor.class

```vue
<ComboboxAnchor class="border-primary" />
```

### ComboboxEmpty.class

```vue
<ComboboxEmpty class="border-primary" />
```

### ComboboxGroup.class

```vue
<ComboboxGroup class="border-primary" />
```

### ComboboxGroup.heading

```vue
<ComboboxGroup :heading="example" />
```

### ComboboxInput.class

```vue
<ComboboxInput class="border-primary" />
```

### ComboboxItem.class

```vue
<ComboboxItem class="border-primary" />
```

### ComboboxList.class

```vue
<ComboboxList class="border-primary" />
```

### ComboboxSeparator.class

```vue
<ComboboxSeparator class="border-primary" />
```

### ComboboxTrigger.class

```vue
<ComboboxTrigger class="border-primary" />
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

