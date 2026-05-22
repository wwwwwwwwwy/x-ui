<script setup lang="ts">
import type { ComboboxEmptyProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxEmpty } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * ComboboxEmpty 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ComboboxEmptyProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 ComboboxEmpty 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <ComboboxEmpty v-bind="delegatedProps" :class="cn('py-6 text-center text-sm', props.class)">
    <slot />
  </ComboboxEmpty>
</template>
