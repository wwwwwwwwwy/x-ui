<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="grid max-w-sm gap-2">
    <Label for="demo-label">项目名称</Label>
    <Input id="demo-label" default-value="x-ui registry" />
  </div>
</template>
