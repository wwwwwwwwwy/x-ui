<script setup lang="ts">
import type { MenubarLabelProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { MenubarLabel } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * MenubarLabel 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<MenubarLabelProps & { class?: HTMLAttributes["class"], inset?: boolean }>()
</script>

<template>
  <MenubarLabel :class="cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', props.class)">
    <slot />
  </MenubarLabel>
</template>
