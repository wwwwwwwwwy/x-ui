<script setup lang="ts">
import type { TooltipRootEmits, TooltipRootProps } from "reka-ui"
import { TooltipRoot, useForwardPropsEmits } from "reka-ui"

/**
 * Tooltip 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<TooltipRootProps>()
/**
 * Tooltip 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<TooltipRootEmits>()

/**
 * 转发 Tooltip 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipRoot v-bind="forwarded">
    <slot />
  </TooltipRoot>
</template>
