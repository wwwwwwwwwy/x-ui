<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogScrollContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        查看长内容
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>发布检查</DialogTitle>
        <DialogDescription>确认文档、registry 和类型检查均已通过。</DialogDescription>
      </DialogHeader>
      <DialogScrollContent class="max-h-40 rounded-[8px] border border-[#E2E4E9] bg-[#F5F6F7] p-4 text-sm text-[#434655]">
        <p>1. 文档内容已更新。</p>
        <p>2. registry 构建通过。</p>
        <p>3. 类型检查通过。</p>
        <p>4. 预览页已验证。</p>
        <p>5. 其余内容用于测试滚动容器。</p>
        <p>6. 继续补充多行内容。</p>
        <p>7. 确认滚动区域可以正常显示。</p>
      </DialogScrollContent>
    </DialogContent>
  </Dialog>
</template>
