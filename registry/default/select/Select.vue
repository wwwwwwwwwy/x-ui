<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from "reka-ui"
import { SelectRoot, useForwardPropsEmits } from "reka-ui"

/**
 * Select 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<SelectRootProps>()
/**
 * Select 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<SelectRootEmits>()

/**
 * 转发 Select 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectRoot v-bind="forwarded">
    <slot />
  </SelectRoot>
</template>
