<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { Loader2Icon } from "lucide-vue-next"
import { cn } from "@/lib/utils"

/**
 * Spinner 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Loader2Icon
    role="status"
    aria-label="Loading"
    :class="cn('size-4 animate-spin', props.class)"
  />
</template>
