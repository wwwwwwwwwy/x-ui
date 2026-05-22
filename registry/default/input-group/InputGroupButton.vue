<script setup lang="ts">
import type { InputGroupButtonProps } from "."
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import { inputGroupButtonVariants } from "."

/**
 * InputGroupButton 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<InputGroupButtonProps>(), {
  size: "xs",
  variant: "ghost",
})
</script>

<template>
  <Button
    :data-size="props.size"
    :variant="props.variant"
    :class="cn(inputGroupButtonVariants({ size: props.size }), props.class)"
  >
    <slot />
  </Button>
</template>
