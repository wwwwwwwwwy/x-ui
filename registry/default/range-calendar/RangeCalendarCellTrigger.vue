<script lang="ts" setup>
import type { RangeCalendarCellTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarCellTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"

/**
 * RangeCalendarCellTrigger 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 RangeCalendarCellTrigger 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 RangeCalendarCellTrigger 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCellTrigger
    :class="cn(
      buttonVariants({ variant: 'ghost' }),
      'h-9 w-9 p-0 font-normal data-[selected]:opacity-100',
      '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
      // 范围选择起始日期状态。
      'data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-primary data-[selection-start]:focus:text-primary-foreground',
      // 范围选择结束日期状态。
      'data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-primary data-[selection-end]:focus:text-primary-foreground',
      // 当前月份外日期状态。
      'data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30',
      // 禁用状态。
      'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
      // 不可用日期状态。
      'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarCellTrigger>
</template>
