---
title: PinInput
description: PinInput 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# PinInput

PinInput 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

PinInput 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="pin-input" src="pin-input/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/pin-input.json
```

## 导入

```ts
import { PinInput, PinInputGroup, PinInputSeparator, PinInputSlot } from '@/components/ui/pin-input'
```

## 基础用法

```vue
<PinInput>
  示例内容
</PinInput>
```

## 组件导出

- `PinInput`
- `PinInputGroup`
- `PinInputSeparator`
- `PinInputSlot`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `PinInput` | `class` | `HTMLAttributes["class"]` | `<PinInput class="border-primary" />` |
| `PinInputGroup` | `class` | `HTMLAttributes["class"]` | `<PinInputGroup class="border-primary" />` |
| `PinInputSlot` | `class` | `HTMLAttributes["class"]` | `<PinInputSlot class="border-primary" />` |
| `PinInputSeparator` | 类型引用 | `PrimitiveProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `PinInput` | 类型引用 | `PinInputRootEmits<Type>` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `PinInput` | `default` | `<PinInput>内容</PinInput>` |
| `PinInputGroup` | `default` | `<PinInputGroup>内容</PinInputGroup>` |
| `PinInputSeparator` | `default` | `<PinInputSeparator>内容</PinInputSeparator>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### PinInput.class

```vue
<PinInput class="border-primary" />
```

### PinInputGroup.class

```vue
<PinInputGroup class="border-primary" />
```

### PinInputSlot.class

```vue
<PinInputSlot class="border-primary" />
```

### PinInput slot: default

```vue
<PinInput>内容</PinInput>
```

### PinInputGroup slot: default

```vue
<PinInputGroup>内容</PinInputGroup>
```

### PinInputSeparator slot: default

```vue
<PinInputSeparator>内容</PinInputSeparator>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/pin-input.json
```

