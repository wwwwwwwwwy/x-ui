<script setup lang="ts">
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

function onSubmit(values: Record<string, unknown>) {
  console.log(values)
}
</script>

<template>
  <Form v-slot="{ handleSubmit }">
    <form class="grid w-full max-w-sm gap-4" @submit="handleSubmit($event, onSubmit)">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>项目名称</FormLabel>
          <FormControl>
            <Input v-bind="componentField" placeholder="x-ui registry" />
          </FormControl>
          <FormDescription>用于展示在文档站导航和 registry 信息里。</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
    </form>
  </Form>
</template>
