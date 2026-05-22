<script setup lang="ts">
import type { ContextMenuGroupProps } from "reka-ui"
import { ContextMenuGroup } from "reka-ui"

/**
 * ContextMenuGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ContextMenuGroupProps>()
</script>

<template>
  <ContextMenuGroup v-bind="props">
    <slot />
  </ContextMenuGroup>
</template>
