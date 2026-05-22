<script setup lang="ts">
import type { ContextMenuLabelProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ContextMenuLabel } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * ContextMenuLabel 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ContextMenuLabelProps & { class?: HTMLAttributes["class"], inset?: boolean }>()

/**
 * 移除仅由 ContextMenuLabel 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <ContextMenuLabel
    v-bind="delegatedProps"
    :class="
      cn('px-2 py-1.5 text-sm font-semibold text-foreground',
         inset && 'pl-8', props.class,
      )"
  >
    <slot />
  </ContextMenuLabel>
</template>
