---
title: Table
description: Table 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Table

Table 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Table 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="table" src="table/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/table.json
```

## 导入

```ts
import { Table, TableBody, TableCaption, TableCell, TableEmpty, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
```

## 基础用法

```vue
<Table>
  示例内容
</Table>
```

## 组件导出

- `Table`
- `TableBody`
- `TableCaption`
- `TableCell`
- `TableEmpty`
- `TableFooter`
- `TableHead`
- `TableHeader`
- `TableRow`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Table` | `class` | `HTMLAttributes["class"]` | `<Table class="custom-class" />` |
| `TableBody` | `class` | `HTMLAttributes["class"]` | `<TableBody class="custom-class" />` |
| `TableCaption` | `class` | `HTMLAttributes["class"]` | `<TableCaption class="custom-class" />` |
| `TableCell` | `class` | `HTMLAttributes["class"]` | `<TableCell class="custom-class" />` |
| `TableEmpty` | `class` | `HTMLAttributes["class"]` | `<TableEmpty class="custom-class" />` |
| `TableEmpty` | `colspan` | `number` | `<TableEmpty :colspan="1" />` |
| `TableFooter` | `class` | `HTMLAttributes["class"]` | `<TableFooter class="custom-class" />` |
| `TableHead` | `class` | `HTMLAttributes["class"]` | `<TableHead class="custom-class" />` |
| `TableHeader` | `class` | `HTMLAttributes["class"]` | `<TableHeader class="custom-class" />` |
| `TableRow` | `class` | `HTMLAttributes["class"]` | `<TableRow class="custom-class" />` |

### Events

源码中未发现显式本地事件。

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Table` | `default` | `<Table>内容</Table>` |
| `TableBody` | `default` | `<TableBody>内容</TableBody>` |
| `TableCaption` | `default` | `<TableCaption>内容</TableCaption>` |
| `TableCell` | `default` | `<TableCell>内容</TableCell>` |
| `TableEmpty` | `default` | `<TableEmpty>内容</TableEmpty>` |
| `TableFooter` | `default` | `<TableFooter>内容</TableFooter>` |
| `TableHead` | `default` | `<TableHead>内容</TableHead>` |
| `TableHeader` | `default` | `<TableHeader>内容</TableHeader>` |
| `TableRow` | `default` | `<TableRow>内容</TableRow>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Table.class

```vue
<Table class="custom-class" />
```

### TableBody.class

```vue
<TableBody class="custom-class" />
```

### TableCaption.class

```vue
<TableCaption class="custom-class" />
```

### TableCell.class

```vue
<TableCell class="custom-class" />
```

### TableEmpty.class

```vue
<TableEmpty class="custom-class" />
```

### TableEmpty.colspan

```vue
<TableEmpty :colspan="1" />
```

### TableFooter.class

```vue
<TableFooter class="custom-class" />
```

### TableHead.class

```vue
<TableHead class="custom-class" />
```

### TableHeader.class

```vue
<TableHeader class="custom-class" />
```

### TableRow.class

```vue
<TableRow class="custom-class" />
```

### Table slot: default

```vue
<Table>内容</Table>
```

### TableBody slot: default

```vue
<TableBody>内容</TableBody>
```

### TableCaption slot: default

```vue
<TableCaption>内容</TableCaption>
```

### TableCell slot: default

```vue
<TableCell>内容</TableCell>
```

### TableEmpty slot: default

```vue
<TableEmpty>内容</TableEmpty>
```

### TableFooter slot: default

```vue
<TableFooter>内容</TableFooter>
```

### TableHead slot: default

```vue
<TableHead>内容</TableHead>
```

### TableHeader slot: default

```vue
<TableHeader>内容</TableHeader>
```

### TableRow slot: default

```vue
<TableRow>内容</TableRow>
```

## 依赖

- `@vueuse/core`

## Registry

```txt
/r/table.json
```

