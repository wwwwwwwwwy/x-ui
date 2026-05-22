<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxItem, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * ComboboxItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes["class"] }>()
/**
 * ComboboxItem 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<ComboboxItemEmits>()

/**
 * 移除仅由 ComboboxItem 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 ComboboxItem 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxItem
    v-bind="forwarded"
    :class="cn('relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0', props.class)"
  >
    <slot />
  </ComboboxItem>
</template>
