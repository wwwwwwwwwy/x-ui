<script setup lang="ts">
import { Badge } from '~~/registry/default/badge'
import { Sparkles, Terminal, Shield, Check, Info, AlertTriangle } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col gap-6 p-4">
    <!-- 标准类型 -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">标准类型</h4>
      <div class="flex flex-wrap gap-2">
        <Badge variant="default" class="rounded-[4px] bg-[#2D5AF2] text-white font-medium px-2.5 py-0.5">
          主要
        </Badge>
        <Badge variant="secondary" class="rounded-[4px] bg-[#F5F6F7] text-[#161c24] border border-[#E2E4E9] font-medium px-2.5 py-0.5">
          次要按钮
        </Badge>
        <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-white text-[#161c24] font-medium px-2.5 py-0.5">
          描边按钮
        </Badge>
        <Badge variant="destructive" class="rounded-[4px] bg-[#F03030] text-white font-medium px-2.5 py-0.5">
          危险按钮
        </Badge>
      </div>
    </div>

    <!-- 状态标签 -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">状态标签</h4>
      <div class="flex flex-wrap gap-2">
        <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-[#F5F6F7] text-[11px] font-medium text-[#161c24] px-2.5 py-0.5">
          <span class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-[#2D5AF2]"></span>
            运行中
          </span>
        </Badge>
        <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-[#F5F6F7] text-[11px] font-medium text-[#161c24] px-2.5 py-0.5">
          <span class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
            预警
          </span>
        </Badge>
        <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-[#F5F6F7] text-[11px] font-medium text-[#161c24] px-2.5 py-0.5">
          <span class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-[#F03030]"></span>
            系统异常
          </span>
        </Badge>
      </div>
    </div>

    <!-- 带图标标签 -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">带图标标签</h4>
      <div class="flex flex-wrap gap-2">
        <Badge variant="default" class="rounded-[4px] bg-[#2D5AF2] text-white px-2.5 py-0.5 gap-1.5">
          <Sparkles class="h-3 w-3" />
          新功能
        </Badge>
        <Badge variant="secondary" class="rounded-[4px] bg-[#F5F6F7] text-[#161c24] border border-[#E2E4E9] px-2.5 py-0.5 gap-1.5">
          <Terminal class="h-3 w-3" />
          控制台日志
        </Badge>
        <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-white text-[#161c24] px-2.5 py-0.5 gap-1.5">
          <Shield class="h-3 w-3 text-[#2D5AF2]" />
          安全已验证
        </Badge>
      </div>
    </div>
  </div>
</template>
