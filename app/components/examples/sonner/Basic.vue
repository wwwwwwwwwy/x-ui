<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <div class="space-y-4">
    <Toaster />
    <p class="text-sm font-semibold">通知容器已挂载</p>
    <p class="text-xs text-[#434655]">业务页面可通过 vue-sonner 的 toast 方法触发中文通知。</p>
  </div>
</template>
