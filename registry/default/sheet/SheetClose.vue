<script setup lang="ts">
import type { DialogCloseProps } from "reka-ui"
import { DialogClose } from "reka-ui"

/**
 * SheetClose 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DialogCloseProps>()
</script>

<template>
  <DialogClose v-bind="props">
    <slot />
  </DialogClose>
</template>
