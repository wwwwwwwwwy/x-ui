<script setup lang="ts">
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Drawer :default-open="true" :modal="false">
    <DrawerContent class="absolute">
      <DrawerHeader>
        <DrawerTitle>任务详情</DrawerTitle>
        <DrawerDescription>从底部抽屉查看当前任务的执行状态。</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter><Button>完成</Button></DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
