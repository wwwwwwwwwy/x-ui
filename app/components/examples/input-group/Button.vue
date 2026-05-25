<script setup lang="ts">
import { Check, Copy, Star } from 'lucide-vue-next'
import { ref } from 'vue'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'

const copied = ref(false)
const favorite = ref(false)
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="https://x.com/x-ui" readonly />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label="复制链接"
          title="复制链接"
          size="icon-xs"
          @click="copied = !copied"
        >
          <Check v-if="copied" />
          <Copy v-else />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup class="[--radius:9999px]">
      <InputGroupAddon class="pl-3 text-muted-foreground">
        https://
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-xs"
          @click="favorite = !favorite"
        >
          <Star :class="favorite ? 'fill-primary stroke-primary' : ''" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="输入搜索内容..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="secondary">
          搜索
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
