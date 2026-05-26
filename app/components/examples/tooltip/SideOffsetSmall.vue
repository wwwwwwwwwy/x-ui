<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :default-open="true">
      <TooltipTrigger as-child>
        <Button variant="outline">
          SideOffset 4
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top" :side-offset="4">
        sideOffset = 4
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
