<script setup lang="ts">
import { RefreshCw } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button loading>
      保存中
    </Button>
    <Button loading variant="outline" :loading-icon="RefreshCw">
      同步数据
    </Button>
    <Button loading variant="secondary">
      <template #loading-icon>
        <span class="block size-4 rounded-full border-2 border-current border-t-transparent" />
      </template>
      自定义图标
    </Button>
  </div>
</template>
