---
title: InputGroup
description: InputGroup 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# InputGroup

InputGroup 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

InputGroup 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

::component-preview{name="input-group" src="input-group/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/input-group.json
```

## 导入

```ts
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
```

## 基础用法

```vue
<InputGroup>
  示例内容
</InputGroup>
```

## 组件导出

- `InputGroup`
- `InputGroupAddon`
- `InputGroupButton`
- `InputGroupInput`
- `InputGroupText`
- `InputGroupTextarea`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `InputGroup` | `class` | `HTMLAttributes["class"]` | `<InputGroup class="custom-class" />` |
| `InputGroupAddon` | `align` | `InputGroupVariants["align"]` | `<InputGroupAddon :align="example" />` |
| `InputGroupAddon` | `class` | `HTMLAttributes["class"]` | `<InputGroupAddon class="custom-class" />` |
| `InputGroupButton` | `props` | `InputGroupButtonProps` | `<InputGroupButton :example-prop="example" />` |
| `InputGroupInput` | `class` | `HTMLAttributes["class"]` | `<InputGroupInput class="custom-class" />` |
| `InputGroupText` | `class` | `HTMLAttributes["class"]` | `<InputGroupText class="custom-class" />` |
| `InputGroupTextarea` | `class` | `HTMLAttributes["class"]` | `<InputGroupTextarea class="custom-class" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `InputGroup` | `default` | `<InputGroup>内容</InputGroup>` |
| `InputGroupAddon` | `default` | `<InputGroupAddon>内容</InputGroupAddon>` |
| `InputGroupButton` | `default` | `<InputGroupButton>内容</InputGroupButton>` |
| `InputGroupText` | `default` | `<InputGroupText>内容</InputGroupText>` |

### Exports

- `export const inputGroupAddonVariants = cva(`
- `export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>`
- `export const inputGroupButtonVariants = cva(`
- `export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>`
- `export interface InputGroupButtonProps {`

## API 示例

### InputGroup.class

```vue
<InputGroup class="custom-class" />
```

### InputGroupAddon.align

```vue
<InputGroupAddon :align="example" />
```

### InputGroupAddon.class

```vue
<InputGroupAddon class="custom-class" />
```

### InputGroupButton.exampleProp

```vue
<InputGroupButton :example-prop="example" />
```

### InputGroupInput.class

```vue
<InputGroupInput class="custom-class" />
```

### InputGroupText.class

```vue
<InputGroupText class="custom-class" />
```

### InputGroupTextarea.class

```vue
<InputGroupTextarea class="custom-class" />
```

### InputGroup slot: default

```vue
<InputGroup>内容</InputGroup>
```

### InputGroupAddon slot: default

```vue
<InputGroupAddon>内容</InputGroupAddon>
```

### InputGroupButton slot: default

```vue
<InputGroupButton>内容</InputGroupButton>
```

### InputGroupText slot: default

```vue
<InputGroupText>内容</InputGroupText>
```

## 依赖

本地组件源码中未检测到外部运行时依赖。

## Registry

```txt
/r/input-group.json
```

