<script setup lang="ts">
import { HelpCircle, Info } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="输入密码" type="password" />
      <InputGroupAddon align="inline-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <InputGroupButton variant="ghost" aria-label="密码说明" size="icon-xs">
                <Info />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>密码至少需要 8 个字符。</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="输入 API Key" />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <InputGroupAddon>
              <InputGroupButton variant="ghost" aria-label="查看帮助" size="icon-xs">
                <HelpCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </TooltipTrigger>
          <TooltipContent side="left">点击查看 API Key 获取方式。</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </InputGroup>
  </div>
</template>
