<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
</script>

<template>
  <InputGroup>
    <InputGroupAddon>https://</InputGroupAddon>
    <InputGroupInput placeholder="输入 registry 域名" />
    <InputGroupButton>检查</InputGroupButton>
    <InputGroupText>可用</InputGroupText>
    <InputGroupTextarea class="basis-full" placeholder="补充说明..." />
  </InputGroup>
</template>
