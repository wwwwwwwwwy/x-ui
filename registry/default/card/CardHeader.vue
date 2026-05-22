<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * CardHeader 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn('flex flex-col gap-y-1.5 p-6', props.class)">
    <slot />
  </div>
</template>
