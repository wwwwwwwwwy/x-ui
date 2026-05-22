<script setup lang="ts">
import type { MenubarMenuProps } from "reka-ui"
import { MenubarMenu } from "reka-ui"

/**
 * MenubarMenu 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<MenubarMenuProps>()
</script>

<template>
  <MenubarMenu v-bind="props">
    <slot />
  </MenubarMenu>
</template>
