import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

/**
 * 导出 ButtonGroup 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ButtonGroup } from "./ButtonGroup.vue"
/**
 * 导出 ButtonGroupSeparator 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ButtonGroupSeparator } from "./ButtonGroupSeparator.vue"
/**
 * 导出 ButtonGroupText 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ButtonGroupText } from "./ButtonGroupText.vue"

/**
 * buttonGroupVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*:focus-visible]:z-10 [&>*:focus-visible]:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
)

/**
 * 导出 ButtonGroupVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>
