<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="h-32 rounded-[8px] border border-[#E2E4E9]">
    <ResizablePanel :default-size="45" class="flex items-center justify-center text-sm">导航</ResizablePanel>
    <ResizableHandle with-handle />
    <ResizablePanel :default-size="55" class="flex items-center justify-center text-sm">内容</ResizablePanel>
  </ResizablePanelGroup>
</template>
