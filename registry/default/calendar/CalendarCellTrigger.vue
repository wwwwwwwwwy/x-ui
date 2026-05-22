<script lang="ts" setup>
import type { CalendarCellTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarCellTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"

/**
 * CalendarCellTrigger 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 CalendarCellTrigger 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 CalendarCellTrigger 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    :class="cn(
      buttonVariants({ variant: 'ghost' }),
      'h-9 w-9 p-0 font-normal',
      '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
      // 选中状态。
      'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
      // 禁用状态。
      'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
      // 不可用日期状态。
      'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
      // 当前月份外日期状态。
      'data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
