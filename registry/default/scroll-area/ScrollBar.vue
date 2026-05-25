<script setup lang="ts">
import type { ScrollAreaScrollbarProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ScrollAreaScrollbar, ScrollAreaThumb } from "reka-ui"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<ScrollAreaScrollbarProps & { class?: HTMLAttributes["class"] }>(), {
  orientation: "vertical",
})

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="delegatedProps"
    :class="
      cn('flex touch-none select-none transition-colors',
         orientation === 'vertical'
           && 'h-full w-[var(--scrollbar-size)] border-l border-l-transparent p-px',
         orientation === 'horizontal'
           && 'h-[var(--scrollbar-size)] flex-col border-t border-t-transparent p-px',
         props.class)"
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-[hsl(var(--scrollbar-thumb))] transition-colors hover:bg-[hsl(var(--scrollbar-thumb-hover))]" />
  </ScrollAreaScrollbar>
</template>
