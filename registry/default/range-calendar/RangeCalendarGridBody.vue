<script lang="ts" setup>
import type { RangeCalendarGridBodyProps } from "reka-ui"
import { RangeCalendarGridBody } from "reka-ui"

/**
 * RangeCalendarGridBody 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<RangeCalendarGridBodyProps>()
</script>

<template>
  <RangeCalendarGridBody v-bind="props">
    <slot />
  </RangeCalendarGridBody>
</template>
