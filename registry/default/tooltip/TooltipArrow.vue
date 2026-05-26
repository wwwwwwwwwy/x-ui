<script setup lang="ts">
import type { TooltipArrowProps } from "reka-ui"
import { TooltipArrow } from "reka-ui"

const props = withDefaults(defineProps<TooltipArrowProps>(), {
  width: 10,
  height: 5,
  as: "svg",
})
</script>

<template>
  <TooltipArrow data-slot="tooltip-arrow" v-bind="props">
    <slot />
  </TooltipArrow>
</template>
