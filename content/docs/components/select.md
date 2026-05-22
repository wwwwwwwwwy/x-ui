---
title: Select
description: Select 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Select

Select 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Select 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/select.json
```

## 导入

```ts
import { Select, SelectContent, SelectGroup, SelectItem, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
```

## 基础用法

```vue
<Select>
  示例内容
</Select>
```

## 组件导出

- `Select`
- `SelectContent`
- `SelectGroup`
- `SelectItem`
- `SelectItemText`
- `SelectLabel`
- `SelectScrollDownButton`
- `SelectScrollUpButton`
- `SelectSeparator`
- `SelectTrigger`
- `SelectValue`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Select` | `props` | `SelectRootProps` | `<Select :example-prop="example" />` |
| `SelectContent` | `props` | `SelectContentProps & { class?: HTMLAttributes["class"] }` | `<SelectContent :example-prop="example" />` |
| `SelectGroup` | `props` | `SelectGroupProps & { class?: HTMLAttributes["class"] }` | `<SelectGroup :example-prop="example" />` |
| `SelectItem` | `props` | `SelectItemProps & { class?: HTMLAttributes["class"] }` | `<SelectItem :example-prop="example" />` |
| `SelectItemText` | `props` | `SelectItemTextProps` | `<SelectItemText :example-prop="example" />` |
| `SelectLabel` | `props` | `SelectLabelProps & { class?: HTMLAttributes["class"] }` | `<SelectLabel :example-prop="example" />` |
| `SelectScrollDownButton` | `props` | `SelectScrollDownButtonProps & { class?: HTMLAttributes["class"] }` | `<SelectScrollDownButton :example-prop="example" />` |
| `SelectScrollUpButton` | `props` | `SelectScrollUpButtonProps & { class?: HTMLAttributes["class"] }` | `<SelectScrollUpButton :example-prop="example" />` |
| `SelectSeparator` | `props` | `SelectSeparatorProps & { class?: HTMLAttributes["class"] }` | `<SelectSeparator :example-prop="example" />` |
| `SelectTrigger` | `props` | `SelectTriggerProps & { class?: HTMLAttributes["class"] }` | `<SelectTrigger :example-prop="example" />` |
| `SelectValue` | `props` | `SelectValueProps` | `<SelectValue :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Select` | `emits` | `SelectRootEmits` | `<Select @emits="emits" />` |
| `SelectContent` | `emits` | `SelectContentEmits` | `<SelectContent @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Select` | `default` | `<Select>内容</Select>` |
| `SelectContent` | `default` | `<SelectContent>内容</SelectContent>` |
| `SelectGroup` | `default` | `<SelectGroup>内容</SelectGroup>` |
| `SelectItem` | `default` | `<SelectItem>内容</SelectItem>` |
| `SelectItemText` | `default` | `<SelectItemText>内容</SelectItemText>` |
| `SelectLabel` | `default` | `<SelectLabel>内容</SelectLabel>` |
| `SelectScrollDownButton` | `default` | `<SelectScrollDownButton>内容</SelectScrollDownButton>` |
| `SelectScrollUpButton` | `default` | `<SelectScrollUpButton>内容</SelectScrollUpButton>` |
| `SelectTrigger` | `default` | `<SelectTrigger>内容</SelectTrigger>` |
| `SelectValue` | `default` | `<SelectValue>内容</SelectValue>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Select.exampleProp

```vue
<Select :example-prop="example" />
```

### SelectContent.exampleProp

```vue
<SelectContent :example-prop="example" />
```

### SelectGroup.exampleProp

```vue
<SelectGroup :example-prop="example" />
```

### SelectItem.exampleProp

```vue
<SelectItem :example-prop="example" />
```

### SelectItemText.exampleProp

```vue
<SelectItemText :example-prop="example" />
```

### SelectLabel.exampleProp

```vue
<SelectLabel :example-prop="example" />
```

### SelectScrollDownButton.exampleProp

```vue
<SelectScrollDownButton :example-prop="example" />
```

### SelectScrollUpButton.exampleProp

```vue
<SelectScrollUpButton :example-prop="example" />
```

### SelectSeparator.exampleProp

```vue
<SelectSeparator :example-prop="example" />
```

### SelectTrigger.exampleProp

```vue
<SelectTrigger :example-prop="example" />
```

### SelectValue.exampleProp

```vue
<SelectValue :example-prop="example" />
```

### Select.emits

```vue
<Select @emits="emits" />
```

### SelectContent.emits

```vue
<SelectContent @emits="emits" />
```

### Select slot: default

```vue
<Select>内容</Select>
```

### SelectContent slot: default

```vue
<SelectContent>内容</SelectContent>
```

### SelectGroup slot: default

```vue
<SelectGroup>内容</SelectGroup>
```

### SelectItem slot: default

```vue
<SelectItem>内容</SelectItem>
```

### SelectItemText slot: default

```vue
<SelectItemText>内容</SelectItemText>
```

### SelectLabel slot: default

```vue
<SelectLabel>内容</SelectLabel>
```

### SelectScrollDownButton slot: default

```vue
<SelectScrollDownButton>内容</SelectScrollDownButton>
```

### SelectScrollUpButton slot: default

```vue
<SelectScrollUpButton>内容</SelectScrollUpButton>
```

### SelectTrigger slot: default

```vue
<SelectTrigger>内容</SelectTrigger>
```

### SelectValue slot: default

```vue
<SelectValue>内容</SelectValue>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/select.json
```

