<script setup lang="ts">
import type { PaginationListProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { PaginationList } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * PaginationContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<PaginationListProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 PaginationContent 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <PaginationList
    v-slot="slotProps"
    data-slot="pagination-content"
    v-bind="delegatedProps"
    :class="cn('flex flex-row items-center gap-1', props.class)"
  >
    <slot v-bind="slotProps" />
  </PaginationList>
</template>
