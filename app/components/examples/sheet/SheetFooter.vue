<script setup lang="ts">
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        打开
      </Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>底部操作</SheetTitle>
        <SheetDescription>
          SheetFooter 负责放置底部动作。
        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <SheetClose as-child>
          <Button variant="outline">
            关闭
          </Button>
        </SheetClose>
        <Button>
          保存
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
