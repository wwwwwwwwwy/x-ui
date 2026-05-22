<script setup lang="ts">
import type { DropdownMenuRadioGroupEmits, DropdownMenuRadioGroupProps } from "reka-ui"
import {
  DropdownMenuRadioGroup,
  useForwardPropsEmits,
} from "reka-ui"

/**
 * DropdownMenuRadioGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DropdownMenuRadioGroupProps>()
/**
 * DropdownMenuRadioGroup 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<DropdownMenuRadioGroupEmits>()

/**
 * 转发 DropdownMenuRadioGroup 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRadioGroup v-bind="forwarded">
    <slot />
  </DropdownMenuRadioGroup>
</template>
