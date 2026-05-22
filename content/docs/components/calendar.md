---
title: Calendar
description: Calendar component documentation generated from source.
---

# Calendar

Calendar component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/calendar.json
```

## Import

```ts
import { Calendar, CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNextButton, CalendarPrevButton } from '@/components/ui/calendar'
```

## Basic Usage

```vue
<Calendar>
  Example content
</Calendar>
```

## Components

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

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
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

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Calendar` | `emits` | `CalendarRootEmits` | `<Calendar @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `CalendarCell` | `default` | `<CalendarCell>Content</CalendarCell>` |
| `CalendarCellTrigger` | `default` | `<CalendarCellTrigger>Content</CalendarCellTrigger>` |
| `CalendarGrid` | `default` | `<CalendarGrid>Content</CalendarGrid>` |
| `CalendarGridBody` | `default` | `<CalendarGridBody>Content</CalendarGridBody>` |
| `CalendarGridHead` | `default` | `<CalendarGridHead>Content</CalendarGridHead>` |
| `CalendarGridRow` | `default` | `<CalendarGridRow>Content</CalendarGridRow>` |
| `CalendarHeadCell` | `default` | `<CalendarHeadCell>Content</CalendarHeadCell>` |
| `CalendarHeader` | `default` | `<CalendarHeader>Content</CalendarHeader>` |
| `CalendarHeading` | `default` | `<CalendarHeading>Content</CalendarHeading>` |
| `CalendarNextButton` | `default` | `<CalendarNextButton>Content</CalendarNextButton>` |
| `CalendarPrevButton` | `default` | `<CalendarPrevButton>Content</CalendarPrevButton>` |

### Exports

No additional local API exports were found.

## API Examples

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
<CalendarCell>Content</CalendarCell>
```

### CalendarCellTrigger slot: default

```vue
<CalendarCellTrigger>Content</CalendarCellTrigger>
```

### CalendarGrid slot: default

```vue
<CalendarGrid>Content</CalendarGrid>
```

### CalendarGridBody slot: default

```vue
<CalendarGridBody>Content</CalendarGridBody>
```

### CalendarGridHead slot: default

```vue
<CalendarGridHead>Content</CalendarGridHead>
```

### CalendarGridRow slot: default

```vue
<CalendarGridRow>Content</CalendarGridRow>
```

### CalendarHeadCell slot: default

```vue
<CalendarHeadCell>Content</CalendarHeadCell>
```

### CalendarHeader slot: default

```vue
<CalendarHeader>Content</CalendarHeader>
```

### CalendarHeading slot: default

```vue
<CalendarHeading>Content</CalendarHeading>
```

### CalendarNextButton slot: default

```vue
<CalendarNextButton>Content</CalendarNextButton>
```

### CalendarPrevButton slot: default

```vue
<CalendarPrevButton>Content</CalendarPrevButton>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/calendar.json
```

