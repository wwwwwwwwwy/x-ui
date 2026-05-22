<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~~/registry/default/button'
import { Loader2, ArrowRight, Heart, Share2 } from 'lucide-vue-next'

const count = ref(0)
const isLoading = ref(false)

function handleClick() {
  count.value++
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
</script>

<template>
  <div class="flex flex-col gap-6 p-4">
    <!-- 按钮类型 Section -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">按钮类型</h4>
      <div class="flex flex-wrap gap-2.5">
        <Button variant="default" class="rounded-[4px] bg-[#2D5AF2] text-white hover:bg-[#003fd4]">
          主要按钮（默认）
        </Button>
        <Button variant="secondary" class="rounded-[4px] bg-[#F5F6F7] text-[#161c24] hover:bg-[#E2E4E9]">
          次要按钮
        </Button>
        <Button variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-white text-[#161c24] hover:bg-[#F5F6F7]">
          描边按钮
        </Button>
        <Button variant="ghost" class="rounded-[4px] text-[#161c24] hover:bg-[#F5F6F7]">
          幽灵按钮
        </Button>
        <Button variant="destructive" class="rounded-[4px] bg-[#F03030] text-white hover:bg-[#93000a]">
          危险按钮
        </Button>
      </div>
    </div>

    <!-- 按钮尺寸 Section -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">按钮尺寸</h4>
      <div class="flex flex-wrap items-center gap-2.5">
        <Button variant="default" size="sm" class="rounded-[4px] bg-[#2D5AF2] text-white text-[12px] h-8 px-3">
          小尺寸
        </Button>
        <Button variant="default" class="rounded-[4px] bg-[#2D5AF2] text-white text-xs h-9 px-4">
          中尺寸 / 默认
        </Button>
        <Button variant="default" size="lg" class="rounded-[4px] bg-[#2D5AF2] text-white text-[14px] h-10 px-6">
          大尺寸
        </Button>
      </div>
    </div>

    <!-- 交互与图标 Section -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">交互与图标</h4>
      <div class="flex flex-wrap gap-2.5">
        <!-- Click to Action & Loader -->
        <Button 
          variant="default" 
          class="rounded-[4px] bg-[#2D5AF2] text-white hover:bg-[#003fd4] gap-2"
          :disabled="isLoading"
          @click="handleClick"
        >
          <Loader2 v-if="isLoading" class="h-4 w-4 animate-spin" />
          <span v-if="isLoading">处理中...</span>
          <span v-else>已点击 {{ count }} 次</span>
          <ArrowRight v-if="!isLoading" class="h-4 w-4" />
        </Button>

        <!-- Icon Buttons -->
        <Button variant="outline" size="sm" class="rounded-[4px] border border-[#E2E4E9] bg-white h-9 w-9 p-0 hover:bg-[#F5F6F7]">
          <Heart class="h-4 w-4 text-[#F03030]" />
        </Button>
        <Button variant="ghost" size="sm" class="rounded-[4px] h-9 w-9 p-0 hover:bg-[#F5F6F7]">
          <Share2 class="h-4 w-4 text-[#161c24]" />
        </Button>
      </div>
    </div>
  </div>
</template>
