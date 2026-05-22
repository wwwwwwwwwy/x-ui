<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Textarea } from "@/registry/default/ui/textarea"

/**
 * InputGroupTextarea 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Textarea
    data-slot="input-group-control"
    :class="cn(
      'flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none focus-visible:ring-0 focus-visible:ring-transparent ring-offset-transparent',
      props.class,
    )"
  />
</template>
