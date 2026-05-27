<script setup lang="ts">
import type { MenubarTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { MenubarTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<MenubarTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'relative z-0 flex h-8 cursor-pointer select-none items-center gap-2 rounded-md border border-input bg-muted px-4 text-[14px] font-normal leading-[1.5] text-foreground shadow-xs outline-none transition-colors [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 [&:not([data-disabled])]:hover:bg-muted [&:not([data-disabled])]:focus-visible:ring-0 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[state=open]:bg-muted',
        props.class,
      )
    "
  >
    <slot />
  </MenubarTrigger>
</template>
