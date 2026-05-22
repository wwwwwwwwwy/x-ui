import type useEmblaCarousel from "embla-carousel-vue"
import type {
  EmblaCarouselVueType,
} from "embla-carousel-vue"
import type { HTMLAttributes, UnwrapRef } from "vue"

type CarouselApi = EmblaCarouselVueType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

/**
 * 导出 UnwrapRefCarouselApi 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type UnwrapRefCarouselApi = UnwrapRef<CarouselApi>

export interface CarouselProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
}

export interface CarouselEmits {
  (e: "init-api", payload: UnwrapRefCarouselApi): void
}

export interface WithClassAsProps {
  class?: HTMLAttributes["class"]
}
