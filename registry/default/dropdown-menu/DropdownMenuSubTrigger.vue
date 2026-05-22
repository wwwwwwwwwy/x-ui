<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronRight } from "lucide-vue-next"
import {
  DropdownMenuSubTrigger,
  useForwardProps,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * DropdownMenuSubTrigger 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 DropdownMenuSubTrigger 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 DropdownMenuSubTrigger 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      props.class,
    )"
  >
    <slot />
    <ChevronRight class="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>
