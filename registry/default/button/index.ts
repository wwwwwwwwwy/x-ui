import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

/**
 * 导出 Button 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Button } from "./Button.vue"

/**
 * buttonVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const buttonVariants = cva(
  "relative m-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-m font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-200 disabled:text-gray-400 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border border-transparent bg-blue-500 text-gray-0 hover:bg-blue-400",
        destructive:
          "border border-transparent bg-red-500 text-gray-0 hover:bg-red-400",
        outline:
          "border border-gray-400 bg-gray-0 text-gray-900 hover:border-blue-500 hover:text-blue-500",
        secondary:
          "border border-gray-200 bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "border border-transparent bg-transparent text-gray-900 hover:bg-alpha-30",
        link: "border border-transparent bg-transparent text-blue-500 underline-offset-4 hover:text-blue-400 hover:underline",
      },
      size: {
        "default": "h-8 min-w-20 px-4 leading-8",
        "sm": "h-7 min-w-16 px-2 leading-7",
        "lg": "h-10 min-w-20 px-4 text-xl leading-none",
        "icon": "h-8 w-8 min-w-0 px-0",
        "icon-sm": "size-7 min-w-0 px-0",
        "icon-lg": "size-10 min-w-0 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

/**
 * 导出 ButtonVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type ButtonVariants = VariantProps<typeof buttonVariants>
