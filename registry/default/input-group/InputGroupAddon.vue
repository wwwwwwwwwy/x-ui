<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { InputGroupVariants } from "."
import { cn } from "@/lib/utils"
import { inputGroupAddonVariants } from "."

/**
 * InputGroupAddon 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<{
  align?: InputGroupVariants["align"]
  class?: HTMLAttributes["class"]
}>(), {
  align: "inline-start",
})

/**
 * handleInputGroupAddonClick 处理 InputGroupAddon 的本地交互逻辑，并保持对外状态更新语义稳定。
 */
function handleInputGroupAddonClick(e: MouseEvent) {
  const currentTarget = e.currentTarget as HTMLElement | null
  const target = e.target as HTMLElement | null
  if (target && target.closest("button")) {
    return
  }
  if (currentTarget && currentTarget?.parentElement) {
    currentTarget.parentElement?.querySelector("input")?.focus()
  }
}
</script>

<template>
  <div
    role="group"
    data-slot="input-group-addon"
    :data-align="props.align"
    :class="cn(inputGroupAddonVariants({ align: props.align }), props.class)"
    @click="handleInputGroupAddonClick"
  >
    <slot />
  </div>
</template>
