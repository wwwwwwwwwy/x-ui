<script setup lang="ts">
import type { SelectItemTextProps } from "reka-ui"
import { SelectItemText } from "reka-ui"

/**
 * SelectItemText 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<SelectItemTextProps>()
</script>

<template>
  <SelectItemText v-bind="props">
    <slot />
  </SelectItemText>
</template>
