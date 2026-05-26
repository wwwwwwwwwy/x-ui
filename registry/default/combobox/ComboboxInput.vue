<script setup lang="ts">
import type { ComboboxInputEmits, ComboboxInputProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxInput, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes["class"]
}>()

const emits = defineEmits<ComboboxInputEmits>()

const delegatedProps = reactiveOmit(props, "class")

/**
 * 合并 props 与 emits 后转发给 reka-ui ComboboxInput。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxInput
    v-bind="forwarded"
    :class="cn('flex h-8 min-h-[30px] w-full rounded-[4px] border border-input bg-[var(--gray-0)] px-3 py-0 text-[14px] font-normal leading-[1.5] text-foreground shadow-none outline-none file:border-0 file:bg-transparent file:text-foreground file:text-[14px] file:font-normal placeholder:text-[#C3C7CB] enabled:hover:border-primary focus-visible:border-primary focus-visible:caret-primary focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-[var(--gray-200)] disabled:text-[var(--gray-400)] disabled:opacity-100', props.class)"
  >
    <slot />
  </ComboboxInput>
</template>
