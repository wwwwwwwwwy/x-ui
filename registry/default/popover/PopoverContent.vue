<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  PopoverContent,
  PopoverPortal,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * PopoverContent 的组件选项；用于控制 attrs 继承等 Vue 运行时兼容行为。
 */
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<PopoverContentProps & { class?: HTMLAttributes["class"] }>(),
  {
    align: "center",
    sideOffset: 4,
  },
)
/**
 * PopoverContent 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<PopoverContentEmits>()

/**
 * 移除仅由 PopoverContent 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 PopoverContent 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
