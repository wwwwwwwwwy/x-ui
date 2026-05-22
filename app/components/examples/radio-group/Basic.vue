<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const value = ref('weekly')
</script>

<template>
  <RadioGroup v-model="value" class="grid gap-3">
    <label class="flex items-center gap-2"><RadioGroupItem value="daily" />每日同步</label>
    <label class="flex items-center gap-2"><RadioGroupItem value="weekly" />每周同步</label>
    <label class="flex items-center gap-2"><RadioGroupItem value="manual" />手动同步</label>
  </RadioGroup>
</template>
