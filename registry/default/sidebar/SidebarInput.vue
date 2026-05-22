<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Input } from "@/registry/default/ui/input"

/**
 * SidebarInput 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Input
    data-sidebar="input"
    :class="cn(
      'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
      props.class,
    )"
  >
    <slot />
  </Input>
</template>
