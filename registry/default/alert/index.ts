import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

/**
 * 导出 Alert 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Alert } from "./Alert.vue"
/**
 * 导出 AlertDescription 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as AlertDescription } from "./AlertDescription.vue"
/**
 * 导出 AlertTitle 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as AlertTitle } from "./AlertTitle.vue"

/**
 * alertVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

/**
 * 导出 AlertVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type AlertVariants = VariantProps<typeof alertVariants>
