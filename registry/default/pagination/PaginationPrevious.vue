<script setup lang="ts">
import type { PaginationPrevProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from "@/registry/default/ui/button"
import { reactiveOmit } from "@vueuse/core"
import { ChevronLeftIcon } from "lucide-vue-next"
import { PaginationPrev, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"

/**
 * PaginationPrevious 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<PaginationPrevProps & {
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
}>(), {
  size: "default",
})

/**
 * 移除仅由 PaginationPrevious 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class", "size")
/**
 * 转发 PaginationPrevious 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationPrev
    data-slot="pagination-previous"
    :class="cn(buttonVariants({ variant: 'ghost', size }), 'gap-1 px-2.5 sm:pr-2.5', props.class)"
    v-bind="forwarded"
  >
    <slot>
      <ChevronLeftIcon />
      <span class="hidden sm:block">Previous</span>
    </slot>
  </PaginationPrev>
</template>
