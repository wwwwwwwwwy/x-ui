---
title: Menubar
description: Menubar 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Menubar

Menubar 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Menubar 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

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
| `Menubar` | `props` | `MenubarRootProps & { class?: HTMLAttributes["class"] }` | `<Menubar :example-prop="example" />` |
| `MenubarCheckboxItem` | `props` | `MenubarCheckboxItemProps & { class?: HTMLAttributes["class"] }` | `<MenubarCheckboxItem :example-prop="example" />` |
| `MenubarContent` | `props` | `MenubarContentProps & { class?: HTMLAttributes["class"] }` | `<MenubarContent :example-prop="example" />` |
| `MenubarGroup` | `props` | `MenubarGroupProps` | `<MenubarGroup :example-prop="example" />` |
| `MenubarItem` | `props` | `MenubarItemProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<MenubarItem :example-prop="true" />` |
| `MenubarLabel` | `props` | `MenubarLabelProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<MenubarLabel :example-prop="true" />` |
| `MenubarMenu` | `props` | `MenubarMenuProps` | `<MenubarMenu :example-prop="example" />` |
| `MenubarRadioGroup` | `props` | `MenubarRadioGroupProps` | `<MenubarRadioGroup :example-prop="example" />` |
| `MenubarRadioItem` | `props` | `MenubarRadioItemProps & { class?: HTMLAttributes["class"] }` | `<MenubarRadioItem :example-prop="example" />` |
| `MenubarSeparator` | `props` | `MenubarSeparatorProps & { class?: HTMLAttributes["class"] }` | `<MenubarSeparator :example-prop="example" />` |
| `MenubarShortcut` | `class` | `HTMLAttributes["class"]` | `<MenubarShortcut class="custom-class" />` |
| `MenubarSub` | `props` | `MenubarSubRootProps` | `<MenubarSub :example-prop="example" />` |
| `MenubarSubContent` | `props` | `MenubarSubContentProps & { class?: HTMLAttributes["class"] }` | `<MenubarSubContent :example-prop="example" />` |
| `MenubarSubTrigger` | `props` | `MenubarSubTriggerProps & { class?: HTMLAttributes["class"], inset?: boolean }` | `<MenubarSubTrigger :example-prop="true" />` |
| `MenubarTrigger` | `props` | `MenubarTriggerProps & { class?: HTMLAttributes["class"] }` | `<MenubarTrigger :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Menubar` | `emits` | `MenubarRootEmits` | `<Menubar @emits="emits" />` |
| `MenubarCheckboxItem` | `emits` | `MenubarCheckboxItemEmits` | `<MenubarCheckboxItem @emits="emits" />` |
| `MenubarItem` | `emits` | `MenubarItemEmits` | `<MenubarItem @emits="emits" />` |
| `MenubarRadioGroup` | `emits` | `MenubarRadioGroupEmits` | `<MenubarRadioGroup @emits="emits" />` |
| `MenubarRadioItem` | `emits` | `MenubarRadioItemEmits` | `<MenubarRadioItem @emits="emits" />` |
| `MenubarSub` | `emits` | `MenubarSubEmits` | `<MenubarSub @emits="emits" />` |
| `MenubarSubContent` | `emits` | `MenubarSubContentEmits` | `<MenubarSubContent @emits="emits" />` |

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

### Menubar.exampleProp

```vue
<Menubar :example-prop="example" />
```

### MenubarCheckboxItem.exampleProp

```vue
<MenubarCheckboxItem :example-prop="example" />
```

### MenubarContent.exampleProp

```vue
<MenubarContent :example-prop="example" />
```

### MenubarGroup.exampleProp

```vue
<MenubarGroup :example-prop="example" />
```

### MenubarItem.exampleProp

```vue
<MenubarItem :example-prop="true" />
```

### MenubarLabel.exampleProp

```vue
<MenubarLabel :example-prop="true" />
```

### MenubarMenu.exampleProp

```vue
<MenubarMenu :example-prop="example" />
```

### MenubarRadioGroup.exampleProp

```vue
<MenubarRadioGroup :example-prop="example" />
```

### MenubarRadioItem.exampleProp

```vue
<MenubarRadioItem :example-prop="example" />
```

### MenubarSeparator.exampleProp

```vue
<MenubarSeparator :example-prop="example" />
```

### MenubarShortcut.class

```vue
<MenubarShortcut class="custom-class" />
```

### MenubarSub.exampleProp

```vue
<MenubarSub :example-prop="example" />
```

### MenubarSubContent.exampleProp

```vue
<MenubarSubContent :example-prop="example" />
```

### MenubarSubTrigger.exampleProp

```vue
<MenubarSubTrigger :example-prop="true" />
```

### MenubarTrigger.exampleProp

```vue
<MenubarTrigger :example-prop="example" />
```

### Menubar.emits

```vue
<Menubar @emits="emits" />
```

### MenubarCheckboxItem.emits

```vue
<MenubarCheckboxItem @emits="emits" />
```

### MenubarItem.emits

```vue
<MenubarItem @emits="emits" />
```

### MenubarRadioGroup.emits

```vue
<MenubarRadioGroup @emits="emits" />
```

### MenubarRadioItem.emits

```vue
<MenubarRadioItem @emits="emits" />
```

### MenubarSub.emits

```vue
<MenubarSub @emits="emits" />
```

### MenubarSubContent.emits

```vue
<MenubarSubContent @emits="emits" />
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
- `@meri-design/icon-vue`

## Registry

```txt
/r/menubar.json
```

