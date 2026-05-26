<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectItemText, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
</script>

<template>
  <Select :default-value="'design'" :default-open="true">
    <SelectTrigger>
      <SelectValue placeholder="选择团队" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>团队</SelectLabel>
        <SelectItem value="design">
          <SelectItemText>
            设计团队
          </SelectItemText>
        </SelectItem>
        <SelectItem value="engineering">
          <SelectItemText>
            工程团队
          </SelectItemText>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
