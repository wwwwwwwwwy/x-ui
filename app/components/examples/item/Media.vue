<script setup lang="ts">
import { FileText } from 'lucide-vue-next'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
</script>

<template>
  <Item variant="outline" class="max-w-md">
    <ItemMedia variant="icon">
      <FileText />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>组件文档</ItemTitle>
      <ItemDescription>展示图标、标题和描述的组合布局。</ItemDescription>
    </ItemContent>
  </Item>
</template>
