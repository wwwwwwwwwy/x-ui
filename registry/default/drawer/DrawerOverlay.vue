<script lang="ts" setup>
import type { DialogOverlayProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { DrawerOverlay } from "vaul-vue"
import { cn } from "@/lib/utils"

/**
 * DrawerOverlay 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DialogOverlayProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 DrawerOverlay 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <DrawerOverlay v-bind="delegatedProps" :class="cn('fixed inset-0 z-50 bg-black/80', props.class)" />
</template>
