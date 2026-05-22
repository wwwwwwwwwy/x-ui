<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
</script>

<template>
  <div class="space-y-2">
    <div class="flex justify-between text-sm"><span>文档生成进度</span><span>72%</span></div>
    <Progress :model-value="72" />
  </div>
</template>
