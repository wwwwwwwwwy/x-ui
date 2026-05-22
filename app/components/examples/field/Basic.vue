<script setup lang="ts">
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from '@/components/ui/field'
</script>

<template>
  <FieldGroup>
    <FieldSet>
      <FieldLegend>项目信息</FieldLegend>
      <Field orientation="vertical">
        <FieldLabel>项目名称</FieldLabel>
        <FieldTitle>x-ui registry</FieldTitle>
        <FieldDescription>用于管理组件文档和静态 registry。</FieldDescription>
      </Field>
    </FieldSet>
  </FieldGroup>
</template>
