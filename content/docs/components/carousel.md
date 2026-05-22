---
title: Carousel
description: Carousel component documentation generated from source.
---

# Carousel

Carousel component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/carousel.json
```

## Import

```ts
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
```

## Basic Usage

```vue
<Carousel>
  Example content
</Carousel>
```

## Components

- `Carousel`
- `CarouselContent`
- `CarouselItem`
- `CarouselNext`
- `CarouselPrevious`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Carousel` | `props` | `CarouselProps & WithClassAsProps` | `<Carousel :example-prop="example" />` |
| `CarouselContent` | `props` | `WithClassAsProps` | `<CarouselContent :example-prop="example" />` |
| `CarouselItem` | `props` | `WithClassAsProps` | `<CarouselItem :example-prop="example" />` |
| `CarouselNext` | `props` | `WithClassAsProps` | `<CarouselNext :example-prop="example" />` |
| `CarouselPrevious` | `props` | `WithClassAsProps` | `<CarouselPrevious :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Carousel` | `emits` | `CarouselEmits` | `<Carousel @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Carousel` | `default` | `<Carousel>Content</Carousel>` |
| `CarouselContent` | `default` | `<CarouselContent>Content</CarouselContent>` |
| `CarouselItem` | `default` | `<CarouselItem>Content</CarouselItem>` |
| `CarouselNext` | `default` | `<CarouselNext>Content</CarouselNext>` |
| `CarouselPrevious` | `default` | `<CarouselPrevious>Content</CarouselPrevious>` |

### Exports

- `export type {`
- `export { useCarousel } from "./useCarousel"`

## API Examples

### Carousel.exampleProp

```vue
<Carousel :example-prop="example" />
```

### CarouselContent.exampleProp

```vue
<CarouselContent :example-prop="example" />
```

### CarouselItem.exampleProp

```vue
<CarouselItem :example-prop="example" />
```

### CarouselNext.exampleProp

```vue
<CarouselNext :example-prop="example" />
```

### CarouselPrevious.exampleProp

```vue
<CarouselPrevious :example-prop="example" />
```

### Carousel.emits

```vue
<Carousel @emits="emits" />
```

### Carousel slot: default

```vue
<Carousel>Content</Carousel>
```

### CarouselContent slot: default

```vue
<CarouselContent>Content</CarouselContent>
```

### CarouselItem slot: default

```vue
<CarouselItem>Content</CarouselItem>
```

### CarouselNext slot: default

```vue
<CarouselNext>Content</CarouselNext>
```

### CarouselPrevious slot: default

```vue
<CarouselPrevious>Content</CarouselPrevious>
```

## Dependencies

- `lucide-vue-next`

## Registry

```txt
/r/carousel.json
```

