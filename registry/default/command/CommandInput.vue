<script setup lang="ts">
import type { ListboxFilterProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ActionIcon048 as Search } from "@meri-design/icon-vue"
import { ListboxFilter, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { useCommand } from "."

/**
 * CommandInput 的组件选项；用于控制 attrs 继承等 Vue 运行时兼容行为。
 */
defineOptions({
  inheritAttrs: false,
})

/**
 * CommandInput 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ListboxFilterProps & {
  class?: HTMLAttributes["class"]
}>()

/**
 * 移除仅由 CommandInput 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 CommandInput 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)

const { filterState } = useCommand()
</script>

<template>
  <div class="flex items-center border-b px-3" cmdk-input-wrapper>
    <Search size="16" class="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <ListboxFilter
      v-bind="{ ...forwardedProps, ...$attrs }"
      v-model="filterState.search"
      auto-focus
      :class="cn('flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50', props.class)" />
  </div>
</template>
