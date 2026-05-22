<script setup lang="ts">
import type { DialogTitleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { DialogTitle, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * DialogTitle 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DialogTitleProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 DialogTitle 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 DialogTitle 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DialogTitle
    v-bind="forwardedProps"
    :class="
      cn(
        'text-lg font-semibold leading-none tracking-tight',
        props.class,
      )
    "
  >
    <slot />
  </DialogTitle>
</template>
