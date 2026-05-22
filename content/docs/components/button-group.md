---
title: ButtonGroup
description: ButtonGroup 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# ButtonGroup

ButtonGroup 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

ButtonGroup 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/button-group.json
```

## 导入

```ts
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
```

## 基础用法

```vue
<ButtonGroup>
  示例内容
</ButtonGroup>
```

## 组件导出

- `ButtonGroup`
- `ButtonGroupSeparator`
- `ButtonGroupText`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ButtonGroup` | `class` | `HTMLAttributes["class"]` | `<ButtonGroup class="custom-class" />` |
| `ButtonGroup` | `orientation` | `ButtonGroupVariants["orientation"]` | `<ButtonGroup :orientation="example" />` |
| `ButtonGroupSeparator` | `props` | `SeparatorProps & { class?: HTMLAttributes["class"] }` | `<ButtonGroupSeparator :example-prop="example" />` |
| `ButtonGroupText` | `props` | `Props` | `<ButtonGroupText :example-prop="example" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `ButtonGroup` | `default` | `<ButtonGroup>内容</ButtonGroup>` |
| `ButtonGroupText` | `default` | `<ButtonGroupText>内容</ButtonGroupText>` |

### Exports

- `export const buttonGroupVariants = cva(`
- `export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>`

## API 示例

### ButtonGroup.class

```vue
<ButtonGroup class="custom-class" />
```

### ButtonGroup.orientation

```vue
<ButtonGroup :orientation="example" />
```

### ButtonGroupSeparator.exampleProp

```vue
<ButtonGroupSeparator :example-prop="example" />
```

### ButtonGroupText.exampleProp

```vue
<ButtonGroupText :example-prop="example" />
```

### ButtonGroup slot: default

```vue
<ButtonGroup>内容</ButtonGroup>
```

### ButtonGroupText slot: default

```vue
<ButtonGroupText>内容</ButtonGroupText>
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/button-group.json
```

