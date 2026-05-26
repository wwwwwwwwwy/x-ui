<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="custom-style" class="border-primary text-primary data-[state=checked]:bg-primary" />
    <Label for="custom-style">自定义样式</Label>
  </div>
</template>
