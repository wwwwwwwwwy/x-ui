---
title: NavigationMenu
description: NavigationMenu 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# NavigationMenu

NavigationMenu 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

NavigationMenu 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="navigation-menu" src="navigation-menu/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/navigation-menu.json
```

## 导入

```ts
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from '@/components/ui/navigation-menu'
```

## 基础用法

```vue
<NavigationMenu>
  示例内容
</NavigationMenu>
```

## 组件导出

- `NavigationMenu`
- `NavigationMenuContent`
- `NavigationMenuIndicator`
- `NavigationMenuItem`
- `NavigationMenuLink`
- `NavigationMenuList`
- `NavigationMenuTrigger`
- `NavigationMenuViewport`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `NavigationMenu` | `props` | `NavigationMenuRootProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenu :example-prop="example" />` |
| `NavigationMenuContent` | `props` | `NavigationMenuContentProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenuContent :example-prop="example" />` |
| `NavigationMenuIndicator` | `props` | `NavigationMenuIndicatorProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenuIndicator :example-prop="example" />` |
| `NavigationMenuItem` | `props` | `NavigationMenuItemProps` | `<NavigationMenuItem :example-prop="example" />` |
| `NavigationMenuLink` | `props` | `NavigationMenuLinkProps` | `<NavigationMenuLink :example-prop="example" />` |
| `NavigationMenuList` | `props` | `NavigationMenuListProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenuList :example-prop="example" />` |
| `NavigationMenuTrigger` | `props` | `NavigationMenuTriggerProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenuTrigger :example-prop="example" />` |
| `NavigationMenuViewport` | `props` | `NavigationMenuViewportProps & { class?: HTMLAttributes["class"] }` | `<NavigationMenuViewport :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `NavigationMenu` | `emits` | `NavigationMenuRootEmits` | `<NavigationMenu @emits="emits" />` |
| `NavigationMenuContent` | `emits` | `NavigationMenuContentEmits` | `<NavigationMenuContent @emits="emits" />` |
| `NavigationMenuLink` | `emits` | `NavigationMenuLinkEmits` | `<NavigationMenuLink @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `NavigationMenu` | `default` | `<NavigationMenu>内容</NavigationMenu>` |
| `NavigationMenuContent` | `default` | `<NavigationMenuContent>内容</NavigationMenuContent>` |
| `NavigationMenuItem` | `default` | `<NavigationMenuItem>内容</NavigationMenuItem>` |
| `NavigationMenuLink` | `default` | `<NavigationMenuLink>内容</NavigationMenuLink>` |
| `NavigationMenuList` | `default` | `<NavigationMenuList>内容</NavigationMenuList>` |
| `NavigationMenuTrigger` | `default` | `<NavigationMenuTrigger>内容</NavigationMenuTrigger>` |

### Exports

- `export const navigationMenuTriggerStyle = cva(`

## API 示例

### NavigationMenu.exampleProp

```vue
<NavigationMenu :example-prop="example" />
```

### NavigationMenuContent.exampleProp

```vue
<NavigationMenuContent :example-prop="example" />
```

### NavigationMenuIndicator.exampleProp

```vue
<NavigationMenuIndicator :example-prop="example" />
```

### NavigationMenuItem.exampleProp

```vue
<NavigationMenuItem :example-prop="example" />
```

### NavigationMenuLink.exampleProp

```vue
<NavigationMenuLink :example-prop="example" />
```

### NavigationMenuList.exampleProp

```vue
<NavigationMenuList :example-prop="example" />
```

### NavigationMenuTrigger.exampleProp

```vue
<NavigationMenuTrigger :example-prop="example" />
```

### NavigationMenuViewport.exampleProp

```vue
<NavigationMenuViewport :example-prop="example" />
```

### NavigationMenu.emits

```vue
<NavigationMenu @emits="emits" />
```

### NavigationMenuContent.emits

```vue
<NavigationMenuContent @emits="emits" />
```

### NavigationMenuLink.emits

```vue
<NavigationMenuLink @emits="emits" />
```

### NavigationMenu slot: default

```vue
<NavigationMenu>内容</NavigationMenu>
```

### NavigationMenuContent slot: default

```vue
<NavigationMenuContent>内容</NavigationMenuContent>
```

### NavigationMenuItem slot: default

```vue
<NavigationMenuItem>内容</NavigationMenuItem>
```

### NavigationMenuLink slot: default

```vue
<NavigationMenuLink>内容</NavigationMenuLink>
```

### NavigationMenuList slot: default

```vue
<NavigationMenuList>内容</NavigationMenuList>
```

### NavigationMenuTrigger slot: default

```vue
<NavigationMenuTrigger>内容</NavigationMenuTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/navigation-menu.json
```

