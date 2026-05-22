<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableFooter, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '~~/registry/default/table'
import { Badge } from '~~/registry/default/badge'
import { Button } from '~~/registry/default/button'
import Input from '~~/registry/default/input/Input.vue'
import { 
  Search, 
  ArrowUpDown, 
  Download, 
  Sparkles, 
  Check, 
  Clock, 
  XCircle,
  Eye,
  RefreshCw
} from 'lucide-vue-next'

// Mock premium transaction data
const initialTransactions = [
  {
    id: 'TXN-8492',
    user: {
      name: 'Sarah Connor',
      email: 'sarah.c@cyberdyne.io',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=60'
    },
    plan: 'Enterprise',
    date: '2026-05-22',
    amount: 1250.00,
    status: 'Paid',
    category: 'Subscription'
  },
  {
    id: 'TXN-4920',
    user: {
      name: 'Marcus Wright',
      email: 'm.wright@projectangel.org',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=60'
    },
    plan: 'Startup',
    date: '2026-05-21',
    amount: 490.00,
    status: 'Paid',
    category: 'API Addon'
  },
  {
    id: 'TXN-3918',
    user: {
      name: 'John Connor',
      email: 'j.connor@techcom.net',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&auto=format&fit=crop&q=60'
    },
    plan: 'Startup',
    date: '2026-05-20',
    amount: 490.00,
    status: 'Pending',
    category: 'Subscription'
  },
  {
    id: 'TXN-1029',
    user: {
      name: 'T-800 System',
      email: 'model101@cyberdyne.io',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=60'
    },
    plan: 'Enterprise',
    date: '2026-05-18',
    amount: 2400.00,
    status: 'Failed',
    category: 'Compute Core'
  },
  {
    id: 'TXN-9028',
    user: {
      name: 'Dr. Silberman',
      email: 'silberman@ashylum-clinical.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=60'
    },
    plan: 'Hobbyist',
    date: '2026-05-17',
    amount: 49.00,
    status: 'Paid',
    category: 'Subscription'
  },
  {
    id: 'TXN-7362',
    user: {
      name: 'Kate Brewster',
      email: 'kate.b@emergency-net.gov',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=60'
    },
    plan: 'Startup',
    date: '2026-05-15',
    amount: 490.00,
    status: 'Paid',
    category: 'Subscription'
  }
]

const searchQuery = ref('')
const statusFilter = ref('All')
const sortBy = ref<'amount' | 'date' | null>(null)
const sortDesc = ref(false)
const selectedTxns = ref<Set<string>>(new Set())

// Toggle single selection
function toggleSelect(id: string) {
  if (selectedTxns.value.has(id)) {
    selectedTxns.value.delete(id)
  } else {
    selectedTxns.value.add(id)
  }
  selectedTxns.value = new Set(selectedTxns.value)
}

// Toggle all selection
const isAllSelected = computed(() => {
  return filteredTransactions.value.length > 0 && filteredTransactions.value.every(txn => selectedTxns.value.has(txn.id))
})

function toggleSelectAll() {
  if (isAllSelected.value) {
    filteredTransactions.value.forEach(txn => selectedTxns.value.delete(txn.id))
  } else {
    filteredTransactions.value.forEach(txn => selectedTxns.value.add(txn.id))
  }
  selectedTxns.value = new Set(selectedTxns.value)
}

// Toggle sort
function toggleSort(type: 'amount' | 'date') {
  if (sortBy.value === type) {
    sortDesc.value = !sortDesc.value
  } else {
    sortBy.value = type
    sortDesc.value = false
  }
}

// Reset filters
function resetFilters() {
  searchQuery.value = ''
  statusFilter.value = 'All'
  sortBy.value = null
  selectedTxns.value.clear()
}

// Filter and sort transactions
const filteredTransactions = computed(() => {
  let result = [...initialTransactions]

  // Search filter
  if (searchQuery.value.trim() !== '') {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(txn => 
      txn.user.name.toLowerCase().includes(q) || 
      txn.user.email.toLowerCase().includes(q) ||
      txn.id.toLowerCase().includes(q) ||
      txn.plan.toLowerCase().includes(q)
    )
  }

  // Status filter
  if (statusFilter.value !== 'All') {
    result = result.filter(txn => txn.status === statusFilter.value)
  }

  // Sorting
  if (sortBy.value === 'amount') {
    result.sort((a, b) => sortDesc.value ? b.amount - a.amount : a.amount - b.amount)
  } else if (sortBy.value === 'date') {
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortDesc.value ? dateB - dateA : dateA - dateB
    })
  }

  return result
})

// Calculations for footer
const totalAmount = computed(() => {
  return filteredTransactions.value.reduce((acc, txn) => acc + txn.amount, 0)
})

const getStatusDot = (status: string) => {
  switch (status) {
    case 'Paid':
      return 'bg-[#2D5AF2]' // Brand Action Blue
    case 'Pending':
      return 'bg-amber-500' // Warning tone
    case 'Failed':
      return 'bg-[#F03030]' // Exact Error Red specified in DESIGN.md
    default:
      return 'bg-[#595f68]'
  }
}
</script>

<template>
  <div class="relative overflow-hidden rounded-[8px] border border-[#E2E4E9] bg-white transition-all">
    
    <!-- Controls Panel (crisp 1px borders, no shadows, no color gradients) -->
    <div class="flex flex-col gap-4 border-b border-[#E2E4E9] p-6 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <span class="flex h-5 w-5 items-center justify-center rounded-[4px] bg-[#2D5AF2] text-white">
            <Sparkles class="h-3 w-3" />
          </span>
          <h3 class="text-[16px] font-semibold tracking-tight text-[#161c24]">
            Interactive Transaction Registry
          </h3>
        </div>
        <p class="text-[12px] text-[#434655]">
          Systematic API telemetry logs and enterprise subscription payments.
        </p>
      </div>

      <!-- Actions & Filters -->
      <div class="flex flex-wrap items-center gap-2">
        <!-- Search bar with exact 4px radius and focus border glow -->
        <div class="relative w-full sm:w-56">
          <Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#434655]/50" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search records..."
            class="h-9 w-full rounded-[4px] border border-[#E2E4E9] bg-white pl-9 pr-3 text-[13px] outline-none transition-all placeholder:text-[#434655]/50 focus:border-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
          />
        </div>

        <!-- Status filter select with exact 4px radius -->
        <select
          v-model="statusFilter"
          class="h-9 rounded-[4px] border border-[#E2E4E9] bg-white px-3 text-[13px] text-[#161c24] outline-none transition-all focus:border-[#2D5AF2]"
        >
          <option value="All">All Statuses</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>

        <!-- Reset Button with solid secondary background and 4px radius -->
        <Button 
          variant="outline" 
          size="sm"
          class="h-9 gap-1.5 border-[#E2E4E9] bg-[#F5F6F7] hover:bg-[#E2E4E9] text-[#161c24] rounded-[4px] transition-colors"
          @click="resetFilters"
        >
          <RefreshCw class="h-3.5 w-3.5" />
          <span class="hidden md:inline">Reset</span>
        </Button>
      </div>
    </div>

    <!-- Table Container -->
    <div class="w-full overflow-x-auto">
      <Table class="w-full min-w-[700px] border-collapse text-left">
        <!-- Headers with surface-subtle #F5F6F7 background, border-light and text-on-surface -->
        <TableHeader class="bg-[#F5F6F7] border-b border-[#E2E4E9]">
          <TableRow>
            <TableHead class="w-[50px] py-3 pl-6">
              <input
                type="checkbox"
                class="h-4 w-4 rounded-[4px] border-[#E2E4E9] text-[#2D5AF2] focus:ring-[#2D5AF2] accent-[#2D5AF2]"
                :checked="isAllSelected"
                @change="toggleSelectAll"
              />
            </TableHead>
            <TableHead class="w-[120px] py-3 text-[12px] font-semibold uppercase tracking-wider text-[#161c24]">
              Invoice ID
            </TableHead>
            <TableHead class="py-3 text-[12px] font-semibold uppercase tracking-wider text-[#161c24]">
              Client
            </TableHead>
            <TableHead class="py-3 text-[12px] font-semibold uppercase tracking-wider text-[#161c24]">
              Plan
            </TableHead>
            <TableHead 
              class="py-3 text-[12px] font-semibold uppercase tracking-wider text-[#161c24] cursor-pointer select-none hover:text-[#2D5AF2] transition-colors"
              @click="toggleSort('date')"
            >
              <div class="flex items-center gap-1">
                Date
                <ArrowUpDown class="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead class="py-3 text-[12px] font-semibold uppercase tracking-wider text-[#161c24]">
              Status
            </TableHead>
            <TableHead 
              class="py-3 pr-6 text-right text-[12px] font-semibold uppercase tracking-wider text-[#161c24] cursor-pointer select-none hover:text-[#2D5AF2] transition-colors"
              @click="toggleSort('amount')"
            >
              <div class="flex items-center justify-end gap-1">
                Amount
                <ArrowUpDown class="h-3 w-3" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <!-- Body with precise 12px vertical padding (py-3) and thin border separators -->
        <TableBody class="divide-y divide-[#E2E4E9]">
          <TableRow 
            v-for="txn in filteredTransactions" 
            :key="txn.id"
            :class="[
              'group transition-colors hover:bg-[#F5F6F7]',
              selectedTxns.has(txn.id) ? 'bg-[#eef4ff] hover:bg-[#eef4ff]' : 'bg-white'
            ]"
          >
            <!-- Checkbox -->
            <TableCell class="py-3 pl-6">
              <input
                type="checkbox"
                class="h-4 w-4 rounded-[4px] border-[#E2E4E9] text-[#2D5AF2] focus:ring-[#2D5AF2] accent-[#2D5AF2]"
                :checked="selectedTxns.has(txn.id)"
                @change="toggleSelect(txn.id)"
              />
            </TableCell>

            <!-- Invoice ID -->
            <TableCell class="py-3 font-mono text-[12px] font-semibold text-[#161c24]">
              {{ txn.id }}
            </TableCell>

            <!-- Client Info -->
            <TableCell class="py-3">
              <div class="flex items-center gap-3">
                <img 
                  :src="txn.user.avatar" 
                  :alt="txn.user.name"
                  class="h-8 w-8 rounded-full object-cover ring-1 ring-[#E2E4E9] transition-transform duration-200 group-hover:scale-105"
                />
                <div class="flex flex-col">
                  <span class="text-[13px] font-semibold text-[#161c24] group-hover:text-[#2D5AF2] transition-colors">
                    {{ txn.user.name }}
                  </span>
                  <span class="text-[11px] text-[#434655]">
                    {{ txn.user.email }}
                  </span>
                </div>
              </div>
            </TableCell>

            <!-- Plan / Category -->
            <TableCell class="py-3">
              <div class="flex flex-col">
                <span class="text-[13px] font-medium text-[#161c24]">
                  {{ txn.plan }}
                </span>
                <span class="text-[11px] text-[#434655]">
                  {{ txn.category }}
                </span>
              </div>
            </TableCell>

            <!-- Date -->
            <TableCell class="py-3 text-[12px] text-[#434655]">
              {{ txn.date }}
            </TableCell>

            <!-- Status tag: light tertiary background, 4px radius, #1B2129 text and colored micro dot -->
            <TableCell class="py-3">
              <Badge 
                variant="outline"
                class="h-6 px-2.5 rounded-[4px] border border-[#E2E4E9] bg-[#F5F6F7] text-[11px] font-medium text-[#161c24] shadow-none"
              >
                <span class="flex items-center gap-1.5">
                  <span :class="['h-1.5 w-1.5 rounded-full', getStatusDot(txn.status)]"></span>
                  {{ txn.status }}
                </span>
              </Badge>
            </TableCell>

            <!-- Amount -->
            <TableCell class="py-3 pr-6 text-right">
              <div class="flex flex-col justify-end">
                <span class="text-[13px] font-bold text-[#161c24]">
                  ${{ txn.amount.toFixed(2) }}
                </span>
                <span class="text-[9px] font-semibold text-[#434655] tracking-wider uppercase">
                  USD
                </span>
              </div>
            </TableCell>
          </TableRow>

          <!-- Empty State -->
          <TableRow v-if="filteredTransactions.length === 0">
            <TableCell colspan="7" class="py-12 text-center">
              <div class="flex flex-col items-center justify-center gap-3">
                <span class="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#F5F6F7] text-[#434655]">
                  <XCircle class="h-6 w-6" />
                </span>
                <h4 class="text-[14px] font-semibold text-[#161c24]">No transactions found</h4>
                <p class="max-w-xs text-xs text-[#434655]">
                  Try adjusting your search query or filters to find what you are looking for.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  class="mt-2 h-8 border-[#E2E4E9] bg-[#F5F6F7] hover:bg-[#E2E4E9] text-[12px] text-[#161c24] rounded-[4px]"
                  @click="resetFilters"
                >
                  Clear all filters
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>

        <!-- Dynamic Table Footer using surface-subtle #F5F6F7, borders #E2E4E9 and exact text colors -->
        <TableFooter class="bg-[#F5F6F7]/50 border-t border-[#E2E4E9]">
          <TableRow>
            <TableCell colspan="5" class="py-4 pl-6 text-[12px] text-[#434655]">
              <span v-if="selectedTxns.size > 0" class="font-semibold text-[#2D5AF2]">
                Selected {{ selectedTxns.size }} record(s)
              </span>
              <span v-else>
                Showing {{ filteredTransactions.length }} of {{ initialTransactions.length }} transactions
              </span>
            </TableCell>
            <TableCell class="py-4 text-[12px] font-semibold text-[#161c24] uppercase tracking-wider">
              Total Sub-amount
            </TableCell>
            <TableCell class="py-4 pr-6 text-right text-[14px] font-bold text-[#2D5AF2]">
              ${{ totalAmount.toFixed(2) }}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>

    <!-- Quick Export Bar using ghost button and subtle borders -->
    <div class="flex items-center justify-between border-t border-[#E2E4E9] bg-[#F5F6F7]/30 px-6 py-3.5">
      <span class="text-[11px] text-[#434655]">
        Data updated 2 minutes ago. Powered by shadcn-vue & Systematic Clarity.
      </span>
      <Button 
        variant="ghost" 
        size="sm" 
        class="h-8 gap-1.5 text-[12px] text-[#434655] hover:text-[#161c24] hover:bg-[#F5F6F7] rounded-[4px] transition-all"
        :disabled="filteredTransactions.length === 0"
      >
        <Download class="h-3.5 w-3.5" />
        <span>Export CSV</span>
      </Button>
    </div>
  </div>
</template>

<style scoped>
/* Scoped micro-animations */
input[type="checkbox"] {
  cursor: pointer;
  transition: all 0.2s ease;
}
input[type="checkbox"]:hover {
  transform: scale(1.05);
}
select {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23434655' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.25em 1.25em;
  padding-right: 2rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}
</style>
