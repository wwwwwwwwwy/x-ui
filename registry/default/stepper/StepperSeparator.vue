<script lang="ts" setup>
import type { StepperSeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"

import { StepperSeparator, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * StepperSeparator 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<StepperSeparatorProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 StepperSeparator 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 StepperSeparator 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperSeparator
    v-bind="forwarded"
    :class="cn(
      'bg-muted',
      // 禁用状态。
      'group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50',
      // 已完成步骤状态。
      'group-data-[state=completed]:bg-accent-foreground',
      props.class,
    )"
  />
</template>
