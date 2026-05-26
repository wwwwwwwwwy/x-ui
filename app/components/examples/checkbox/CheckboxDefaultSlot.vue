<script setup lang="ts">
import { Minus } from 'lucide-vue-next'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="custom-icon" default-value>
      <Minus class="h-4 w-4" />
    </Checkbox>
    <Label for="custom-icon">自定义选中图标</Label>
  </div>
</template>
