<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex items-center gap-3">
    <Avatar>
      <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=60" alt="林清和" />
      <AvatarFallback>林</AvatarFallback>
    </Avatar>
    <div>
      <p class="text-sm font-semibold">林清和</p>
      <p class="text-xs text-[#434655]">产品设计负责人</p>
    </div>
  </div>
</template>
