<script setup lang="ts">
import type { SeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { cn } from "@/lib/utils"
import { Separator } from "@/registry/default/ui/separator"

/**
 * ButtonGroupSeparator 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<SeparatorProps & { class?: HTMLAttributes["class"] }>(), {
  orientation: "vertical",
})
/**
 * 移除仅由 ButtonGroupSeparator 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <Separator
    data-slot="button-group-separator"
    v-bind="delegatedProps"
    :orientation="props.orientation"
    :class="cn(
      'bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto',
      props.class,
    )"
  />
</template>
