<script setup lang="ts">
import type { BulletLegendItemInterface } from "@unovis/ts"
import { BulletLegend } from "@unovis/ts"
import { VisBulletLegend } from "@unovis/vue"
import { nextTick, onMounted, ref } from "vue"
import { buttonVariants } from "@/registry/default/ui/button"

/**
 * ChartLegend 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<{ items: BulletLegendItemInterface[] }>(), {
  items: () => [],
})

/**
 * ChartLegend 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<{
  "legendItemClick": [d: BulletLegendItemInterface, i: number]
  "update:items": [payload: BulletLegendItemInterface[]]
}>()

const elRef = ref<HTMLElement>()

/**
 * keepStyling 处理 ChartLegend 的本地交互逻辑，并保持对外状态更新语义稳定。
 */
function keepStyling() {
  const selector = `.${BulletLegend.selectors.item}`
  nextTick(() => {
    const elements = elRef.value?.querySelectorAll(selector)
    const classes = buttonVariants({ variant: "ghost", size: "sm" }).split(" ")
    elements?.forEach(el => el.classList.add(...classes, "!inline-flex", "!mr-2"))
  })
}

onMounted(() => {
  keepStyling()
})

/**
 * onLegendItemClick 处理 ChartLegend 的本地交互逻辑，并保持对外状态更新语义稳定。
 */
function onLegendItemClick(d: BulletLegendItemInterface, i: number) {
  emits("legendItemClick", d, i)
  const isBulletActive = !props.items[i].inactive
  const isFilterApplied = props.items.some(i => i.inactive)
  if (isFilterApplied && isBulletActive) {
    // 已有筛选且点击当前激活项时，重置全部筛选。
    emits("update:items", props.items.map(item => ({ ...item, inactive: false })))
  }
  else {
    // 应用当前选择，并将其他图例项标记为非激活。
    emits("update:items", props.items.map(item => item.name === d.name ? ({ ...d, inactive: false }) : { ...item, inactive: true }))
  }
  keepStyling()
}
</script>

<template>
  <div
    ref="elRef" class="w-max" :style="{
      '--vis-legend-bullet-size': '16px',
    }"
  >
    <VisBulletLegend
      :items="items"
      :on-legend-item-click="onLegendItemClick"
    />
  </div>
</template>
