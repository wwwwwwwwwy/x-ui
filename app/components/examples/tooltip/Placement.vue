<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const placements = [
  { label: 'Top', side: 'top', content: '顶部提示' },
  { label: 'Right', side: 'right', content: '右侧提示' },
  { label: 'Bottom', side: 'bottom', content: '底部提示' },
  { label: 'Left', side: 'left', content: '左侧提示' },
] as const
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <TooltipProvider v-for="item in placements" :key="item.side" :delay-duration="0">
      <Tooltip :open="true">
        <TooltipTrigger as-child>
          <Button variant="outline">
            {{ item.label }}
          </Button>
        </TooltipTrigger>
        <TooltipContent :side="item.side">
          {{ item.content }}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
