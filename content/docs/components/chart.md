---
title: ChartCrosshair
description: ChartCrosshair 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# ChartCrosshair

ChartCrosshair 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

ChartCrosshair 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

::component-preview{name="chart" src="chart/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/chart.json
```

## 导入

```ts
import { ChartCrosshair, ChartLegend, ChartSingleTooltip, ChartTooltip } from '@/components/ui/chart'
```

## 基础用法

```vue
<ChartCrosshair>
  示例内容
</ChartCrosshair>
```

## 组件导出

- `ChartCrosshair`
- `ChartLegend`
- `ChartSingleTooltip`
- `ChartTooltip`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ChartCrosshair` | `colors` | `string[]` | `<ChartCrosshair :colors="example" />` |
| `ChartCrosshair` | `index` | `string` | `<ChartCrosshair :index="example" />` |
| `ChartCrosshair` | `items` | `BulletLegendItemInterface[]` | `<ChartCrosshair :items="example" />` |
| `ChartCrosshair` | `customTooltip` | `Component` | `<ChartCrosshair :custom-tooltip="example" />` |
| `ChartLegend` | `items` | `BulletLegendItemInterface[]` | `<ChartLegend :items="example" />` |
| `ChartSingleTooltip` | `selector` | `string` | `<ChartSingleTooltip :selector="example" />` |
| `ChartSingleTooltip` | `index` | `string` | `<ChartSingleTooltip :index="example" />` |
| `ChartSingleTooltip` | `items` | `BulletLegendItemInterface[]` | `<ChartSingleTooltip :items="example" />` |
| `ChartSingleTooltip` | `valueFormatter` | `(tick: number` | `<ChartSingleTooltip :value-formatter="1" />` |
| `ChartTooltip` | `title` | `string` | `<ChartTooltip :title="example" />` |
| `ChartTooltip` | `data` | `{` | `<ChartTooltip :data="example" />` |
| `ChartTooltip` | `name` | `string` | `<ChartTooltip :name="example" />` |
| `ChartTooltip` | `color` | `string` | `<ChartTooltip :color="example" />` |
| `ChartTooltip` | `value` | `any` | `<ChartTooltip :value="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `ChartLegend` | `legendItemClick` | `[d: BulletLegendItemInterface` | `<ChartLegend @legendItemClick="legendItemClick" />` |
| `ChartLegend` | `update:items` | `[payload: BulletLegendItemInterface[]]` | `<ChartLegend @update:items="updateItems" />` |

### Slots

源码中未发现显式本地 slots。

### Exports

- `export function defaultColors(count: number = 3) {`
- `export * from "./interface"`

## API 示例

### ChartCrosshair.colors

```vue
<ChartCrosshair :colors="example" />
```

### ChartCrosshair.index

```vue
<ChartCrosshair :index="example" />
```

### ChartCrosshair.items

```vue
<ChartCrosshair :items="example" />
```

### ChartCrosshair.customTooltip

```vue
<ChartCrosshair :custom-tooltip="example" />
```

### ChartLegend.items

```vue
<ChartLegend :items="example" />
```

### ChartSingleTooltip.selector

```vue
<ChartSingleTooltip :selector="example" />
```

### ChartSingleTooltip.index

```vue
<ChartSingleTooltip :index="example" />
```

### ChartSingleTooltip.items

```vue
<ChartSingleTooltip :items="example" />
```

### ChartSingleTooltip.valueFormatter

```vue
<ChartSingleTooltip :value-formatter="1" />
```

### ChartTooltip.title

```vue
<ChartTooltip :title="example" />
```

### ChartTooltip.data

```vue
<ChartTooltip :data="example" />
```

### ChartTooltip.name

```vue
<ChartTooltip :name="example" />
```

### ChartTooltip.color

```vue
<ChartTooltip :color="example" />
```

### ChartTooltip.value

```vue
<ChartTooltip :value="example" />
```

### ChartLegend.legendItemClick

```vue
<ChartLegend @legendItemClick="legendItemClick" />
```

### ChartLegend.update:items

```vue
<ChartLegend @update:items="updateItems" />
```

## 依赖

- `@unovis/ts`
- `@unovis/vue`

## Registry

```txt
/r/chart.json
```

