---
title: TagsInput
description: TagsInput 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# TagsInput

TagsInput 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

TagsInput 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/tags-input.json
```

## 导入

```ts
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'
```

## 基础用法

```vue
<TagsInput>
  示例内容
</TagsInput>
```

## 组件导出

- `TagsInput`
- `TagsInputInput`
- `TagsInputItem`
- `TagsInputItemDelete`
- `TagsInputItemText`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `TagsInput` | `props` | `TagsInputRootProps & { class?: HTMLAttributes["class"] }` | `<TagsInput :example-prop="example" />` |
| `TagsInputInput` | `props` | `TagsInputInputProps & { class?: HTMLAttributes["class"] }` | `<TagsInputInput :example-prop="example" />` |
| `TagsInputItem` | `props` | `TagsInputItemProps & { class?: HTMLAttributes["class"] }` | `<TagsInputItem :example-prop="example" />` |
| `TagsInputItemDelete` | `props` | `TagsInputItemDeleteProps & { class?: HTMLAttributes["class"] }` | `<TagsInputItemDelete :example-prop="example" />` |
| `TagsInputItemText` | `props` | `TagsInputItemTextProps & { class?: HTMLAttributes["class"] }` | `<TagsInputItemText :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `TagsInput` | `emits` | `TagsInputRootEmits` | `<TagsInput @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `TagsInput` | `default` | `<TagsInput>内容</TagsInput>` |
| `TagsInputItem` | `default` | `<TagsInputItem>内容</TagsInputItem>` |
| `TagsInputItemDelete` | `default` | `<TagsInputItemDelete>内容</TagsInputItemDelete>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### TagsInput.exampleProp

```vue
<TagsInput :example-prop="example" />
```

### TagsInputInput.exampleProp

```vue
<TagsInputInput :example-prop="example" />
```

### TagsInputItem.exampleProp

```vue
<TagsInputItem :example-prop="example" />
```

### TagsInputItemDelete.exampleProp

```vue
<TagsInputItemDelete :example-prop="example" />
```

### TagsInputItemText.exampleProp

```vue
<TagsInputItemText :example-prop="example" />
```

### TagsInput.emits

```vue
<TagsInput @emits="emits" />
```

### TagsInput slot: default

```vue
<TagsInput>内容</TagsInput>
```

### TagsInputItem slot: default

```vue
<TagsInputItem>内容</TagsInputItem>
```

### TagsInputItemDelete slot: default

```vue
<TagsInputItemDelete>内容</TagsInputItemDelete>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `@meri-design/icon-vue`

## Registry

```txt
/r/tags-input.json
```

