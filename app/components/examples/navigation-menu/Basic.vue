<script setup lang="ts">
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>组件</NavigationMenuTrigger>
        <NavigationMenuContent class="w-64 p-4">
          <NavigationMenuLink class="block rounded-[4px] p-3 hover:bg-[#F5F6F7]">基础控件</NavigationMenuLink>
          <NavigationMenuLink class="block rounded-[4px] p-3 hover:bg-[#F5F6F7]">反馈组件</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
