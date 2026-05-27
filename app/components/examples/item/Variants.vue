<script setup lang="ts">
import { Item, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
</script>

<template>
  <div class="grid w-full max-w-md gap-3">
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Outline 项目</ItemTitle>
        <ItemDescription>带边框的列表项，适合承载操作入口。</ItemDescription>
      </ItemContent>
    </Item>
    <Item variant="muted">
      <ItemContent>
        <ItemTitle>Muted 项目</ItemTitle>
        <ItemDescription>使用弱背景强调当前分组。</ItemDescription>
      </ItemContent>
    </Item>
  </div>
</template>
