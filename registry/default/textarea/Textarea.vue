<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"
import { cn } from "@/lib/utils"

/**
 * Textarea 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
  defaultValue?: string | number
  modelValue?: string | number
}>()

/**
 * Textarea 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <textarea v-model="modelValue" :class="cn('flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', props.class)" />
</template>
