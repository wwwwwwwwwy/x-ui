---
title: Calendar
description: Calendar 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Calendar

Calendar 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Calendar 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="calendar" src="calendar/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/calendar.json
```

## 导入

```ts
import { Calendar, CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNextButton, CalendarPrevButton } from '@/components/ui/calendar'
```

## 基础用法

```vue
<Calendar>
  示例内容
</Calendar>
```

## 组件导出

- `Calendar`
- `CalendarCell`
- `CalendarCellTrigger`
- `CalendarGrid`
- `CalendarGridBody`
- `CalendarGridHead`
- `CalendarGridRow`
- `CalendarHeadCell`
- `CalendarHeader`
- `CalendarHeading`
- `CalendarNextButton`
- `CalendarPrevButton`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Calendar` | `props` | `CalendarRootProps & { class?: HTMLAttributes["class"] }` | `<Calendar :example-prop="example" />` |
| `CalendarCell` | `props` | `CalendarCellProps & { class?: HTMLAttributes["class"] }` | `<CalendarCell :example-prop="example" />` |
| `CalendarCellTrigger` | `props` | `CalendarCellTriggerProps & { class?: HTMLAttributes["class"] }` | `<CalendarCellTrigger :example-prop="example" />` |
| `CalendarGrid` | `props` | `CalendarGridProps & { class?: HTMLAttributes["class"] }` | `<CalendarGrid :example-prop="example" />` |
| `CalendarGridBody` | `props` | `CalendarGridBodyProps` | `<CalendarGridBody :example-prop="example" />` |
| `CalendarGridHead` | `props` | `CalendarGridHeadProps` | `<CalendarGridHead :example-prop="example" />` |
| `CalendarGridRow` | `props` | `CalendarGridRowProps & { class?: HTMLAttributes["class"] }` | `<CalendarGridRow :example-prop="example" />` |
| `CalendarHeadCell` | `props` | `CalendarHeadCellProps & { class?: HTMLAttributes["class"] }` | `<CalendarHeadCell :example-prop="example" />` |
| `CalendarHeader` | `props` | `CalendarHeaderProps & { class?: HTMLAttributes["class"] }` | `<CalendarHeader :example-prop="example" />` |
| `CalendarHeading` | `props` | `CalendarHeadingProps & { class?: HTMLAttributes["class"] }` | `<CalendarHeading :example-prop="example" />` |
| `CalendarNextButton` | `props` | `CalendarNextProps & { class?: HTMLAttributes["class"] }` | `<CalendarNextButton :example-prop="example" />` |
| `CalendarPrevButton` | `props` | `CalendarPrevProps & { class?: HTMLAttributes["class"] }` | `<CalendarPrevButton :example-prop="example" />` |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Calendar` | `emits` | `CalendarRootEmits` | `<Calendar @emits="emits" />` |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `CalendarCell` | `default` | `<CalendarCell>内容</CalendarCell>` |
| `CalendarCellTrigger` | `default` | `<CalendarCellTrigger>内容</CalendarCellTrigger>` |
| `CalendarGrid` | `default` | `<CalendarGrid>内容</CalendarGrid>` |
| `CalendarGridBody` | `default` | `<CalendarGridBody>内容</CalendarGridBody>` |
| `CalendarGridHead` | `default` | `<CalendarGridHead>内容</CalendarGridHead>` |
| `CalendarGridRow` | `default` | `<CalendarGridRow>内容</CalendarGridRow>` |
| `CalendarHeadCell` | `default` | `<CalendarHeadCell>内容</CalendarHeadCell>` |
| `CalendarHeader` | `default` | `<CalendarHeader>内容</CalendarHeader>` |
| `CalendarHeading` | `default` | `<CalendarHeading>内容</CalendarHeading>` |
| `CalendarNextButton` | `default` | `<CalendarNextButton>内容</CalendarNextButton>` |
| `CalendarPrevButton` | `default` | `<CalendarPrevButton>内容</CalendarPrevButton>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### Calendar.exampleProp

```vue
<Calendar :example-prop="example" />
```

### CalendarCell.exampleProp

```vue
<CalendarCell :example-prop="example" />
```

### CalendarCellTrigger.exampleProp

```vue
<CalendarCellTrigger :example-prop="example" />
```

### CalendarGrid.exampleProp

```vue
<CalendarGrid :example-prop="example" />
```

### CalendarGridBody.exampleProp

```vue
<CalendarGridBody :example-prop="example" />
```

### CalendarGridHead.exampleProp

```vue
<CalendarGridHead :example-prop="example" />
```

### CalendarGridRow.exampleProp

```vue
<CalendarGridRow :example-prop="example" />
```

### CalendarHeadCell.exampleProp

```vue
<CalendarHeadCell :example-prop="example" />
```

### CalendarHeader.exampleProp

```vue
<CalendarHeader :example-prop="example" />
```

### CalendarHeading.exampleProp

```vue
<CalendarHeading :example-prop="example" />
```

### CalendarNextButton.exampleProp

```vue
<CalendarNextButton :example-prop="example" />
```

### CalendarPrevButton.exampleProp

```vue
<CalendarPrevButton :example-prop="example" />
```

### Calendar.emits

```vue
<Calendar @emits="emits" />
```

### CalendarCell slot: default

```vue
<CalendarCell>内容</CalendarCell>
```

### CalendarCellTrigger slot: default

```vue
<CalendarCellTrigger>内容</CalendarCellTrigger>
```

### CalendarGrid slot: default

```vue
<CalendarGrid>内容</CalendarGrid>
```

### CalendarGridBody slot: default

```vue
<CalendarGridBody>内容</CalendarGridBody>
```

### CalendarGridHead slot: default

```vue
<CalendarGridHead>内容</CalendarGridHead>
```

### CalendarGridRow slot: default

```vue
<CalendarGridRow>内容</CalendarGridRow>
```

### CalendarHeadCell slot: default

```vue
<CalendarHeadCell>内容</CalendarHeadCell>
```

### CalendarHeader slot: default

```vue
<CalendarHeader>内容</CalendarHeader>
```

### CalendarHeading slot: default

```vue
<CalendarHeading>内容</CalendarHeading>
```

### CalendarNextButton slot: default

```vue
<CalendarNextButton>内容</CalendarNextButton>
```

### CalendarPrevButton slot: default

```vue
<CalendarPrevButton>内容</CalendarPrevButton>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/calendar.json
```

