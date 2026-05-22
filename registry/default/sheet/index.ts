import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

/**
 * 导出 Sheet 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Sheet } from "./Sheet.vue"
/**
 * 导出 SheetClose 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as SheetClose } from "./SheetClose.vue"
/**
 * 导出 SheetContent 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as SheetContent } from "./SheetContent.vue"
/**
 * 导出 SheetDescription 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as SheetDescription } from "./SheetDescription.vue"
/**
 * 导出 SheetFooter 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as SheetFooter } from "./SheetFooter.vue"
/**
 * 导出 SheetHeader 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as SheetHeader } from "./SheetHeader.vue"
/**
 * 导出 SheetTitle 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as SheetTitle } from "./SheetTitle.vue"
/**
 * 导出 SheetTrigger 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as SheetTrigger } from "./SheetTrigger.vue"

/**
 * sheetVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
)

/**
 * 导出 SheetVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type SheetVariants = VariantProps<typeof sheetVariants>
