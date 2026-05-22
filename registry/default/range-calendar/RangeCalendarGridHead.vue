<script lang="ts" setup>
import type { RangeCalendarGridHeadProps } from "reka-ui"
import { RangeCalendarGridHead } from "reka-ui"

/**
 * RangeCalendarGridHead 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<RangeCalendarGridHeadProps>()
</script>

<template>
  <RangeCalendarGridHead v-bind="props">
    <slot />
  </RangeCalendarGridHead>
</template>
