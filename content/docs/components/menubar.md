---
title: Menubar
description: Menubar 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Menubar

Menubar 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Menubar 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="menubar" src="menubar/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/menubar.json
```

## 导入

```ts
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar'
```

## 基础用法

```vue
<Menubar>
  示例内容
</Menubar>
```

## 组件导出

- `Menubar`
- `MenubarCheckboxItem`
- `MenubarContent`
- `MenubarGroup`
- `MenubarItem`
- `MenubarLabel`
- `MenubarMenu`
- `MenubarRadioGroup`
- `MenubarRadioItem`
- `MenubarSeparator`
- `MenubarShortcut`
- `MenubarSub`
- `MenubarSubContent`
- `MenubarSubTrigger`
- `MenubarTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Menubar` | `class` | `HTMLAttributes["class"]` | `<Menubar class="border-primary" />` |
| `MenubarCheckboxItem` | `class` | `HTMLAttributes["class"]` | `<MenubarCheckboxItem class="border-primary" />` |
| `MenubarContent` | `class` | `HTMLAttributes["class"]` | `<MenubarContent class="border-primary" />` |
| `MenubarItem` | `class` | `HTMLAttributes["class"]` | `<MenubarItem class="border-primary" />` |
| `MenubarLabel` | `class` | `HTMLAttributes["class"]` | `<MenubarLabel class="border-primary" />` |
| `MenubarRadioItem` | `class` | `HTMLAttributes["class"]` | `<MenubarRadioItem class="border-primary" />` |
| `MenubarSeparator` | `class` | `HTMLAttributes["class"]` | `<MenubarSeparator class="border-primary" />` |
| `MenubarShortcut` | `class` | `HTMLAttributes["class"]` | `<MenubarShortcut class="border-primary" />` |
| `MenubarSubContent` | `class` | `HTMLAttributes["class"]` | `<MenubarSubContent class="border-primary" />` |
| `MenubarSubTrigger` | `class` | `HTMLAttributes["class"]` | `<MenubarSubTrigger class="border-primary" />` |
| `MenubarTrigger` | `class` | `HTMLAttributes["class"]` | `<MenubarTrigger class="border-primary" />` |
| `MenubarGroup` | 类型引用 | `MenubarGroupProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `MenubarMenu` | 类型引用 | `MenubarMenuProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `MenubarRadioGroup` | 类型引用 | `MenubarRadioGroupProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `MenubarSub` | 类型引用 | `MenubarSubRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Menubar` | 类型引用 | `MenubarRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `MenubarCheckboxItem` | 类型引用 | `MenubarCheckboxItemEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `MenubarItem` | 类型引用 | `MenubarItemEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `MenubarRadioGroup` | 类型引用 | `MenubarRadioGroupEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `MenubarRadioItem` | 类型引用 | `MenubarRadioItemEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `MenubarSub` | 类型引用 | `MenubarSubEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |
| `MenubarSubContent` | 类型引用 | `MenubarSubContentEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Menubar` | `default` | `<Menubar>内容</Menubar>` |
| `MenubarCheckboxItem` | `default` | `<MenubarCheckboxItem>内容</MenubarCheckboxItem>` |
| `MenubarContent` | `default` | `<MenubarContent>内容</MenubarContent>` |
| `MenubarGroup` | `default` | `<MenubarGroup>内容</MenubarGroup>` |
| `MenubarItem` | `default` | `<MenubarItem>内容</MenubarItem>` |
| `MenubarLabel` | `default` | `<MenubarLabel>内容</MenubarLabel>` |
| `MenubarMenu` | `default` | `<MenubarMenu>内容</MenubarMenu>` |
| `MenubarRadioGroup` | `default` | `<MenubarRadioGroup>内容</MenubarRadioGroup>` |
| `MenubarRadioItem` | `default` | `<MenubarRadioItem>内容</MenubarRadioItem>` |
| `MenubarShortcut` | `default` | `<MenubarShortcut>内容</MenubarShortcut>` |
| `MenubarSub` | `default` | `<MenubarSub>内容</MenubarSub>` |
| `MenubarSubContent` | `default` | `<MenubarSubContent>内容</MenubarSubContent>` |
| `MenubarSubTrigger` | `default` | `<MenubarSubTrigger>内容</MenubarSubTrigger>` |
| `MenubarTrigger` | `default` | `<MenubarTrigger>内容</MenubarTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Menubar.class

```vue
<Menubar class="border-primary" />
```

### MenubarCheckboxItem.class

```vue
<MenubarCheckboxItem class="border-primary" />
```

### MenubarContent.class

```vue
<MenubarContent class="border-primary" />
```

### MenubarItem.class

```vue
<MenubarItem class="border-primary" />
```

### MenubarLabel.class

```vue
<MenubarLabel class="border-primary" />
```

### MenubarRadioItem.class

```vue
<MenubarRadioItem class="border-primary" />
```

### MenubarSeparator.class

```vue
<MenubarSeparator class="border-primary" />
```

### MenubarShortcut.class

```vue
<MenubarShortcut class="border-primary" />
```

### MenubarSubContent.class

```vue
<MenubarSubContent class="border-primary" />
```

### MenubarSubTrigger.class

```vue
<MenubarSubTrigger class="border-primary" />
```

### MenubarTrigger.class

```vue
<MenubarTrigger class="border-primary" />
```

### Menubar slot: default

```vue
<Menubar>内容</Menubar>
```

### MenubarCheckboxItem slot: default

```vue
<MenubarCheckboxItem>内容</MenubarCheckboxItem>
```

### MenubarContent slot: default

```vue
<MenubarContent>内容</MenubarContent>
```

### MenubarGroup slot: default

```vue
<MenubarGroup>内容</MenubarGroup>
```

### MenubarItem slot: default

```vue
<MenubarItem>内容</MenubarItem>
```

### MenubarLabel slot: default

```vue
<MenubarLabel>内容</MenubarLabel>
```

### MenubarMenu slot: default

```vue
<MenubarMenu>内容</MenubarMenu>
```

### MenubarRadioGroup slot: default

```vue
<MenubarRadioGroup>内容</MenubarRadioGroup>
```

### MenubarRadioItem slot: default

```vue
<MenubarRadioItem>内容</MenubarRadioItem>
```

### MenubarShortcut slot: default

```vue
<MenubarShortcut>内容</MenubarShortcut>
```

### MenubarSub slot: default

```vue
<MenubarSub>内容</MenubarSub>
```

### MenubarSubContent slot: default

```vue
<MenubarSubContent>内容</MenubarSubContent>
```

### MenubarSubTrigger slot: default

```vue
<MenubarSubTrigger>内容</MenubarSubTrigger>
```

### MenubarTrigger slot: default

```vue
<MenubarTrigger>内容</MenubarTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/menubar.json
```

