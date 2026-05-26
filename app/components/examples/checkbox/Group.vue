<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex items-center gap-3">
      <Checkbox id="terms" />
      <Label for="terms">接受服务条款</Label>
    </div>

    <div class="flex items-start gap-3">
      <Checkbox id="terms-2" :default-value="true" />
      <div class="grid gap-2">
        <Label for="terms-2">接受服务条款</Label>
        <p class="text-sm text-muted-foreground">
          勾选后表示你同意当前产品的服务条款和隐私说明。
        </p>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <Checkbox id="toggle" disabled />
      <Label for="toggle">启用消息通知</Label>
    </div>

    <Label class="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
      <Checkbox
        id="toggle-2"
        :default-value="true"
        class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
      />
      <div class="grid gap-1.5 font-normal">
        <p class="text-sm font-medium leading-none">
          启用消息通知
        </p>
        <p class="text-sm text-muted-foreground">
          你可以随时开启或关闭消息通知。
        </p>
      </div>
    </Label>
  </div>
</template>
