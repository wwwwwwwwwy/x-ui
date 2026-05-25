<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="flex items-center gap-3">
      <span class="text-sm text-foreground">左侧</span>
      <Separator orientation="vertical" class="h-6" />
      <span class="text-sm text-foreground">右侧</span>
    </div>
  </div>
</template>
