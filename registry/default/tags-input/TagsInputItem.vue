<script setup lang="ts">
import type { TagsInputItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputItem, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * TagsInputItem 的 props；value 等字段透传给 reka-ui，class 用于扩展单个标签项样式。
 */
const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除本地消费的 class，避免样式字段透传到底层标签项 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 TagsInputItem props，保留底层选中、删除和 active 状态行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItem v-bind="forwardedProps" :class="cn('flex h-[22px] min-w-0 max-w-full shrink items-center overflow-hidden rounded-[2px] bg-gray-200/80 ring-offset-background data-[state=active]:ring-2 data-[state=active]:ring-ring data-[state=active]:ring-offset-2', props.class)">
    <slot />
  </TagsInputItem>
</template>
