<script setup lang="ts">
import type { SelectValueProps } from "reka-ui"
import { SelectValue } from "reka-ui"

/**
 * SelectValue 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<SelectValueProps>()
</script>

<template>
  <SelectValue v-bind="props">
    <slot />
  </SelectValue>
</template>
