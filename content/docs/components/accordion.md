---
title: Accordion
description: Accordion component documentation generated from source.
---

# Accordion

Accordion component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/accordion.json
```

## Import

```ts
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
```

## Basic Usage

```vue
<Accordion>
  Example content
</Accordion>
```

## Components

- `Accordion`
- `AccordionContent`
- `AccordionItem`
- `AccordionTrigger`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Accordion` | `props` | `AccordionRootProps` | `<Accordion :example-prop="example" />` |
| `AccordionContent` | `props` | `AccordionContentProps & { class?: HTMLAttributes["class"] }` | `<AccordionContent :example-prop="example" />` |
| `AccordionItem` | `props` | `AccordionItemProps & { class?: HTMLAttributes["class"] }` | `<AccordionItem :example-prop="example" />` |
| `AccordionTrigger` | `props` | `AccordionTriggerProps & { class?: HTMLAttributes["class"] }` | `<AccordionTrigger :example-prop="example" />` |

### Events

| Component | Event | Type / Source | Example |
| --- | --- | --- | --- |
| `Accordion` | `emits` | `AccordionRootEmits` | `<Accordion @emits="emits" />` |

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Accordion` | `default` | `<Accordion>Content</Accordion>` |
| `AccordionContent` | `default` | `<AccordionContent>Content</AccordionContent>` |
| `AccordionItem` | `default` | `<AccordionItem>Content</AccordionItem>` |
| `AccordionTrigger` | `default` | `<AccordionTrigger>Content</AccordionTrigger>` |
| `AccordionTrigger` | `icon` | `<AccordionTrigger> <template #icon>Custom icon</template> </AccordionTrigger>` |

### Exports

No additional local API exports were found.

## API Examples

### Accordion.exampleProp

```vue
<Accordion :example-prop="example" />
```

### AccordionContent.exampleProp

```vue
<AccordionContent :example-prop="example" />
```

### AccordionItem.exampleProp

```vue
<AccordionItem :example-prop="example" />
```

### AccordionTrigger.exampleProp

```vue
<AccordionTrigger :example-prop="example" />
```

### Accordion.emits

```vue
<Accordion @emits="emits" />
```

### Accordion slot: default

```vue
<Accordion>Content</Accordion>
```

### AccordionContent slot: default

```vue
<AccordionContent>Content</AccordionContent>
```

### AccordionItem slot: default

```vue
<AccordionItem>Content</AccordionItem>
```

### AccordionTrigger slot: default

```vue
<AccordionTrigger>Content</AccordionTrigger>
```

### AccordionTrigger slot: icon

```vue
<AccordionTrigger>
  <template #icon>Custom icon</template>
</AccordionTrigger>
```

## Dependencies

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/accordion.json
```

