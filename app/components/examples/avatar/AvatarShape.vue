<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const shapes = [
  { value: 'circle', label: '圆形' },
  { value: 'square', label: '方形' },
] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <Avatar v-for="item in shapes" :key="item.value" :shape="item.value" size="base">
      <AvatarImage src="https://dev.meos.center/meri-plus/avatar-default.png" :alt="item.label" />
      <AvatarFallback>{{ item.label }}</AvatarFallback>
    </Avatar>
  </div>
</template>
