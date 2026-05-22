<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { EmptyMediaVariants } from "."
import { cn } from "@/lib/utils"
import { emptyMediaVariants } from "."

/**
 * EmptyMedia 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
  variant?: EmptyMediaVariants["variant"]
}>()
</script>

<template>
  <div
    data-slot="empty-icon"
    :data-variant="variant"
    :class="cn(emptyMediaVariants({ variant }), props.class)"
  >
    <slot />
  </div>
</template>
