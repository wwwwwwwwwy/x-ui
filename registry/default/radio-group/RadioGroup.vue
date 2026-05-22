<script setup lang="ts">
import type { RadioGroupRootEmits, RadioGroupRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RadioGroupRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * RadioGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<RadioGroupRootProps & { class?: HTMLAttributes["class"] }>()
/**
 * RadioGroup 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<RadioGroupRootEmits>()

/**
 * 移除仅由 RadioGroup 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 RadioGroup 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <RadioGroupRoot
    :class="cn('grid gap-2', props.class)"
    v-bind="forwarded"
  >
    <slot />
  </RadioGroupRoot>
</template>
