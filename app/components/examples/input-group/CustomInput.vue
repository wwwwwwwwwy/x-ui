<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupButton } from '@/components/ui/input-group'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <textarea
        data-slot="input-group-control"
        class="flex min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-[14px] outline-none"
        placeholder="自动增高 textarea..."
      />
      <InputGroupAddon align="block-end">
        <InputGroupButton class="ml-auto" size="sm" variant="default">
          提交
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
