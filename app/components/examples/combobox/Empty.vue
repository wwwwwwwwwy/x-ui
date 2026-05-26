<script setup lang="ts">
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxInput, ComboboxList } from '@/components/ui/combobox'
</script>

<template>
  <Combobox default-open open-on-focus>
    <ComboboxAnchor>
      <ComboboxInput model-value="没有结果" placeholder="搜索组件..." />
    </ComboboxAnchor>
    <ComboboxList>
      <ComboboxEmpty>未找到匹配结果</ComboboxEmpty>
    </ComboboxList>
  </Combobox>
</template>
