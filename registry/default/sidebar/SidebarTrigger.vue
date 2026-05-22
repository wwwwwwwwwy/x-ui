<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { ActionIcon003 as PanelLeft } from "@meri-design/icon-vue"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import { useSidebar } from "./utils"

/**
 * SidebarTrigger 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeft size="16" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
