<script setup lang="ts">
import type { HoverCardTriggerProps } from "reka-ui"
import { HoverCardTrigger } from "reka-ui"

/**
 * HoverCardTrigger 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<HoverCardTriggerProps>()
</script>

<template>
  <HoverCardTrigger v-bind="props">
    <slot />
  </HoverCardTrigger>
</template>
