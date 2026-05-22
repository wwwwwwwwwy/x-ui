<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner"
import { reactiveOmit } from "@vueuse/core"
import { ActionIcon057 as CircleCheckIcon, ActionIcon051 as InfoIcon, ActionIcon047 as Loader2Icon, ActionIcon016 as OctagonXIcon, ActionIcon083 as TriangleAlertIcon, ActionIcon016 as XIcon } from "@meri-design/icon-vue"
import { Toaster as Sonner } from "vue-sonner"

/**
 * Sonner 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ToasterProps>()
/**
 * 移除仅由 Sonner 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "toastOptions")
</script>

<template>
  <Sonner
    class="toaster group"
    :toast-options="{
      classes: {
        toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
        description: 'group-[.toast]:text-muted-foreground',
        actionButton:
          'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        cancelButton:
          'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
      },
    }"
    v-bind="delegatedProps"
  >
    <template #success-icon>
      <CircleCheckIcon size="16" class="size-4" />
    </template>
    <template #info-icon>
      <InfoIcon size="16" class="size-4" />
    </template>
    <template #warning-icon>
      <TriangleAlertIcon size="16" class="size-4" />
    </template>
    <template #error-icon>
      <OctagonXIcon size="16" class="size-4" />
    </template>
    <template #loading-icon>
      <div>
        <Loader2Icon size="16" class="size-4 animate-spin" />
      </div>
    </template>
    <template #close-icon>
      <XIcon size="16" class="size-4" />
    </template>
  </Sonner>
</template>
