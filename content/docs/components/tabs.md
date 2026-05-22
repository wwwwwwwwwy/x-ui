---
title: Tabs
description: Tabs component documentation generated from source.
---

# Tabs

Tabs component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/tabs.json
```

## Import

```ts
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
```

## Basic Usage

```vue
<Tabs>
  Example content
</Tabs>
```

## Components

- `Tabs`
- `TabsContent`
- `TabsList`
- `TabsTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Tabs` | `props` | `TabsRootProps` | `<Tabs :example-prop="example" />` |
| `TabsContent` | `props` | `TabsContentProps & { class?: HTMLAttributes["class"] }` | `<TabsContent :example-prop="example" />` |
| `TabsList` | `props` | `TabsListProps & { class?: HTMLAttributes["class"] }` | `<TabsList :example-prop="example" />` |
| `TabsTrigger` | `props` | `TabsTriggerProps & { class?: HTMLAttributes["class"] }` | `<TabsTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Tabs` | `emits` | `TabsRootEmits` | `<Tabs @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Tabs` | `default` | `<Tabs>Content</Tabs>` |
| `TabsContent` | `default` | `<TabsContent>Content</TabsContent>` |
| `TabsList` | `default` | `<TabsList>Content</TabsList>` |
| `TabsTrigger` | `default` | `<TabsTrigger>Content</TabsTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### Tabs.exampleProp

```vue
<Tabs :example-prop="example" />
```

### TabsContent.exampleProp

```vue
<TabsContent :example-prop="example" />
```

### TabsList.exampleProp

```vue
<TabsList :example-prop="example" />
```

### TabsTrigger.exampleProp

```vue
<TabsTrigger :example-prop="example" />
```

### Tabs.emits

```vue
<Tabs @emits="emits" />
```

### Tabs slot: default

```vue
<Tabs>Content</Tabs>
```

### TabsContent slot: default

```vue
<TabsContent>Content</TabsContent>
```

### TabsList slot: default

```vue
<TabsList>Content</TabsList>
```

### TabsTrigger slot: default

```vue
<TabsTrigger>Content</TabsTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`

## Registry

```txt
/r/tabs.json
```

