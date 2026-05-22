<script setup lang="ts">
import { FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
</script>

<template>
  <FormField name="email">
    <FormItem class="max-w-sm">
      <FormLabel>邮箱地址</FormLabel>
      <FormDescription>用于接收组件库发布通知。</FormDescription>
      <div class="h-9 rounded-[4px] border border-[#E2E4E9] bg-white px-3 py-2 text-sm text-[#434655]">team@example.com</div>
    </FormItem>
  </FormField>
</template>
