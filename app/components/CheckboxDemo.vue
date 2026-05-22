<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '~~/registry/default/checkbox'

const isChecked = ref(true)
const marketing已接受 = ref(false)
const disabledChecked = ref(true)
</script>

<template>
  <div class="flex flex-col gap-6 p-4">
    <!-- 交互复选框 -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">基础复选框</h4>
      <div class="flex items-center gap-3">
        <Checkbox 
          id="terms" 
          v-model:checked="isChecked" 
          class="rounded-[4px] border-[#E2E4E9] data-[state=checked]:bg-[#2D5AF2] data-[state=checked]:border-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
        />
        <label 
          for="terms" 
          class="text-[13px] font-medium leading-none text-[#161c24] cursor-pointer select-none"
        >
          接受服务条款
        </label>
      </div>
      <p class="mt-1.5 pl-7 text-[11px] text-[#434655]">
        状态： <span class="font-semibold" :class="isChecked ? 'text-[#2D5AF2]' : 'text-[#434655]'">{{ isChecked ? '已接受' : 'Not 已接受' }}</span>
      </p>
    </div>

    <!-- More Complex Layout -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">带说明布局</h4>
      <div class="flex items-start gap-3 rounded-[8px] border border-[#E2E4E9] bg-[#F5F6F7]/50 p-4">
        <Checkbox 
          id="marketing" 
          v-model:checked="marketing已接受" 
          class="mt-0.5 rounded-[4px] border-[#E2E4E9] data-[state=checked]:bg-[#2D5AF2] data-[state=checked]:border-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
        />
        <div class="grid gap-1">
          <label 
            for="marketing" 
            class="text-[13px] font-semibold leading-none text-[#161c24] cursor-pointer select-none"
          >
            营销邮件
          </label>
          <p class="text-[11px] leading-relaxed text-[#434655]">
            接收周期性运行摘要、产品更新、安全提醒和系统分析报告。
          </p>
        </div>
      </div>
    </div>

    <!-- Disabled State -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">禁用状态</h4>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3 opacity-50">
          <Checkbox 
            id="disabled-checked" 
            :checked="true"
            disabled
            class="rounded-[4px] border-[#E2E4E9] data-[state=checked]:bg-[#595f68] data-[state=checked]:border-[#595f68]"
          />
          <label for="disabled-checked" class="text-[13px] font-medium leading-none text-[#161c24] cursor-not-allowed">
            系统管理员（必选）
          </label>
        </div>
        <div class="flex items-center gap-3 opacity-50">
          <Checkbox 
            id="disabled-unchecked" 
            :checked="false"
            disabled
            class="rounded-[4px] border-[#E2E4E9]"
          />
          <label for="disabled-unchecked" class="text-[13px] font-medium leading-none text-[#161c24] cursor-not-allowed">
            内测日志（仅邀请）
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
