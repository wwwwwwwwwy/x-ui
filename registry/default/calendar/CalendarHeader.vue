<script lang="ts" setup>
import type { CalendarHeaderProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarHeader, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * CalendarHeader 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<CalendarHeaderProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 CalendarHeader 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 CalendarHeader 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeader :class="cn('relative flex w-full items-center justify-between pt-1', props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarHeader>
</template>
