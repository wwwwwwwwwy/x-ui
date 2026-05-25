<script setup lang="ts">
import { Loader } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup data-disabled>
      <InputGroupInput placeholder="正在搜索..." disabled />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup data-disabled>
      <InputGroupInput placeholder="正在保存更改..." disabled />
      <InputGroupAddon align="inline-end">
        <InputGroupText>保存中...</InputGroupText>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup data-disabled>
      <InputGroupInput placeholder="正在刷新数据..." disabled />
      <InputGroupAddon>
        <Loader class="animate-spin" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText class="text-muted-foreground">
          请稍候...
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
