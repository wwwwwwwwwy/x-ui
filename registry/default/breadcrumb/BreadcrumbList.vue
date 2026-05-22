<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * BreadcrumbList 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <ol
    :class="cn('flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5', props.class)"
  >
    <slot />
  </ol>
</template>
