<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Avatar class="border border-primary text-primary">
      <AvatarImage src="https://dev.meos.center/meri-plus/avatar-default.png" alt="林清和" />
      <AvatarFallback>林</AvatarFallback>
    </Avatar>
  </div>
</template>
