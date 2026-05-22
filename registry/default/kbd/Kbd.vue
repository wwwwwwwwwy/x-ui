<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * Kbd 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <kbd
    :class="cn(
      'bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none',
      '[&_svg:not([class*=\'size-\'])]:size-3',
      '[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10',
      props.class,
    )"
  >
    <slot />
  </kbd>
</template>
