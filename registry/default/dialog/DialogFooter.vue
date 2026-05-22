<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * DialogFooter 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <div
    :class="
      cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
