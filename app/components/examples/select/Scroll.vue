<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue } from '@/components/ui/select'

const options = Array.from({ length: 16 }, (_, index) => ({
  value: `option-${index + 1}`,
  label: `选项 ${index + 1}`,
}))
</script>

<template>
  <Select :default-open="true">
    <SelectTrigger>
      <SelectValue placeholder="选择长列表选项" />
    </SelectTrigger>
    <SelectContent class="max-h-48">
      <SelectScrollUpButton />
      <SelectGroup>
        <SelectLabel>长列表</SelectLabel>
        <SelectItem v-for="item in options" :key="item.value" :value="item.value">
          {{ item.label }}
        </SelectItem>
      </SelectGroup>
      <SelectScrollDownButton />
    </SelectContent>
  </Select>
</template>
