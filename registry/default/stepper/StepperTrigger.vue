<script lang="ts" setup>
import type { StepperTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"

import { StepperTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<StepperTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperTrigger
    v-bind="forwarded"
    :class="cn('p-2 flex flex-col items-center text-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-0', props.class)"
  >
    <slot />
  </StepperTrigger>
</template>
