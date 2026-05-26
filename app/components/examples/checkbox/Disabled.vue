<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="grid gap-3">
    <div class="flex items-center gap-2">
      <Checkbox id="disabled" disabled />
      <Label for="disabled" class="text-muted-foreground">禁用未选中</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox id="disabled-checked" disabled default-value />
      <Label for="disabled-checked" class="text-muted-foreground">禁用已选中</Label>
    </div>
  </div>
</template>
