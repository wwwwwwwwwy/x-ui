<script setup lang="ts">
import type { ListboxGroupProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ListboxGroup, ListboxGroupLabel, useId } from "reka-ui"
import { computed, onMounted, onUnmounted } from "vue"
import { cn } from "@/lib/utils"
import { provideCommandGroupContext, useCommand } from "."

/**
 * CommandGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ListboxGroupProps & {
  class?: HTMLAttributes["class"]
  heading?: string
}>()

/**
 * 移除仅由 CommandGroup 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

const { allGroups, filterState } = useCommand()
const id = useId()

/**
 * isRender 是 CommandGroup 的派生状态，用于让模板和样式保持同步。
 */
const isRender = computed(() => !filterState.search ? true : filterState.filtered.groups.has(id))

/**
 * CommandGroup 向子组件提供上下文，保证组合式组件在同一作用域内共享状态。
 */
provideCommandGroupContext({ id })
onMounted(() => {
  if (!allGroups.value.has(id))
    allGroups.value.set(id, new Set())
})
onUnmounted(() => {
  allGroups.value.delete(id)
})
</script>

<template>
  <ListboxGroup
    v-bind="delegatedProps"
    :id="id"
    :class="cn('overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground', props.class)"
    :hidden="isRender ? undefined : true"
  >
    <ListboxGroupLabel v-if="heading" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
      {{ heading }}
    </ListboxGroupLabel>
    <slot />
  </ListboxGroup>
</template>
