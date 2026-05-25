<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <ButtonGroup>
      <Button>保存</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">预览</Button>
      <ButtonGroupText>已同步</ButtonGroupText>
    </ButtonGroup>
  </div>
</template>
