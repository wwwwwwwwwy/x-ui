<script setup lang="ts">
import type { VariantProps } from "class-variance-authority"
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { toggleVariants } from "@/registry/default/ui/toggle"
import { reactiveOmit } from "@vueuse/core"
import { ToggleGroupRoot, useForwardPropsEmits } from "reka-ui"
import { provide } from "vue"
import { cn } from "@/lib/utils"

/**
 * ToggleGroupVariants 定义 ToggleGroup 使用的本地类型，供 props、事件或插槽复用。
 */
type ToggleGroupVariants = VariantProps<typeof toggleVariants>

/**
 * ToggleGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ToggleGroupRootProps & {
  class?: HTMLAttributes["class"]
  variant?: ToggleGroupVariants["variant"]
  size?: ToggleGroupVariants["size"]
}>()
/**
 * ToggleGroup 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<ToggleGroupRootEmits>()

provide("toggleGroup", {
  variant: props.variant,
  size: props.size,
})

/**
 * 移除仅由 ToggleGroup 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 ToggleGroup 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToggleGroupRoot v-slot="slotProps" v-bind="forwarded" :class="cn('flex items-center justify-center gap-1', props.class)">
    <slot v-bind="slotProps" />
  </ToggleGroupRoot>
</template>
