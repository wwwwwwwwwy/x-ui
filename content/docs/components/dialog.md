---
title: Dialog
description: Dialog 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Dialog

Dialog 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Dialog 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

::component-preview{name="dialog" src="dialog/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/dialog.json
```

## 导入

```ts
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogScrollContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
```

## 基础用法

```vue
<Dialog>
  示例内容
</Dialog>
```

## 组件导出

- `Dialog`
- `DialogClose`
- `DialogContent`
- `DialogDescription`
- `DialogFooter`
- `DialogHeader`
- `DialogScrollContent`
- `DialogTitle`
- `DialogTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Dialog` | `props` | `DialogRootProps` | `<Dialog :example-prop="example" />` |
| `DialogClose` | `props` | `DialogCloseProps` | `<DialogClose :example-prop="example" />` |
| `DialogContent` | `props` | `DialogContentProps & { class?: HTMLAttributes["class"] }` | `<DialogContent :example-prop="example" />` |
| `DialogDescription` | `props` | `DialogDescriptionProps & { class?: HTMLAttributes["class"] }` | `<DialogDescription :example-prop="example" />` |
| `DialogFooter` | `class` | `HTMLAttributes["class"]` | `<DialogFooter class="custom-class" />` |
| `DialogHeader` | `class` | `HTMLAttributes["class"]` | `<DialogHeader class="custom-class" />` |
| `DialogScrollContent` | `props` | `DialogContentProps & { class?: HTMLAttributes["class"] }` | `<DialogScrollContent :example-prop="example" />` |
| `DialogTitle` | `props` | `DialogTitleProps & { class?: HTMLAttributes["class"] }` | `<DialogTitle :example-prop="example" />` |
| `DialogTrigger` | `props` | `DialogTriggerProps` | `<DialogTrigger :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Dialog` | `emits` | `DialogRootEmits` | `<Dialog @emits="emits" />` |
| `DialogContent` | `emits` | `DialogContentEmits` | `<DialogContent @emits="emits" />` |
| `DialogScrollContent` | `emits` | `DialogContentEmits` | `<DialogScrollContent @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Dialog` | `default` | `<Dialog>内容</Dialog>` |
| `DialogClose` | `default` | `<DialogClose>内容</DialogClose>` |
| `DialogContent` | `default` | `<DialogContent>内容</DialogContent>` |
| `DialogDescription` | `default` | `<DialogDescription>内容</DialogDescription>` |
| `DialogFooter` | `default` | `<DialogFooter>内容</DialogFooter>` |
| `DialogHeader` | `default` | `<DialogHeader>内容</DialogHeader>` |
| `DialogScrollContent` | `default` | `<DialogScrollContent>内容</DialogScrollContent>` |
| `DialogTitle` | `default` | `<DialogTitle>内容</DialogTitle>` |
| `DialogTrigger` | `default` | `<DialogTrigger>内容</DialogTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Dialog.exampleProp

```vue
<Dialog :example-prop="example" />
```

### DialogClose.exampleProp

```vue
<DialogClose :example-prop="example" />
```

### DialogContent.exampleProp

```vue
<DialogContent :example-prop="example" />
```

### DialogDescription.exampleProp

```vue
<DialogDescription :example-prop="example" />
```

### DialogFooter.class

```vue
<DialogFooter class="custom-class" />
```

### DialogHeader.class

```vue
<DialogHeader class="custom-class" />
```

### DialogScrollContent.exampleProp

```vue
<DialogScrollContent :example-prop="example" />
```

### DialogTitle.exampleProp

```vue
<DialogTitle :example-prop="example" />
```

### DialogTrigger.exampleProp

```vue
<DialogTrigger :example-prop="example" />
```

### Dialog.emits

```vue
<Dialog @emits="emits" />
```

### DialogContent.emits

```vue
<DialogContent @emits="emits" />
```

### DialogScrollContent.emits

```vue
<DialogScrollContent @emits="emits" />
```

### Dialog slot: default

```vue
<Dialog>内容</Dialog>
```

### DialogClose slot: default

```vue
<DialogClose>内容</DialogClose>
```

### DialogContent slot: default

```vue
<DialogContent>内容</DialogContent>
```

### DialogDescription slot: default

```vue
<DialogDescription>内容</DialogDescription>
```

### DialogFooter slot: default

```vue
<DialogFooter>内容</DialogFooter>
```

### DialogHeader slot: default

```vue
<DialogHeader>内容</DialogHeader>
```

### DialogScrollContent slot: default

```vue
<DialogScrollContent>内容</DialogScrollContent>
```

### DialogTitle slot: default

```vue
<DialogTitle>内容</DialogTitle>
```

### DialogTrigger slot: default

```vue
<DialogTrigger>内容</DialogTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/dialog.json
```

