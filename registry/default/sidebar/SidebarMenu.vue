<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * SidebarMenu 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <ul
    data-sidebar="menu"
    :class="cn('flex w-full min-w-0 flex-col gap-1', props.class)"
  >
    <slot />
  </ul>
</template>
