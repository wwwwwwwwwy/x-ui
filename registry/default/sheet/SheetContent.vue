<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { SheetVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { X } from "lucide-vue-next"
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"
import { sheetVariants } from "."

/**
 * SheetContentProps 定义 SheetContent 的公开 props，保持与 shadcn-vue 安装后的类型入口兼容。
 */
interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes["class"]
  side?: SheetVariants["side"]
}

/**
 * SheetContent 的组件选项；用于控制 attrs 继承等 Vue 运行时兼容行为。
 */
defineOptions({
  inheritAttrs: false,
})

/**
 * SheetContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<SheetContentProps>()

/**
 * SheetContent 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<DialogContentEmits>()

/**
 * 移除仅由 SheetContent 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class", "side")

/**
 * 转发 SheetContent 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
      >
        <X class="w-4 h-4 text-muted-foreground" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
