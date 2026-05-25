---
title: Drawer
description: Drawer 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Drawer

Drawer 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Drawer 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="drawer" src="drawer/Basic.vue"}
::

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
| `DrawerContent` | `class` | `HTMLAttributes["class"]` | `<DrawerContent class="border-primary" />` |
| `DrawerDescription` | `class` | `HTMLAttributes["class"]` | `<DrawerDescription class="border-primary" />` |
| `DrawerFooter` | `class` | `HTMLAttributes["class"]` | `<DrawerFooter class="border-primary" />` |
| `DrawerHeader` | `class` | `HTMLAttributes["class"]` | `<DrawerHeader class="border-primary" />` |
| `DrawerOverlay` | `class` | `HTMLAttributes["class"]` | `<DrawerOverlay class="border-primary" />` |
| `DrawerTitle` | `class` | `HTMLAttributes["class"]` | `<DrawerTitle class="border-primary" />` |
| `Drawer` | 类型引用 | `DrawerRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Drawer` | 类型引用 | `DrawerRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `DrawerContent` | 类型引用 | `DialogContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

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

### DrawerContent.class

```vue
<DrawerContent class="border-primary" />
```

### DrawerDescription.class

```vue
<DrawerDescription class="border-primary" />
```

### DrawerFooter.class

```vue
<DrawerFooter class="border-primary" />
```

### DrawerHeader.class

```vue
<DrawerHeader class="border-primary" />
```

### DrawerOverlay.class

```vue
<DrawerOverlay class="border-primary" />
```

### DrawerTitle.class

```vue
<DrawerTitle class="border-primary" />
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

