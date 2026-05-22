<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { useId } from "reka-ui"
import { provide } from "vue"
import { cn } from "@/lib/utils"
import { FORM_ITEM_INJECTION_KEY } from "./injectionKeys"

/**
 * FormItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
  <div :class="cn('space-y-2', props.class)">
    <slot />
  </div>
</template>
