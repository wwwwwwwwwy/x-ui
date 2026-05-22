<script setup lang="ts">
import type { ContextMenuRootEmits, ContextMenuRootProps } from "reka-ui"
import { ContextMenuRoot, useForwardPropsEmits } from "reka-ui"

/**
 * ContextMenu 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ContextMenuRootProps>()
/**
 * ContextMenu 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<ContextMenuRootEmits>()

/**
 * 转发 ContextMenu 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ContextMenuRoot v-bind="forwarded">
    <slot />
  </ContextMenuRoot>
</template>
