<script setup lang="ts">
import { Braces, Copy, CornerDownLeft, RefreshCw } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
</script>

<template>
  <div class="grid w-full max-w-md gap-4">
    <InputGroup>
      <InputGroupTextarea
        placeholder="console.log('Hello, world!');"
        class="min-h-[200px]"
      />
      <InputGroupAddon align="block-start" class="border-b">
        <InputGroupText class="font-mono">
          <Braces />
          script.js
        </InputGroupText>
        <InputGroupButton class="ml-auto" size="icon-xs">
          <RefreshCw />
        </InputGroupButton>
        <InputGroupButton variant="ghost" size="icon-xs">
          <Copy />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupAddon align="block-end" class="border-t">
        <InputGroupText>Line 1, Column 1</InputGroupText>
        <InputGroupButton size="sm" class="ml-auto" variant="default">
          运行
          <CornerDownLeft />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
