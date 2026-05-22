import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

/**
 * 导出 Item 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Item } from "./Item.vue"
/**
 * 导出 ItemActions 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ItemActions } from "./ItemActions.vue"
/**
 * 导出 ItemContent 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ItemContent } from "./ItemContent.vue"
/**
 * 导出 ItemDescription 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ItemDescription } from "./ItemDescription.vue"
/**
 * 导出 ItemFooter 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ItemFooter } from "./ItemFooter.vue"
/**
 * 导出 ItemGroup 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ItemGroup } from "./ItemGroup.vue"
/**
 * 导出 ItemHeader 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ItemHeader } from "./ItemHeader.vue"
/**
 * 导出 ItemMedia 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ItemMedia } from "./ItemMedia.vue"
/**
 * 导出 ItemSeparator 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ItemSeparator } from "./ItemSeparator.vue"
/**
 * 导出 ItemTitle 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ItemTitle } from "./ItemTitle.vue"

/**
 * itemVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const itemVariants = cva(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring focus-visible:ring-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

/**
 * itemMediaVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

/**
 * 导出 ItemVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type ItemVariants = VariantProps<typeof itemVariants>
/**
 * 导出 ItemMediaVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type ItemMediaVariants = VariantProps<typeof itemMediaVariants>
