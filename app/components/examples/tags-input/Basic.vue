<script setup lang="ts">
import { ref } from 'vue'
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'

const tags = ref(['设计系统', '这是一个很长很长的标签用于验证单个选项超出输入框时显示省略号'])
</script>

<template>
  <TagsInput v-model="tags">
    <TagsInputItem v-for="tag in tags" :key="tag" :value="tag">
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputInput placeholder="输入标签..." />
  </TagsInput>
</template>
