<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * InputGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="input-group"
    role="group"
    :class="cn(
      'group/input-group relative flex w-full items-center rounded-md border border-gray-400 bg-gray-0 outline-none hover:border-blue-500',
      'h-8 min-w-0 has-[>textarea]:h-auto',

      // 根据前后缀对齐方式调整输入控件间距。
      'has-[>[data-align=inline-start]]:[&>input]:pl-2',
      'has-[>[data-align=inline-end]]:[&>input]:pr-2',
      'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
      'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

      // 子输入控件获得焦点时呈现整体聚焦态。
      'has-[[data-slot=input-group-control]:focus-visible]:border-blue-500 has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-1 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background',

      props.class,
    )"
  >
    <slot />
  </div>
</template>
