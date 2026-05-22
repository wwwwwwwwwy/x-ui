<script setup lang="ts">
import type { MenubarSubContentEmits, MenubarSubContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  MenubarPortal,
  MenubarSubContent,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * MenubarSubContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<MenubarSubContentProps & { class?: HTMLAttributes["class"] }>()

/**
 * MenubarSubContent 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<MenubarSubContentEmits>()

/**
 * 移除仅由 MenubarSubContent 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 MenubarSubContent 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarPortal>
    <MenubarSubContent
      v-bind="forwarded"
      :class="
        cn(
          'z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <slot />
    </MenubarSubContent>
  </MenubarPortal>
</template>
