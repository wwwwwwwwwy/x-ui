<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :default-open="true">
      <TooltipTrigger as-child><Button variant="outline">悬停查看提示</Button></TooltipTrigger>
      <TooltipContent>这是一个中文 Tooltip 示例。</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
