<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * FieldGroup 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="field-group"
    :class="cn(
      'group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
