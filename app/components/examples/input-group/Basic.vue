<script setup lang="ts">
import { SearchIcon } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
</script>

<template>
  <InputGroup>
    <InputGroupInput placeholder="搜索组件..." />
    <InputGroupAddon>
      <SearchIcon />
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <InputGroupButton>搜索</InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
</template>
