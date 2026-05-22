<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * EmptyContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="empty-content"
    :class="cn(
      'flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
