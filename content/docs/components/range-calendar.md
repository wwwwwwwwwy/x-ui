---
title: RangeCalendar
description: RangeCalendar 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# RangeCalendar

RangeCalendar 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

RangeCalendar 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="range-calendar" src="range-calendar/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/range-calendar.json
```

## 导入

```ts
import { RangeCalendar, RangeCalendarCell, RangeCalendarCellTrigger, RangeCalendarGrid, RangeCalendarGridBody, RangeCalendarGridHead, RangeCalendarGridRow, RangeCalendarHeadCell, RangeCalendarHeader, RangeCalendarHeading, RangeCalendarNextButton, RangeCalendarPrevButton } from '@/components/ui/range-calendar'
```

## 基础用法

```vue
<RangeCalendar>
  示例内容
</RangeCalendar>
```

## 组件导出

- `RangeCalendar`
- `RangeCalendarCell`
- `RangeCalendarCellTrigger`
- `RangeCalendarGrid`
- `RangeCalendarGridBody`
- `RangeCalendarGridHead`
- `RangeCalendarGridRow`
- `RangeCalendarHeadCell`
- `RangeCalendarHeader`
- `RangeCalendarHeading`
- `RangeCalendarNextButton`
- `RangeCalendarPrevButton`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `RangeCalendar` | `class` | `HTMLAttributes["class"]` | `<RangeCalendar class="border-primary" />` |
| `RangeCalendarCell` | `class` | `HTMLAttributes["class"]` | `<RangeCalendarCell class="border-primary" />` |
| `RangeCalendarCellTrigger` | `class` | `HTMLAttributes["class"]` | `<RangeCalendarCellTrigger class="border-primary" />` |
| `RangeCalendarGrid` | `class` | `HTMLAttributes["class"]` | `<RangeCalendarGrid class="border-primary" />` |
| `RangeCalendarGridRow` | `class` | `HTMLAttributes["class"]` | `<RangeCalendarGridRow class="border-primary" />` |
| `RangeCalendarHeadCell` | `class` | `HTMLAttributes["class"]` | `<RangeCalendarHeadCell class="border-primary" />` |
| `RangeCalendarHeader` | `class` | `HTMLAttributes["class"]` | `<RangeCalendarHeader class="border-primary" />` |
| `RangeCalendarHeading` | `class` | `HTMLAttributes["class"]` | `<RangeCalendarHeading class="border-primary" />` |
| `RangeCalendarNextButton` | `class` | `HTMLAttributes["class"]` | `<RangeCalendarNextButton class="border-primary" />` |
| `RangeCalendarPrevButton` | `class` | `HTMLAttributes["class"]` | `<RangeCalendarPrevButton class="border-primary" />` |
| `RangeCalendarGridBody` | 类型引用 | `RangeCalendarGridBodyProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |
| `RangeCalendarGridHead` | 类型引用 | `RangeCalendarGridHeadProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `RangeCalendar` | 类型引用 | `RangeCalendarRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `RangeCalendarCell` | `default` | `<RangeCalendarCell>内容</RangeCalendarCell>` |
| `RangeCalendarCellTrigger` | `default` | `<RangeCalendarCellTrigger>内容</RangeCalendarCellTrigger>` |
| `RangeCalendarGrid` | `default` | `<RangeCalendarGrid>内容</RangeCalendarGrid>` |
| `RangeCalendarGridBody` | `default` | `<RangeCalendarGridBody>内容</RangeCalendarGridBody>` |
| `RangeCalendarGridHead` | `default` | `<RangeCalendarGridHead>内容</RangeCalendarGridHead>` |
| `RangeCalendarGridRow` | `default` | `<RangeCalendarGridRow>内容</RangeCalendarGridRow>` |
| `RangeCalendarHeadCell` | `default` | `<RangeCalendarHeadCell>内容</RangeCalendarHeadCell>` |
| `RangeCalendarHeader` | `default` | `<RangeCalendarHeader>内容</RangeCalendarHeader>` |
| `RangeCalendarHeading` | `default` | `<RangeCalendarHeading>内容</RangeCalendarHeading>` |
| `RangeCalendarNextButton` | `default` | `<RangeCalendarNextButton>内容</RangeCalendarNextButton>` |
| `RangeCalendarPrevButton` | `default` | `<RangeCalendarPrevButton>内容</RangeCalendarPrevButton>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### RangeCalendar.class

```vue
<RangeCalendar class="border-primary" />
```

### RangeCalendarCell.class

```vue
<RangeCalendarCell class="border-primary" />
```

### RangeCalendarCellTrigger.class

```vue
<RangeCalendarCellTrigger class="border-primary" />
```

### RangeCalendarGrid.class

```vue
<RangeCalendarGrid class="border-primary" />
```

### RangeCalendarGridRow.class

```vue
<RangeCalendarGridRow class="border-primary" />
```

### RangeCalendarHeadCell.class

```vue
<RangeCalendarHeadCell class="border-primary" />
```

### RangeCalendarHeader.class

```vue
<RangeCalendarHeader class="border-primary" />
```

### RangeCalendarHeading.class

```vue
<RangeCalendarHeading class="border-primary" />
```

### RangeCalendarNextButton.class

```vue
<RangeCalendarNextButton class="border-primary" />
```

### RangeCalendarPrevButton.class

```vue
<RangeCalendarPrevButton class="border-primary" />
```

### RangeCalendarCell slot: default

```vue
<RangeCalendarCell>内容</RangeCalendarCell>
```

### RangeCalendarCellTrigger slot: default

```vue
<RangeCalendarCellTrigger>内容</RangeCalendarCellTrigger>
```

### RangeCalendarGrid slot: default

```vue
<RangeCalendarGrid>内容</RangeCalendarGrid>
```

### RangeCalendarGridBody slot: default

```vue
<RangeCalendarGridBody>内容</RangeCalendarGridBody>
```

### RangeCalendarGridHead slot: default

```vue
<RangeCalendarGridHead>内容</RangeCalendarGridHead>
```

### RangeCalendarGridRow slot: default

```vue
<RangeCalendarGridRow>内容</RangeCalendarGridRow>
```

### RangeCalendarHeadCell slot: default

```vue
<RangeCalendarHeadCell>内容</RangeCalendarHeadCell>
```

### RangeCalendarHeader slot: default

```vue
<RangeCalendarHeader>内容</RangeCalendarHeader>
```

### RangeCalendarHeading slot: default

```vue
<RangeCalendarHeading>内容</RangeCalendarHeading>
```

### RangeCalendarNextButton slot: default

```vue
<RangeCalendarNextButton>内容</RangeCalendarNextButton>
```

### RangeCalendarPrevButton slot: default

```vue
<RangeCalendarPrevButton>内容</RangeCalendarPrevButton>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/range-calendar.json
```

