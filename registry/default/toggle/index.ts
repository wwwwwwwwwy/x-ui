import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

/**
 * 导出 Toggle 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Toggle } from "./Toggle.vue"

/**
 * toggleVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

/**
 * 导出 ToggleVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type ToggleVariants = VariantProps<typeof toggleVariants>
