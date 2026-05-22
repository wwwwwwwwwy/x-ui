<script setup lang="ts">
import type { SplitterResizeHandleEmits, SplitterResizeHandleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ActionIcon003 as GripVertical } from "@meri-design/icon-vue"
import { SplitterResizeHandle, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * ResizableHandle 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<SplitterResizeHandleProps & { class?: HTMLAttributes["class"], withHandle?: boolean }>()
/**
 * ResizableHandle 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<SplitterResizeHandleEmits>()

/**
 * 移除仅由 ResizableHandle 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 ResizableHandle 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterResizeHandle v-bind="forwarded" :class="cn('relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90', props.class)">
    <template v-if="props.withHandle">
      <div class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical size="10" class="h-2.5 w-2.5" />
      </div>
    </template>
  </SplitterResizeHandle>
</template>
