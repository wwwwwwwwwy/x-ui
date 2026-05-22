<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
</script>

<template>
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="docs">文档</ToggleGroupItem>
    <ToggleGroupItem value="registry">Registry</ToggleGroupItem>
    <ToggleGroupItem value="theme">主题</ToggleGroupItem>
  </ToggleGroup>
</template>
