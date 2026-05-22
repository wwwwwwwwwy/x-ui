<script setup lang="ts">
import type { RadioGroupItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Circle } from "lucide-vue-next"
import {
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardProps,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * RadioGroupItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 RadioGroupItem 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 RadioGroupItem 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        'peer aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <RadioGroupIndicator
      class="flex items-center justify-center"
    >
      <Circle class="h-2.5 w-2.5 fill-current text-current" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
