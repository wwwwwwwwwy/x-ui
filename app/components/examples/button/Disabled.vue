<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button disabled>
      禁用按钮
    </Button>
    <Button variant="outline" disabled>
      禁用描边
    </Button>
    <Button variant="secondary" disabled>
      禁用次要
    </Button>
    <Button variant="ghost" disabled>
      禁用幽灵
    </Button>
    <Button variant="link" disabled>
      禁用链接
    </Button>
  </div>
</template>
