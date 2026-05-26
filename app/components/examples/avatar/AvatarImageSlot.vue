<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Avatar size="base">
      <AvatarImage src="https://dev.meos.center/meri-plus/avatar-default.png" alt="默认头像" />
      <AvatarFallback>头像</AvatarFallback>
    </Avatar>
  </div>
</template>
