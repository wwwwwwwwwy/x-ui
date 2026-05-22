<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '~~/registry/default/switch'

const developerMode = ref(true)
const telemetryEnabled = ref(false)
const notificationsEnabled = ref(true)
</script>

<template>
  <div class="flex flex-col gap-6 p-4">
    <!-- Basic Toggles -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">基础开关</h4>
      <div class="flex items-center gap-3">
        <Switch 
          id="developer-mode" 
          v-model:checked="developerMode" 
          class="data-[state=checked]:bg-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
        />
        <label 
          for="developer-mode" 
          class="text-[13px] font-medium leading-none text-[#161c24] cursor-pointer select-none"
        >
          启用开发者模式
        </label>
      </div>
      <p class="mt-1.5 pl-14 text-[11px] text-[#434655]">
        状态： <span class="font-semibold" :class="developerMode ? 'text-[#2D5AF2]' : 'text-[#434655]'">{{ developerMode ? '运行中' : '未启用' }}</span>
      </p>
    </div>

    <!-- Toggle Cards List -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">配置项</h4>
      <div class="flex flex-col gap-3.5">
        
        <!-- Row 1 -->
        <div class="flex items-center justify-between rounded-[8px] border border-[#E2E4E9] bg-white p-4">
          <div class="flex flex-col gap-1 pr-6">
            <span class="text-[13px] font-semibold text-[#161c24]">系统遥测日志</span>
            <span class="text-[11px] text-[#434655]">发送匿名聚合诊断信息，用于提升运行时安全性。</span>
          </div>
          <Switch 
            v-model:checked="telemetryEnabled" 
            class="data-[state=checked]:bg-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
          />
        </div>

        <!-- Row 2 -->
        <div class="flex items-center justify-between rounded-[8px] border border-[#E2E4E9] bg-white p-4">
          <div class="flex flex-col gap-1 pr-6">
            <span class="text-[13px] font-semibold text-[#161c24]">实时推送通知</span>
            <span class="text-[11px] text-[#434655]">当 API 密钥、查询或 Webhook 失败时立即提醒。</span>
          </div>
          <Switch 
            v-model:checked="notificationsEnabled" 
            class="data-[state=checked]:bg-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
          />
        </div>

      </div>
    </div>

    <!-- Disabled State -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">禁用状态</h4>
      <div class="flex items-center gap-3 opacity-50">
        <Switch 
          id="disabled-switch" 
          :checked="false" 
          disabled
          class="data-[state=checked]:bg-[#595f68]"
        />
        <label 
          for="disabled-switch" 
          class="text-[13px] font-medium leading-none text-[#161c24] cursor-not-allowed"
        >
          云端同步（企业版）
        </label>
      </div>
    </div>
  </div>
</template>
