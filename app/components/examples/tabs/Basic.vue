<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <Tabs default-value="preview" class="w-full">
    <TabsList><TabsTrigger value="preview">预览</TabsTrigger><TabsTrigger value="code">源码</TabsTrigger></TabsList>
    <TabsContent value="preview">这里展示组件交互效果。</TabsContent>
    <TabsContent value="code">这里展示示例源码。</TabsContent>
  </Tabs>
</template>
