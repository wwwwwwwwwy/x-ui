<script lang="ts" setup>
import type { CalendarGridHeadProps } from "reka-ui"
import { CalendarGridHead } from "reka-ui"

/**
 * CalendarGridHead 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<CalendarGridHeadProps>()
</script>

<template>
  <CalendarGridHead v-bind="props">
    <slot />
  </CalendarGridHead>
</template>
