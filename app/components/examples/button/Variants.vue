<script setup lang="ts">
import { Button } from '@/components/ui/button'

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'

const variants: Array<{ value: ButtonVariant, label: string }> = [
  { value: 'default', label: '默认按钮' },
  { value: 'destructive', label: '危险按钮' },
  { value: 'outline', label: '描边按钮' },
  { value: 'secondary', label: '次要按钮' },
  { value: 'ghost', label: '幽灵按钮' },
  { value: 'link', label: '链接按钮' },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button
      v-for="item in variants"
      :key="item.value"
      :variant="item.value"
    >
      {{ item.label }}
    </Button>
  </div>
</template>
