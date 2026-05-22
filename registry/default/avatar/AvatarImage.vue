<script setup lang="ts">
import type { AvatarImageProps } from "reka-ui"
import { AvatarImage } from "reka-ui"

/**
 * AvatarImage 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<AvatarImageProps>()
</script>

<template>
  <AvatarImage v-bind="props" class="h-full w-full object-cover">
    <slot />
  </AvatarImage>
</template>
