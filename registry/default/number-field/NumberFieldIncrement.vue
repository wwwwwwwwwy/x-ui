<script setup lang="ts">
import type { NumberFieldIncrementProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Plus } from "lucide-vue-next"
import { NumberFieldIncrement, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * NumberFieldIncrement 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<NumberFieldIncrementProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 NumberFieldIncrement 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 NumberFieldIncrement 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldIncrement data-slot="increment" v-bind="forwarded" :class="cn('absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3', props.class)">
    <slot>
      <Plus class="h-4 w-4" />
    </slot>
  </NumberFieldIncrement>
</template>
