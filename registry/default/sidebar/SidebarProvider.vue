<script setup lang="ts">
import type { HTMLAttributes, Ref } from "vue"
import { defaultDocument, useEventListener, useMediaQuery, useVModel } from "@vueuse/core"
import { TooltipProvider } from "reka-ui"
import { computed, ref } from "vue"
import { cn } from "@/lib/utils"
import { provideSidebarContext, SIDEBAR_COOKIE_MAX_AGE, SIDEBAR_COOKIE_NAME, SIDEBAR_KEYBOARD_SHORTCUT, SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from "./utils"

/**
 * SidebarProvider 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<{
  defaultOpen?: boolean
  open?: boolean
  class?: HTMLAttributes["class"]
}>(), {
  defaultOpen: !defaultDocument?.cookie.includes(`${SIDEBAR_COOKIE_NAME}=false`),
  open: undefined,
})

/**
 * SidebarProvider 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<{
  "update:open": [open: boolean]
}>()

const isMobile = useMediaQuery("(max-width: 768px)")
/**
 * openMobile 保存 SidebarProvider 的本地响应式状态，不会改变外部 registry API。
 */
const openMobile = ref(false)

const open = useVModel(props, "open", emits, {
  defaultValue: props.defaultOpen ?? false,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>

/**
 * setOpen 处理 SidebarProvider 的本地交互逻辑，并保持对外状态更新语义稳定。
 */
function setOpen(value: boolean) {
  open.value = value // 触发 update:open 同步外部受控状态。

  // 写入 cookie 以持久化侧边栏展开状态。
  document.cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
}

/**
 * setOpenMobile 处理 SidebarProvider 的本地交互逻辑，并保持对外状态更新语义稳定。
 */
function setOpenMobile(value: boolean) {
  openMobile.value = value
}

// 根据当前视口切换桌面或移动端侧边栏状态。
/**
 * toggleSidebar 处理 SidebarProvider 的本地交互逻辑，并保持对外状态更新语义稳定。
 */
function toggleSidebar() {
  return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value)
}

/**
 * SidebarProvider 注册键盘或浏览器事件监听，用于补充可访问性和快捷交互。
 */
useEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    toggleSidebar()
  }
})

// 提供 expanded/collapsed 状态，方便通过 data-state 编写 Tailwind 样式。
/**
 * state 是 SidebarProvider 的派生状态，用于让模板和样式保持同步。
 */
const state = computed(() => open.value ? "expanded" : "collapsed")

/**
 * SidebarProvider 向子组件提供上下文，保证组合式组件在同一作用域内共享状态。
 */
provideSidebarContext({
  state,
  open,
  setOpen,
  isMobile,
  openMobile,
  setOpenMobile,
  toggleSidebar,
})
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <div
      :style="{
        '--sidebar-width': SIDEBAR_WIDTH,
        '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
      }"
      :class="cn('group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar', props.class)"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </TooltipProvider>
</template>
