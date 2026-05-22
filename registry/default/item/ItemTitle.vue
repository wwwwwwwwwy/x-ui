<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * ItemTitle 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="item-title"
    :class="cn('flex w-fit items-center gap-2 text-sm leading-snug font-medium', props.class)"
  >
    <slot />
  </div>
</template>
