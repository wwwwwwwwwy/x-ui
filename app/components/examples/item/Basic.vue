<script setup lang="ts">
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle } from '@/components/ui/item'
import { Button } from '@/components/ui/button'
</script>

<template>
  <ItemGroup class="gap-3">
    <Item>
      <ItemMedia>文</ItemMedia>
      <ItemContent>
        <ItemHeader><ItemTitle>组件文档</ItemTitle></ItemHeader>
        <ItemDescription>每个组件都提供中文示例和源码 API。</ItemDescription>
        <ItemFooter>刚刚更新</ItemFooter>
      </ItemContent>
      <ItemActions><Button size="sm" variant="outline">查看</Button></ItemActions>
    </Item>
    <ItemSeparator />
  </ItemGroup>
</template>
