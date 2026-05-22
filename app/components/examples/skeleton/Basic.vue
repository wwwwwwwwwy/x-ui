<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="space-y-3">
    <Skeleton class="h-4 w-40" />
    <Skeleton class="h-4 w-64" />
    <Skeleton class="h-20 w-full rounded-[8px]" />
  </div>
</template>
