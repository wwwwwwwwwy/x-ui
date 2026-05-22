<script setup lang="ts">
import type { MenubarSubEmits } from "reka-ui"
import { MenubarSub, useForwardPropsEmits } from "reka-ui"

/**
 * MenubarSubRootProps 定义 MenubarSub 的公开 props，保持与 shadcn-vue 安装后的类型入口兼容。
 */
interface MenubarSubRootProps {
  defaultOpen?: boolean
  open?: boolean
}

/**
 * MenubarSub 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<MenubarSubRootProps>()
/**
 * MenubarSub 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<MenubarSubEmits>()

/**
 * 转发 MenubarSub 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <MenubarSub v-bind="forwarded">
    <slot />
  </MenubarSub>
</template>
