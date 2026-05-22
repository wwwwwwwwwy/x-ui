<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>

<template>
  <AspectRatio :ratio="16 / 9" class="overflow-hidden rounded-[8px] bg-[#eef4ff]">
    <div class="flex h-full items-center justify-center text-sm font-semibold text-[#2D5AF2]">16:9 内容预览区域</div>
  </AspectRatio>
</template>
