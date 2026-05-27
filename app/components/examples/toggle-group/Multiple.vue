<script setup lang="ts">
import { Bold, Italic, Underline } from 'lucide-vue-next'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
</script>

<template>
  <ToggleGroup type="multiple" :default-value="['bold']" variant="outline">
    <ToggleGroupItem value="bold" aria-label="加粗">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="斜体">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="下划线">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
