<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

/**
 * SidebarMenuSkeleton 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  showIcon?: boolean
  class?: HTMLAttributes["class"]
}>()

/**
 * width 是 SidebarMenuSkeleton 的派生状态，用于让模板和样式保持同步。
 */
const width = computed(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`
})
</script>

<template>
  <div
    data-sidebar="menu-skeleton"
    :class="cn('rounded-md h-8 flex gap-2 px-2 items-center', props.class)"
  >
    <Skeleton
      v-if="showIcon"
      class="size-4 rounded-md"
      data-sidebar="menu-skeleton-icon"
    />

    <Skeleton
      class="h-4 flex-1 max-w-[--skeleton-width]"
      data-sidebar="menu-skeleton-text"
      :style="{ '--skeleton-width': width }"
    />
  </div>
</template>
