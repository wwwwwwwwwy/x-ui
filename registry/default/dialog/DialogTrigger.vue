<script setup lang="ts">
import type { DialogTriggerProps } from "reka-ui"
import { DialogTrigger } from "reka-ui"

/**
 * DialogTrigger 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DialogTriggerProps>()
</script>

<template>
  <DialogTrigger v-bind="props">
    <slot />
  </DialogTrigger>
</template>
