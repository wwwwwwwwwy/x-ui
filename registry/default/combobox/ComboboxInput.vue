<script setup lang="ts">
import type { ComboboxInputEmits, ComboboxInputProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxInput, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * ComboboxInput 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes["class"]
}>()

/**
 * ComboboxInput 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<ComboboxInputEmits>()

/**
 * 移除仅由 ComboboxInput 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 ComboboxInput 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxInput
    v-bind="forwarded"
    :class="cn('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', props.class)"
  >
    <slot />
  </ComboboxInput>
</template>
