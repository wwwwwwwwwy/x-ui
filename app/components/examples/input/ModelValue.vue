<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'

const value = ref('组件文档')
</script>

<template>
  <div class="grid w-full max-w-sm gap-3">
    <Input v-model="value" placeholder="请输入文档名称" />
    <p class="text-sm text-muted-foreground">
      当前输入：{{ value || '暂无内容' }}
    </p>
  </div>
</template>
