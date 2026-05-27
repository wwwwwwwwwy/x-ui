<script setup lang="ts">
import type { DropdownMenuTriggerProps } from "reka-ui"
import { DropdownMenuTrigger, useForwardProps } from "reka-ui"

const props = defineProps<DropdownMenuTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger class="outline-none hover:ring-0 active:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" v-bind="forwardedProps">
    <slot />
  </DropdownMenuTrigger>
</template>
