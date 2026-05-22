<script lang="ts" setup>
import type { StepperIndicatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"

import { StepperIndicator, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * StepperIndicator 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<StepperIndicatorProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 StepperIndicator 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 StepperIndicator 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperIndicator
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn(
      'inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-10 h-10',
      // 禁用状态。
      'group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50',
      // 当前步骤状态。
      'group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground',
      // 已完成步骤状态。
      'group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground',
      props.class,
    )"
  >
    <slot v-bind="slotProps" />
  </StepperIndicator>
</template>
