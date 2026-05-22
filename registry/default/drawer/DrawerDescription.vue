<script lang="ts" setup>
import type { DrawerDescriptionProps } from "vaul-vue"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { DrawerDescription } from "vaul-vue"
import { cn } from "@/lib/utils"

/**
 * DrawerDescription 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<DrawerDescriptionProps & { class?: HTMLAttributes["class"] }>()

/**
 * 移除仅由 DrawerDescription 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <DrawerDescription v-bind="delegatedProps" :class="cn('text-sm text-muted-foreground', props.class)">
    <slot />
  </DrawerDescription>
</template>
