<script setup lang="ts">
import type { ComboboxRootEmits, ComboboxRootProps } from "reka-ui"
import { ComboboxRoot, useForwardPropsEmits } from "reka-ui"

/**
 * Combobox 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ComboboxRootProps>()
/**
 * Combobox 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<ComboboxRootEmits>()

/**
 * 转发 Combobox 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxRoot v-bind="forwarded">
    <slot />
  </ComboboxRoot>
</template>
