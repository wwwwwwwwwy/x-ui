/**
 * 导出 ChartCrosshair 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ChartCrosshair } from "./ChartCrosshair.vue"
/**
 * 导出 ChartLegend 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ChartLegend } from "./ChartLegend.vue"
/**
 * 导出 ChartSingleTooltip 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ChartSingleTooltip } from "./ChartSingleTooltip.vue"
/**
 * 导出 ChartTooltip 组件，保持 shadcn-vue 的按目录导入约定。
 */
export { default as ChartTooltip } from "./ChartTooltip.vue"

export function defaultColors(count: number = 3) {
  const quotient = Math.floor(count / 2)
  const remainder = count % 2

  const primaryCount = quotient + remainder
  const secondaryCount = quotient
  return [
    ...Array.from(new Array(primaryCount).keys()).map(i => `hsl(var(--vis-primary-color) / ${1 - (1 / primaryCount) * i})`),
    ...Array.from(new Array(secondaryCount).keys()).map(i => `hsl(var(--vis-secondary-color) / ${1 - (1 / secondaryCount) * i})`),
  ]
}

/**
 * 重新导出 ./interface 的公开 API，保持组件目录入口完整。
 */
export * from "./interface"
