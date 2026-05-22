<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { ActionIcon032 as ChevronRight } from "@meri-design/icon-vue"
import { cn } from "@/lib/utils"

/**
 * BreadcrumbSeparator 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:w-3.5 [&>svg]:h-3.5', props.class)"
  >
    <slot>
      <ChevronRight size="16" />
    </slot>
  </li>
</template>
