<script setup lang="ts">
import type { AlertDialogTriggerProps } from "reka-ui"
import { AlertDialogTrigger } from "reka-ui"

/**
 * AlertDialogTrigger 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<AlertDialogTriggerProps>()
</script>

<template>
  <AlertDialogTrigger v-bind="props">
    <slot />
  </AlertDialogTrigger>
</template>
