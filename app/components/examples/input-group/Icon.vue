<script setup lang="ts">
import { Check, CreditCard, Info, Mail, Search, Star } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="搜索组件..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput type="email" placeholder="输入邮箱" />
      <InputGroupAddon>
        <Mail />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="银行卡号" />
      <InputGroupAddon>
        <CreditCard />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Check />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="收藏项目" />
      <InputGroupAddon align="inline-end">
        <Star />
        <Info />
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
