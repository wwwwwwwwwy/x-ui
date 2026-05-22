<script setup lang="ts">
import type { NavigationMenuViewportProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  NavigationMenuViewport,
  useForwardProps,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * NavigationMenuViewport 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 NavigationMenuViewport 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 NavigationMenuViewport 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="absolute left-0 top-full flex justify-center">
    <NavigationMenuViewport
      v-bind="forwardedProps"
      :class="
        cn(
          'origin-top-center relative mt-1.5 h-[--reka-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--reka-navigation-menu-viewport-width] left-[var(--reka-navigation-menu-viewport-left)]',
          props.class,
        )
      "
    />
  </div>
</template>
