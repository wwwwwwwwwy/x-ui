<script setup lang="ts">
import type { TooltipTriggerProps } from "reka-ui"
import { TooltipTrigger } from "reka-ui"

/**
 * TooltipTrigger 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<TooltipTriggerProps>()
</script>

<template>
  <TooltipTrigger v-bind="props">
    <slot />
  </TooltipTrigger>
</template>
