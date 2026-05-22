<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { AvatarVariants } from "."
import { AvatarRoot } from "reka-ui"
import { cn } from "@/lib/utils"
import { avatarVariant } from "."

/**
 * Avatar 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<{
  class?: HTMLAttributes["class"]
  size?: AvatarVariants["size"]
  shape?: AvatarVariants["shape"]
}>(), {
  size: "sm",
  shape: "circle",
})
</script>

<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot />
  </AvatarRoot>
</template>
