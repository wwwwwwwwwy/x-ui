<script setup lang="ts">
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, FieldSet, FieldTitle } from '@/components/ui/field'
</script>

<template>
  <FieldSet class="max-w-sm">
    <FieldGroup>
      <Field>
        <FieldLabel>基础信息</FieldLabel>
        <FieldTitle>组件名称</FieldTitle>
        <FieldDescription>用于 registry 和文档导航。</FieldDescription>
      </Field>
      <FieldSeparator>高级配置</FieldSeparator>
      <Field>
        <FieldLabel>发布策略</FieldLabel>
        <FieldDescription>提交前需要通过文档生成和类型检查。</FieldDescription>
      </Field>
    </FieldGroup>
  </FieldSet>
</template>
