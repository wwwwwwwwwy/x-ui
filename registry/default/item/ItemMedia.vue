<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { ItemMediaVariants } from "."
import { cn } from "@/lib/utils"
import { itemMediaVariants } from "."

/**
 * ItemMedia 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
  variant?: ItemMediaVariants["variant"]
}>()
</script>

<template>
  <div
    data-slot="item-media"
    :data-variant="props.variant"
    :class="cn(itemMediaVariants({ variant }), props.class)"
  >
    <slot />
  </div>
</template>
