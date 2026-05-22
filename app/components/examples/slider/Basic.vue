<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

const value = ref([64])
</script>

<template>
  <div class="space-y-3">
    <Label>音量：{{ value[0] }}%</Label>
    <Slider v-model="value" :max="100" :step="1" />
  </div>
</template>
