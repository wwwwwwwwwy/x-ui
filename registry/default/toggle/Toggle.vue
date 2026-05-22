<script setup lang="ts">
import type { ToggleEmits, ToggleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ToggleVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { Toggle, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
import { toggleVariants } from "."

/**
 * Toggle 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<ToggleProps & {
  class?: HTMLAttributes["class"]
  variant?: ToggleVariants["variant"]
  size?: ToggleVariants["size"]
}>(), {
  variant: "default",
  size: "default",
  disabled: false,
})

/**
 * Toggle 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<ToggleEmits>()

/**
 * 移除仅由 Toggle 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class", "size", "variant")

/**
 * 转发 Toggle 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Toggle
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn(toggleVariants({ variant, size }), props.class)"
  >
    <slot v-bind="slotProps" />
  </Toggle>
</template>
