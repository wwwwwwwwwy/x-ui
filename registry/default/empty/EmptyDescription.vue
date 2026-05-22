<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * EmptyDescription 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <p
    data-slot="empty-description"
    :class="cn(
      'text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4',
      props.class,
    )"
  >
    <slot />
  </p>
</template>
