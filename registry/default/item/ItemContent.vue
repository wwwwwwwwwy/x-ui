<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * ItemContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="item-content"
    :class="cn('flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none', props.class)"
  >
    <slot />
  </div>
</template>
