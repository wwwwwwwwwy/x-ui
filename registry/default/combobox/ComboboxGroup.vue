<script setup lang="ts">
import type { ComboboxGroupProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxGroup, ComboboxLabel } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * ComboboxGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ComboboxGroupProps & {
  class?: HTMLAttributes["class"]
  heading?: string
}>()

/**
 * 移除仅由 ComboboxGroup 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <ComboboxGroup
    v-bind="delegatedProps"
    :class="cn('overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground', props.class)"
  >
    <ComboboxLabel v-if="heading" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
