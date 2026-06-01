<script setup lang="ts">
import type { TagsInputItemTextProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputItemText, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * TagsInputItemText 的 props；透传文本 primitive 字段，并允许通过 class 调整文本样式。
 */
const props = defineProps<TagsInputItemTextProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除本地消费的 class，避免样式字段透传到底层文本 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 TagsInputItemText props，保持标签文本与父级 item 的值展示一致。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemText v-bind="forwardedProps" :class="cn('min-w-0 truncate rounded bg-transparent px-2 py-1 text-sm', props.class)" />
</template>
