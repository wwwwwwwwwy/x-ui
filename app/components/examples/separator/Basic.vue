<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <div class="space-y-1">
      <p class="text-sm font-medium text-foreground">项目名称</p>
      <p class="text-xs text-[#434655]">Separator 作为分隔线使用。</p>
    </div>
    <Separator />
    <div class="text-sm text-foreground">
      这里是分隔线下方的内容。
    </div>
  </div>
</template>
