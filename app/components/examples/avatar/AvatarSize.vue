<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const sizes = [
  { value: 'sm', label: '小' },
  { value: 'base', label: '中' },
  { value: 'lg', label: '大' },
] as const
</script>

<template>
  <div class="flex flex-wrap items-end gap-4">
    <Avatar v-for="item in sizes" :key="item.value" :size="item.value">
      <AvatarImage src="https://dev.meos.center/meri-plus/avatar-default.png" :alt="item.label" />
      <AvatarFallback>{{ item.label }}</AvatarFallback>
    </Avatar>
  </div>
</template>
