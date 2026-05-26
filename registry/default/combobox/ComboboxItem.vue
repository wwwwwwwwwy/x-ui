<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxItem, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<ComboboxItemEmits>()

const delegatedProps = reactiveOmit(props, "class")

/**
 * 合并 props 与 emits 后转发给 reka-ui ComboboxItem。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxItem
    v-bind="forwarded"
    :class="cn('relative flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-left text-[14px] font-normal text-gray-900 outline-none [&:not([data-disabled])]:hover:bg-gray-400/30 [&:not([data-disabled])[data-highlighted]]:bg-gray-400/30 [&:not([data-disabled])[data-highlighted]]:text-gray-900 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0', props.class)"
  >
    <slot />
  </ComboboxItem>
</template>
