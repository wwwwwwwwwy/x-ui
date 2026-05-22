<script setup lang="ts">
import type { DialogDescriptionProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { DialogDescription } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * SheetDescription 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 SheetDescription 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <DialogDescription
    :class="cn('text-sm text-muted-foreground', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogDescription>
</template>
