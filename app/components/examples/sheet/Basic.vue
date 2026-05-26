<script setup lang="ts">
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Sheet>
    <SheetTrigger as-child><Button>打开侧边面板</Button></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>发布检查</SheetTitle>
        <SheetDescription>确认文档、registry 和类型检查均已通过。</SheetDescription>
      </SheetHeader>
      <SheetFooter><Button>确认</Button></SheetFooter>
    </SheetContent>
  </Sheet>
</template>
