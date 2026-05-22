<script setup lang="ts">
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger class="flex h-28 items-center justify-center rounded-[8px] border border-dashed border-[#C4C5D8] text-sm text-[#434655]">右键打开上下文菜单</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>组件操作</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>复制名称<ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
      <ContextMenuItem>查看源码</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
