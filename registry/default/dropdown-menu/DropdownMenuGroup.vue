<script setup lang="ts">
import type { DropdownMenuGroupProps } from "reka-ui"
import { DropdownMenuGroup } from "reka-ui"

/**
 * DropdownMenuGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DropdownMenuGroupProps>()
</script>

<template>
  <DropdownMenuGroup v-bind="props">
    <slot />
  </DropdownMenuGroup>
</template>
