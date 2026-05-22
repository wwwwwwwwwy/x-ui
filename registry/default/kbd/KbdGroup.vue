<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * KbdGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <kbd
    data-slot="kbd-group"
    :class="cn('inline-flex items-center gap-1', props.class)"
  >
    <slot />
  </kbd>
</template>
