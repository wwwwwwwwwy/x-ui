<script setup lang="ts">
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field'
</script>

<template>
  <NumberField
    :default-value="19.9"
    :step="0.1"
    :format-options="{
      style: 'currency',
      currency: 'CNY',
      currencyDisplay: 'symbol',
    }"
    class="max-w-40"
  >
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>
