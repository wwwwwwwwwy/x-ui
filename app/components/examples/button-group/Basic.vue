<script setup lang="ts">
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'
</script>

<template>
  <ButtonGroup>
    <Button>保存</Button>
    <ButtonGroupSeparator />
    <Button variant="outline">预览</Button>
    <ButtonGroupText>已同步</ButtonGroupText>
  </ButtonGroup>
</template>
