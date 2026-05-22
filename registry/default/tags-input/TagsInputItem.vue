<script setup lang="ts">
import type { TagsInputItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputItem, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * TagsInputItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 TagsInputItem 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 TagsInputItem 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItem v-bind="forwardedProps" :class="cn('flex h-6 items-center rounded bg-secondary data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background', props.class)">
    <slot />
  </TagsInputItem>
</template>
