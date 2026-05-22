<script setup lang="ts">
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Empty>
    <EmptyHeader>
      <EmptyMedia>空</EmptyMedia>
      <EmptyTitle>暂无组件记录</EmptyTitle>
      <EmptyDescription>添加第一个组件后，这里会显示最新状态。</EmptyDescription>
    </EmptyHeader>
    <EmptyContent><Button size="sm">新增组件</Button></EmptyContent>
  </Empty>
</template>
