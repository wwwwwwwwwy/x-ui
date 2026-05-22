<script setup lang="ts">
import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'
</script>

<template>
  <Stepper :default-value="2" class="w-full">
    <StepperItem :step="1">
      <StepperTrigger><StepperIndicator>1</StepperIndicator><StepperTitle>安装</StepperTitle><StepperDescription>添加组件</StepperDescription></StepperTrigger>
      <StepperSeparator />
    </StepperItem>
    <StepperItem :step="2">
      <StepperTrigger><StepperIndicator>2</StepperIndicator><StepperTitle>使用</StepperTitle><StepperDescription>组合页面</StepperDescription></StepperTrigger>
      <StepperSeparator />
    </StepperItem>
    <StepperItem :step="3">
      <StepperTrigger><StepperIndicator>3</StepperIndicator><StepperTitle>验证</StepperTitle><StepperDescription>运行检查</StepperDescription></StepperTrigger>
    </StepperItem>
  </Stepper>
</template>
