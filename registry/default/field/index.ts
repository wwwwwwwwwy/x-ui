import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

/**
 * fieldVariants 定义组件的样式变体、默认值和视觉语义，供组件 props 复用。
 */
export const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
)

/**
 * 导出 FieldVariants 类型，供使用方获得与组件 variant 或 API 一致的 TypeScript 约束。
 */
export type FieldVariants = VariantProps<typeof fieldVariants>

/**
 * 导出 Field 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Field } from "./Field.vue"
/**
 * 导出 FieldContent 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as FieldContent } from "./FieldContent.vue"
/**
 * 导出 FieldDescription 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as FieldDescription } from "./FieldDescription.vue"
/**
 * 导出 FieldError 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as FieldError } from "./FieldError.vue"
/**
 * 导出 FieldGroup 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as FieldGroup } from "./FieldGroup.vue"
/**
 * 导出 FieldLabel 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as FieldLabel } from "./FieldLabel.vue"
/**
 * 导出 FieldLegend 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as FieldLegend } from "./FieldLegend.vue"
/**
 * 导出 FieldSeparator 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as FieldSeparator } from "./FieldSeparator.vue"
/**
 * 导出 FieldSet 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as FieldSet } from "./FieldSet.vue"
/**
 * 导出 FieldTitle 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as FieldTitle } from "./FieldTitle.vue"
