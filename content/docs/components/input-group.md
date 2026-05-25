---
title: InputGroup
description: InputGroup 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# InputGroup

InputGroup 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

InputGroup 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### Icon 图标

::component-preview{name="input-group icon" src="input-group/Icon.vue"}
::

### Text 文本

::component-preview{name="input-group text" src="input-group/Text.vue"}
::

### Button 操作按钮

::component-preview{name="input-group button" src="input-group/Button.vue"}
::

### Tooltip 提示

::component-preview{name="input-group tooltip" src="input-group/Tooltip.vue"}
::

### Textarea 多行输入

::component-preview{name="input-group textarea" src="input-group/Textarea.vue"}
::

### Spinner 加载

::component-preview{name="input-group spinner" src="input-group/Spinner.vue"}
::

### Label 标签

::component-preview{name="input-group label" src="input-group/Label.vue"}
::

### Dropdown 下拉菜单

::component-preview{name="input-group dropdown" src="input-group/Dropdown.vue"}
::

### ButtonGroup 按钮组

::component-preview{name="input-group button group" src="input-group/ButtonGroup.vue"}
::

### Custom Input 自定义输入

::component-preview{name="input-group custom input" src="input-group/CustomInput.vue"}
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
| `InputGroup` | `props` | `Props` | `<InputGroup :example-prop="example" />` |
| `InputGroupAddon` | `align` | `InputGroupVariants["align"]` | `<InputGroupAddon align="inline-start">https://</InputGroupAddon>` |
| `InputGroupAddon` | `class` | `HTMLAttributes["class"]` | `<InputGroupAddon class="text-foreground">https://</InputGroupAddon>` |
| `InputGroupButton` | `variant` | `ButtonVariants["variant"]` | `<InputGroupButton variant="outline">检查</InputGroupButton>` |
| `InputGroupButton` | `size` | `InputGroupButtonVariants["size"]` | `<InputGroupButton size="sm">提交</InputGroupButton>` |
| `InputGroupButton` | `class` | `HTMLAttributes["class"]` | `<InputGroupButton class="text-primary">检查</InputGroupButton>` |
| `InputGroupInput` | `class` | `HTMLAttributes["class"]` | `<InputGroupInput class="text-foreground" />` |
| `InputGroupText` | `class` | `HTMLAttributes["class"]` | `<InputGroupText class="text-foreground">可用</InputGroupText>` |
| `InputGroupTextarea` | `class` | `HTMLAttributes["class"]` | `<InputGroupTextarea class="min-h-24" />` |

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

### InputGroup.exampleProp

```vue
<InputGroup :example-prop="example" />
```

### InputGroupAddon.align

```vue
<InputGroupAddon align="inline-start">https://</InputGroupAddon>
```

### InputGroupAddon.class

```vue
<InputGroupAddon class="text-foreground">https://</InputGroupAddon>
```

### InputGroupButton.variant

```vue
<InputGroupButton variant="outline">检查</InputGroupButton>
```

### InputGroupButton.size

```vue
<InputGroupButton size="sm">提交</InputGroupButton>
```

### InputGroupButton.class

```vue
<InputGroupButton class="text-primary">检查</InputGroupButton>
```

### InputGroupInput.class

```vue
<InputGroupInput class="text-foreground" />
```

### InputGroupText.class

```vue
<InputGroupText class="text-foreground">可用</InputGroupText>
```

### InputGroupTextarea.class

```vue
<InputGroupTextarea class="min-h-24" />
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

