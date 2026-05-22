<script setup lang="ts">
import { ref } from 'vue'
import { ChartLegend, ChartTooltip } from '@/components/ui/chart'

const chartItems = ref([
  { name: '访问量', color: '#2D5AF2' },
  { name: '转化率', color: '#19A55B' },
])
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2">
    <ChartTooltip title="本周数据" :data="[{ name: '访问量', color: '#2D5AF2', value: '12,480' }, { name: '转化率', color: '#19A55B', value: '8.6%' }]" />
    <ChartLegend v-model:items="chartItems" />
  </div>
</template>
