import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

/**
 * 导出 Badge 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Badge } from "./Badge.vue"

/**
 * badgeVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const badgeVariants = cva(
  "inline-flex h-5 items-center gap-1 rounded-sm border px-2 text-sm font-medium leading-none transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-blue-50 text-blue-500 hover:bg-blue-100",
        secondary:
          "border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200",
        destructive:
          "border-transparent bg-red-50 text-red-500 hover:bg-red-100",
        outline: "border-gray-400 bg-gray-0 text-gray-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

/**
 * 导出 BadgeVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type BadgeVariants = VariantProps<typeof badgeVariants>
