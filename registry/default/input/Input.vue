<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"
import { cn } from "@/lib/utils"

/**
 * Input 的本地属性。
 *
 * 保持基础 input 的 v-model 能力，并允许外部通过 class 追加样式。
 */
interface Props {
  /**
   * 非受控使用时的默认值。
   */
  defaultValue?: string | number
  /**
   * 受控输入值，通过 update:modelValue 同步。
   */
  modelValue?: string | number
  /**
   * 透传到 input 根节点的 class。
   */
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()

/**
 * Input 的事件声明。
 *
 * update:modelValue 在输入值变化时触发，载荷保持为原生 input 的字符串或初始数字值约束。
 */
const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
}>()

/**
 * 兼容受控与非受控使用方式的输入值。
 */
const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    v-model="modelValue"
    :class="cn(
      'flex h-8 min-h-[30px] w-full rounded-[4px] border border-input bg-[var(--gray-0)] px-3 py-0 text-[14px] leading-[1.5] text-foreground shadow-none outline-none file:border-0 file:bg-transparent file:text-foreground file:text-[14px] file:font-normal placeholder:text-[#C3C7CB] enabled:hover:border-primary focus-visible:border-primary focus-visible:caret-primary focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-[var(--gray-200)] disabled:text-[var(--gray-400)] disabled:opacity-100',
      props.class,
    )"
  >
</template>
