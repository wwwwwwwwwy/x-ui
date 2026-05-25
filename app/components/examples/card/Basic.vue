<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Card class="grid max-w-sm gap-4">
    <CardHeader>
      <CardTitle>组件发布</CardTitle>
      <CardDescription>发布前检查 registry、文档和静态构建状态。</CardDescription>
    </CardHeader>
    <CardContent class="text-sm text-[#434655]">当前版本已准备进入预览流程。</CardContent>
    <CardFooter><Button size="sm">查看详情</Button></CardFooter>
  </Card>
</template>
