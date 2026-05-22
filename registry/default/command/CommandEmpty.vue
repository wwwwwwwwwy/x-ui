<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Primitive } from "reka-ui"
import { computed } from "vue"
import { cn } from "@/lib/utils"
import { useCommand } from "."

/**
 * CommandEmpty 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<PrimitiveProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 CommandEmpty 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

const { filterState } = useCommand()
/**
 * isRender 是 CommandEmpty 的派生状态，用于让模板和样式保持同步。
 */
const isRender = computed(() => !!filterState.search && filterState.filtered.count === 0,
)
</script>

<template>
  <Primitive v-if="isRender" v-bind="delegatedProps" :class="cn('py-6 text-center text-sm', props.class)">
    <slot />
  </Primitive>
</template>
