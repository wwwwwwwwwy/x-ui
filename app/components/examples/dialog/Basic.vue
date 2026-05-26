<script setup lang="ts">
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        打开对话框
      </Button>
    </DialogTrigger>
    <DialogContent>
      <div class="text-sm text-muted-foreground">
        这是一个基础 Dialog 示例。
      </div>
    </DialogContent>
  </Dialog>
</template>
