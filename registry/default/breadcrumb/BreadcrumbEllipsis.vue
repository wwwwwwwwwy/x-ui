<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { ActionIcon015 as MoreHorizontal } from "@meri-design/icon-vue"
import { cn } from "@/lib/utils"

/**
 * BreadcrumbEllipsis 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn('flex h-8 w-8 items-center justify-center rounded-sm text-gray-500 hover:bg-alpha-30 hover:text-blue-500', props.class)"
  >
    <slot>
      <MoreHorizontal size="16" class="h-4 w-4" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
