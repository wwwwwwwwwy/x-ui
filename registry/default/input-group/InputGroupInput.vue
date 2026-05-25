<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Input } from "@/registry/default/ui/input"

const props = defineProps<{
  /** 自定义类名，用于扩展输入控件样式。 */
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Input
    data-slot="input-group-control"
    :class="cn(
      'relative z-10 flex-1 rounded-none border-0 bg-transparent dark:bg-transparent enabled:hover:z-10 focus-visible:z-10',
      props.class,
    )"
  />
</template>
