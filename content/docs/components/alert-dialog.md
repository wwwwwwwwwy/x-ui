---
title: AlertDialog
description: AlertDialog 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# AlertDialog

AlertDialog 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

AlertDialog 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="alert-dialog" src="alert-dialog/Basic.vue"}
::

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
| `AlertDialogAction` | `class` | `HTMLAttributes["class"]` | `<AlertDialogAction class="border-primary" />` |
| `AlertDialogCancel` | `class` | `HTMLAttributes["class"]` | `<AlertDialogCancel class="border-primary" />` |
| `AlertDialogContent` | `class` | `HTMLAttributes["class"]` | `<AlertDialogContent class="border-primary" />` |
| `AlertDialogDescription` | `class` | `HTMLAttributes["class"]` | `<AlertDialogDescription class="border-primary" />` |
| `AlertDialogFooter` | `class` | `HTMLAttributes["class"]` | `<AlertDialogFooter class="border-primary" />` |
| `AlertDialogHeader` | `class` | `HTMLAttributes["class"]` | `<AlertDialogHeader class="border-primary" />` |
| `AlertDialogTitle` | `class` | `HTMLAttributes["class"]` | `<AlertDialogTitle class="border-primary" />` |
| `AlertDialog` | 类型引用 | `AlertDialogProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `AlertDialogTrigger` | 类型引用 | `AlertDialogTriggerProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `AlertDialog` | 类型引用 | `AlertDialogEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `AlertDialogContent` | 类型引用 | `AlertDialogContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

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

### AlertDialogAction.class

```vue
<AlertDialogAction class="border-primary" />
```

### AlertDialogCancel.class

```vue
<AlertDialogCancel class="border-primary" />
```

### AlertDialogContent.class

```vue
<AlertDialogContent class="border-primary" />
```

### AlertDialogDescription.class

```vue
<AlertDialogDescription class="border-primary" />
```

### AlertDialogFooter.class

```vue
<AlertDialogFooter class="border-primary" />
```

### AlertDialogHeader.class

```vue
<AlertDialogHeader class="border-primary" />
```

### AlertDialogTitle.class

```vue
<AlertDialogTitle class="border-primary" />
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

