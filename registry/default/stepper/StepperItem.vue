<script lang="ts" setup>
import type { StepperItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { StepperItem, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * StepperItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<StepperItemProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 StepperItem 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 StepperItem 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperItem
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn('flex items-center gap-2 group data-[disabled]:pointer-events-none', props.class)"
  >
    <slot v-bind="slotProps" />
  </StepperItem>
</template>
