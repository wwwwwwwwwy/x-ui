<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * ItemGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    role="list"
    data-slot="item-group"
    :class="cn('group/item-group flex flex-col', props.class)"
  >
    <slot />
  </div>
</template>
