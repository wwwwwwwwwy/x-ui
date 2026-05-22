---
title: ResizableHandle
description: ResizableHandle 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# ResizableHandle

ResizableHandle 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

ResizableHandle 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="resizable" src="resizable/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/resizable.json
```

## 导入

```ts
import { ResizableHandle, ResizablePanelGroup } from '@/components/ui/resizable'
```

## 基础用法

```vue
<ResizableHandle>
  示例内容
</ResizableHandle>
```

## 组件导出

- `ResizableHandle`
- `ResizablePanelGroup`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ResizableHandle` | `props` | `SplitterResizeHandleProps & { class?: HTMLAttributes["class"], withHandle?: boolean }` | `<ResizableHandle :example-prop="true" />` |
| `ResizablePanelGroup` | `props` | `SplitterGroupProps & { class?: HTMLAttributes["class"] }` | `<ResizablePanelGroup :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ResizableHandle` | `emits` | `SplitterResizeHandleEmits` | `<ResizableHandle @emits="emits" />` |
| `ResizablePanelGroup` | `emits` | `SplitterGroupEmits` | `<ResizablePanelGroup @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `ResizablePanelGroup` | `default` | `<ResizablePanelGroup>内容</ResizablePanelGroup>` |

### Exports

- `export { SplitterPanel as ResizablePanel } from "reka-ui"`

## API 示例

### ResizableHandle.exampleProp

```vue
<ResizableHandle :example-prop="true" />
```

### ResizablePanelGroup.exampleProp

```vue
<ResizablePanelGroup :example-prop="example" />
```

### ResizableHandle.emits

```vue
<ResizableHandle @emits="emits" />
```

### ResizablePanelGroup.emits

```vue
<ResizablePanelGroup @emits="emits" />
```

### ResizablePanelGroup slot: default

```vue
<ResizablePanelGroup>内容</ResizablePanelGroup>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/resizable.json
```

