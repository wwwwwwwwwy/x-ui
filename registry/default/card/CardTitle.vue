<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * CardTitle 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <h3
    :class="
      cn('text-2xl font-semibold leading-none tracking-tight', props.class)
    "
  >
    <slot />
  </h3>
</template>
