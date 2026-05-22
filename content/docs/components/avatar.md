---
title: Avatar
description: Avatar component documentation generated from source.
---

# Avatar

Avatar component documentation generated from local source APIs.

## Install

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/avatar.json
```

## Import

```ts
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
```

## Basic Usage

```vue
<Avatar>
  Example content
</Avatar>
```

## Components

- `Avatar`
- `AvatarFallback`
- `AvatarImage`

## Source API

The API below is extracted from local source files only. Props/events inherited through external primitives are documented as their source type when they are not expanded locally.

### Props

| Component | Prop | Type / Source | Example |
| --- | --- | --- | --- |
| `Avatar` | `class` | `HTMLAttributes["class"]` | `<Avatar class="custom-class" />` |
| `Avatar` | `size` | `AvatarVariants["size"]` | `<Avatar :size="example" />` |
| `Avatar` | `shape` | `AvatarVariants["shape"]` | `<Avatar :shape="example" />` |
| `AvatarFallback` | `props` | `AvatarFallbackProps` | `<AvatarFallback :example-prop="example" />` |
| `AvatarImage` | `props` | `AvatarImageProps` | `<AvatarImage :example-prop="example" />` |

### Events

No explicit local events were found in source.

### Slots

| Component | Slot | Example |
| --- | --- | --- |
| `Avatar` | `default` | `<Avatar>Content</Avatar>` |
| `AvatarFallback` | `default` | `<AvatarFallback>Content</AvatarFallback>` |
| `AvatarImage` | `default` | `<AvatarImage>Content</AvatarImage>` |

### Exports

- `export const avatarVariant = cva(`
- `export type AvatarVariants = VariantProps<typeof avatarVariant>`

## API Examples

### Avatar.class

```vue
<Avatar class="custom-class" />
```

### Avatar.size

```vue
<Avatar :size="example" />
```

### Avatar.shape

```vue
<Avatar :shape="example" />
```

### AvatarFallback.exampleProp

```vue
<AvatarFallback :example-prop="example" />
```

### AvatarImage.exampleProp

```vue
<AvatarImage :example-prop="example" />
```

### Avatar slot: default

```vue
<Avatar>Content</Avatar>
```

### AvatarFallback slot: default

```vue
<AvatarFallback>Content</AvatarFallback>
```

### AvatarImage slot: default

```vue
<AvatarImage>Content</AvatarImage>
```

## Dependencies

- `reka-ui`

## Registry

```txt
/r/avatar.json
```

