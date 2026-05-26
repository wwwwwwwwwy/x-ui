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
        <SheetTitle>标题区</SheetTitle>
        <SheetDescription>
          SheetHeader 负责放置标题与说明。
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
