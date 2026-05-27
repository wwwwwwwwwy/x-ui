<script setup lang="ts">
import { FormDescription, FormField, FormItem, FormLabel, FormMessage, Form } from '@/components/ui/form'
</script>

<template>
  <Form>
    <FormField name="registry">
      <FormItem class="max-w-sm">
        <FormLabel>Registry 地址</FormLabel>
        <FormDescription>表单消息会和当前字段自动关联。</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
  </Form>
</template>
