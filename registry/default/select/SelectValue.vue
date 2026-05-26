<script setup lang="ts">
import type { SelectValueProps } from "reka-ui"
import { ref } from "vue"
import { SelectValue as RekaSelectValue } from "reka-ui"

/**
 * SelectValue 透传 reka-ui 的 value props，并对选中项文本做缓存兜底，避免切换时短暂回退 placeholder。
 */
const props = defineProps<SelectValueProps>()

const lastSelectedLabel = ref<string[]>([])

/**
 * 缓存最近一次非空的选中文本，避免选项卸载时出现展示空窗。
 */
function updateSelectedLabel(selectedLabel: string[]) {
  if (selectedLabel.length > 0) {
    lastSelectedLabel.value = selectedLabel
  }
}

/**
 * 计算最终展示文案：优先使用当前选中文本，其次使用最近一次有效文本，最后回退到 placeholder。
 */
function resolveDisplayText(selectedLabel: string[], modelValue: unknown) {
  if (selectedLabel.length > 0)
    return selectedLabel.join(', ')

  if (modelValue != null && modelValue !== '' && lastSelectedLabel.value.length > 0)
    return lastSelectedLabel.value.join(', ')

  return props.placeholder
}

/**
 * 对外暴露给模板的稳定文案计算入口。
 */
function displayText(selectedLabel: string[], modelValue: unknown) {
  updateSelectedLabel(selectedLabel)
  return resolveDisplayText(selectedLabel, modelValue)
}
</script>

<template>
  <RekaSelectValue v-bind="props" v-slot="{ selectedLabel, modelValue }">
    {{ displayText(selectedLabel, modelValue) }}
  </RekaSelectValue>
</template>
