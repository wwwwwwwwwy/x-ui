<script setup lang="ts">
import type { DialogTitleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { DialogTitle } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * SheetTitle 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DialogTitleProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 SheetTitle 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <DialogTitle
    :class="cn('text-lg font-semibold text-foreground', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogTitle>
</template>
