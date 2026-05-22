<script lang="ts" setup>
import type { StepperTitleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"

import { StepperTitle, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * StepperTitle 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<StepperTitleProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 StepperTitle 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 StepperTitle 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperTitle v-bind="forwarded" :class="cn('text-md font-semibold whitespace-nowrap', props.class)">
    <slot />
  </StepperTitle>
</template>
