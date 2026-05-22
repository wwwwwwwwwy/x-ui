<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Dialog :default-open="true">
    <DialogTrigger as-child><Button>编辑资料</Button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>编辑资料</DialogTitle>
        <DialogDescription>更新团队成员的基础信息。</DialogDescription>
      </DialogHeader>
      <div class="rounded-[8px] bg-[#F5F6F7] p-4 text-sm">姓名：林清和</div>
      <DialogFooter><Button>保存更改</Button></DialogFooter>
    </DialogContent>
  </Dialog>
</template>
