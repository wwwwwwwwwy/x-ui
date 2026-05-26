<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const checked = ref(false)
</script>

<template>
  <div class="grid gap-2">
    <div class="flex items-center gap-2">
      <Checkbox id="sync" v-model="checked" />
      <Label for="sync">同步到受控值</Label>
    </div>
    <p class="text-sm text-muted-foreground">
      当前状态：{{ checked ? '已选中' : '未选中' }}
    </p>
  </div>
</template>
