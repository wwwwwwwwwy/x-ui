<script lang="ts" setup>
import type { DrawerRootEmits, DrawerRootProps } from "vaul-vue"
import { useForwardPropsEmits } from "reka-ui"
import { DrawerRoot } from "vaul-vue"

/**
 * Drawer 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<DrawerRootProps>(), {
  shouldScaleBackground: true,
})

/**
 * Drawer 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<DrawerRootEmits>()

/**
 * 转发 Drawer 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DrawerRoot v-bind="forwarded">
    <slot />
  </DrawerRoot>
</template>
