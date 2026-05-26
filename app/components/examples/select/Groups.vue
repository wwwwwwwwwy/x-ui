<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
</script>

<template>
  <Select :default-open="true">
    <SelectTrigger>
      <SelectValue placeholder="选择组件" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>基础组件</SelectLabel>
        <SelectItem value="button">按钮 Button</SelectItem>
        <SelectItem value="input">输入框 Input</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>反馈组件</SelectLabel>
        <SelectItem value="alert">提示 Alert</SelectItem>
        <SelectItem value="tooltip">气泡 Tooltip</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
