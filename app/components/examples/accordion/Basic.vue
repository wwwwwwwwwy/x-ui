<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
</script>

<template>
  <Accordion type="single" collapsible class="w-full">
    <AccordionItem value="setup">
      <AccordionTrigger>如何安装组件？</AccordionTrigger>
      <AccordionContent>通过 registry 地址添加组件后，即可在业务页面中按目录导入使用。</AccordionContent>
    </AccordionItem>
    <AccordionItem value="usage">
      <AccordionTrigger>是否支持组合使用？</AccordionTrigger>
      <AccordionContent>支持。组件保持 shadcn-vue 的组合式结构，便于按场景拆分。</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
