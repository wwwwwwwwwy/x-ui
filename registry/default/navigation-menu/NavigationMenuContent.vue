<script setup lang="ts">
import type { NavigationMenuContentEmits, NavigationMenuContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  NavigationMenuContent,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * NavigationMenuContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<NavigationMenuContentProps & { class?: HTMLAttributes["class"] }>()

/**
 * NavigationMenuContent 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<NavigationMenuContentEmits>()

/**
 * 移除仅由 NavigationMenuContent 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 NavigationMenuContent 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuContent
    v-bind="forwarded"
    :class="cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
      props.class,
    )"
  >
    <slot />
  </NavigationMenuContent>
</template>
