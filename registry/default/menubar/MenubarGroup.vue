<script setup lang="ts">
import type { MenubarGroupProps } from "reka-ui"
import { MenubarGroup } from "reka-ui"

/**
 * MenubarGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<MenubarGroupProps>()
</script>

<template>
  <MenubarGroup v-bind="props">
    <slot />
  </MenubarGroup>
</template>
