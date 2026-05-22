<script setup lang="ts">
import type { HoverCardRootEmits, HoverCardRootProps } from "reka-ui"
import { HoverCardRoot, useForwardPropsEmits } from "reka-ui"

/**
 * HoverCard 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<HoverCardRootProps>()
/**
 * HoverCard 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<HoverCardRootEmits>()

/**
 * 转发 HoverCard 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <HoverCardRoot v-bind="forwarded">
    <slot />
  </HoverCardRoot>
</template>
