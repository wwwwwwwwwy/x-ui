<script setup lang="ts">
import type { PopoverTriggerProps } from "reka-ui"
import { PopoverTrigger } from "reka-ui"

/**
 * PopoverTrigger 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<PopoverTriggerProps>()
</script>

<template>
  <PopoverTrigger v-bind="props">
    <slot />
  </PopoverTrigger>
</template>
