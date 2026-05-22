<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

/**
 * SkeletonProps 定义 Skeleton 的公开 props，保持与 shadcn-vue 安装后的类型入口兼容。
 */
interface SkeletonProps {
  class?: HTMLAttributes["class"]
}

/**
 * Skeleton 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<SkeletonProps>()
</script>

<template>
  <div :class="cn('animate-pulse rounded-md bg-muted', props.class)" />
</template>
