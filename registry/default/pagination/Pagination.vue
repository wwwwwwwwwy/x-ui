<script setup lang="ts">
import type { PaginationRootEmits, PaginationRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { PaginationRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * Pagination 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<PaginationRootProps & {
  class?: HTMLAttributes["class"]
}>()
/**
 * Pagination 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<PaginationRootEmits>()

/**
 * 移除仅由 Pagination 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
/**
 * 转发 Pagination 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PaginationRoot
    v-slot="slotProps"
    data-slot="pagination"
    v-bind="forwarded"
    :class="cn('mx-auto flex w-full justify-center', props.class)"
  >
    <slot v-bind="slotProps" />
  </PaginationRoot>
</template>
