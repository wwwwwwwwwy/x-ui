<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <ToggleGroup type="single" size="sm" default-value="day">
      <ToggleGroupItem value="day">日</ToggleGroupItem>
      <ToggleGroupItem value="week">周</ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="single" size="lg" default-value="month">
      <ToggleGroupItem value="month">月</ToggleGroupItem>
      <ToggleGroupItem value="year">年</ToggleGroupItem>
    </ToggleGroup>
  </div>
</template>
