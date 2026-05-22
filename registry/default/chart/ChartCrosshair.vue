<script setup lang="ts">
import type { BulletLegendItemInterface } from "@unovis/ts"
import type { Component } from "vue"
import { omit } from "@unovis/ts"
import { VisCrosshair, VisTooltip } from "@unovis/vue"
import { createApp } from "vue"
import { ChartTooltip } from "."

/**
 * ChartCrosshair 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<{
  colors: string[]
  index: string
  items: BulletLegendItemInterface[]
  customTooltip?: Component
}>(), {
  colors: () => [],
})

// 使用 WeakMap 缓存每个数据点对应的 Tooltip 内容。
const wm = new WeakMap()
/**
 * template 处理 ChartCrosshair 的本地交互逻辑，并保持对外状态更新语义稳定。
 */
function template(d: any) {
  if (wm.has(d)) {
    return wm.get(d)
  }
  else {
    const componentDiv = document.createElement("div")
    const omittedData = Object.entries(omit(d, [props.index])).map(([key, value]) => {
      const legendReference = props.items.find(i => i.name === key)
      return { ...legendReference, value }
    })
    const TooltipComponent = props.customTooltip ?? ChartTooltip
    createApp(TooltipComponent, { title: d[props.index].toString(), data: omittedData }).mount(componentDiv)
    wm.set(d, componentDiv.innerHTML)
    return componentDiv.innerHTML
  }
}

/**
 * color 处理 ChartCrosshair 的本地交互逻辑，并保持对外状态更新语义稳定。
 */
function color(d: unknown, i: number) {
  return props.colors[i] ?? "transparent"
}
</script>

<template>
  <VisTooltip :horizontal-shift="20" :vertical-shift="20" />
  <VisCrosshair :template="template" :color="color" />
</template>
