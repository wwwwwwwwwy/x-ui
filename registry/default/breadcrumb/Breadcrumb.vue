<script lang="ts" setup>
import type { HTMLAttributes } from "vue"

/**
 * Breadcrumb 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <nav aria-label="breadcrumb" :class="props.class">
    <slot />
  </nav>
</template>
