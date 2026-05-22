<script setup lang="ts">
import type { NavigationMenuIndicatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { NavigationMenuIndicator, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * NavigationMenuIndicator 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<NavigationMenuIndicatorProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 NavigationMenuIndicator 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 NavigationMenuIndicator 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuIndicator
    v-bind="forwardedProps"
    :class="cn('top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in', props.class)"
  >
    <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuIndicator>
</template>
