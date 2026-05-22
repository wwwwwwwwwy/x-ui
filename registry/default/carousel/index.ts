/**
 * 导出 Carousel 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Carousel } from "./Carousel.vue"
/**
 * 导出 CarouselContent 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CarouselContent } from "./CarouselContent.vue"
/**
 * 导出 CarouselItem 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CarouselItem } from "./CarouselItem.vue"
/**
 * 导出 CarouselNext 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CarouselNext } from "./CarouselNext.vue"
/**
 * 导出 CarouselPrevious 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CarouselPrevious } from "./CarouselPrevious.vue"
/**
 * 导出组件目录的公开 API，保持 shadcn-vue 的导入约定。
 */
export type {
  UnwrapRefCarouselApi as CarouselApi,
} from "./interface"

export { useCarousel } from "./useCarousel"
