<script setup lang="ts">
import type { TagsInputRootEmits, TagsInputRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<TagsInputRootEmits>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TagsInputRoot v-bind="forwarded" :class="cn('flex min-h-[30px] w-full items-center gap-2 rounded-[4px] border border-input bg-[var(--gray-0)] px-3 py-0 text-[14px] leading-[1.5] text-foreground shadow-none outline-none enabled:hover:border-primary focus-within:border-primary disabled:cursor-not-allowed disabled:bg-[var(--gray-200)] disabled:text-[var(--gray-400)] disabled:opacity-100', props.class)">
    <slot />
  </TagsInputRoot>
</template>
