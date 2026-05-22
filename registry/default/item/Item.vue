<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ItemVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { itemVariants } from "."

/**
 * Item 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<PrimitiveProps & {
  class?: HTMLAttributes["class"]
  variant?: ItemVariants["variant"]
  size?: ItemVariants["size"]
}>(), {
  as: "div",
})
</script>

<template>
  <Primitive
    data-slot="item"
    :as="as"
    :as-child="asChild"
    :class="cn(itemVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
