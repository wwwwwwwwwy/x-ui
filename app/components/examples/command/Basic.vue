<script setup lang="ts">
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
</script>

<template>
  <Command class="rounded-[8px] border border-[#E2E4E9]">
    <CommandInput placeholder="输入命令或组件名称..." />
    <CommandList>
      <CommandEmpty>暂无匹配结果</CommandEmpty>
      <CommandGroup heading="常用操作">
        <CommandItem value="创建组件">创建组件<CommandShortcut>⌘N</CommandShortcut></CommandItem>
        <CommandItem value="生成文档">生成文档<CommandShortcut>⌘G</CommandShortcut></CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="组件">
        <CommandItem value="按钮">按钮</CommandItem>
        <CommandItem value="输入框">输入框</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>
