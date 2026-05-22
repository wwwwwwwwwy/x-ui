<script setup lang="ts">
import type { NavigationMenuItemProps } from "reka-ui"
import { NavigationMenuItem } from "reka-ui"

/**
 * NavigationMenuItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<NavigationMenuItemProps>()
</script>

<template>
  <NavigationMenuItem v-bind="props">
    <slot />
  </NavigationMenuItem>
</template>
