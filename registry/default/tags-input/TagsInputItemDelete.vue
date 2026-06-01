<script setup lang="ts">
import type { TagsInputItemDeleteProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { X } from "lucide-vue-next"
import { TagsInputItemDelete, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * TagsInputItemDelete 的 props；透传删除按钮 primitive 字段，并允许通过 class 扩展删除按钮样式。
 */
const props = defineProps<TagsInputItemDeleteProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除本地消费的 class，避免样式字段透传到底层删除按钮 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 TagsInputItemDelete props，保留底层删除标签交互。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemDelete v-bind="forwardedProps" :class="cn('mr-1 flex shrink-0 rounded bg-transparent', props.class)">
    <slot>
      <X class="w-4 h-4" />
    </slot>
  </TagsInputItemDelete>
</template>
