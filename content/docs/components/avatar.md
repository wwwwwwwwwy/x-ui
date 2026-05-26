---
title: Avatar
description: Avatar 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Avatar

Avatar 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Avatar 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="avatar" src="avatar/Basic.vue"}
::

### Avatar.class

::component-preview{name="avatar Avatar class" src="avatar/AvatarClass.vue"}
::

### Avatar.size

::component-preview{name="avatar Avatar size" src="avatar/AvatarSize.vue"}
::

### Avatar.shape

::component-preview{name="avatar Avatar shape" src="avatar/AvatarShape.vue"}
::

### Avatar slot: default

::component-preview{name="avatar Avatar default slot" src="avatar/AvatarDefaultSlot.vue"}
::

### AvatarImage 图片

::component-preview{name="avatar AvatarImage image" src="avatar/AvatarImageSlot.vue"}
::

### AvatarFallback 回退

::component-preview{name="avatar AvatarFallback fallback" src="avatar/AvatarFallbackSlot.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/avatar.json
```

## 导入

```ts
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
```

## 基础用法

```vue
<Avatar>
  示例内容
</Avatar>
```

## 组件导出

- `Avatar`
- `AvatarFallback`
- `AvatarImage`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Avatar` | `class` | `HTMLAttributes["class"]` | `<Avatar class="border-primary" />` |
| `Avatar` | `size` | `AvatarVariants["size"]` | `<Avatar size="sm">示例内容</Avatar>` |
| `Avatar` | `shape` | `AvatarVariants["shape"]` | `<Avatar :shape="example" />` |
| `AvatarFallback` | 类型引用 | `AvatarFallbackProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `AvatarImage` | 类型引用 | `AvatarImageProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Avatar` | `default` | `<Avatar>内容</Avatar>` |
| `AvatarFallback` | `default` | `<AvatarFallback>内容</AvatarFallback>` |
| `AvatarImage` | `default` | `<AvatarImage>内容</AvatarImage>` |

### Exports

- `export const avatarVariant = cva(`
- `export type AvatarVariants = VariantProps<typeof avatarVariant>`

## API 示例

### Avatar.class

```vue
<Avatar class="border-primary" />
```

### Avatar.size

```vue
<Avatar size="sm">示例内容</Avatar>
```

### Avatar.shape

```vue
<Avatar :shape="example" />
```

### Avatar slot: default

```vue
<Avatar>内容</Avatar>
```

### AvatarFallback slot: default

```vue
<AvatarFallback>内容</AvatarFallback>
```

### AvatarImage slot: default

```vue
<AvatarImage>内容</AvatarImage>
```

## 依赖

- `reka-ui`

## Registry

```txt
/r/avatar.json
```

