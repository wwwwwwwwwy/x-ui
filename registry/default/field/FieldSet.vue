<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * FieldSet 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <fieldset
    data-slot="field-set"
    :class="cn(
      'flex flex-col gap-6',
      'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
      props.class,
    )"
  >
    <slot />
  </fieldset>
</template>
