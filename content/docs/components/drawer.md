---
title: Drawer
description: Drawer 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Drawer

Drawer 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Drawer 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/drawer.json
```

## 导入

```ts
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerTitle } from '@/components/ui/drawer'
```

## 基础用法

```vue
<Drawer>
  示例内容
</Drawer>
```

## 组件导出

- `Drawer`
- `DrawerContent`
- `DrawerDescription`
- `DrawerFooter`
- `DrawerHeader`
- `DrawerOverlay`
- `DrawerTitle`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Drawer` | `props` | `DrawerRootProps` | `<Drawer :example-prop="example" />` |
| `DrawerContent` | `props` | `DialogContentProps & { class?: HTMLAttributes["class"] }` | `<DrawerContent :example-prop="example" />` |
| `DrawerDescription` | `props` | `DrawerDescriptionProps & { class?: HTMLAttributes["class"] }` | `<DrawerDescription :example-prop="example" />` |
| `DrawerFooter` | `class` | `HTMLAttributes["class"]` | `<DrawerFooter class="custom-class" />` |
| `DrawerHeader` | `class` | `HTMLAttributes["class"]` | `<DrawerHeader class="custom-class" />` |
| `DrawerOverlay` | `props` | `DialogOverlayProps & { class?: HTMLAttributes["class"] }` | `<DrawerOverlay :example-prop="example" />` |
| `DrawerTitle` | `props` | `DrawerTitleProps & { class?: HTMLAttributes["class"] }` | `<DrawerTitle :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Drawer` | `emits` | `DrawerRootEmits` | `<Drawer @emits="emits" />` |
| `DrawerContent` | `emits` | `DialogContentEmits` | `<DrawerContent @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Drawer` | `default` | `<Drawer>内容</Drawer>` |
| `DrawerContent` | `default` | `<DrawerContent>内容</DrawerContent>` |
| `DrawerDescription` | `default` | `<DrawerDescription>内容</DrawerDescription>` |
| `DrawerFooter` | `default` | `<DrawerFooter>内容</DrawerFooter>` |
| `DrawerHeader` | `default` | `<DrawerHeader>内容</DrawerHeader>` |
| `DrawerTitle` | `default` | `<DrawerTitle>内容</DrawerTitle>` |

### Exports

- `export { DrawerClose, DrawerPortal, DrawerTrigger } from "vaul-vue"`

## API 示例

### Drawer.exampleProp

```vue
<Drawer :example-prop="example" />
```

### DrawerContent.exampleProp

```vue
<DrawerContent :example-prop="example" />
```

### DrawerDescription.exampleProp

```vue
<DrawerDescription :example-prop="example" />
```

### DrawerFooter.class

```vue
<DrawerFooter class="custom-class" />
```

### DrawerHeader.class

```vue
<DrawerHeader class="custom-class" />
```

### DrawerOverlay.exampleProp

```vue
<DrawerOverlay :example-prop="example" />
```

### DrawerTitle.exampleProp

```vue
<DrawerTitle :example-prop="example" />
```

### Drawer.emits

```vue
<Drawer @emits="emits" />
```

### DrawerContent.emits

```vue
<DrawerContent @emits="emits" />
```

### Drawer slot: default

```vue
<Drawer>内容</Drawer>
```

### DrawerContent slot: default

```vue
<DrawerContent>内容</DrawerContent>
```

### DrawerDescription slot: default

```vue
<DrawerDescription>内容</DrawerDescription>
```

### DrawerFooter slot: default

```vue
<DrawerFooter>内容</DrawerFooter>
```

### DrawerHeader slot: default

```vue
<DrawerHeader>内容</DrawerHeader>
```

### DrawerTitle slot: default

```vue
<DrawerTitle>内容</DrawerTitle>
```

## 依赖

- `vaul-vue`
- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/drawer.json
```

