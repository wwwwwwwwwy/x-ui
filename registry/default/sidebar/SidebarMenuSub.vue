<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * SidebarMenuSub 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <ul
    data-sidebar="menu-badge"
    :class="cn(
      'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5',
      'group-data-[collapsible=icon]:hidden',
      props.class,
    )"
  >
    <slot />
  </ul>
</template>
