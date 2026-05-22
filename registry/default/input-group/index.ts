import type { VariantProps } from "class-variance-authority"
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from "@/registry/default/ui/button"
import { cva } from "class-variance-authority"

/**
 * 导出 InputGroup 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as InputGroup } from "./InputGroup.vue"
/**
 * 导出 InputGroupAddon 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as InputGroupAddon } from "./InputGroupAddon.vue"
/**
 * 导出 InputGroupButton 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as InputGroupButton } from "./InputGroupButton.vue"
/**
 * 导出 InputGroupInput 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as InputGroupInput } from "./InputGroupInput.vue"
/**
 * 导出 InputGroupText 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as InputGroupText } from "./InputGroupText.vue"
/**
 * 导出 InputGroupTextarea 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as InputGroupTextarea } from "./InputGroupTextarea.vue"

/**
 * inputGroupAddonVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  },
)

/**
 * 导出 InputGroupVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>

/**
 * inputGroupButtonVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const inputGroupButtonVariants = cva(
  "text-sm shadow-none flex gap-2 items-center",
  {
    variants: {
      size: {
        "xs": "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        "sm": "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  },
)

/**
 * 导出 InputGroupButtonVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>

export interface InputGroupButtonProps {
  variant?: ButtonVariants["variant"]
  size?: InputGroupButtonVariants["size"]
  class?: HTMLAttributes["class"]
}
