<script setup lang="ts">
import type { NumberFieldDecrementProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ActionIcon026 as Minus } from "@meri-design/icon-vue"
import { NumberFieldDecrement, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * NumberFieldDecrement 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<NumberFieldDecrementProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 NumberFieldDecrement 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 NumberFieldDecrement 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldDecrement data-slot="decrement" v-bind="forwarded" :class="cn('absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20', props.class)">
    <slot>
      <Minus size="16" class="h-4 w-4" />
    </slot>
  </NumberFieldDecrement>
</template>
