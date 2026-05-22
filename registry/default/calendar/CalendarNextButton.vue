<script lang="ts" setup>
import type { CalendarNextProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ActionIcon032 as ChevronRight } from "@meri-design/icon-vue"
import { CalendarNext, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"

/**
 * CalendarNextButton 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<CalendarNextProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 CalendarNextButton 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 CalendarNextButton 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarNext
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronRight size="16" class="h-4 w-4" />
    </slot>
  </CalendarNext>
</template>
