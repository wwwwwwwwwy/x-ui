<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~~/registry/default/accordion'
import { Alert, AlertDescription, AlertTitle } from '~~/registry/default/alert'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '~~/registry/default/alert-dialog'
import { AspectRatio } from '~~/registry/default/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '~~/registry/default/avatar'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '~~/registry/default/breadcrumb'
import { Button } from '~~/registry/default/button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '~~/registry/default/button-group'
import { Calendar } from '~~/registry/default/calendar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~~/registry/default/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~~/registry/default/carousel'
import { ChartLegend, ChartTooltip } from '~~/registry/default/chart'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~~/registry/default/collapsible'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList } from '~~/registry/default/combobox'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '~~/registry/default/command'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from '~~/registry/default/context-menu'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~~/registry/default/dialog'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '~~/registry/default/drawer'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '~~/registry/default/dropdown-menu'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '~~/registry/default/empty'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from '~~/registry/default/field'
import { FormDescription, FormField, FormItem, FormLabel } from '~~/registry/default/form'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~~/registry/default/hover-card'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from '~~/registry/default/input-group'
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle } from '~~/registry/default/item'
import { Kbd, KbdGroup } from '~~/registry/default/kbd'
import { Label } from '~~/registry/default/label'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '~~/registry/default/menubar'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '~~/registry/default/navigation-menu'
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '~~/registry/default/number-field'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from '~~/registry/default/pagination'
import { PinInput, PinInputGroup, PinInputSeparator, PinInputSlot } from '~~/registry/default/pin-input'
import { Popover, PopoverContent, PopoverTrigger } from '~~/registry/default/popover'
import { Progress } from '~~/registry/default/progress'
import { RadioGroup, RadioGroupItem } from '~~/registry/default/radio-group'
import { RangeCalendar } from '~~/registry/default/range-calendar'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '~~/registry/default/resizable'
import { ScrollArea, ScrollBar } from '~~/registry/default/scroll-area'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '~~/registry/default/select'
import { Separator } from '~~/registry/default/separator'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '~~/registry/default/sheet'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '~~/registry/default/sidebar'
import { Skeleton } from '~~/registry/default/skeleton'
import { Slider } from '~~/registry/default/slider'
import { Toaster } from '~~/registry/default/sonner'
import { Spinner } from '~~/registry/default/spinner'
import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '~~/registry/default/stepper'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~~/registry/default/tabs'
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '~~/registry/default/tags-input'
import { Textarea } from '~~/registry/default/textarea'
import { Toggle } from '~~/registry/default/toggle'
import { ToggleGroup, ToggleGroupItem } from '~~/registry/default/toggle-group'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~~/registry/default/tooltip'

defineProps<{
  title: string
  slug: string
  primaryComponent: string
  importPath: string
  registryPath: string
  componentExports: readonly string[]
}>()

const collapsibleOpen = ref(true)
const drawerOpen = ref(false)
const radioValue = ref('weekly')
const sliderValue = ref([64])
const pinValue = ref(['2', '4', '6'])
const tags = ref(['设计系统', '组件库'])
const chartItems = ref([
  { name: '访问量', color: '#2D5AF2' },
  { name: '转化率', color: '#19A55B' },
])

function showSonnerToast() {
  toast.success('保存成功', {
    description: '通知组件已完成一次中文示例触发。',
  })
}
</script>

<template>
  <div class="flex flex-col gap-5 p-4 text-[#161c24]">
    <Accordion v-if="slug === 'accordion'" type="single" collapsible class="w-full">
      <AccordionItem value="setup">
        <AccordionTrigger>如何安装组件？</AccordionTrigger>
        <AccordionContent>通过 registry 地址添加组件后，即可在业务页面中按目录导入使用。</AccordionContent>
      </AccordionItem>
      <AccordionItem value="usage">
        <AccordionTrigger>是否支持组合使用？</AccordionTrigger>
        <AccordionContent>支持。组件保持 shadcn-vue 的组合式结构，便于按场景拆分。</AccordionContent>
      </AccordionItem>
    </Accordion>

    <Alert v-else-if="slug === 'alert'">
      <AlertTitle>系统提醒</AlertTitle>
      <AlertDescription>本次发布包含组件样式和文档示例更新，请在上线前完成预览。</AlertDescription>
    </Alert>

    <AlertDialog v-else-if="slug === 'alert-dialog'">
      <AlertDialogTrigger as-child>
        <Button variant="destructive">删除项目</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>确认删除这个项目？</AlertDialogTitle>
          <AlertDialogDescription>该操作会移除当前示例项目，提交后不可撤销。</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction>确认删除</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    <AspectRatio v-else-if="slug === 'aspect-ratio'" :ratio="16 / 9" class="overflow-hidden rounded-[8px] bg-[#eef4ff]">
      <div class="flex h-full items-center justify-center text-sm font-semibold text-[#2D5AF2]">16:9 内容预览区域</div>
    </AspectRatio>

    <div v-else-if="slug === 'avatar'" class="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=60" alt="林清和" />
        <AvatarFallback>林</AvatarFallback>
      </Avatar>
      <div>
        <p class="text-sm font-semibold">林清和</p>
        <p class="text-xs text-[#434655]">产品设计负责人</p>
      </div>
    </div>

    <Breadcrumb v-else-if="slug === 'breadcrumb'">
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">文档</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">组件</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>面包屑</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <ButtonGroup v-else-if="slug === 'button-group'">
      <Button>保存</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">预览</Button>
      <ButtonGroupText>已同步</ButtonGroupText>
    </ButtonGroup>

    <Calendar v-else-if="slug === 'calendar'" class="rounded-[8px] border border-[#E2E4E9] bg-white" />

    <Card v-else-if="slug === 'card'" class="max-w-sm">
      <CardHeader>
        <CardTitle>组件发布</CardTitle>
        <CardDescription>发布前检查 registry、文档和静态构建状态。</CardDescription>
      </CardHeader>
      <CardContent class="text-sm text-[#434655]">当前版本已准备进入预览流程。</CardContent>
      <CardFooter><Button size="sm">查看详情</Button></CardFooter>
    </Card>

    <Carousel v-else-if="slug === 'carousel'" class="mx-auto w-full max-w-sm">
      <CarouselContent>
        <CarouselItem v-for="item in ['组件预览', '源码示例', '安装说明']" :key="item">
          <div class="flex h-28 items-center justify-center rounded-[8px] border border-[#E2E4E9] bg-[#F5F6F7] text-sm font-semibold">{{ item }}</div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <div v-else-if="slug === 'chart'" class="grid gap-4 md:grid-cols-2">
      <ChartTooltip title="本周数据" :data="[{ name: '访问量', color: '#2D5AF2', value: '12,480' }, { name: '转化率', color: '#19A55B', value: '8.6%' }]" />
      <ChartLegend v-model:items="chartItems" />
    </div>

    <Collapsible v-else-if="slug === 'collapsible'" v-model:open="collapsibleOpen" class="space-y-2">
      <div class="flex items-center justify-between rounded-[8px] border border-[#E2E4E9] px-4 py-3">
        <span class="text-sm font-semibold">高级设置</span>
        <CollapsibleTrigger as-child><Button size="sm" variant="outline">{{ collapsibleOpen ? '收起' : '展开' }}</Button></CollapsibleTrigger>
      </div>
      <CollapsibleContent class="rounded-[8px] border border-[#E2E4E9] bg-[#F5F6F7] p-4 text-sm text-[#434655]">这里展示可折叠的配置内容。</CollapsibleContent>
    </Collapsible>

    <Combobox v-else-if="slug === 'combobox'" class="w-full max-w-xs">
      <ComboboxAnchor class="rounded-[8px] border border-[#E2E4E9] bg-white px-3 py-2">
        <ComboboxInput placeholder="搜索组件..." class="w-full bg-transparent text-sm outline-none" />
      </ComboboxAnchor>
      <ComboboxList class="mt-2 rounded-[8px] border border-[#E2E4E9] bg-white p-1">
        <ComboboxEmpty>未找到组件</ComboboxEmpty>
        <ComboboxGroup>
          <ComboboxItem value="button">按钮 Button</ComboboxItem>
          <ComboboxItem value="input">输入框 Input</ComboboxItem>
          <ComboboxItem value="select">选择器 Select</ComboboxItem>
        </ComboboxGroup>
      </ComboboxList>
    </Combobox>

    <Command v-else-if="slug === 'command'" class="rounded-[8px] border border-[#E2E4E9]">
      <CommandInput placeholder="输入命令或组件名称..." />
      <CommandList>
        <CommandEmpty>暂无匹配结果</CommandEmpty>
        <CommandGroup heading="常用操作">
          <CommandItem value="创建组件">创建组件<CommandShortcut>⌘N</CommandShortcut></CommandItem>
          <CommandItem value="生成文档">生成文档<CommandShortcut>⌘G</CommandShortcut></CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="组件">
          <CommandItem value="按钮">按钮</CommandItem>
          <CommandItem value="输入框">输入框</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>

    <ContextMenu v-else-if="slug === 'context-menu'">
      <ContextMenuTrigger class="flex h-28 items-center justify-center rounded-[8px] border border-dashed border-[#C4C5D8] text-sm text-[#434655]">右键打开上下文菜单</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>组件操作</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>复制名称<ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem>查看源码</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>

    <Dialog v-else-if="slug === 'dialog'">
      <DialogTrigger as-child><Button>编辑资料</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>编辑资料</DialogTitle>
          <DialogDescription>更新团队成员的基础信息。</DialogDescription>
        </DialogHeader>
        <div class="rounded-[8px] bg-[#F5F6F7] p-4 text-sm">姓名：林清和</div>
        <DialogFooter><Button>保存更改</Button></DialogFooter>
      </DialogContent>
    </Dialog>

    <Drawer v-else-if="slug === 'drawer'" v-model:open="drawerOpen">
      <Button @click="drawerOpen = true">打开抽屉</Button>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>任务详情</DrawerTitle>
          <DrawerDescription>从底部抽屉查看当前任务的执行状态。</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter><Button @click="drawerOpen = false">完成</Button></DrawerFooter>
      </DrawerContent>
    </Drawer>

    <DropdownMenu v-else-if="slug === 'dropdown-menu'">
      <DropdownMenuTrigger as-child><Button variant="outline">打开菜单</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>项目操作</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>重命名<DropdownMenuShortcut>⌘R</DropdownMenuShortcut></DropdownMenuItem>
          <DropdownMenuItem>生成文档</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    <Empty v-else-if="slug === 'empty'">
      <EmptyHeader>
        <EmptyMedia>空</EmptyMedia>
        <EmptyTitle>暂无组件记录</EmptyTitle>
        <EmptyDescription>添加第一个组件后，这里会显示最新状态。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent><Button size="sm">新增组件</Button></EmptyContent>
    </Empty>

    <FieldGroup v-else-if="slug === 'field'">
      <FieldSet>
        <FieldLegend>项目信息</FieldLegend>
        <Field orientation="vertical">
          <FieldLabel>项目名称</FieldLabel>
          <FieldTitle>x-ui registry</FieldTitle>
          <FieldDescription>用于管理组件文档和静态 registry。</FieldDescription>
        </Field>
      </FieldSet>
    </FieldGroup>

    <FormField v-else-if="slug === 'form'" name="email">
      <FormItem class="max-w-sm">
        <FormLabel>邮箱地址</FormLabel>
        <FormDescription>用于接收组件库发布通知。</FormDescription>
        <div class="h-9 rounded-[4px] border border-[#E2E4E9] bg-white px-3 py-2 text-sm text-[#434655]">team@example.com</div>
      </FormItem>
    </FormField>

    <HoverCard v-else-if="slug === 'hover-card'">
      <HoverCardTrigger as-child><Button variant="link">查看维护者</Button></HoverCardTrigger>
      <HoverCardContent>
        <div class="space-y-1">
          <p class="text-sm font-semibold">林清和</p>
          <p class="text-xs text-[#434655]">负责组件规范、样式迁移和文档体验。</p>
        </div>
      </HoverCardContent>
    </HoverCard>

    <InputGroup v-else-if="slug === 'input-group'">
      <InputGroupAddon>https://</InputGroupAddon>
      <InputGroupInput placeholder="输入 registry 域名" />
      <InputGroupButton>检查</InputGroupButton>
      <InputGroupText>可用</InputGroupText>
      <InputGroupTextarea class="basis-full" placeholder="补充说明..." />
    </InputGroup>

    <ItemGroup v-else-if="slug === 'item'" class="gap-3">
      <Item>
        <ItemMedia>文</ItemMedia>
        <ItemContent>
          <ItemHeader><ItemTitle>组件文档</ItemTitle></ItemHeader>
          <ItemDescription>每个组件都提供中文示例和源码 API。</ItemDescription>
          <ItemFooter>刚刚更新</ItemFooter>
        </ItemContent>
        <ItemActions><Button size="sm" variant="outline">查看</Button></ItemActions>
      </Item>
      <ItemSeparator />
    </ItemGroup>

    <KbdGroup v-else-if="slug === 'kbd'">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <span class="ml-2 text-sm text-[#434655]">打开命令面板</span>
    </KbdGroup>

    <div v-else-if="slug === 'label'" class="grid max-w-sm gap-2">
      <Label for="demo-label">项目名称</Label>
      <input id="demo-label" class="h-9 rounded-[4px] border border-[#E2E4E9] px-3 text-sm" value="x-ui registry">
    </div>

    <Menubar v-else-if="slug === 'menubar'">
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>新建组件<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarItem>保存文档</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>导出 registry</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

    <NavigationMenu v-else-if="slug === 'navigation-menu'">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>组件</NavigationMenuTrigger>
          <NavigationMenuContent class="w-64 p-4">
            <NavigationMenuLink class="block rounded-[4px] p-3 hover:bg-[#F5F6F7]">基础控件</NavigationMenuLink>
            <NavigationMenuLink class="block rounded-[4px] p-3 hover:bg-[#F5F6F7]">反馈组件</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <NumberField v-else-if="slug === 'number-field'" :default-value="3" :min="1" :max="10" class="max-w-36">
      <NumberFieldContent>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldContent>
    </NumberField>

    <Pagination v-else-if="slug === 'pagination'" :total="80" :items-per-page="10" :sibling-count="1" show-edges :default-page="2">
      <PaginationContent v-slot="{ items }">
        <PaginationPrevious />
        <template v-for="(item, index) in items" :key="index">
          <PaginationItem v-if="item.type === 'page'" :value="item.value" :is-active="item.value === 2">{{ item.value }}</PaginationItem>
          <PaginationEllipsis v-else />
        </template>
        <PaginationNext />
      </PaginationContent>
    </Pagination>

    <PinInput v-else-if="slug === 'pin-input'" v-model="pinValue">
      <PinInputGroup>
        <PinInputSlot v-for="index in 3" :key="index" :index="index - 1" />
      </PinInputGroup>
      <PinInputSeparator />
      <PinInputGroup>
        <PinInputSlot v-for="index in 3" :key="index" :index="index + 2" />
      </PinInputGroup>
    </PinInput>

    <Popover v-else-if="slug === 'popover'">
      <PopoverTrigger as-child><Button variant="outline">查看发布信息</Button></PopoverTrigger>
      <PopoverContent>
        <p class="text-sm font-semibold">发布窗口</p>
        <p class="mt-1 text-xs text-[#434655]">建议在验证通过后进行静态部署。</p>
      </PopoverContent>
    </Popover>

    <div v-else-if="slug === 'progress'" class="space-y-2">
      <div class="flex justify-between text-sm"><span>文档生成进度</span><span>72%</span></div>
      <Progress :model-value="72" />
    </div>

    <RadioGroup v-else-if="slug === 'radio-group'" v-model="radioValue" class="grid gap-3">
      <label class="flex items-center gap-2"><RadioGroupItem value="daily" />每日同步</label>
      <label class="flex items-center gap-2"><RadioGroupItem value="weekly" />每周同步</label>
      <label class="flex items-center gap-2"><RadioGroupItem value="manual" />手动同步</label>
    </RadioGroup>

    <RangeCalendar v-else-if="slug === 'range-calendar'" class="rounded-[8px] border border-[#E2E4E9] bg-white" />

    <ResizablePanelGroup v-else-if="slug === 'resizable'" direction="horizontal" class="h-32 rounded-[8px] border border-[#E2E4E9]">
      <ResizablePanel :default-size="45" class="flex items-center justify-center text-sm">导航</ResizablePanel>
      <ResizableHandle with-handle />
      <ResizablePanel :default-size="55" class="flex items-center justify-center text-sm">内容</ResizablePanel>
    </ResizablePanelGroup>

    <ScrollArea v-else-if="slug === 'scroll-area'" class="h-32 rounded-[8px] border border-[#E2E4E9] p-4">
      <div v-for="item in ['按钮', '输入框', '选择器', '表格', '弹窗', '提示', '标签', '分页']" :key="item" class="border-b border-[#E2E4E9] py-2 text-sm">{{ item }}</div>
      <ScrollBar />
    </ScrollArea>

    <Select v-else-if="slug === 'select'">
      <SelectTrigger class="w-56"><SelectValue placeholder="选择发布环境" /></SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>环境</SelectLabel>
          <SelectItem value="preview">预览环境</SelectItem>
          <SelectItem value="production">生产环境</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <div v-else-if="slug === 'separator'" class="space-y-4">
      <div>
        <p class="text-sm font-semibold">组件文档</p>
        <p class="text-xs text-[#434655]">源码 API、示例和 registry 地址。</p>
      </div>
      <Separator />
      <div class="text-sm">下一步：运行静态构建验证。</div>
    </div>

    <Sheet v-else-if="slug === 'sheet'">
      <SheetTrigger as-child><Button>打开侧边面板</Button></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>发布检查</SheetTitle>
          <SheetDescription>确认文档、registry 和类型检查均已通过。</SheetDescription>
        </SheetHeader>
        <SheetFooter><Button>确认</Button></SheetFooter>
      </SheetContent>
    </Sheet>

    <SidebarProvider v-else-if="slug === 'sidebar'" default-open class="min-h-64 rounded-[8px] border border-[#E2E4E9]">
      <Sidebar collapsible="none" class="w-56 border-r border-[#E2E4E9]">
        <SidebarHeader class="p-3 font-semibold">X UI</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>组件</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem><SidebarMenuButton>按钮</SidebarMenuButton></SidebarMenuItem>
                <SidebarMenuItem><SidebarMenuButton>输入框</SidebarMenuButton></SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter class="p-3 text-xs text-[#434655]">文档预览</SidebarFooter>
      </Sidebar>
      <SidebarInset class="p-4">
        <SidebarTrigger />
        <p class="mt-4 text-sm text-[#434655]">侧边栏组件用于构建后台和文档导航。</p>
      </SidebarInset>
    </SidebarProvider>

    <div v-else-if="slug === 'skeleton'" class="space-y-3">
      <Skeleton class="h-4 w-40" />
      <Skeleton class="h-4 w-64" />
      <Skeleton class="h-20 w-full rounded-[8px]" />
    </div>

    <div v-else-if="slug === 'slider'" class="space-y-3">
      <Label>音量：{{ sliderValue[0] }}%</Label>
      <Slider v-model="sliderValue" :max="100" :step="1" />
    </div>

    <div v-else-if="slug === 'sonner'" class="space-y-4">
      <Toaster />
      <Button @click="showSonnerToast">触发通知</Button>
      <p class="text-xs text-[#434655]">点击按钮查看中文通知示例。</p>
    </div>

    <div v-else-if="slug === 'spinner'" class="flex items-center gap-3">
      <Spinner />
      <span class="text-sm text-[#434655]">正在生成组件文档...</span>
    </div>

    <Stepper v-else-if="slug === 'stepper'" :default-value="2" class="w-full">
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

    <Tabs v-else-if="slug === 'tabs'" default-value="preview" class="w-full">
      <TabsList><TabsTrigger value="preview">预览</TabsTrigger><TabsTrigger value="code">源码</TabsTrigger></TabsList>
      <TabsContent value="preview">这里展示组件交互效果。</TabsContent>
      <TabsContent value="code">这里展示示例源码。</TabsContent>
    </Tabs>

    <TagsInput v-else-if="slug === 'tags-input'" v-model="tags">
      <TagsInputItem v-for="tag in tags" :key="tag" :value="tag">
        <TagsInputItemText />
        <TagsInputItemDelete />
      </TagsInputItem>
      <TagsInputInput placeholder="输入标签..." />
    </TagsInput>

    <Textarea v-else-if="slug === 'textarea'" placeholder="请输入组件说明..." class="min-h-28" />

    <Toggle v-else-if="slug === 'toggle'">启用预览</Toggle>

    <ToggleGroup v-else-if="slug === 'toggle-group'" type="multiple">
      <ToggleGroupItem value="docs">文档</ToggleGroupItem>
      <ToggleGroupItem value="registry">Registry</ToggleGroupItem>
      <ToggleGroupItem value="theme">主题</ToggleGroupItem>
    </ToggleGroup>

    <TooltipProvider v-else-if="slug === 'tooltip'">
      <Tooltip>
        <TooltipTrigger as-child><Button variant="outline">悬停查看提示</Button></TooltipTrigger>
        <TooltipContent>这是一个中文 Tooltip 示例。</TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <div v-else class="rounded-[8px] border border-[#E2E4E9] bg-white p-5">
      <p class="text-sm font-semibold">{{ title }}</p>
      <p class="mt-2 text-xs leading-5 text-[#434655]">该组件已注册到默认 registry，可通过 {{ importPath }} 导入并组合使用。</p>
    </div>
  </div>
</template>
