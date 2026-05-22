<script setup lang="ts">
import type { AlertDialogDescriptionProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  AlertDialogDescription,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * AlertDialogDescription 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<AlertDialogDescriptionProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 AlertDialogDescription 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <AlertDialogDescription
    v-bind="delegatedProps"
    :class="cn('text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </AlertDialogDescription>
</template>
