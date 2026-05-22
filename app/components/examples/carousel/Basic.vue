<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
</script>

<template>
  <Carousel class="mx-auto w-full max-w-sm">
    <CarouselContent>
      <CarouselItem v-for="demo in ['组件预览', '源码示例', '安装说明']" :key="demo">
        <div class="flex h-28 items-center justify-center rounded-[8px] border border-[#E2E4E9] bg-[#F5F6F7] text-sm font-semibold">{{ demo }}</div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
