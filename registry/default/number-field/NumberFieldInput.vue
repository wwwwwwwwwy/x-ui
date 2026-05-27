<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { NumberFieldInput } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    :class="cn('flex h-8 min-h-[30px] w-full rounded-[4px] border border-input bg-[var(--gray-0)] px-3 py-0 text-center text-[14px] leading-[1.5] text-foreground shadow-none outline-none placeholder:text-[#C3C7CB] enabled:hover:border-primary focus-visible:border-primary focus-visible:caret-primary focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-[var(--gray-200)] disabled:text-[var(--gray-400)] disabled:opacity-100', props.class)"
  />
</template>
