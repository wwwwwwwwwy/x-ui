---
title: Kbd
description: Kbd 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Kbd

Kbd 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Kbd 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="kbd" src="kbd/Basic.vue"}
::

### Kbd.class

::component-preview{name="kbd Kbd class" src="kbd/KbdClass.vue"}
::

### KbdGroup.class

::component-preview{name="kbd KbdGroup class" src="kbd/KbdGroupClass.vue"}
::

### Kbd slot: default

::component-preview{name="kbd Kbd default slot" src="kbd/KbdDefaultSlot.vue"}
::

### KbdGroup slot: default

::component-preview{name="kbd KbdGroup default slot" src="kbd/KbdGroupDefaultSlot.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/kbd.json
```

## 导入

```ts
import { Kbd, KbdGroup } from '@/components/ui/kbd'
```

## 基础用法

```vue
<Kbd>
  示例内容
</Kbd>
```

## 组件导出

- `Kbd`
- `KbdGroup`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Kbd` | `class` | `HTMLAttributes["class"]` | `<Kbd class="border-primary" />` |
| `KbdGroup` | `class` | `HTMLAttributes["class"]` | `<KbdGroup class="border-primary" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Kbd` | `default` | `<Kbd>内容</Kbd>` |
| `KbdGroup` | `default` | `<KbdGroup>内容</KbdGroup>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Kbd.class

```vue
<Kbd class="border-primary" />
```

### KbdGroup.class

```vue
<KbdGroup class="border-primary" />
```

### Kbd slot: default

```vue
<Kbd>内容</Kbd>
```

### KbdGroup slot: default

```vue
<KbdGroup>内容</KbdGroup>
```

## 依赖

本地组件源码中未检测到外部运行时依赖。

## Registry

```txt
/r/kbd.json
```

