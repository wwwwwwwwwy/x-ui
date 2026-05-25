<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  /** 自定义类名，用于扩展文本附加内容样式。 */
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span
    :class="cn(
      'flex items-center gap-2 text-[14px] font-normal leading-[1.5] text-foreground [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4',
      props.class,
    )"
  >
    <slot />
  </span>
</template>
