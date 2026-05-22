<script setup lang="ts">
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider default-open class="min-h-64 rounded-[8px] border border-[#E2E4E9]">
    <Sidebar collapsible="none" class="w-56 border-r border-[#E2E4E9]">
      <SidebarHeader class="p-3 font-semibold">X UI</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>组件</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem><SidebarMenuButton>按钮</SidebarMenuButton></SidebarMenuItem>
              <SidebarMenuItem><SidebarMenuButton>输入框</SidebarMenuButton></SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter class="p-3 text-xs text-[#434655]">文档预览</SidebarFooter>
    </Sidebar>
    <SidebarInset class="min-h-64 p-4">
      <SidebarTrigger />
      <p class="mt-4 text-sm text-[#434655]">侧边栏组件用于构建后台和文档导航。</p>
    </SidebarInset>
  </SidebarProvider>
</template>
