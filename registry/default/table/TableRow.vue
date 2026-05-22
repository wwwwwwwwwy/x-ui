<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * TableRow 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <tr :class="cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', props.class)">
    <slot />
  </tr>
</template>
