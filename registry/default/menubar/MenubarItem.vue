<script setup lang="ts">
import type { MenubarItemEmits, MenubarItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  MenubarItem,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * MenubarItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<MenubarItemProps & { class?: HTMLAttributes["class"], inset?: boolean }>()

/**
 * MenubarItem 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<MenubarItemEmits>()

/**
 * 移除仅由 MenubarItem 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 MenubarItem 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarItem
    v-bind="forwarded"
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
  </MenubarItem>
</template>
