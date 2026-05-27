<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider default-open class="min-h-64 rounded-[8px] border border-[#E2E4E9]">
    <Sidebar collapsible="none" class="w-64 border-r border-[#E2E4E9]">
      <SidebarHeader class="p-3">
        <SidebarInput placeholder="搜索组件..." />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem><SidebarMenuButton>Button</SidebarMenuButton></SidebarMenuItem>
              <SidebarMenuItem><SidebarMenuButton>Input</SidebarMenuButton></SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
</template>
