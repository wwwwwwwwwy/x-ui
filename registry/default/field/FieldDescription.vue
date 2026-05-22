<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * FieldDescription 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <p
    data-slot="field-description"
    :class="cn(
      'text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance',
      'last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5',
      '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
      props.class,
    )"
  >
    <slot />
  </p>
</template>
