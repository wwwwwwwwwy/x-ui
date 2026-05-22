<script setup lang="ts">
import type { MenubarContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  MenubarContent,
  MenubarPortal,
  useForwardProps,
} from "reka-ui"
import { cn } from "@/lib/utils"

const props = withDefaults(
  defineProps<MenubarContentProps & { class?: HTMLAttributes["class"] }>(),
  {
    align: "start",
    alignOffset: -4,
    sideOffset: 8,
  },
)

/**
 * 移除仅由 MenubarContent 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 MenubarContent 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarPortal>
    <MenubarContent
      v-bind="forwardedProps"
      :class="
        cn(
          'z-50 min-w-48 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <slot />
    </MenubarContent>
  </MenubarPortal>
</template>
