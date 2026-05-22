<script setup lang="ts">
import type { SeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Separator } from "@/registry/default/ui/separator"

/**
 * ItemSeparator 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes["class"] }
>()
</script>

<template>
  <Separator
    data-slot="item-separator"
    orientation="horizontal"
    :class="cn('my-0', props.class)"
  />
</template>
