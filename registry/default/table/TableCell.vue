<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * TableCell 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <td
    :class="
      cn(
        'p-4 align-middle [&:has([role=checkbox])]:pr-0',
        props.class,
      )
    "
  >
    <slot />
  </td>
</template>
