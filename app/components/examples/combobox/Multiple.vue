<script setup lang="ts">
import { ref } from 'vue'
import { Check } from 'lucide-vue-next'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList } from '@/components/ui/combobox'

const value = ref<string[]>(['button', 'input'])
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <Combobox v-model="value" multiple open-on-focus>
      <ComboboxAnchor>
        <ComboboxInput placeholder="搜索组件..." />
      </ComboboxAnchor>
      <ComboboxList>
        <ComboboxEmpty>未找到组件</ComboboxEmpty>
        <ComboboxGroup heading="组件">
          <ComboboxItem value="button">
            按钮 Button
            <ComboboxItemIndicator><Check /></ComboboxItemIndicator>
          </ComboboxItem>
          <ComboboxItem value="input">
            输入框 Input
            <ComboboxItemIndicator><Check /></ComboboxItemIndicator>
          </ComboboxItem>
          <ComboboxItem value="select">
            选择器 Select
            <ComboboxItemIndicator><Check /></ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxList>
    </Combobox>
    <p class="text-sm text-muted-foreground">
      已选择：{{ value.join('、') }}
    </p>
  </div>
</template>
