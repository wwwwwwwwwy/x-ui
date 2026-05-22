<script setup lang="ts">
import type { DropdownMenuSubContentEmits, DropdownMenuSubContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  DropdownMenuSubContent,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * DropdownMenuSubContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DropdownMenuSubContentProps & { class?: HTMLAttributes["class"] }>()
/**
 * DropdownMenuSubContent 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<DropdownMenuSubContentEmits>()

/**
 * 移除仅由 DropdownMenuSubContent 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 DropdownMenuSubContent 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuSubContent
    v-bind="forwarded"
    :class="cn('z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', props.class)"
  >
    <slot />
  </DropdownMenuSubContent>
</template>
