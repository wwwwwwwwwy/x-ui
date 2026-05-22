import { cva } from "class-variance-authority"

/**
 * 导出 NavigationMenu 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as NavigationMenu } from "./NavigationMenu.vue"
/**
 * 导出 NavigationMenuContent 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as NavigationMenuContent } from "./NavigationMenuContent.vue"
/**
 * 导出 NavigationMenuIndicator 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as NavigationMenuIndicator } from "./NavigationMenuIndicator.vue"
/**
 * 导出 NavigationMenuItem 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as NavigationMenuItem } from "./NavigationMenuItem.vue"
/**
 * 导出 NavigationMenuLink 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as NavigationMenuLink } from "./NavigationMenuLink.vue"
/**
 * 导出 NavigationMenuList 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as NavigationMenuList } from "./NavigationMenuList.vue"
/**
 * 导出 NavigationMenuTrigger 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as NavigationMenuTrigger } from "./NavigationMenuTrigger.vue"
/**
 * 导出 NavigationMenuViewport 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as NavigationMenuViewport } from "./NavigationMenuViewport.vue"

/**
 * 导出 navigationMenuTriggerStyle，作为组件内部或外部复用的稳定常量。
 */
export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
)
