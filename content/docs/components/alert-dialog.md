---
title: AlertDialog
description: AlertDialog 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# AlertDialog

AlertDialog 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

AlertDialog 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/alert-dialog.json
```

## 导入

```ts
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
```

## 基础用法

```vue
<AlertDialog>
  示例内容
</AlertDialog>
```

## 组件导出

- `AlertDialog`
- `AlertDialogAction`
- `AlertDialogCancel`
- `AlertDialogContent`
- `AlertDialogDescription`
- `AlertDialogFooter`
- `AlertDialogHeader`
- `AlertDialogTitle`
- `AlertDialogTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `AlertDialog` | `props` | `AlertDialogProps` | `<AlertDialog :example-prop="example" />` |
| `AlertDialogAction` | `props` | `AlertDialogActionProps & { class?: HTMLAttributes["class"] }` | `<AlertDialogAction :example-prop="example" />` |
| `AlertDialogCancel` | `props` | `AlertDialogCancelProps & { class?: HTMLAttributes["class"] }` | `<AlertDialogCancel :example-prop="example" />` |
| `AlertDialogContent` | `props` | `AlertDialogContentProps & { class?: HTMLAttributes["class"] }` | `<AlertDialogContent :example-prop="example" />` |
| `AlertDialogDescription` | `props` | `AlertDialogDescriptionProps & { class?: HTMLAttributes["class"] }` | `<AlertDialogDescription :example-prop="example" />` |
| `AlertDialogFooter` | `class` | `HTMLAttributes["class"]` | `<AlertDialogFooter class="custom-class" />` |
| `AlertDialogHeader` | `class` | `HTMLAttributes["class"]` | `<AlertDialogHeader class="custom-class" />` |
| `AlertDialogTitle` | `props` | `AlertDialogTitleProps & { class?: HTMLAttributes["class"] }` | `<AlertDialogTitle :example-prop="example" />` |
| `AlertDialogTrigger` | `props` | `AlertDialogTriggerProps` | `<AlertDialogTrigger :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `AlertDialog` | `emits` | `AlertDialogEmits` | `<AlertDialog @emits="emits" />` |
| `AlertDialogContent` | `emits` | `AlertDialogContentEmits` | `<AlertDialogContent @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `AlertDialog` | `default` | `<AlertDialog>内容</AlertDialog>` |
| `AlertDialogAction` | `default` | `<AlertDialogAction>内容</AlertDialogAction>` |
| `AlertDialogCancel` | `default` | `<AlertDialogCancel>内容</AlertDialogCancel>` |
| `AlertDialogContent` | `default` | `<AlertDialogContent>内容</AlertDialogContent>` |
| `AlertDialogDescription` | `default` | `<AlertDialogDescription>内容</AlertDialogDescription>` |
| `AlertDialogFooter` | `default` | `<AlertDialogFooter>内容</AlertDialogFooter>` |
| `AlertDialogHeader` | `default` | `<AlertDialogHeader>内容</AlertDialogHeader>` |
| `AlertDialogTitle` | `default` | `<AlertDialogTitle>内容</AlertDialogTitle>` |
| `AlertDialogTrigger` | `default` | `<AlertDialogTrigger>内容</AlertDialogTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### AlertDialog.exampleProp

```vue
<AlertDialog :example-prop="example" />
```

### AlertDialogAction.exampleProp

```vue
<AlertDialogAction :example-prop="example" />
```

### AlertDialogCancel.exampleProp

```vue
<AlertDialogCancel :example-prop="example" />
```

### AlertDialogContent.exampleProp

```vue
<AlertDialogContent :example-prop="example" />
```

### AlertDialogDescription.exampleProp

```vue
<AlertDialogDescription :example-prop="example" />
```

### AlertDialogFooter.class

```vue
<AlertDialogFooter class="custom-class" />
```

### AlertDialogHeader.class

```vue
<AlertDialogHeader class="custom-class" />
```

### AlertDialogTitle.exampleProp

```vue
<AlertDialogTitle :example-prop="example" />
```

### AlertDialogTrigger.exampleProp

```vue
<AlertDialogTrigger :example-prop="example" />
```

### AlertDialog.emits

```vue
<AlertDialog @emits="emits" />
```

### AlertDialogContent.emits

```vue
<AlertDialogContent @emits="emits" />
```

### AlertDialog slot: default

```vue
<AlertDialog>内容</AlertDialog>
```

### AlertDialogAction slot: default

```vue
<AlertDialogAction>内容</AlertDialogAction>
```

### AlertDialogCancel slot: default

```vue
<AlertDialogCancel>内容</AlertDialogCancel>
```

### AlertDialogContent slot: default

```vue
<AlertDialogContent>内容</AlertDialogContent>
```

### AlertDialogDescription slot: default

```vue
<AlertDialogDescription>内容</AlertDialogDescription>
```

### AlertDialogFooter slot: default

```vue
<AlertDialogFooter>内容</AlertDialogFooter>
```

### AlertDialogHeader slot: default

```vue
<AlertDialogHeader>内容</AlertDialogHeader>
```

### AlertDialogTitle slot: default

```vue
<AlertDialogTitle>内容</AlertDialogTitle>
```

### AlertDialogTrigger slot: default

```vue
<AlertDialogTrigger>内容</AlertDialogTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/alert-dialog.json
```

