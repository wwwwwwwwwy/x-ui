---
title: Sheet
description: Sheet 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Sheet

Sheet 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Sheet 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="sheet" src="sheet/Basic.vue"}
::

### RightSide 右侧展开

::component-preview{name="sheet right side" src="sheet/RightSide.vue"}
::

### LeftSide 左侧展开

::component-preview{name="sheet left side" src="sheet/LeftSide.vue"}
::

### SheetDescription 说明文本

::component-preview{name="sheet description" src="sheet/SheetDescription.vue"}
::

### SheetFooter 底部操作

::component-preview{name="sheet footer" src="sheet/SheetFooter.vue"}
::

### SheetHeader 标题区

::component-preview{name="sheet header" src="sheet/SheetHeader.vue"}
::

### SheetTitle 标题

::component-preview{name="sheet title" src="sheet/SheetTitle.vue"}
::

### SheetClose 关闭

::component-preview{name="sheet close" src="sheet/SheetClose.vue"}
::

### SheetTrigger 触发

::component-preview{name="sheet trigger" src="sheet/SheetTrigger.vue"}
::

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
| `SheetDescription` | `class` | `HTMLAttributes["class"]` | `<SheetDescription class="border-primary" />` |
| `SheetFooter` | `class` | `HTMLAttributes["class"]` | `<SheetFooter class="border-primary" />` |
| `SheetHeader` | `class` | `HTMLAttributes["class"]` | `<SheetHeader class="border-primary" />` |
| `SheetTitle` | `class` | `HTMLAttributes["class"]` | `<SheetTitle class="border-primary" />` |
| `Sheet` | 类型引用 | `DialogRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `SheetClose` | 类型引用 | `DialogCloseProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `SheetContent` | 类型引用 | `SheetContentProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `SheetTrigger` | 类型引用 | `DialogTriggerProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Sheet` | 类型引用 | `DialogRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `SheetContent` | 类型引用 | `DialogContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

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

### SheetDescription.class

```vue
<SheetDescription class="border-primary" />
```

### SheetFooter.class

```vue
<SheetFooter class="border-primary" />
```

### SheetHeader.class

```vue
<SheetHeader class="border-primary" />
```

### SheetTitle.class

```vue
<SheetTitle class="border-primary" />
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
- `lucide-vue-next`

## Registry

```txt
/r/sheet.json
```

