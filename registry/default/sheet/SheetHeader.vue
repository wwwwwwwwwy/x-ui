<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <div
    :class="
      cn('flex flex-col gap-y-2 border-b border-gray-200 px-6 py-4 text-center leading-[26px] sm:text-left', props.class)
    "
  >
    <slot />
  </div>
</template>
