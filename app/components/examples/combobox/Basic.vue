<script setup lang="ts">
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox'
</script>

<template>
  <Combobox default-open open-on-focus class="w-full max-w-xs">
    <ComboboxAnchor class="rounded-[8px] border border-[#E2E4E9] bg-white px-3 py-2">
      <ComboboxInput placeholder="搜索组件..." class="w-full border-0 bg-transparent p-0 shadow-none outline-none focus-visible:ring-0" />
    </ComboboxAnchor>
    <ComboboxList class="mt-2 rounded-[8px] border border-[#E2E4E9] bg-white p-1">
      <ComboboxEmpty>未找到组件</ComboboxEmpty>
      <ComboboxGroup heading="组件">
        <ComboboxItem value="button">按钮 Button</ComboboxItem>
        <ComboboxItem value="input">输入框 Input</ComboboxItem>
        <ComboboxItem value="select">选择器 Select</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
