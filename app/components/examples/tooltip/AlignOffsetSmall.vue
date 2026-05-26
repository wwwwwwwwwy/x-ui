<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip :default-open="true">
      <TooltipTrigger as-child>
        <Button variant="outline">
          Start + 20
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top" align="start" :align-offset="20">
        alignOffset = 20
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
