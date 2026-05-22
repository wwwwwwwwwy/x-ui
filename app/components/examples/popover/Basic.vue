<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Popover :default-open="true">
    <PopoverTrigger as-child><Button variant="outline">查看发布信息</Button></PopoverTrigger>
    <PopoverContent>
      <p class="text-sm font-semibold">发布窗口</p>
      <p class="mt-1 text-xs text-[#434655]">建议在验证通过后进行静态部署。</p>
    </PopoverContent>
  </Popover>
</template>
