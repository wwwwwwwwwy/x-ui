<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Switch>
      <template #thumb>自定义 thumb</template>
    </Switch>
  </div>
</template>
