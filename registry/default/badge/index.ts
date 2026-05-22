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
  "inline-flex gap-1 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
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
