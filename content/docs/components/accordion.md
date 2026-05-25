---
title: Accordion
description: Accordion 是基于本仓库源码生成的 shadcn-vue 兼容组件文档。
---

# Accordion

Accordion 用于在 Systematic Clarity 设计体系下构建清晰、稳定、可组合的界面。本文档由本仓库源码自动提取，聚焦本地可验证的 props、events、slots、exports 与依赖。

## 设计定位

Accordion 遵循 Systematic Clarity 的工程化视觉原则：低噪声、明确层级、稳定间距和可复用组合。文档示例优先展示组件的 registry 安装方式、基础组合方式和源码可提取 API。

## 示例预览

### 基础示例

::component-preview{name="accordion" src="accordion/Basic.vue"}
::

## 安装

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/accordion.json
```

## 导入

```ts
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
```

## 基础用法

```vue
<Accordion>
  示例内容
</Accordion>
```

## 组件导出

- `Accordion`
- `AccordionContent`
- `AccordionItem`
- `AccordionTrigger`

## 源码 API

以下 API 只从本仓库源码中提取。来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等外部 primitive 的继承字段，仅记录本地源码中出现的类型引用，不展开或编造第三方完整 API。

### Props

| 组件 | Prop | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `AccordionContent` | `class` | `HTMLAttributes["class"]` | `<AccordionContent class="border-primary" />` |
| `AccordionItem` | `class` | `HTMLAttributes["class"]` | `<AccordionItem class="border-primary" />` |
| `AccordionTrigger` | `class` | `HTMLAttributes["class"]` | `<AccordionTrigger class="border-primary" />` |
| `Accordion` | 类型引用 | `AccordionRootProps` | 本地源码仅引用该外部 props 类型，未展开具体字段。 |

### Events

| 组件 | 事件 | 类型 / 来源 | 示例 |
| --- | --- | --- | --- |
| `Accordion` | 类型引用 | `AccordionRootEmits` | 本地源码仅引用该外部 emits 类型，未展开具体事件。 |

### Slots

| 组件 | Slot | 示例 |
| --- | --- | --- |
| `Accordion` | `default` | `<Accordion>内容</Accordion>` |
| `AccordionContent` | `default` | `<AccordionContent>内容</AccordionContent>` |
| `AccordionItem` | `default` | `<AccordionItem>内容</AccordionItem>` |
| `AccordionTrigger` | `default` | `<AccordionTrigger>内容</AccordionTrigger>` |
| `AccordionTrigger` | `icon` | `<AccordionTrigger> <template #icon>自定义 icon</template> </AccordionTrigger>` |

### Exports

源码中未发现额外本地 API 导出。

## API 示例

### AccordionContent.class

```vue
<AccordionContent class="border-primary" />
```

### AccordionItem.class

```vue
<AccordionItem class="border-primary" />
```

### AccordionTrigger.class

```vue
<AccordionTrigger class="border-primary" />
```

### Accordion slot: default

```vue
<Accordion>内容</Accordion>
```

### AccordionContent slot: default

```vue
<AccordionContent>内容</AccordionContent>
```

### AccordionItem slot: default

```vue
<AccordionItem>内容</AccordionItem>
```

### AccordionTrigger slot: default

```vue
<AccordionTrigger>内容</AccordionTrigger>
```

### AccordionTrigger slot: icon

```vue
<AccordionTrigger>
  <template #icon>自定义 icon</template>
</AccordionTrigger>
```

## 依赖

- `reka-ui`
- `@vueuse/core`
- `lucide-vue-next`

## Registry

```txt
/r/accordion.json
```

