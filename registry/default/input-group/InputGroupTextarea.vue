<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Textarea } from "@/registry/default/ui/textarea"

const props = defineProps<{
  /** 自定义类名，用于扩展多行输入控件样式。 */
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Textarea
    data-slot="input-group-control"
    :class="cn(
      'flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none dark:bg-transparent',
      props.class,
    )"
  />
</template>
