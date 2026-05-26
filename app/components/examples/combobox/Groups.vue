<script setup lang="ts">
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList, ComboboxSeparator } from '@/components/ui/combobox'
</script>

<template>
  <Combobox default-open open-on-focus>
    <ComboboxAnchor>
      <ComboboxInput placeholder="搜索资源..." />
    </ComboboxAnchor>
    <ComboboxList>
      <ComboboxEmpty>未找到资源</ComboboxEmpty>
      <ComboboxGroup heading="基础组件">
        <ComboboxItem value="button">按钮 Button</ComboboxItem>
        <ComboboxItem value="input">输入框 Input</ComboboxItem>
      </ComboboxGroup>
      <ComboboxSeparator />
      <ComboboxGroup heading="反馈组件">
        <ComboboxItem value="alert">提示 Alert</ComboboxItem>
        <ComboboxItem value="tooltip">气泡 Tooltip</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
