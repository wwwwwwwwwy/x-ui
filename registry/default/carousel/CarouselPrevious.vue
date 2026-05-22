<script setup lang="ts">
import type { WithClassAsProps } from "./interface"
import { ArrowLeft } from "lucide-vue-next"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import { useCarousel } from "./useCarousel"

/**
 * CarouselPrevious 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="cn(
      'touch-manipulation absolute h-8 w-8 rounded-full p-0',
      orientation === 'horizontal'
        ? '-left-12 top-1/2 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft class="h-4 w-4 text-current" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
