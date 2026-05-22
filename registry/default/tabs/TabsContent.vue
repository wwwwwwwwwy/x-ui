<script setup lang="ts">
import type { TabsContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TabsContent } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * TabsContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<TabsContentProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 TabsContent 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <TabsContent
    :class="cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
