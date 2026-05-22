<script setup lang="ts">
import { ref } from 'vue'
import { PinInput, PinInputGroup, PinInputSeparator, PinInputSlot } from '@/components/ui/pin-input'

const value = ref(['2', '4', '6'])
</script>

<template>
  <PinInput v-model="value">
    <PinInputGroup>
      <PinInputSlot v-for="index in 3" :key="index" :index="index - 1" />
    </PinInputGroup>
    <PinInputSeparator />
    <PinInputGroup>
      <PinInputSlot v-for="index in 3" :key="index" :index="index + 2" />
    </PinInputGroup>
  </PinInput>
</template>
