<script setup lang="ts">
import type { SwitchRootEmits, SwitchRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  SwitchRoot,
  SwitchThumb,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * Switch 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<SwitchRootProps & { class?: HTMLAttributes["class"] }>()

/**
 * Switch 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<SwitchRootEmits>()

/**
 * 移除仅由 Switch 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 Switch 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="cn(
      'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-gray-200 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300',
      props.class,
    )"
  >
    <SwitchThumb
      :class="cn('pointer-events-none block h-4 w-4 rounded-full bg-gray-0 shadow-small ring-0 transition-transform data-[state=checked]:translate-x-4')"
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
