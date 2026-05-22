<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import { Dot } from "lucide-vue-next"
import { Primitive, useForwardProps } from "reka-ui"

/**
 * PinInputSeparator 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<PrimitiveProps>()
/**
 * 转发 PinInputSeparator 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(props)
</script>

<template>
  <Primitive v-bind="forwardedProps">
    <slot>
      <Dot />
    </slot>
  </Primitive>
</template>
