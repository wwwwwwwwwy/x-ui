<script setup lang="ts">
import type { SplitterGroupEmits, SplitterGroupProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { SplitterGroup, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * ResizablePanelGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<SplitterGroupProps & { class?: HTMLAttributes["class"] }>()
/**
 * ResizablePanelGroup 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<SplitterGroupEmits>()

/**
 * 移除仅由 ResizablePanelGroup 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 ResizablePanelGroup 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterGroup v-bind="forwarded" :class="cn('flex h-full w-full data-[panel-group-direction=vertical]:flex-col', props.class)">
    <slot />
  </SplitterGroup>
</template>
