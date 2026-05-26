<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :open="true">
      <TooltipTrigger as-child>
        <Button variant="outline">
          默认展开
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        Tooltip 默认展开状态
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
