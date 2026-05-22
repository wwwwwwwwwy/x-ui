<script setup lang="ts">
import { Badge } from '~~/registry/default/badge'
import { Sparkles, Terminal, Shield, Check, Info, AlertTriangle } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col gap-6 p-4">
    <!-- Standard Variants -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">Standard Variants</h4>
      <div class="flex flex-wrap gap-2">
        <Badge variant="default" class="rounded-[4px] bg-[#2D5AF2] text-white font-medium px-2.5 py-0.5">
          Primary
        </Badge>
        <Badge variant="secondary" class="rounded-[4px] bg-[#F5F6F7] text-[#161c24] border border-[#E2E4E9] font-medium px-2.5 py-0.5">
          Secondary
        </Badge>
        <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-white text-[#161c24] font-medium px-2.5 py-0.5">
          Outline
        </Badge>
        <Badge variant="destructive" class="rounded-[4px] bg-[#F03030] text-white font-medium px-2.5 py-0.5">
          Destructive
        </Badge>
      </div>
    </div>

    <!-- Status Tags with Micro Dots -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">Telemetry Statuses</h4>
      <div class="flex flex-wrap gap-2">
        <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-[#F5F6F7] text-[11px] font-medium text-[#161c24] px-2.5 py-0.5">
          <span class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-[#2D5AF2]"></span>
            Active
          </span>
        </Badge>
        <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-[#F5F6F7] text-[11px] font-medium text-[#161c24] px-2.5 py-0.5">
          <span class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
            Warning
          </span>
        </Badge>
        <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-[#F5F6F7] text-[11px] font-medium text-[#161c24] px-2.5 py-0.5">
          <span class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-[#F03030]"></span>
            System Error
          </span>
        </Badge>
      </div>
    </div>

    <!-- Badges with Icons -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">Badges with Icons</h4>
      <div class="flex flex-wrap gap-2">
        <Badge variant="default" class="rounded-[4px] bg-[#2D5AF2] text-white px-2.5 py-0.5 gap-1.5">
          <Sparkles class="h-3 w-3" />
          Feature
        </Badge>
        <Badge variant="secondary" class="rounded-[4px] bg-[#F5F6F7] text-[#161c24] border border-[#E2E4E9] px-2.5 py-0.5 gap-1.5">
          <Terminal class="h-3 w-3" />
          Console Log
        </Badge>
        <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9] bg-white text-[#161c24] px-2.5 py-0.5 gap-1.5">
          <Shield class="h-3 w-3 text-[#2D5AF2]" />
          Verified Security
        </Badge>
      </div>
    </div>
  </div>
</template>
