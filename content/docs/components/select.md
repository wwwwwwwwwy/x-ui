---
title: Select
description: Select 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Select

Select 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Select 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="select" src="select/Basic.vue"}
::

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
| `SelectContent` | `class` | `HTMLAttributes["class"]` | `<SelectContent class="border-primary" />` |
| `SelectGroup` | `class` | `HTMLAttributes["class"]` | `<SelectGroup class="border-primary" />` |
| `SelectItem` | `class` | `HTMLAttributes["class"]` | `<SelectItem class="border-primary" />` |
| `SelectLabel` | `class` | `HTMLAttributes["class"]` | `<SelectLabel class="border-primary" />` |
| `SelectScrollDownButton` | `class` | `HTMLAttributes["class"]` | `<SelectScrollDownButton class="border-primary" />` |
| `SelectScrollUpButton` | `class` | `HTMLAttributes["class"]` | `<SelectScrollUpButton class="border-primary" />` |
| `SelectSeparator` | `class` | `HTMLAttributes["class"]` | `<SelectSeparator class="border-primary" />` |
| `SelectTrigger` | `class` | `HTMLAttributes["class"]` | `<SelectTrigger class="border-primary" />` |
| `Select` | 类型引用 | `SelectRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `SelectItemText` | 类型引用 | `SelectItemTextProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `SelectValue` | 类型引用 | `SelectValueProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Select` | 类型引用 | `SelectRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `SelectContent` | 类型引用 | `SelectContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

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

### SelectContent.class

```vue
<SelectContent class="border-primary" />
```

### SelectGroup.class

```vue
<SelectGroup class="border-primary" />
```

### SelectItem.class

```vue
<SelectItem class="border-primary" />
```

### SelectLabel.class

```vue
<SelectLabel class="border-primary" />
```

### SelectScrollDownButton.class

```vue
<SelectScrollDownButton class="border-primary" />
```

### SelectScrollUpButton.class

```vue
<SelectScrollUpButton class="border-primary" />
```

### SelectSeparator.class

```vue
<SelectSeparator class="border-primary" />
```

### SelectTrigger.class

```vue
<SelectTrigger class="border-primary" />
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

