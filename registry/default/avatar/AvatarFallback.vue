<script setup lang="ts">
import type { AvatarFallbackProps } from "reka-ui"
import { AvatarFallback } from "reka-ui"

/**
 * AvatarFallback 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<AvatarFallbackProps>()
</script>

<template>
  <AvatarFallback v-bind="props">
    <slot />
  </AvatarFallback>
</template>
