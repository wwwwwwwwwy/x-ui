<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup
    direction="horizontal"
    class="max-w-md rounded-lg border-[#E2E4E9] md:min-w-[450px]"
  >
    <ResizablePanel :default-size="50">
      <div class="flex h-[200px] items-center justify-center p-6">
        <span class="font-semibold">面板一</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel :default-size="50">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel :default-size="25">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">面板二</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel :default-size="75">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">面板三</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
