<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { ButtonGroupVariants } from "."
import { cn } from "@/lib/utils"
import { buttonGroupVariants } from "."

/**
 * ButtonGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
  orientation?: ButtonGroupVariants["orientation"]
}>()
</script>

<template>
  <div
    role="group"
    data-slot="button-group"
    :data-orientation="props.orientation"
    :class="cn(buttonGroupVariants({ orientation: props.orientation }), props.class)"
  >
    <slot />
  </div>
</template>
