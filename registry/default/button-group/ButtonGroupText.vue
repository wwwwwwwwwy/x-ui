<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ButtonGroupVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * Props 定义 ButtonGroupText 的公开 props，保持与 shadcn-vue 安装后的类型入口兼容。
 */
interface Props extends PrimitiveProps {
  class?: HTMLAttributes["class"]
  orientation?: ButtonGroupVariants["orientation"]
}

/**
 * ButtonGroupText 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<Props>(), {
  as: "div",
})
</script>

<template>
  <Primitive
    role="group"
    data-slot="button-group"
    :data-orientation="props.orientation"
    :as="as"
    :as-child="asChild"
    :class="cn('bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4', props.class)"
  >
    <slot />
  </Primitive>
</template>
