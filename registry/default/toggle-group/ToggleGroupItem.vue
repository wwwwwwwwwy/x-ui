<script setup lang="ts">
import type { VariantProps } from "class-variance-authority"
import type { ToggleGroupItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ToggleGroupItem, useForwardProps } from "reka-ui"
import { inject } from "vue"
import { cn } from "@/lib/utils"
import { toggleVariants } from "@/registry/default/ui/toggle"

/**
 * ToggleGroupVariants 定义 ToggleGroupItem 使用的本地类型，供 props、事件或插槽复用。
 */
type ToggleGroupVariants = VariantProps<typeof toggleVariants>

/**
 * ToggleGroupItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ToggleGroupItemProps & {
  class?: HTMLAttributes["class"]
  variant?: ToggleGroupVariants["variant"]
  size?: ToggleGroupVariants["size"]
}>()

const context = inject<ToggleGroupVariants>("toggleGroup")

/**
 * 移除仅由 ToggleGroupItem 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class", "size", "variant")

/**
 * 转发 ToggleGroupItem 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ToggleGroupItem
    v-slot="slotProps"
    v-bind="forwardedProps" :class="cn(toggleVariants({
      variant: context?.variant || variant,
      size: context?.size || size,
    }), props.class)"
  >
    <slot v-bind="slotProps" />
  </ToggleGroupItem>
</template>
