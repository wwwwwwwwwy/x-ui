<script setup lang="ts">
import type { ContextMenuItemEmits, ContextMenuItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  ContextMenuItem,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * ContextMenuItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ContextMenuItemProps & { class?: HTMLAttributes["class"], inset?: boolean }>()
/**
 * ContextMenuItem 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<ContextMenuItemEmits>()

/**
 * 移除仅由 ContextMenuItem 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 ContextMenuItem 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ContextMenuItem
    v-bind="forwarded"
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
  </ContextMenuItem>
</template>
