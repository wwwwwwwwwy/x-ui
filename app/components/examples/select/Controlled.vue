<script setup lang="ts">
import { ref } from 'vue'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

const value = ref('weekly')
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <Select v-model="value">
      <SelectTrigger>
        <SelectValue placeholder="选择同步频率" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>同步频率</SelectLabel>
          <SelectItem value="daily">每日同步</SelectItem>
          <SelectItem value="weekly">每周同步</SelectItem>
          <SelectItem value="manual">手动同步</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <p class="text-sm text-muted-foreground">
      当前选中：{{ value }}
    </p>
  </div>
</template>
