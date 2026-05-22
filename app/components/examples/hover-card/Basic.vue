<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <HoverCard :default-open="true">
    <HoverCardTrigger as-child><Button variant="link">查看维护者</Button></HoverCardTrigger>
    <HoverCardContent>
      <div class="space-y-1">
        <p class="text-sm font-semibold">林清和</p>
        <p class="text-xs text-[#434655]">负责组件规范、样式迁移和文档体验。</p>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
