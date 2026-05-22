---
title: Alert
description: Alert 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Alert

Alert 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Alert 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/alert.json
```

## 导入

```ts
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
```

## 基础用法

```vue
<Alert>
  示例内容
</Alert>
```

## 组件导出

- `Alert`
- `AlertDescription`
- `AlertTitle`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Alert` | `class` | `HTMLAttributes["class"]` | `<Alert class="custom-class" />` |
| `Alert` | `variant` | `AlertVariants["variant"]` | `<Alert :variant="example" />` |
| `AlertDescription` | `class` | `HTMLAttributes["class"]` | `<AlertDescription class="custom-class" />` |
| `AlertTitle` | `class` | `HTMLAttributes["class"]` | `<AlertTitle class="custom-class" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Alert` | `default` | `<Alert>内容</Alert>` |
| `AlertDescription` | `default` | `<AlertDescription>内容</AlertDescription>` |
| `AlertTitle` | `default` | `<AlertTitle>内容</AlertTitle>` |

### Exports

- `export const alertVariants = cva(`
- `export type AlertVariants = VariantProps<typeof alertVariants>`

## API 示例

### Alert.class

```vue
<Alert class="custom-class" />
```

### Alert.variant

```vue
<Alert :variant="example" />
```

### AlertDescription.class

```vue
<AlertDescription class="custom-class" />
```

### AlertTitle.class

```vue
<AlertTitle class="custom-class" />
```

### Alert slot: default

```vue
<Alert>内容</Alert>
```

### AlertDescription slot: default

```vue
<AlertDescription>内容</AlertDescription>
```

### AlertTitle slot: default

```vue
<AlertTitle>内容</AlertTitle>
```

## 依赖

本地组件源码中未检测到外部运行时依赖。

## Registry

```txt
/r/alert.json
```

