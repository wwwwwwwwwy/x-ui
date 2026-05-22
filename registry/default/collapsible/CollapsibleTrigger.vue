<script setup lang="ts">
import type { CollapsibleTriggerProps } from "reka-ui"
import { CollapsibleTrigger } from "reka-ui"

/**
 * CollapsibleTrigger 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<CollapsibleTriggerProps>()
</script>

<template>
  <CollapsibleTrigger v-bind="props">
    <slot />
  </CollapsibleTrigger>
</template>
