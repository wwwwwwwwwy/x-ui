<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * SidebarMenuItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <li
    data-sidebar="menu-item"
    :class="cn('group/menu-item relative', props.class)"
  >
    <slot />
  </li>
</template>
