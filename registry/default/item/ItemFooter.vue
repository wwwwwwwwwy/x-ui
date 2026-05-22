<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * ItemFooter 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="item-footer"
    :class="cn('flex basis-full items-center justify-between gap-2', props.class)"
  >
    <slot />
  </div>
</template>
