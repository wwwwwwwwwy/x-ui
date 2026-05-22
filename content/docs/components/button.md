---
title: Button
description: Button 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Button

Button 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Button 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="button" src="button/Basic.vue"}
::

### Variant 变体

::component-preview{name="button variant" src="button/Variants.vue"}
::

### Size 尺寸

::component-preview{name="button size" src="button/Sizes.vue"}
::

### Disabled 禁用

::component-preview{name="button disabled" src="button/Disabled.vue"}
::

### Loading 加载中

::component-preview{name="button loading" src="button/Loading.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/button.json
```

## 导入

```ts
import { Button } from '@/components/ui/button'
```

## 基础用法

```vue
<Button>
  示例内容
</Button>
```

## 组件导出

- `Button`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Button` | `props` | `Props` | `<Button :example-prop="example" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Button` | `loading-icon` | `<Button> <template #loading-icon>自定义 loading-icon</template> </Button>` |
| `Button` | `default` | `<Button>内容</Button>` |

### Exports

- `export const buttonVariants = cva(`
- `export type ButtonVariants = VariantProps<typeof buttonVariants>`

## API 示例

### Button.exampleProp

```vue
<Button :example-prop="example" />
```

### Button slot: loading-icon

```vue
<Button>
  <template #loading-icon>自定义 loading-icon</template>
</Button>
```

### Button slot: default

```vue
<Button>内容</Button>
```

## 依赖

- `reka-ui`
- `lucide-vue-next`

## Registry

```txt
/r/button.json
```

