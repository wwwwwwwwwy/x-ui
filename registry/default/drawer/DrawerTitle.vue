<script lang="ts" setup>
import type { DrawerTitleProps } from "vaul-vue"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { DrawerTitle } from "vaul-vue"
import { cn } from "@/lib/utils"

const props = defineProps<DrawerTitleProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <DrawerTitle v-bind="delegatedProps" :class="cn('text-[18px] font-bold leading-[1.4] text-[var(--gray-900)]', props.class)">
    <slot />
  </DrawerTitle>
</template>
