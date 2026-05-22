<script setup lang="ts">
import type { SeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Separator } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * Separator 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<
  SeparatorProps & { class?: HTMLAttributes["class"] }
>(), {
  orientation: "horizontal",
  decorative: true,
})

/**
 * 移除仅由 Separator 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="
      cn(
        'shrink-0 bg-border',
        props.orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full',
        props.class,
      )
    "
  />
</template>
