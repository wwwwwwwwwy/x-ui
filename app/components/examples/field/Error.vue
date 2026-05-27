<script setup lang="ts">
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
</script>

<template>
  <Field data-invalid="true" class="max-w-sm">
    <FieldLabel>项目标识</FieldLabel>
    <Input aria-invalid placeholder="x-ui" />
    <FieldDescription>只能使用小写字母、数字和连字符。</FieldDescription>
    <FieldError>项目标识已存在，请换一个名称。</FieldError>
  </Field>
</template>
