<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { Component } from "vue"
import { LoaderCircle } from "lucide-vue-next"
import type { ButtonVariants } from "."
import { Primitive } from "reka-ui"
import { computed } from "vue"
import { cn } from "@/lib/utils"
import { buttonVariants } from "."

/**
 * Button 的本地扩展属性。
 *
 * 保持 shadcn-vue 的 Primitive 组合方式，同时补充本项目统一的 loading 语义：
 * loading 会让按钮进入不可交互状态、展示加载图标并声明 aria-busy。
 */
interface Props extends PrimitiveProps {
  /**
   * 按钮视觉变体。
   *
   * 取值来自 buttonVariants，默认使用 default。
   */
  variant?: ButtonVariants["variant"]
  /**
   * 按钮尺寸。
   *
   * 取值来自 buttonVariants，默认使用 default。
   */
  size?: ButtonVariants["size"]
  /**
   * 原生禁用状态。
   *
   * disabled 与 loading 都会让按钮不可交互。
   */
  disabled?: boolean
  /**
   * 加载中状态。
   *
   * loading 为 true 时会显示加载图标、阻止点击、设置 aria-busy，并复用禁用态光标和透明度。
   */
  loading?: boolean
  /**
   * 自定义 loading 图标组件。
   *
   * 未传入时使用 lucide-vue-next 的 LoaderCircle；旋转动画由 Button 内部统一维护。
   */
  loadingIcon?: Component
  /**
   * 透传到按钮根节点的 class。
   */
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  disabled: false,
  loading: false,
})

/**
 * Button 暴露的插槽。
 *
 * default 渲染按钮内容；loading-icon 用于替换默认加载图标，但图标尺寸和旋转动画仍由组件统一控制。
 */
defineSlots<{
  default?: () => unknown
  "loading-icon"?: () => unknown
}>()

/**
 * 实际渲染的 loading 图标组件。
 */
const loadingIconComponent = computed(() => props.loadingIcon ?? LoaderCircle)

/**
 * Button 的不可交互状态。
 *
 * loading 和 disabled 都应阻止点击，并使用 not-allowed 光标。
 */
const isUnavailable = computed(() => props.disabled || props.loading)

/**
 * loading / disabled 状态下阻止外部 click 处理。
 */
function handleClick(event: MouseEvent) {
  if (!isUnavailable.value)
    return

  event.preventDefault()
  event.stopImmediatePropagation()
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :disabled="isUnavailable || undefined"
    :aria-disabled="isUnavailable || undefined"
    :aria-busy="loading || undefined"
    :data-loading="loading || undefined"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    @click="handleClick"
  >
    <span
      v-if="loading"
      class="inline-flex shrink-0 animate-spin items-center justify-center"
      aria-hidden="true"
      data-slot="button-loading-icon"
    >
      <slot name="loading-icon">
        <component :is="loadingIconComponent" />
      </slot>
    </span>
    <slot />
  </Primitive>
</template>
