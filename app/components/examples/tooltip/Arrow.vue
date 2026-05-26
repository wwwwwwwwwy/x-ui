<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :default-open="true">
      <TooltipTrigger as-child>
        <Button variant="outline">
          Arrow 三角标
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        TooltipContent 默认带箭头
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
