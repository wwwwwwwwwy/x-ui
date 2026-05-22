<script lang="ts" setup>
import type { LabelProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Label } from "@/registry/default/ui/label"
import { useFormField } from "./useFormField"

/**
 * FormLabel 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<LabelProps & { class?: HTMLAttributes["class"] }>()

const { error, formItemId } = useFormField()
</script>

<template>
  <Label
    :class="cn(
      error && 'text-destructive',
      props.class,
    )"
    :for="formItemId"
  >
    <slot />
  </Label>
</template>
