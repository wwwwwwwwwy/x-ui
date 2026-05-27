<script setup lang="ts">
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from '@/components/ui/field'
</script>

<template>
  <div class="grid w-full max-w-md gap-4">
    <Field orientation="vertical">
      <FieldLabel>垂直布局</FieldLabel>
      <FieldDescription>标签、标题和说明从上到下排列。</FieldDescription>
    </Field>
    <Field orientation="horizontal">
      <FieldContent>
        <FieldTitle>水平布局</FieldTitle>
        <FieldDescription>适合开关、复选框等紧凑表单项。</FieldDescription>
      </FieldContent>
      <span class="text-sm text-[#434655]">已启用</span>
    </Field>
  </div>
</template>
