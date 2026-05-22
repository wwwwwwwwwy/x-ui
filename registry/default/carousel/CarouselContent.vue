<script setup lang="ts">
import type { WithClassAsProps } from "./interface"
import { cn } from "@/lib/utils"
import { useCarousel } from "./useCarousel"

/**
 * CarouselContent 的组件选项；用于控制 attrs 继承等 Vue 运行时兼容行为。
 */
defineOptions({
  inheritAttrs: false,
})

/**
 * CarouselContent 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<WithClassAsProps>()

const { carouselRef, orientation } = useCarousel()
</script>

<template>
  <div ref="carouselRef" class="overflow-hidden">
    <div
      :class="
        cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          props.class,
        )"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>
