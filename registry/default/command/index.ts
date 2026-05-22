import type { Ref } from "vue"
import { createContext } from "reka-ui"

/**
 * 导出 Command 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as Command } from "./Command.vue"
/**
 * 导出 CommandDialog 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CommandDialog } from "./CommandDialog.vue"
/**
 * 导出 CommandEmpty 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CommandEmpty } from "./CommandEmpty.vue"
/**
 * 导出 CommandGroup 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CommandGroup } from "./CommandGroup.vue"
/**
 * 导出 CommandInput 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CommandInput } from "./CommandInput.vue"
/**
 * 导出 CommandItem 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CommandItem } from "./CommandItem.vue"
/**
 * 导出 CommandList 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CommandList } from "./CommandList.vue"
/**
 * 导出 CommandSeparator 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CommandSeparator } from "./CommandSeparator.vue"
/**
 * 导出 CommandShortcut 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as CommandShortcut } from "./CommandShortcut.vue"

/**
 * 导出 useCommand 和 provideCommandContext 上下文工具，供复合组件共享内部状态。
 */
export const [useCommand, provideCommandContext] = createContext<{
  allItems: Ref<Map<string, string>>
  allGroups: Ref<Map<string, Set<string>>>
  filterState: {
    search: string
    filtered: { count: number, items: Map<string, number>, groups: Set<string> }
  }
}>("Command")

/**
 * 导出 useCommandGroup 和 provideCommandGroupContext 上下文工具，供复合组件共享内部状态。
 */
export const [useCommandGroup, provideCommandGroupContext] = createContext<{
  id?: string
}>("CommandGroup")
