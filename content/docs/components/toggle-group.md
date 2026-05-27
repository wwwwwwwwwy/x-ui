---
title: ToggleGroup
description: ToggleGroup 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# ToggleGroup

ToggleGroup 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

ToggleGroup 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="toggle-group" src="toggle-group/Basic.vue"}
::

### Multiple 多选

::component-preview{name="toggle-group multiple" src="toggle-group/Multiple.vue"}
::

### Size 尺寸

::component-preview{name="toggle-group sizes" src="toggle-group/Sizes.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/toggle-group.json
```

## 导入

```ts
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
```

## 基础用法

```vue
<ToggleGroup>
  示例内容
</ToggleGroup>
```

## 组件导出

- `ToggleGroup`
- `ToggleGroupItem`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ToggleGroup` | `class` | `HTMLAttributes["class"]` | `<ToggleGroup class="border-primary" />` |
| `ToggleGroup` | `variant` | `ToggleGroupVariants["variant"]` | `<ToggleGroup variant="outline">示例内容</ToggleGroup>` |
| `ToggleGroup` | `size` | `ToggleGroupVariants["size"]` | `<ToggleGroup size="sm">示例内容</ToggleGroup>` |
| `ToggleGroupItem` | `class` | `HTMLAttributes["class"]` | `<ToggleGroupItem class="border-primary" />` |
| `ToggleGroupItem` | `variant` | `ToggleGroupVariants["variant"]` | `<ToggleGroupItem variant="outline">示例内容</ToggleGroupItem>` |
| `ToggleGroupItem` | `size` | `ToggleGroupVariants["size"]` | `<ToggleGroupItem size="sm">示例内容</ToggleGroupItem>` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ToggleGroup` | 类型引用 | `ToggleGroupRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `ToggleGroup` | `default` | `<ToggleGroup>内容</ToggleGroup>` |
| `ToggleGroupItem` | `default` | `<ToggleGroupItem>内容</ToggleGroupItem>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### ToggleGroup.class

```vue
<ToggleGroup class="border-primary" />
```

### ToggleGroup.variant

```vue
<ToggleGroup variant="outline">示例内容</ToggleGroup>
```

### ToggleGroup.size

```vue
<ToggleGroup size="sm">示例内容</ToggleGroup>
```

### ToggleGroupItem.class

```vue
<ToggleGroupItem class="border-primary" />
```

### ToggleGroupItem.variant

```vue
<ToggleGroupItem variant="outline">示例内容</ToggleGroupItem>
```

### ToggleGroupItem.size

```vue
<ToggleGroupItem size="sm">示例内容</ToggleGroupItem>
```

### ToggleGroup slot: default

```vue
<ToggleGroup>内容</ToggleGroup>
```

### ToggleGroupItem slot: default

```vue
<ToggleGroupItem>内容</ToggleGroupItem>
```

## 依赖

- `class-variance-authority`
- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/toggle-group.json
```

