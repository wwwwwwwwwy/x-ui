import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Button } from "./Button.vue"

export const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm font-normal leading-[initial] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [&:not(:disabled):not([aria-disabled=true])]:hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground [&:not(:disabled):not([aria-disabled=true])]:hover:bg-destructive/90",
        outline:
          "border border-input bg-background [&:not(:disabled):not([aria-disabled=true])]:hover:bg-accent [&:not(:disabled):not([aria-disabled=true])]:hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground [&:not(:disabled):not([aria-disabled=true])]:hover:bg-secondary/80",
        ghost: "[&:not(:disabled):not([aria-disabled=true])]:hover:bg-accent [&:not(:disabled):not([aria-disabled=true])]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [&:not(:disabled):not([aria-disabled=true])]:hover:underline",
      },
      size: {
        "default": "h-8 px-4 text-[14px]",
        "sm": "h-7 rounded-sm px-3 text-[14px]",
        "lg": "h-10 rounded-sm px-4 text-[16px]",
        "icon": "size-8",
        "icon-sm": "size-7",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
