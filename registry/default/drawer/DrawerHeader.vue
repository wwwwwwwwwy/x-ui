<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * DrawerHeader 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn('grid gap-1.5 p-4 text-center sm:text-left', props.class)">
    <slot />
  </div>
</template>
