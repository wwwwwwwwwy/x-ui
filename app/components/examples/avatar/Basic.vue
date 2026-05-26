<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex items-center gap-3">
    <Avatar>
      <AvatarImage src="https://dev.meos.center/meri-plus/avatar-default.png" alt="林清和" />
      <AvatarFallback>林</AvatarFallback>
    </Avatar>
    <div>
      <p class="text-sm font-semibold">林清和</p>
      <p class="text-xs text-[#434655]">产品设计负责人</p>
    </div>
  </div>
</template>
