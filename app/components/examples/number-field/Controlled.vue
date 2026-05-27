<script setup lang="ts">
import { ref } from 'vue'
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field'

const count = ref(2)
</script>

<template>
  <div class="grid max-w-36 gap-2">
    <NumberField v-model="count" :min="0" :max="10">
      <NumberFieldContent>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldContent>
    </NumberField>
    <p class="text-sm text-muted-foreground">
      当前数量：{{ count }}
    </p>
  </div>
</template>
