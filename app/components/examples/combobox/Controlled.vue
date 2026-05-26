<script setup lang="ts">
import { ref } from 'vue'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox'

const value = ref('input')
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <Combobox v-model="value" open-on-focus>
      <ComboboxAnchor>
        <ComboboxInput placeholder="选择组件..." />
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
    <p class="text-sm text-muted-foreground">
      当前选中：{{ value }}
    </p>
  </div>
</template>
