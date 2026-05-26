<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList, ComboboxTrigger } from '@/components/ui/combobox'
</script>

<template>
  <Combobox default-open open-on-focus>
    <ComboboxAnchor>
      <ComboboxInput placeholder="搜索组件..." />
      <ComboboxTrigger>
        <ChevronsUpDown class="size-4 text-muted-foreground" />
      </ComboboxTrigger>
    </ComboboxAnchor>
    <ComboboxList>
      <ComboboxEmpty>未找到组件</ComboboxEmpty>
      <ComboboxGroup heading="组件">
        <ComboboxItem value="button">按钮 Button</ComboboxItem>
        <ComboboxItem value="input">输入框 Input</ComboboxItem>
        <ComboboxItem value="select">选择器 Select</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
