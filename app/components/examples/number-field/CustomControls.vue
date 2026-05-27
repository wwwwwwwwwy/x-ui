<script setup lang="ts">
import { Minus, Plus } from 'lucide-vue-next'
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field'
</script>

<template>
  <NumberField :default-value="1" :min="1" class="max-w-40">
    <NumberFieldContent>
      <NumberFieldDecrement>
        <Minus class="size-3" />
      </NumberFieldDecrement>
      <NumberFieldInput />
      <NumberFieldIncrement>
        <Plus class="size-3" />
      </NumberFieldIncrement>
    </NumberFieldContent>
  </NumberField>
</template>
