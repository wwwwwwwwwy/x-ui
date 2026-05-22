import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

/**
 * 导出 Avatar 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Avatar } from "./Avatar.vue"
/**
 * 导出 AvatarFallback 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as AvatarFallback } from "./AvatarFallback.vue"
/**
 * 导出 AvatarImage 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as AvatarImage } from "./AvatarImage.vue"

/**
 * avatarVariant 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const avatarVariant = cva(
  "inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-gray-100 font-normal text-gray-700",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-sm",
        base: "h-10 w-10 text-xl",
        lg: "h-16 w-16 text-xxxl",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
    },
  },
)

/**
 * 导出 AvatarVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type AvatarVariants = VariantProps<typeof avatarVariant>
