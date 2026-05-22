export const demoCodes: Record<string, string> = {
  "accordion": `<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
</script>

<template>
  <Accordion>
    中文示例内容
  </Accordion>
</template>`,
  "alert": `<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
</script>

<template>
  <Alert>
    中文示例内容
  </Alert>
</template>`,
  "alert-dialog": `<script setup lang="ts">
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
</script>

<template>
  <AlertDialog>
    中文示例内容
  </AlertDialog>
</template>`,
  "aspect-ratio": `<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>

<template>
  <AspectRatio>
    中文示例内容
  </AspectRatio>
</template>`,
  "avatar": `<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <Avatar>
    中文示例内容
  </Avatar>
</template>`,
  "badge": `<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
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
`,
  "breadcrumb": `<script setup lang="ts">
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
</script>

<template>
  <Breadcrumb>
    中文示例内容
  </Breadcrumb>
</template>`,
  "button": `<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
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
`,
  "button-group": `<script setup lang="ts">
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
</script>

<template>
  <ButtonGroup>
    中文示例内容
  </ButtonGroup>
</template>`,
  "calendar": `<script setup lang="ts">
import { Calendar, CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNextButton, CalendarPrevButton } from '@/components/ui/calendar'
</script>

<template>
  <Calendar>
    中文示例内容
  </Calendar>
</template>`,
  "card": `<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    中文示例内容
  </Card>
</template>`,
  "carousel": `<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
</script>

<template>
  <Carousel>
    中文示例内容
  </Carousel>
</template>`,
  "chart": `<script setup lang="ts">
import { ChartCrosshair, ChartLegend, ChartSingleTooltip, ChartTooltip } from '@/components/ui/chart'
</script>

<template>
  <ChartCrosshair>
    中文示例内容
  </ChartCrosshair>
</template>`,
  "checkbox": `<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'

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
`,
  "collapsible": `<script setup lang="ts">
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
</script>

<template>
  <Collapsible>
    中文示例内容
  </Collapsible>
</template>`,
  "combobox": `<script setup lang="ts">
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList, ComboboxSeparator } from '@/components/ui/combobox'
</script>

<template>
  <Combobox>
    中文示例内容
  </Combobox>
</template>`,
  "command": `<script setup lang="ts">
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
</script>

<template>
  <Command>
    中文示例内容
  </Command>
</template>`,
  "context-menu": `<script setup lang="ts">
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    中文示例内容
  </ContextMenu>
</template>`,
  "dialog": `<script setup lang="ts">
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogScrollContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    中文示例内容
  </Dialog>
</template>`,
  "drawer": `<script setup lang="ts">
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerTitle } from '@/components/ui/drawer'
</script>

<template>
  <Drawer>
    中文示例内容
  </Drawer>
</template>`,
  "dropdown-menu": `<script setup lang="ts">
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
</script>

<template>
  <DropdownMenu>
    中文示例内容
  </DropdownMenu>
</template>`,
  "empty": `<script setup lang="ts">
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
</script>

<template>
  <Empty>
    中文示例内容
  </Empty>
</template>`,
  "field": `<script setup lang="ts">
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from '@/components/ui/field'
</script>

<template>
  <Field>
    中文示例内容
  </Field>
</template>`,
  "form": `<script setup lang="ts">
import { FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
</script>

<template>
  <FormField name="email">
    <FormItem class="max-w-sm">
      <FormLabel>邮箱地址</FormLabel>
      <FormDescription>用于接收组件库发布通知。</FormDescription>
      <div class="h-9 rounded-[4px] border border-[#E2E4E9] bg-white px-3 py-2 text-sm text-[#434655]">team@example.com</div>
    </FormItem>
  </FormField>
</template>`,
  "hover-card": `<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
</script>

<template>
  <HoverCard>
    中文示例内容
  </HoverCard>
</template>`,
  "input": `<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
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
`,
  "input-group": `<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
</script>

<template>
  <InputGroup>
    中文示例内容
  </InputGroup>
</template>`,
  "item": `<script setup lang="ts">
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle } from '@/components/ui/item'
</script>

<template>
  <Item>
    中文示例内容
  </Item>
</template>`,
  "kbd": `<script setup lang="ts">
import { Kbd, KbdGroup } from '@/components/ui/kbd'
</script>

<template>
  <Kbd>
    中文示例内容
  </Kbd>
</template>`,
  "label": `<script setup lang="ts">
import { Label } from '@/components/ui/label'
</script>

<template>
  <Label>
    中文示例内容
  </Label>
</template>`,
  "menubar": `<script setup lang="ts">
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    中文示例内容
  </Menubar>
</template>`,
  "navigation-menu": `<script setup lang="ts">
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from '@/components/ui/navigation-menu'
</script>

<template>
  <NavigationMenu>
    中文示例内容
  </NavigationMenu>
</template>`,
  "number-field": `<script setup lang="ts">
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field'
</script>

<template>
  <NumberField>
    中文示例内容
  </NumberField>
</template>`,
  "pagination": `<script setup lang="ts">
import { Pagination, PaginationContent, PaginationEllipsis, PaginationFirst, PaginationItem, PaginationLast, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
</script>

<template>
  <Pagination>
    中文示例内容
  </Pagination>
</template>`,
  "pin-input": `<script setup lang="ts">
import { PinInput, PinInputGroup, PinInputSeparator, PinInputSlot } from '@/components/ui/pin-input'
</script>

<template>
  <PinInput>
    中文示例内容
  </PinInput>
</template>`,
  "popover": `<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
</script>

<template>
  <Popover>
    中文示例内容
  </Popover>
</template>`,
  "progress": `<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
</script>

<template>
  <Progress>
    中文示例内容
  </Progress>
</template>`,
  "radio-group": `<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
</script>

<template>
  <RadioGroup>
    中文示例内容
  </RadioGroup>
</template>`,
  "range-calendar": `<script setup lang="ts">
import { RangeCalendar, RangeCalendarCell, RangeCalendarCellTrigger, RangeCalendarGrid, RangeCalendarGridBody, RangeCalendarGridHead, RangeCalendarGridRow, RangeCalendarHeadCell, RangeCalendarHeader, RangeCalendarHeading, RangeCalendarNextButton, RangeCalendarPrevButton } from '@/components/ui/range-calendar'
</script>

<template>
  <RangeCalendar>
    中文示例内容
  </RangeCalendar>
</template>`,
  "resizable": `<script setup lang="ts">
import { ResizableHandle, ResizablePanelGroup } from '@/components/ui/resizable'
</script>

<template>
  <ResizableHandle>
    中文示例内容
  </ResizableHandle>
</template>`,
  "scroll-area": `<script setup lang="ts">
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
</script>

<template>
  <ScrollArea>
    中文示例内容
  </ScrollArea>
</template>`,
  "select": `<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
</script>

<template>
  <Select>
    中文示例内容
  </Select>
</template>`,
  "separator": `<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <Separator>
    中文示例内容
  </Separator>
</template>`,
  "sheet": `<script setup lang="ts">
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
</script>

<template>
  <Sheet>
    中文示例内容
  </Sheet>
</template>`,
  "sidebar": `<script setup lang="ts">
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger } from '@/components/ui/sidebar'
</script>

<template>
  <Sidebar>
    中文示例内容
  </Sidebar>
</template>`,
  "skeleton": `<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <Skeleton>
    中文示例内容
  </Skeleton>
</template>`,
  "slider": `<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
</script>

<template>
  <Slider>
    中文示例内容
  </Slider>
</template>`,
  "sonner": `<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <Toaster>
    中文示例内容
  </Toaster>
</template>`,
  "spinner": `<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <Spinner>
    中文示例内容
  </Spinner>
</template>`,
  "stepper": `<script setup lang="ts">
import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'
</script>

<template>
  <Stepper :default-value="2" class="w-full">
    <StepperItem :step="1">
      <StepperTrigger><StepperIndicator>1</StepperIndicator><StepperTitle>安装</StepperTitle><StepperDescription>添加组件</StepperDescription></StepperTrigger>
      <StepperSeparator />
    </StepperItem>
    <StepperItem :step="2">
      <StepperTrigger><StepperIndicator>2</StepperIndicator><StepperTitle>使用</StepperTitle><StepperDescription>组合页面</StepperDescription></StepperTrigger>
      <StepperSeparator />
    </StepperItem>
    <StepperItem :step="3">
      <StepperTrigger><StepperIndicator>3</StepperIndicator><StepperTitle>验证</StepperTitle><StepperDescription>运行检查</StepperDescription></StepperTrigger>
    </StepperItem>
  </Stepper>
</template>`,
  "switch": `<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@/components/ui/switch'

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
`,
  "table": `<script setup lang="ts">
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
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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

// 模拟交易数据
const initialTransactions = [
  {
    id: 'TXN-8492',
    user: {
      name: '林清和',
      email: 'sarah.c@cyberdyne.io',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=60'
    },
    plan: '企业版',
    date: '2026-05-22',
    amount: 1250.00,
    status: '已支付',
    category: '订阅'
  },
  {
    id: 'TXN-4920',
    user: {
      name: '周明远',
      email: 'm.wright@projectangel.org',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=60'
    },
    plan: '创业版',
    date: '2026-05-21',
    amount: 490.00,
    status: '已支付',
    category: 'API 增购'
  },
  {
    id: 'TXN-3918',
    user: {
      name: '陈予安',
      email: 'j.connor@techcom.net',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&auto=format&fit=crop&q=60'
    },
    plan: '创业版',
    date: '2026-05-20',
    amount: 490.00,
    status: '待处理',
    category: '订阅'
  },
  {
    id: 'TXN-1029',
    user: {
      name: '系统账户',
      email: 'model101@cyberdyne.io',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=60'
    },
    plan: '企业版',
    date: '2026-05-18',
    amount: 2400.00,
    status: '失败',
    category: '计算核心'
  },
  {
    id: 'TXN-9028',
    user: {
      name: '许医生',
      email: 'silberman@ashylum-clinical.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=60'
    },
    plan: '个人版',
    date: '2026-05-17',
    amount: 49.00,
    status: '已支付',
    category: '订阅'
  },
  {
    id: 'TXN-7362',
    user: {
      name: '顾南星',
      email: 'kate.b@emergency-net.gov',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=60'
    },
    plan: '创业版',
    date: '2026-05-15',
    amount: 490.00,
    status: '已支付',
    category: '订阅'
  }
]

const searchQuery = ref('')
const statusFilter = ref('All')
const sortBy = ref<'amount' | 'date' | null>(null)
const sortDesc = ref(false)
const selectedTxns = ref<Set<string>>(new Set())

// 切换单条选择
function toggleSelect(id: string) {
  if (selectedTxns.value.has(id)) {
    selectedTxns.value.delete(id)
  } else {
    selectedTxns.value.add(id)
  }
  selectedTxns.value = new Set(selectedTxns.value)
}

// 切换全部选择
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

// 切换排序
function toggleSort(type: 'amount' | 'date') {
  if (sortBy.value === type) {
    sortDesc.value = !sortDesc.value
  } else {
    sortBy.value = type
    sortDesc.value = false
  }
}

// 重置 filters
function resetFilters() {
  searchQuery.value = ''
  statusFilter.value = 'All'
  sortBy.value = null
  selectedTxns.value.clear()
}

// 筛选并排序交易记录
const filteredTransactions = computed(() => {
  let result = [...initialTransactions]

  // 搜索筛选
  if (searchQuery.value.trim() !== '') {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(txn => 
      txn.user.name.toLowerCase().includes(q) || 
      txn.user.email.toLowerCase().includes(q) ||
      txn.id.toLowerCase().includes(q) ||
      txn.plan.toLowerCase().includes(q)
    )
  }

  // 状态筛选
  if (statusFilter.value !== 'All') {
    result = result.filter(txn => txn.status === statusFilter.value)
  }

  // 排序
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

// 表尾统计
const total金额 = computed(() => {
  return filteredTransactions.value.reduce((acc, txn) => acc + txn.amount, 0)
})

const getStatusDot = (status: string) => {
  switch (status) {
    case '已支付':
      return 'bg-[#2D5AF2]' // Brand Action Blue
    case '待处理':
      return 'bg-amber-500' // 预警 tone
    case '失败':
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
            交易记录列表
          </h3>
        </div>
        <p class="text-[12px] text-[#434655]">
          API 遥测日志与企业订阅付款记录。
        </p>
      </div>

      <!-- 操作与筛选 -->
      <div class="flex flex-wrap items-center gap-2">
        <!-- 搜索框 -->
        <div class="relative w-full sm:w-56">
          <Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#434655]/50" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索记录..."
            class="h-9 w-full rounded-[4px] border border-[#E2E4E9] bg-white pl-9 pr-3 text-[13px] outline-none transition-all placeholder:text-[#434655]/50 focus:border-[#2D5AF2] focus:ring-2 focus:ring-[#2D5AF2]/10"
          />
        </div>

        <!-- 状态筛选 -->
        <select
          v-model="statusFilter"
          class="h-9 rounded-[4px] border border-[#E2E4E9] bg-white px-3 text-[13px] text-[#161c24] outline-none transition-all focus:border-[#2D5AF2]"
        >
          <option value="All">全部状态</option>
          <option value="已支付">已支付</option>
          <option value="待处理">待处理</option>
          <option value="失败">失败</option>
        </select>

        <!-- 重置 Button with solid secondary background and 4px radius -->
        <Button 
          variant="outline" 
          size="sm"
          class="h-9 gap-1.5 border-[#E2E4E9] bg-[#F5F6F7] hover:bg-[#E2E4E9] text-[#161c24] rounded-[4px] transition-colors"
          @click="resetFilters"
        >
          <RefreshCw class="h-3.5 w-3.5" />
          <span class="hidden md:inline">重置</span>
        </Button>
      </div>
    </div>

    <!-- 表格容器 -->
    <div class="w-full overflow-x-auto">
      <Table class="w-full min-w-[700px] border-collapse text-left">
        <!-- 表头 -->
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
              账单编号
            </TableHead>
            <TableHead class="py-3 text-[12px] font-semibold uppercase tracking-wider text-[#161c24]">
              客户
            </TableHead>
            <TableHead class="py-3 text-[12px] font-semibold uppercase tracking-wider text-[#161c24]">
              方案
            </TableHead>
            <TableHead 
              class="py-3 text-[12px] font-semibold uppercase tracking-wider text-[#161c24] cursor-pointer select-none hover:text-[#2D5AF2] transition-colors"
              @click="toggleSort('date')"
            >
              <div class="flex items-center gap-1">
                日期
                <ArrowUpDown class="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead class="py-3 text-[12px] font-semibold uppercase tracking-wider text-[#161c24]">
              状态
            </TableHead>
            <TableHead 
              class="py-3 pr-6 text-right text-[12px] font-semibold uppercase tracking-wider text-[#161c24] cursor-pointer select-none hover:text-[#2D5AF2] transition-colors"
              @click="toggleSort('amount')"
            >
              <div class="flex items-center justify-end gap-1">
                金额
                <ArrowUpDown class="h-3 w-3" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <!-- 表格内容 -->
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

            <!-- 账单编号 -->
            <TableCell class="py-3 font-mono text-[12px] font-semibold text-[#161c24]">
              {{ txn.id }}
            </TableCell>

            <!-- 客户信息 -->
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

            <!-- 方案 / 分类 -->
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

            <!-- 日期 -->
            <TableCell class="py-3 text-[12px] text-[#434655]">
              {{ txn.date }}
            </TableCell>

            <!-- 状态标签 -->
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

            <!-- 金额 -->
            <TableCell class="py-3 pr-6 text-right">
              <div class="flex flex-col justify-end">
                <span class="text-[13px] font-bold text-[#161c24]">
                  \${{ txn.amount.toFixed(2) }}
                </span>
                <span class="text-[9px] font-semibold text-[#434655] tracking-wider uppercase">
                  USD
                </span>
              </div>
            </TableCell>
          </TableRow>

          <!-- 空状态 -->
          <TableRow v-if="filteredTransactions.length === 0">
            <TableCell colspan="7" class="py-12 text-center">
              <div class="flex flex-col items-center justify-center gap-3">
                <span class="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#F5F6F7] text-[#434655]">
                  <XCircle class="h-6 w-6" />
                </span>
                <h4 class="text-[14px] font-semibold text-[#161c24]">未找到交易记录</h4>
                <p class="max-w-xs text-xs text-[#434655]">
                  请调整搜索关键词或筛选条件后重试。
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  class="mt-2 h-8 border-[#E2E4E9] bg-[#F5F6F7] hover:bg-[#E2E4E9] text-[12px] text-[#161c24] rounded-[4px]"
                  @click="resetFilters"
                >
                  清空筛选
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>

        <!-- 动态表尾 -->
        <TableFooter class="bg-[#F5F6F7]/50 border-t border-[#E2E4E9]">
          <TableRow>
            <TableCell colspan="5" class="py-4 pl-6 text-[12px] text-[#434655]">
              <span v-if="selectedTxns.size > 0" class="font-semibold text-[#2D5AF2]">
                已选择 {{ selectedTxns.size }} 条记录
              </span>
              <span v-else>
                正在显示 {{ filteredTransactions.length }} / {{ initialTransactions.length }} 条交易
              </span>
            </TableCell>
            <TableCell class="py-4 text-[12px] font-semibold text-[#161c24] uppercase tracking-wider">
              小计金额
            </TableCell>
            <TableCell class="py-4 pr-6 text-right text-[14px] font-bold text-[#2D5AF2]">
              \${{ total金额.toFixed(2) }}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>

    <!-- 快速导出栏 -->
    <div class="flex items-center justify-between border-t border-[#E2E4E9] bg-[#F5F6F7]/30 px-6 py-3.5">
      <span class="text-[11px] text-[#434655]">
        数据更新于 2 分钟前。由 shadcn-vue 与 Systematic Clarity 驱动。
      </span>
      <Button 
        variant="ghost" 
        size="sm" 
        class="h-8 gap-1.5 text-[12px] text-[#434655] hover:text-[#161c24] hover:bg-[#F5F6F7] rounded-[4px] transition-all"
        :disabled="filteredTransactions.length === 0"
      >
        <Download class="h-3.5 w-3.5" />
        <span>导出 CSV</span>
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
`,
  "tabs": `<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <Tabs>
    中文示例内容
  </Tabs>
</template>`,
  "tags-input": `<script setup lang="ts">
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'
</script>

<template>
  <TagsInput>
    中文示例内容
  </TagsInput>
</template>`,
  "textarea": `<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
  <Textarea>
    中文示例内容
  </Textarea>
</template>`,
  "toggle": `<script setup lang="ts">
import { Toggle } from '@/components/ui/toggle'
</script>

<template>
  <Toggle>
    中文示例内容
  </Toggle>
</template>`,
  "toggle-group": `<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
</script>

<template>
  <ToggleGroup>
    中文示例内容
  </ToggleGroup>
</template>`,
  "tooltip": `<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
</script>

<template>
  <Tooltip>
    中文示例内容
  </Tooltip>
</template>`
}
