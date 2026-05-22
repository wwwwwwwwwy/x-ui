<script lang="ts" setup>
import type { CalendarCellProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarCell, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * CalendarCell 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<CalendarCellProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 CalendarCell 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 CalendarCell 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCell
    :class="cn('relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent [&:has([data-selected][data-outside-view])]:bg-accent/50', props.class)"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCell>
</template>
