<script setup lang="ts">
import type { NumberFieldRootEmits, NumberFieldRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { NumberFieldRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * NumberField 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<NumberFieldRootProps & { class?: HTMLAttributes["class"] }>()
/**
 * NumberField 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<NumberFieldRootEmits>()

/**
 * 移除仅由 NumberField 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 NumberField 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NumberFieldRoot v-bind="forwarded" :class="cn('grid gap-1.5', props.class)">
    <slot />
  </NumberFieldRoot>
</template>
