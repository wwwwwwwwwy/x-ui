<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

const page = ref(2)
</script>

<template>
  <div class="grid gap-3">
    <Pagination v-model:page="page" :total="50" :items-per-page="10">
      <PaginationContent v-slot="{ items }">
        <PaginationPrevious>上一页</PaginationPrevious>
        <template v-for="(item, index) in items" :key="index">
          <PaginationItem
            v-if="item.type === 'page'"
            :value="item.value"
            :is-active="item.value === page"
          >
            {{ item.value }}
          </PaginationItem>
        </template>
        <PaginationNext>下一页</PaginationNext>
      </PaginationContent>
    </Pagination>
    <p class="text-center text-sm text-[#434655]">当前第 {{ page }} 页</p>
  </div>
</template>
