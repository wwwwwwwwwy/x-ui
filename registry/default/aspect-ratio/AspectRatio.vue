<script setup lang="ts">
import type { AspectRatioProps } from "reka-ui"
import { AspectRatio } from "reka-ui"

/**
 * AspectRatio 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<AspectRatioProps>()
</script>

<template>
  <AspectRatio v-bind="props">
    <slot />
  </AspectRatio>
</template>
