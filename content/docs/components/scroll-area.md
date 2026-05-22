---
title: ScrollArea
description: ScrollArea 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# ScrollArea

ScrollArea 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

ScrollArea 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="scroll-area" src="scroll-area/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/scroll-area.json
```

## 导入

```ts
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
```

## 基础用法

```vue
<ScrollArea>
  示例内容
</ScrollArea>
```

## 组件导出

- `ScrollArea`
- `ScrollBar`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ScrollArea` | `props` | `ScrollAreaRootProps & { class?: HTMLAttributes["class"] }` | `<ScrollArea :example-prop="example" />` |
| `ScrollBar` | `props` | `ScrollAreaScrollbarProps & { class?: HTMLAttributes["class"] }` | `<ScrollBar :example-prop="example" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `ScrollArea` | `default` | `<ScrollArea>内容</ScrollArea>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### ScrollArea.exampleProp

```vue
<ScrollArea :example-prop="example" />
```

### ScrollBar.exampleProp

```vue
<ScrollBar :example-prop="example" />
```

### ScrollArea slot: default

```vue
<ScrollArea>内容</ScrollArea>
```

## 依赖

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/scroll-area.json
```

