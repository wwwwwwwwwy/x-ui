<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
</script>

<template>
  <ScrollArea class="h-32 rounded-[8px] border border-[#E2E4E9] p-4">
    <div v-for="demo in ['按钮', '输入框', '选择器', '表格', '弹窗', '提示', '标签', '分页']" :key="demo" class="border-b border-[#E2E4E9] py-2 text-sm">{{ demo }}</div>
  </ScrollArea>
</template>
