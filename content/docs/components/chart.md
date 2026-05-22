---
title: ChartCrosshair
description: ChartCrosshair component documentation generated from source.
---

# ChartCrosshair

ChartCrosshair component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/chart.json
```

## Import

```ts
import { ChartCrosshair, ChartLegend, ChartSingleTooltip, ChartTooltip } from '@/components/ui/chart'
```

## Basic Usage

```vue
<ChartCrosshair>
  Example content
</ChartCrosshair>
```

## Components

- `ChartCrosshair`
- `ChartLegend`
- `ChartSingleTooltip`
- `ChartTooltip`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
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

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `ChartLegend` | `legendItemClick` | `[d: BulletLegendItemInterface` | `<ChartLegend @legendItemClick="legendItemClick" />` |
| `ChartLegend` | `update:items` | `[payload: BulletLegendItemInterface[]]` | `<ChartLegend @update:items="updateItems" />` |

### Slots

No explicit local slots were found in source.

### Exports

- `export function defaultColors(count: number = 3) {`
- `export * from "./interface"`

## API Examples

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

## Dependencies

- `@unovis/ts`
- `@unovis/vue`

## Registry

```txt
/r/chart.json
```

