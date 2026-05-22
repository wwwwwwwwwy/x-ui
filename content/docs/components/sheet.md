---
title: Sheet
description: Sheet 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Sheet

Sheet 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Sheet 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/sheet.json
```

## 导入

```ts
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
```

## 基础用法

```vue
<Sheet>
  示例内容
</Sheet>
```

## 组件导出

- `Sheet`
- `SheetClose`
- `SheetContent`
- `SheetDescription`
- `SheetFooter`
- `SheetHeader`
- `SheetTitle`
- `SheetTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Sheet` | `props` | `DialogRootProps` | `<Sheet :example-prop="example" />` |
| `SheetClose` | `props` | `DialogCloseProps` | `<SheetClose :example-prop="example" />` |
| `SheetContent` | `props` | `SheetContentProps` | `<SheetContent :example-prop="example" />` |
| `SheetDescription` | `props` | `DialogDescriptionProps & { class?: HTMLAttributes["class"] }` | `<SheetDescription :example-prop="example" />` |
| `SheetFooter` | `class` | `HTMLAttributes["class"]` | `<SheetFooter class="custom-class" />` |
| `SheetHeader` | `class` | `HTMLAttributes["class"]` | `<SheetHeader class="custom-class" />` |
| `SheetTitle` | `props` | `DialogTitleProps & { class?: HTMLAttributes["class"] }` | `<SheetTitle :example-prop="example" />` |
| `SheetTrigger` | `props` | `DialogTriggerProps` | `<SheetTrigger :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Sheet` | `emits` | `DialogRootEmits` | `<Sheet @emits="emits" />` |
| `SheetContent` | `emits` | `DialogContentEmits` | `<SheetContent @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Sheet` | `default` | `<Sheet>内容</Sheet>` |
| `SheetClose` | `default` | `<SheetClose>内容</SheetClose>` |
| `SheetContent` | `default` | `<SheetContent>内容</SheetContent>` |
| `SheetDescription` | `default` | `<SheetDescription>内容</SheetDescription>` |
| `SheetFooter` | `default` | `<SheetFooter>内容</SheetFooter>` |
| `SheetHeader` | `default` | `<SheetHeader>内容</SheetHeader>` |
| `SheetTitle` | `default` | `<SheetTitle>内容</SheetTitle>` |
| `SheetTrigger` | `default` | `<SheetTrigger>内容</SheetTrigger>` |

### Exports

- `export const sheetVariants = cva(`
- `export type SheetVariants = VariantProps<typeof sheetVariants>`

## API 示例

### Sheet.exampleProp

```vue
<Sheet :example-prop="example" />
```

### SheetClose.exampleProp

```vue
<SheetClose :example-prop="example" />
```

### SheetContent.exampleProp

```vue
<SheetContent :example-prop="example" />
```

### SheetDescription.exampleProp

```vue
<SheetDescription :example-prop="example" />
```

### SheetFooter.class

```vue
<SheetFooter class="custom-class" />
```

### SheetHeader.class

```vue
<SheetHeader class="custom-class" />
```

### SheetTitle.exampleProp

```vue
<SheetTitle :example-prop="example" />
```

### SheetTrigger.exampleProp

```vue
<SheetTrigger :example-prop="example" />
```

### Sheet.emits

```vue
<Sheet @emits="emits" />
```

### SheetContent.emits

```vue
<SheetContent @emits="emits" />
```

### Sheet slot: default

```vue
<Sheet>内容</Sheet>
```

### SheetClose slot: default

```vue
<SheetClose>内容</SheetClose>
```

### SheetContent slot: default

```vue
<SheetContent>内容</SheetContent>
```

### SheetDescription slot: default

```vue
<SheetDescription>内容</SheetDescription>
```

### SheetFooter slot: default

```vue
<SheetFooter>内容</SheetFooter>
```

### SheetHeader slot: default

```vue
<SheetHeader>内容</SheetHeader>
```

### SheetTitle slot: default

```vue
<SheetTitle>内容</SheetTitle>
```

### SheetTrigger slot: default

```vue
<SheetTrigger>内容</SheetTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `@meri-design/icon-vue`

## Registry

```txt
/r/sheet.json
```

