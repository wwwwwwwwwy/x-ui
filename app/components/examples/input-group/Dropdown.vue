<script setup lang="ts">
import { ChevronDown, MoreHorizontal } from 'lucide-vue-next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="输入文件名" />
      <InputGroupAddon align="inline-end">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <InputGroupButton variant="ghost" aria-label="更多" size="icon-xs">
              <MoreHorizontal />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>设置</DropdownMenuItem>
            <DropdownMenuItem>复制路径</DropdownMenuItem>
            <DropdownMenuItem>打开位置</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup class="[--radius:1rem]">
      <InputGroupInput placeholder="输入搜索内容" />
      <InputGroupAddon align="inline-end">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <InputGroupButton variant="ghost" class="!pr-1.5 text-xs">
              搜索范围
              <ChevronDown class="size-3" />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="[--radius:0.95rem]">
            <DropdownMenuItem>组件文档</DropdownMenuItem>
            <DropdownMenuItem>开发规范</DropdownMenuItem>
            <DropdownMenuItem>更新记录</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
