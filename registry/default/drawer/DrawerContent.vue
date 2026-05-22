<script lang="ts" setup>
import type { DialogContentEmits, DialogContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { useForwardPropsEmits } from "reka-ui"
import { DrawerContent, DrawerPortal } from "vaul-vue"
import { cn } from "@/lib/utils"
import DrawerOverlay from "./DrawerOverlay.vue"

/**
 * DrawerContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DialogContentProps & { class?: HTMLAttributes["class"] }>()
/**
 * DrawerContent 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<DialogContentEmits>()

/**
 * 转发 DrawerContent 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent
      v-bind="forwarded" :class="cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
        props.class,
      )"
    >
      <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>
