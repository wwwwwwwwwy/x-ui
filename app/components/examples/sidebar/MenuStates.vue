<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
} from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider default-open class="min-h-64 rounded-[8px] border border-[#E2E4E9]">
    <Sidebar collapsible="none" class="w-64 border-r border-[#E2E4E9]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>任务</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton is-active>组件同步</SidebarMenuButton>
                <SidebarMenuBadge>12</SidebarMenuBadge>
                <SidebarMenuAction show-on-hover aria-label="更多操作">
                  <MoreHorizontal />
                </SidebarMenuAction>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>文档检查</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuSkeleton show-icon />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
</template>
