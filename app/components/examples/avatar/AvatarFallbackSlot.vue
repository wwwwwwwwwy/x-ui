<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Avatar size="base">
      <AvatarImage src="/avatar-not-found.png" alt="加载失败头像" />
      <AvatarFallback>林</AvatarFallback>
    </Avatar>
  </div>
</template>
