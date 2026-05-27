<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
</script>

<template>
  <Item variant="outline" class="max-w-md">
    <ItemContent>
      <ItemTitle>发布检查</ItemTitle>
      <ItemDescription>确认文档、registry 和类型检查均已通过。</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="sm" variant="outline">查看</Button>
      <Button size="sm">发布</Button>
    </ItemActions>
  </Item>
</template>
