<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '~~/registry/default/input'
import { Mail, ShieldAlert, Eye, EyeOff } from 'lucide-vue-next'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const inputWithError = ref('invalid-api-key-90281-xyz')
</script>

<template>
  <div class="flex flex-col gap-6 p-4">
    <!-- Basic Inputs -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">登录凭据</h4>
      <div class="flex flex-col gap-4 max-w-sm">
        <!-- Email Input -->
        <div class="grid gap-1.5">
          <label for="email" class="text-[13px] font-semibold text-[#161c24]">邮箱地址</label>
          <div class="relative">
            <Mail class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#434655]/50" />
            <Input 
              id="email" 
              v-model="email" 
              type="email" 
              placeholder="admin@cyberdyne.io" 
              class="rounded-[4px] border-[#E2E4E9] pl-9 pr-3 text-[13px] h-9 outline-none focus:border-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
            />
          </div>
        </div>

        <!-- 密码输入 -->
        <div class="grid gap-1.5">
          <label for="password" class="text-[13px] font-semibold text-[#161c24]">令牌密钥 / 密码</label>
          <div class="relative">
            <Input 
              id="password" 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              placeholder="••••••••••••" 
              class="rounded-[4px] border-[#E2E4E9] px-3 text-[13px] h-9 outline-none focus:border-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
            />
            <button 
              type="button" 
              class="absolute right-3 top-1/2 -translate-y-1/2 text-[#434655] hover:text-[#161c24] focus:outline-none"
              @click="showPassword = !showPassword"
            >
              <Eye v-if="!showPassword" class="h-4 w-4" />
              <EyeOff v-else class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Inputs with Helper Text -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">带辅助说明</h4>
      <div class="grid gap-1.5 max-w-sm">
        <label for="endpoint" class="text-[13px] font-semibold text-[#161c24]">服务端地址</label>
        <Input 
          id="endpoint" 
          type="text" 
          value="https://api.cyberdyne.io/v1" 
          class="rounded-[4px] border-[#E2E4E9] px-3 text-[13px] h-9 outline-none focus:border-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
        />
        <p class="text-[11px] text-[#434655]">
          Webhook 载荷和 API 查询会直接路由到该环境。
        </p>
      </div>
    </div>

    <!-- Error Validation State -->
    <div>
      <h4 class="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#434655]">校验错误状态</h4>
      <div class="grid gap-1.5 max-w-sm">
        <label for="api-key" class="text-[13px] font-semibold text-[#F03030]">私有 API 密钥</label>
        <div class="relative">
          <Input 
            id="api-key" 
            v-model="inputWithError" 
            type="text" 
            class="rounded-[4px] border-[#F03030] bg-[#ffdad6]/20 px-3 text-[13px] h-9 outline-none focus:border-[#F03030] focus:ring-2 focus:ring-[#F03030]/10"
          />
          <ShieldAlert class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F03030]" />
        </div>
        <p class="text-[11px] text-[#F03030] font-medium flex items-center gap-1">
          提供的密钥已被撤销或已过期。
        </p>
      </div>
    </div>
  </div>
</template>
