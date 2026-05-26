<script setup lang="ts">
import type { ComboboxTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxTrigger
    v-bind="forwarded"
    :class="cn('absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center', props.class)"
    tabindex="-1"
  >
    <slot />
  </ComboboxTrigger>
</template>
