<script setup lang="ts">
import type { AlertDialogTitleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AlertDialogTitle } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * AlertDialogTitle 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<AlertDialogTitleProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 AlertDialogTitle 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <AlertDialogTitle
    v-bind="delegatedProps"
    :class="cn('text-lg font-semibold', props.class)"
  >
    <slot />
  </AlertDialogTitle>
</template>
