export const demoCodes: Record<string, string> = {
  button: `<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Loader2, ArrowRight, Heart } from 'lucide-vue-next'

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
  <div class="flex flex-wrap gap-2.5">
    <!-- Variants -->
    <Button variant="default" class="rounded-[4px] bg-[#2D5AF2]">
      Primary Action
    </Button>
    <Button variant="secondary" class="rounded-[4px] bg-[#F5F6F7]">
      Secondary
    </Button>
    <Button variant="outline" class="rounded-[4px] border-[#E2E4E9]">
      Outline
    </Button>
    <Button variant="ghost" class="rounded-[4px] hover:bg-[#F5F6F7]">
      Ghost Action
    </Button>
    <Button variant="destructive" class="rounded-[4px] bg-[#F03030]">
      Destructive
    </Button>

    <!-- Interactive click with Loader -->
    <Button 
      variant="default" 
      class="rounded-[4px] bg-[#2D5AF2] gap-2"
      :disabled="isLoading"
      @click="handleClick"
    >
      <Loader2 v-if="isLoading" class="h-4 w-4 animate-spin" />
      <span>Clicked {{ count }} times</span>
      <ArrowRight v-if="!isLoading" class="h-4 w-4" />
    </Button>
  </div>
</template>`,

  badge: `<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Sparkles, Terminal, Shield } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <!-- Basic badges -->
    <Badge variant="default" class="rounded-[4px] bg-[#2D5AF2]">Primary</Badge>
    <Badge variant="secondary" class="rounded-[4px] bg-[#F5F6F7] border border-[#E2E4E9]">Secondary</Badge>
    <Badge variant="outline" class="rounded-[4px] border border-[#E2E4E9]">Outline</Badge>
    <Badge variant="destructive" class="rounded-[4px] bg-[#F03030]">Destructive</Badge>

    <!-- Telemetry dots -->
    <Badge variant="outline" class="rounded-[4px] bg-[#F5F6F7] border-[#E2E4E9]">
      <span class="flex items-center gap-1.5">
        <span class="h-1.5 w-1.5 rounded-full bg-[#2D5AF2]"></span>
        Active
      </span>
    </Badge>

    <!-- With Icons -->
    <Badge variant="default" class="rounded-[4px] bg-[#2D5AF2] gap-1.5">
      <Sparkles class="h-3 w-3" />
      Feature
    </Badge>
  </div>
</template>`,

  checkbox: `<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'

const isChecked = ref(true)
const marketingAccepted = ref(false)
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Basic Checkbox -->
    <div class="flex items-center gap-3">
      <Checkbox 
        id="terms" 
        v-model:checked="isChecked" 
        class="rounded-[4px] border-[#E2E4E9] data-[state=checked]:bg-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
      />
      <label for="terms" class="text-[13px] font-medium leading-none text-[#161c24] cursor-pointer">
        Accept terms and conditions
      </label>
    </div>

    <!-- Description Block Checkbox -->
    <div class="flex items-start gap-3 rounded-[8px] border border-[#E2E4E9] bg-[#F5F6F7]/50 p-4">
      <Checkbox 
        id="marketing" 
        v-model:checked="marketingAccepted" 
        class="mt-0.5 rounded-[4px] border-[#E2E4E9] data-[state=checked]:bg-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
      />
      <div class="grid gap-1">
        <label for="marketing" class="text-[13px] font-semibold text-[#161c24] cursor-pointer">
          Marketing emails
        </label>
        <p class="text-[11px] text-[#434655]">
          Receive telemetry digests, updates, security alerts, and system analytics.
        </p>
      </div>
    </div>
  </div>
</template>`,

  switch: `<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@/components/ui/switch'

const developerMode = ref(true)
const telemetryEnabled = ref(false)
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Basic Switch -->
    <div class="flex items-center gap-3">
      <Switch 
        id="developer-mode" 
        v-model:checked="developerMode" 
        class="data-[state=checked]:bg-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
      />
      <label for="developer-mode" class="text-[13px] font-medium text-[#161c24] cursor-pointer">
        Enable Developer Mode
      </label>
    </div>

    <!-- Configuration Profiles -->
    <div class="flex items-center justify-between rounded-[8px] border border-[#E2E4E9] bg-white p-4">
      <div class="flex flex-col gap-1 pr-6">
        <span class="text-[13px] font-semibold text-[#161c24]">System Telemetry Logging</span>
        <span class="text-[11px] text-[#434655]">Sends aggregated anonymous diagnostics to enhance runtime safety.</span>
      </div>
      <Switch 
        v-model:checked="telemetryEnabled" 
        class="data-[state=checked]:bg-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
      />
    </div>
  </div>
</template>`,

  input: `<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Mail, Eye } from 'lucide-vue-next'

const email = ref('')
const password = ref('')
</script>

<template>
  <div class="flex flex-col gap-4 max-w-sm">
    <!-- Input with Icon -->
    <div class="grid gap-1.5">
      <label for="email" class="text-[13px] font-semibold text-[#161c24]">Email address</label>
      <div class="relative">
        <Mail class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#434655]/50" />
        <Input 
          id="email" 
          v-model="email" 
          type="email" 
          placeholder="admin@cyberdyne.io" 
          class="rounded-[4px] border-[#E2E4E9] pl-9 pr-3 text-[13px] h-9 focus:border-[#2D5AF2] focus:ring-[#2D5AF2]/10"
        />
      </div>
    </div>

    <!-- Input with Error State -->
    <div class="grid gap-1.5">
      <label for="api-key" class="text-[13px] font-semibold text-[#F03030]">Private API Secret</label>
      <Input 
        id="api-key" 
        value="invalid-api-key" 
        class="rounded-[4px] border-[#F03030] bg-[#ffdad6]/20 px-3 text-[13px] h-9"
      />
      <p class="text-[11px] text-[#F03030] font-medium">The secret token provided has expired.</p>
    </div>
  </div>
</template>`,

  table: `<script setup lang="ts">
import { ref, computed } from 'vue'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const transactions = [
  { id: 'TXN-8492', user: 'Sarah Connor', amount: 1250.00, status: 'Paid' },
  { id: 'TXN-4920', user: 'Marcus Wright', amount: 490.00, status: 'Paid' },
  { id: 'TXN-3918', user: 'John Connor', amount: 490.00, status: 'Pending' },
  { id: 'TXN-1029', user: 'T-800 System', amount: 2400.00, status: 'Failed' }
]
</script>

<template>
  <div class="overflow-x-auto rounded-[8px] border border-[#E2E4E9]">
    <Table class="w-full text-left">
      <TableHeader class="bg-[#F5F6F7]">
        <TableRow>
          <TableHead class="py-3 pl-6">Invoice ID</TableHead>
          <TableHead class="py-3">Client</TableHead>
          <TableHead class="py-3">Status</TableHead>
          <TableHead class="py-3 pr-6 text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="divide-y divide-[#E2E4E9]">
        <TableRow v-for="txn in transactions" :key="txn.id">
          <TableCell class="py-3 pl-6 font-mono font-semibold">{{ txn.id }}</TableCell>
          <TableCell class="py-3 font-semibold">{{ txn.user }}</TableCell>
          <TableCell class="py-3">
            <Badge variant="outline" class="rounded-[4px] bg-[#F5F6F7]">
              {{ txn.status }}
            </Badge>
          </TableCell>
          <TableCell class="py-3 pr-6 text-right font-bold">\${{ txn.amount.toFixed(2) }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>`
}
