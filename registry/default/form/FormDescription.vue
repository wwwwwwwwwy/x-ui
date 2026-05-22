<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { useFormField } from "./useFormField"

/**
 * FormDescription 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { formDescriptionId } = useFormField()
</script>

<template>
  <p
    :id="formDescriptionId"
    :class="cn('text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </p>
</template>
