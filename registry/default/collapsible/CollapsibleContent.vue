<script setup lang="ts">
import type { CollapsibleContentProps } from "reka-ui"
import { CollapsibleContent } from "reka-ui"

/**
 * CollapsibleContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<CollapsibleContentProps>()
</script>

<template>
  <CollapsibleContent v-bind="props" class="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
    <slot />
  </CollapsibleContent>
</template>
