<script setup lang="ts">
import { Button } from '@/components/ui/button'

type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'

const sizes: Array<{ value: ButtonSize, label: string, icon?: boolean }> = [
  { value: 'default', label: '默认尺寸' },
  { value: 'sm', label: '小尺寸' },
  { value: 'lg', label: '大尺寸' },
  { value: 'icon', label: '图标尺寸', icon: true },
  { value: 'icon-sm', label: '小图标尺寸', icon: true },
  { value: 'icon-lg', label: '大图标尺寸', icon: true },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button
      v-for="item in sizes"
      :key="item.value"
      :size="item.value"
      :aria-label="item.icon ? item.label : undefined"
    >
      <span v-if="item.icon" aria-hidden="true">+</span>
      <span v-else>{{ item.label }}</span>
    </Button>
  </div>
</template>
