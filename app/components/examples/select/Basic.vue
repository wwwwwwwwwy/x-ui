<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
</script>

<template>
  <Select :default-value="'preview'" :default-open="true">
    <SelectTrigger>
      <SelectValue placeholder="选择发布环境" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>环境</SelectLabel>
        <SelectItem value="preview">预览环境</SelectItem>
        <SelectItem value="production">生产环境</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
