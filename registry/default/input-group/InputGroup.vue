<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * InputGroup 的根容器属性。
 *
 * 仅提供组合布局与边框状态，背景色由页面或外部 class 控制。
 */
interface Props {
  /**
   * 透传到根容器的 class。
   */
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()
</script>

<template>
  <div
    data-slot="input-group"
    role="group"
    :class="cn(
      'group/input-group border-input relative flex w-full items-center rounded-[4px] border outline-none',
      'h-8 min-w-0 has-[>textarea]:h-auto',

      // Variants based on alignment.
      'has-[>[data-align=inline-start]]:[&>input]:pl-2',
      'has-[>[data-align=inline-end]]:[&>input]:pr-2',
      'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
      'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

      // Border state follows Input hover and focus tokens.
      'hover:z-10 focus-within:z-10 hover:border-primary focus-within:border-primary',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
