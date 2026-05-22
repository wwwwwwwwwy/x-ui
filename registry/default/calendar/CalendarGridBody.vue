<script lang="ts" setup>
import type { CalendarGridBodyProps } from "reka-ui"
import { CalendarGridBody } from "reka-ui"

/**
 * CalendarGridBody 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<CalendarGridBodyProps>()
</script>

<template>
  <CalendarGridBody v-bind="props">
    <slot />
  </CalendarGridBody>
</template>
