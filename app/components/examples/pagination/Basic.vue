<script setup lang="ts">
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
</script>

<template>
  <Pagination :total="80" :items-per-page="10" :sibling-count="1" show-edges :default-page="2">
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious>上一页</PaginationPrevious>
      <template v-for="(page, index) in items" :key="index">
        <PaginationItem v-if="page.type === 'page'" :value="page.value" :is-active="page.value === 2">{{ page.value }}</PaginationItem>
        <PaginationEllipsis v-else />
      </template>
      <PaginationNext>下一页</PaginationNext>
    </PaginationContent>
  </Pagination>
</template>
