import type { ComputedRef, Ref } from "vue"
import { createContext } from "reka-ui"

/**
 * 导出 SIDEBAR_COOKIE_NAME，作为组件内部或外部复用的稳定常量。
 */
export const SIDEBAR_COOKIE_NAME = "sidebar_state"
/**
 * 导出 SIDEBAR_COOKIE_MAX_AGE，作为组件内部或外部复用的稳定常量。
 */
export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
/**
 * 导出 SIDEBAR_WIDTH，作为组件内部或外部复用的稳定常量。
 */
export const SIDEBAR_WIDTH = "16rem"
/**
 * 导出 SIDEBAR_WIDTH_MOBILE，作为组件内部或外部复用的稳定常量。
 */
export const SIDEBAR_WIDTH_MOBILE = "18rem"
/**
 * 导出 SIDEBAR_WIDTH_ICON，作为组件内部或外部复用的稳定常量。
 */
export const SIDEBAR_WIDTH_ICON = "3rem"
/**
 * 导出 SIDEBAR_KEYBOARD_SHORTCUT，作为组件内部或外部复用的稳定常量。
 */
export const SIDEBAR_KEYBOARD_SHORTCUT = "b"

/**
 * 导出 useSidebar 和 provideSidebarContext 上下文工具，供复合组件共享内部状态。
 */
export const [useSidebar, provideSidebarContext] = createContext<{
  state: ComputedRef<"expanded" | "collapsed">
  open: Ref<boolean>
  setOpen: (value: boolean) => void
  isMobile: Ref<boolean>
  openMobile: Ref<boolean>
  setOpenMobile: (value: boolean) => void
  toggleSidebar: () => void
}>("Sidebar")
