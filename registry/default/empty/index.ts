import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

/**
 * 导出 Empty 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Empty } from "./Empty.vue"
/**
 * 导出 EmptyContent 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as EmptyContent } from "./EmptyContent.vue"
/**
 * 导出 EmptyDescription 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as EmptyDescription } from "./EmptyDescription.vue"
/**
 * 导出 EmptyHeader 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as EmptyHeader } from "./EmptyHeader.vue"
/**
 * 导出 EmptyMedia 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as EmptyMedia } from "./EmptyMedia.vue"
/**
 * 导出 EmptyTitle 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as EmptyTitle } from "./EmptyTitle.vue"

/**
 * emptyMediaVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const emptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

/**
 * 导出 EmptyMediaVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type EmptyMediaVariants = VariantProps<typeof emptyMediaVariants>
