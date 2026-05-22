<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Separator } from "@/registry/default/ui/separator"

/**
 * SidebarSeparator 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Separator
    data-sidebar="separator"
    :class="cn('mx-2 w-auto bg-sidebar-border', props.class)"
  >
    <slot />
  </Separator>
</template>
