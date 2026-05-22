<script setup lang="ts">
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>文件</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>新建组件<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
        <MenubarItem>保存文档</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>导出 registry</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
