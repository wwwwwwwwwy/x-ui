<script setup lang="ts">
import type { CarouselEmits, CarouselProps, WithClassAsProps } from "./interface"
import { cn } from "@/lib/utils"
import { useProvideCarousel } from "./useCarousel"

/**
 * Carousel 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<CarouselProps & WithClassAsProps>(), {
  orientation: "horizontal",
})

/**
 * Carousel 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<CarouselEmits>()

const { canScrollNext, canScrollPrev, carouselApi, carouselRef, orientation, scrollNext, scrollPrev } = useProvideCarousel(props, emits)

defineExpose({
  canScrollNext,
  canScrollPrev,
  carouselApi,
  carouselRef,
  orientation,
  scrollNext,
  scrollPrev,
})

/**
 * onKeyDown 处理 Carousel 的本地交互逻辑，并保持对外状态更新语义稳定。
 */
function onKeyDown(event: KeyboardEvent) {
  const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft"
  const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight"

  if (event.key === prevKey) {
    event.preventDefault()
    scrollPrev()

    return
  }

  if (event.key === nextKey) {
    event.preventDefault()
    scrollNext()
  }
}
</script>

<template>
  <div
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown="onKeyDown"
  >
    <slot :can-scroll-next :can-scroll-prev :carousel-api :carousel-ref :orientation :scroll-next :scroll-prev />
  </div>
</template>
