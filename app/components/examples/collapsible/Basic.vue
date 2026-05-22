<script setup lang="ts">
import { ref } from 'vue'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'

const open = ref(true)
</script>

<template>
  <Collapsible v-model:open="open" class="space-y-2">
    <div class="flex items-center justify-between rounded-[8px] border border-[#E2E4E9] px-4 py-3">
      <span class="text-sm font-semibold">高级设置</span>
      <CollapsibleTrigger as-child><Button size="sm" variant="outline">{{ open ? '收起' : '展开' }}</Button></CollapsibleTrigger>
    </div>
    <CollapsibleContent class="rounded-[8px] border border-[#E2E4E9] bg-[#F5F6F7] p-4 text-sm text-[#434655]">这里展示可折叠的配置内容。</CollapsibleContent>
  </Collapsible>
</template>
