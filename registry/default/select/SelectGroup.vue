<script setup lang="ts">
import type { SelectGroupProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { SelectGroup } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * SelectGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<SelectGroupProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 SelectGroup 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <SelectGroup :class="cn('p-1 w-full', props.class)" v-bind="delegatedProps">
    <slot />
  </SelectGroup>
</template>
