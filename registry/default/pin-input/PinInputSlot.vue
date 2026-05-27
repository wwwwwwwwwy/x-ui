<script setup lang="ts">
import type { PinInputInputProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { PinInputInput, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput v-bind="forwardedProps" :class="cn('relative -ml-px flex h-8 min-h-[30px] w-8 items-center justify-center border border-input bg-[var(--gray-0)] py-0 text-center text-[14px] leading-[1.5] text-foreground shadow-none outline-none transition-all first:ml-0 first:rounded-l-[4px] last:rounded-r-[4px] enabled:hover:border-primary focus:relative focus:z-10 focus-visible:border-primary focus-visible:caret-primary focus-visible:outline-none focus-visible:ring focus-visible:ring-ring disabled:cursor-not-allowed disabled:bg-[var(--gray-200)] disabled:text-[var(--gray-400)] disabled:opacity-100', props.class)" />
</template>
