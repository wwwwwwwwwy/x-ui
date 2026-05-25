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
| `NavigationMenu` | `class` | `HTMLAttributes["class"]` | `<NavigationMenu class="border-primary" />` |
| `NavigationMenuContent` | `class` | `HTMLAttributes["class"]` | `<NavigationMenuContent class="border-primary" />` |
| `NavigationMenuIndicator` | `class` | `HTMLAttributes["class"]` | `<NavigationMenuIndicator class="border-primary" />` |
| `NavigationMenuList` | `class` | `HTMLAttributes["class"]` | `<NavigationMenuList class="border-primary" />` |
| `NavigationMenuTrigger` | `class` | `HTMLAttributes["class"]` | `<NavigationMenuTrigger class="border-primary" />` |
| `NavigationMenuViewport` | `class` | `HTMLAttributes["class"]` | `<NavigationMenuViewport class="border-primary" />` |
| `NavigationMenuItem` | 类型引用 | `NavigationMenuItemProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `NavigationMenuLink` | 类型引用 | `NavigationMenuLinkProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `NavigationMenu` | 类型引用 | `NavigationMenuRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `NavigationMenuContent` | 类型引用 | `NavigationMenuContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `NavigationMenuLink` | 类型引用 | `NavigationMenuLinkEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

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

### NavigationMenu.class

```vue
<NavigationMenu class="border-primary" />
```

### NavigationMenuContent.class

```vue
<NavigationMenuContent class="border-primary" />
```

### NavigationMenuIndicator.class

```vue
<NavigationMenuIndicator class="border-primary" />
```

### NavigationMenuList.class

```vue
<NavigationMenuList class="border-primary" />
```

### NavigationMenuTrigger.class

```vue
<NavigationMenuTrigger class="border-primary" />
```

### NavigationMenuViewport.class

```vue
<NavigationMenuViewport class="border-primary" />
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

