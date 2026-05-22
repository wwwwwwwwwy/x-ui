<script setup lang="ts">
import type { TooltipProviderProps } from "reka-ui"
import { TooltipProvider } from "reka-ui"

/**
 * TooltipProvider 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<TooltipProviderProps>()
</script>

<template>
  <TooltipProvider v-bind="props">
    <slot />
  </TooltipProvider>
</template>
