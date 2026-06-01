<script setup lang="ts">
import type { TagsInputRootEmits, TagsInputRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * TagsInput 根组件 props；透传 reka-ui 的受控 / 非受控字段，并通过 class 允许外部扩展容器样式。
 */
const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes["class"] }>()
/**
 * TagsInput 根组件事件；保持与底层 TagsInputRoot 的值变更、创建和删除标签事件一致。
 */
const emits = defineEmits<TagsInputRootEmits>()

/**
 * 移除本地消费的 class，避免样式字段继续透传到底层 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发根组件 props 与事件，保留 reka-ui TagsInputRoot 的交互和受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TagsInputRoot v-bind="forwarded" :class="cn('flex min-h-[30px] w-full items-center gap-2 overflow-hidden rounded-[4px] border border-input bg-[var(--gray-0)] px-3 py-0 text-[14px] leading-[1.5] text-foreground shadow-none outline-none enabled:hover:border-primary focus-within:border-primary disabled:cursor-not-allowed disabled:bg-[var(--gray-200)] disabled:text-[var(--gray-400)] disabled:opacity-100', props.class)">
    <slot />
  </TagsInputRoot>
</template>
