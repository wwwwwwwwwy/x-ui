<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * InputGroupText 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span
    :class="cn(
      'flex items-center gap-2 text-m text-gray-500 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4',
      props.class,
    )"
  >
    <slot />
  </span>
</template>
