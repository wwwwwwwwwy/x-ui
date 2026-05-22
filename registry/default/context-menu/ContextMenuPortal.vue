<script setup lang="ts">
import type { ContextMenuPortalProps } from "reka-ui"
import { ContextMenuPortal } from "reka-ui"

/**
 * ContextMenuPortal 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ContextMenuPortalProps>()
</script>

<template>
  <ContextMenuPortal v-bind="props">
    <slot />
  </ContextMenuPortal>
</template>
