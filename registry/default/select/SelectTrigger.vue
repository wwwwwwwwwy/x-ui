<script setup lang="ts">
import type { SelectTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { SelectIcon, SelectTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

/**
 * SelectTrigger 透传 reka-ui 的 trigger props，并允许通过 class 扩展触发按钮样式。
 */
const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发给 reka-ui SelectTrigger 的属性集合。
 */
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex h-8 min-h-[30px] w-full items-center justify-between rounded-[4px] border border-input bg-[var(--gray-0)] px-3 py-0 text-start text-[14px] font-normal leading-[1.5] text-foreground shadow-none outline-none data-[placeholder]:text-[#C3C7CB] enabled:hover:border-primary focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-[var(--gray-200)] disabled:text-[var(--gray-400)] disabled:opacity-100 [&>span]:truncate [&>span]:text-[14px] [&>span]:font-normal [&>span]:leading-[1.5]',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="w-4 h-4 opacity-50 shrink-0" />
    </SelectIcon>
  </SelectTrigger>
</template>
