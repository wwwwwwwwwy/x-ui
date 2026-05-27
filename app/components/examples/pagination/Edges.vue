<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
</script>

<template>
  <Pagination :total="120" :items-per-page="10" :sibling-count="1" show-edges :default-page="6">
    <PaginationContent v-slot="{ items }">
      <PaginationFirst>首页</PaginationFirst>
      <PaginationPrevious>上一页</PaginationPrevious>
      <template v-for="(page, index) in items" :key="index">
        <PaginationItem v-if="page.type === 'page'" :value="page.value" :is-active="page.value === 6">
          {{ page.value }}
        </PaginationItem>
        <PaginationEllipsis v-else />
      </template>
      <PaginationNext>下一页</PaginationNext>
      <PaginationLast>末页</PaginationLast>
    </PaginationContent>
  </Pagination>
</template>
