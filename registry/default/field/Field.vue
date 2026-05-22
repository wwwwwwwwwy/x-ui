<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { FieldVariants } from "."
import { cn } from "@/lib/utils"
import { fieldVariants } from "."

/**
 * Field 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
  orientation?: FieldVariants["orientation"]
}>()
</script>

<template>
  <div
    role="group"
    data-slot="field"
    :data-orientation="orientation"
    :class="cn(
      fieldVariants({ orientation }),
      props.class,
    )"
  >
    <slot />
  </div>
</template>
