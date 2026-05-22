<script setup lang="ts">
import type { ContextMenuSeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  ContextMenuSeparator,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * ContextMenuSeparator 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ContextMenuSeparatorProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 ContextMenuSeparator 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <ContextMenuSeparator v-bind="delegatedProps" :class="cn('-mx-1 my-1 h-px bg-border', props.class)" />
</template>
