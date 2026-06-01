# Tailwind 类差异与 Token 风险审计报告

生成时间：2026-05-27T12:38:10.033Z

## 总览

- registry/default 组件数：58
- registry/shadcn/default 组件数：58
- 对比组件数：58
- 存在 Tailwind 类差异的组件数：38
- 无 Tailwind 类差异的组件数：20
- shadcn token 风险数：87

## 覆盖校验

- shadcn 中没有 default 缺失的组件。
- default 中没有 shadcn 缺失的组件。

## 判定规则

- `default 新增类`：`registry/default` 中存在、`registry/shadcn/default` 中不存在的 Tailwind 类。
- `default 删除类`：`registry/shadcn/default` 中存在、`registry/default` 中不存在的 Tailwind 类。
- `同位置类串变更`：同组件同文件中按 class 字符串出现顺序配对后，token 集合发生变化的 class 串。
- Token 风险只扫描 `registry/shadcn/default`，用于定位上游镜像里不符合本项目语义 token 约定的类。

## 组件差异汇总

| 组件 | default 新增类及位置 | default 删除类及位置 | 同位置类串变更 | shadcn token 风险 |
| --- | --- | --- | ---: | ---: |
| `accordion` | `border-gray-200`<br><small>`AccordionItem.vue:21` `<AccordionItem>`</small><br><br>`cursor-pointer`<br><small>`AccordionTrigger.vue:24` `<AccordionTrigger>`</small><br><br>`disabled:cursor-not-allowed`<br><small>`AccordionTrigger.vue:24` `<AccordionTrigger>`</small><br><br>`py-1`<br><small>`AccordionTrigger.vue:24` `<AccordionTrigger>`</small> | `hover:underline`<br><small>`AccordionTrigger.vue:21` `<AccordionTrigger>`</small><br><br>`py-4`<br><small>`AccordionTrigger.vue:21` `<AccordionTrigger>`</small> | 2 | 0 |
| `alert` | `[&>svg]:text-red-500`<br><small>`index.ts:20` `variants`</small><br><br>`border-gray-200`<br><small>`index.ts:14` `cva(...)`</small><br><br>`border-red-500`<br><small>`index.ts:20` `variants`</small><br><br>`text-red-500`<br><small>`index.ts:20` `variants`</small> | `[&>svg]:text-destructive`<br><small>`index.ts:15` `variants`</small><br><br>`border-destructive/50`<br><small>`index.ts:15` `variants`</small><br><br>`dark:border-destructive`<br><small>`index.ts:15` `variants`</small><br><br>`text-destructive`<br><small>`index.ts:15` `variants`</small> | 2 | 0 |
| `alert-dialog` | `bg-[#626c78]/50`<br><small>`AlertDialogContent.vue:24` `<AlertDialogOverlay>`</small><br><br>`font-bold`<br><small>`AlertDialogTitle.vue:16` `<AlertDialogTitle>`</small><br><br>`gap-y-1.5`<br><small>`AlertDialogHeader.vue:12` `<div>`</small><br><br>`leading-[1.4]`<br><small>`AlertDialogTitle.vue:16` `<AlertDialogTitle>`</small><br><br>`text-[16px]`<br><small>`AlertDialogTitle.vue:16` `<AlertDialogTitle>`</small><br><br>`text-[var(--gray-900)]`<br><small>`AlertDialogTitle.vue:16` `<AlertDialogTitle>`</small> | `bg-black/80`<br><small>`AlertDialogContent.vue:24` `<AlertDialogOverlay>`</small><br><br>`border`<br><small>`AlertDialogContent.vue:28` `<AlertDialogContent>`</small><br><br>`font-semibold`<br><small>`AlertDialogTitle.vue:16` `<AlertDialogTitle>`</small><br><br>`gap-y-2`<br><small>`AlertDialogHeader.vue:12` `<div>`</small><br><br>`text-lg`<br><small>`AlertDialogTitle.vue:16` `<AlertDialogTitle>`</small> | 4 | 1 |
| `aspect-ratio` | 无 | 无 | 0 | 0 |
| `avatar` | 无 | 无 | 0 | 0 |
| `badge` | `font-normal`<br><small>`index.ts:12` `cva(...)`</small> | `font-semibold`<br><small>`index.ts:7` `cva(...)`</small> | 4 | 0 |
| `breadcrumb` | `cursor-pointer`<br><small>`BreadcrumbLink.vue:16` `<Primitive>`</small><br><br>`enabled:hover:text-foreground`<br><small>`BreadcrumbLink.vue:16` `<Primitive>`</small> | `hover:text-foreground`<br><small>`BreadcrumbLink.vue:16` `<Primitive>`</small> | 1 | 1 |
| `button` | `[&:not(:disabled):not([aria-disabled=true])]:hover:bg-accent`<br><small>`index.ts:15` `样式字符串`<br>`index.ts:18` `样式字符串`</small><br><br>`[&:not(:disabled):not([aria-disabled=true])]:hover:bg-destructive/90`<br><small>`index.ts:13` `variants`</small><br><br>`[&:not(:disabled):not([aria-disabled=true])]:hover:bg-primary/90`<br><small>`index.ts:11` `variants`</small><br><br>`[&:not(:disabled):not([aria-disabled=true])]:hover:bg-secondary/80`<br><small>`index.ts:17` `样式字符串`</small><br><br>`[&:not(:disabled):not([aria-disabled=true])]:hover:text-accent-foreground`<br><small>`index.ts:15` `样式字符串`<br>`index.ts:18` `样式字符串`</small><br><br>`[&:not(:disabled):not([aria-disabled=true])]:hover:underline`<br><small>`index.ts:19` `样式字符串`</small><br><br>`animate-spin`<br><small>`Button.vue:108` `<span>`</small><br><br>`aria-disabled:cursor-not-allowed`<br><small>`index.ts:7` `cva(...)`</small><br><br>`aria-disabled:opacity-50`<br><small>`index.ts:7` `cva(...)`</small><br><br>`cursor-pointer`<br><small>`index.ts:7` `cva(...)`</small><br><br>`disabled:cursor-not-allowed`<br><small>`index.ts:7` `cva(...)`</small><br><br>`font-normal`<br><small>`index.ts:7` `cva(...)`</small><br><br>`h-7`<br><small>`index.ts:23` `variant "sm"`</small><br><br>`h-8`<br><small>`index.ts:22` `variant "default"`</small><br><br>`leading-[initial]`<br><small>`index.ts:7` `cva(...)`</small><br><br>`rounded-sm`<br><small>`index.ts:7` `cva(...)`<br>`index.ts:23` `variant "sm"`<br>`index.ts:24` `variant "lg"`</small><br><br>`shrink-0`<br><small>`Button.vue:108` `<span>`</small><br><br>`size-10`<br><small>`index.ts:27` `variant "icon-lg"`</small><br><br>`size-7`<br><small>`index.ts:26` `variant "icon-sm"`</small><br><br>`size-8`<br><small>`index.ts:25` `variant "icon"`</small><br><br>`text-[14px]`<br><small>`index.ts:22` `variant "default"`<br>`index.ts:23` `variant "sm"`</small><br><br>`text-[16px]`<br><small>`index.ts:24` `variant "lg"`</small> | `disabled:pointer-events-none`<br><small>`index.ts:7` `cva(...)`</small><br><br>`font-medium`<br><small>`index.ts:7` `cva(...)`</small><br><br>`h-11`<br><small>`index.ts:24` `variant "lg"`</small><br><br>`h-9`<br><small>`index.ts:23` `variant "sm"`</small><br><br>`hover:bg-accent`<br><small>`index.ts:15` `样式字符串`<br>`index.ts:18` `样式字符串`</small><br><br>`hover:bg-destructive/90`<br><small>`index.ts:13` `variants`</small><br><br>`hover:bg-primary/90`<br><small>`index.ts:11` `variants`</small><br><br>`hover:bg-secondary/80`<br><small>`index.ts:17` `样式字符串`</small><br><br>`hover:text-accent-foreground`<br><small>`index.ts:15` `样式字符串`<br>`index.ts:18` `样式字符串`</small><br><br>`hover:underline`<br><small>`index.ts:19` `样式字符串`</small><br><br>`px-8`<br><small>`index.ts:24` `variant "lg"`</small><br><br>`py-2`<br><small>`index.ts:22` `variant "default"`</small><br><br>`rounded-md`<br><small>`index.ts:7` `cva(...)`<br>`index.ts:23` `variant "sm"`<br>`index.ts:24` `variant "lg"`</small><br><br>`size-11`<br><small>`index.ts:27` `variant "icon-lg"`</small><br><br>`size-9`<br><small>`index.ts:26` `variant "icon-sm"`</small><br><br>`text-sm`<br><small>`index.ts:7` `cva(...)`</small><br><br>`w-10`<br><small>`index.ts:25` `variant "icon"`</small> | 13 | 1 |
| `button-group` | `[&>*:has(+[data-slot=input-group])]:border-r-transparent`<br><small>`index.ts:14` `variants`</small><br><br>`border-input`<br><small>`ButtonGroupText.vue:26` `<Primitive>`</small><br><br>`font-normal`<br><small>`ButtonGroupText.vue:26` `<Primitive>`</small><br><br>`has-[>[data-slot=button-group][data-variant=group]]:gap-2`<br><small>`index.ts:9` `cva(...)`</small><br><br>`has-[>[data-slot=input-group]]:[&>[data-slot=input-group]]:-ml-px`<br><small>`index.ts:14` `variants`</small><br><br>`has-[>[data-slot=input-group]]:[&>[data-slot=input-group]]:!border-l`<br><small>`index.ts:14` `variants`</small><br><br>`has-[>[data-slot=input-group]]:gap-2`<br><small>`index.ts:9` `cva(...)`</small><br><br>`leading-[1.5]`<br><small>`ButtonGroupText.vue:26` `<Primitive>`</small><br><br>`text-[14px]`<br><small>`ButtonGroupText.vue:26` `<Primitive>`</small><br><br>`text-foreground`<br><small>`ButtonGroupText.vue:26` `<Primitive>`</small><br><br>`z-0`<br><small>`ButtonGroupText.vue:26` `<Primitive>`</small> | `font-medium`<br><small>`ButtonGroupText.vue:25` `<Primitive>`</small><br><br>`has-[>[data-slot=button-group]]:gap-2`<br><small>`index.ts:9` `cva(...)`</small><br><br>`text-sm`<br><small>`ButtonGroupText.vue:25` `<Primitive>`</small> | 2 | 0 |
| `calendar` | `[&[data-selected]:not([data-disabled])]:focus:bg-primary`<br><small>`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`</small><br><br>`[&[data-selected]:not([data-disabled])]:focus:text-primary-foreground`<br><small>`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`</small><br><br>`[&[data-selected]:not([data-disabled])]:hover:bg-primary`<br><small>`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`</small><br><br>`[&[data-selected]:not([data-disabled])]:hover:text-primary-foreground`<br><small>`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`</small><br><br>`enabled:hover:opacity-100`<br><small>`CalendarNextButton.vue:19` `<CalendarNext>`<br>`CalendarPrevButton.vue:19` `<CalendarPrev>`</small> | `data-[selected]:focus:bg-primary`<br><small>`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`</small><br><br>`data-[selected]:focus:text-primary-foreground`<br><small>`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`</small><br><br>`data-[selected]:hover:bg-primary`<br><small>`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`</small><br><br>`data-[selected]:hover:text-primary-foreground`<br><small>`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`</small><br><br>`hover:opacity-100`<br><small>`CalendarNextButton.vue:19` `<CalendarNext>`<br>`CalendarPrevButton.vue:19` `<CalendarPrev>`</small> | 3 | 2 |
| `card` | `border-[#e4e6e7]`<br><small>`Card.vue:12` `<div>`</small><br><br>`p-[16px_20px]`<br><small>`Card.vue:12` `<div>`</small><br><br>`rounded-[8px]`<br><small>`Card.vue:12` `<div>`</small> | `p-6`<br><small>`CardContent.vue:11` `<div>`<br>`CardFooter.vue:11` `<div>`<br>`CardHeader.vue:11` `<div>`</small><br><br>`pt-0`<br><small>`CardContent.vue:11` `<div>`<br>`CardFooter.vue:11` `<div>`</small><br><br>`rounded-lg`<br><small>`Card.vue:12` `<div>`</small> | 3 | 0 |
| `carousel` | 无 | 无 | 0 | 0 |
| `chart` | 无 | 无 | 0 | 0 |
| `checkbox` | `rounded-[2px]`<br><small>`Checkbox.vue:20` `<CheckboxRoot>`</small> | `rounded-sm`<br><small>`Checkbox.vue:20` `<CheckboxRoot>`</small> | 1 | 0 |
| `collapsible` | 无 | 无 | 0 | 0 |
| `combobox` | `[&_[cmdk-group-heading]]:font-normal`<br><small>`ComboboxGroup.vue:19` `<ComboboxGroup>`</small><br><br>`[&_[cmdk-group-heading]]:text-[14px]`<br><small>`ComboboxGroup.vue:19` `<ComboboxGroup>`</small><br><br>`[&_[cmdk-group-heading]]:text-gray-500`<br><small>`ComboboxGroup.vue:19` `<ComboboxGroup>`</small><br><br>`[&_[cmdk-group-heading]]:text-left`<br><small>`ComboboxGroup.vue:19` `<ComboboxGroup>`</small><br><br>`[&:not([data-disabled])[data-highlighted]]:bg-gray-400/30`<br><small>`ComboboxItem.vue:22` `<ComboboxItem>`</small><br><br>`[&:not([data-disabled])[data-highlighted]]:text-gray-900`<br><small>`ComboboxItem.vue:22` `<ComboboxItem>`</small><br><br>`[&:not([data-disabled])]:hover:bg-gray-400/30`<br><small>`ComboboxItem.vue:22` `<ComboboxItem>`</small><br><br>`absolute`<br><small>`ComboboxTrigger.vue:18` `<ComboboxTrigger>`</small><br><br>`bg-[var(--gray-0)]`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`border-gray-300`<br><small>`ComboboxList.vue:27` `<ComboboxContent>`</small><br><br>`cursor-pointer`<br><small>`ComboboxItem.vue:22` `<ComboboxItem>`</small><br><br>`data-[disabled]:cursor-not-allowed`<br><small>`ComboboxItem.vue:22` `<ComboboxItem>`</small><br><br>`disabled:bg-[var(--gray-200)]`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`disabled:opacity-100`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`disabled:text-[var(--gray-400)]`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`enabled:hover:border-primary`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`file:font-normal`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`file:text-[14px]`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`file:text-foreground`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`focus-visible:border-primary`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`focus-visible:caret-primary`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`focus-visible:ring-0`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`font-normal`<br><small>`ComboboxGroup.vue:21` `<ComboboxLabel>`<br>`ComboboxInput.vue:25` `<ComboboxInput>`<br>`ComboboxItem.vue:22` `<ComboboxItem>`</small><br><br>`h-8`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`justify-center`<br><small>`ComboboxTrigger.vue:18` `<ComboboxTrigger>`</small><br><br>`leading-[1.5]`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`min-h-[30px]`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`placeholder:text-[#C3C7CB]`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`px-1`<br><small>`ComboboxList.vue:27` `<ComboboxContent>`</small><br><br>`py-0`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`py-2`<br><small>`ComboboxList.vue:27` `<ComboboxContent>`</small><br><br>`right-3`<br><small>`ComboboxTrigger.vue:18` `<ComboboxTrigger>`</small><br><br>`rounded-[4px]`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`<br>`ComboboxList.vue:27` `<ComboboxContent>`</small><br><br>`shadow-none`<br><small>`ComboboxInput.vue:25` `<ComboboxInput>`</small><br><br>`text-[14px]`<br><small>`ComboboxGroup.vue:21` `<ComboboxLabel>`<br>`ComboboxInput.vue:25` `<ComboboxInput>`<br>`ComboboxItem.vue:22` `<ComboboxItem>`</small><br><br>`text-gray-500`<br><small>`ComboboxGroup.vue:21` `<ComboboxLabel>`</small><br><br>`text-gray-900`<br><small>`ComboboxItem.vue:22` `<ComboboxItem>`</small><br><br>`text-left`<br><small>`ComboboxGroup.vue:21` `<ComboboxLabel>`<br>`ComboboxItem.vue:22` `<ComboboxItem>`</small><br><br>`top-1/2`<br><small>`ComboboxTrigger.vue:18` `<ComboboxTrigger>`</small> | `[&_[cmdk-group-heading]]:font-medium`<br><small>`ComboboxGroup.vue:19` `<ComboboxGroup>`</small><br><br>`[&_[cmdk-group-heading]]:text-muted-foreground`<br><small>`ComboboxGroup.vue:19` `<ComboboxGroup>`</small><br><br>`[&_[cmdk-group-heading]]:text-xs`<br><small>`ComboboxGroup.vue:19` `<ComboboxGroup>`</small><br><br>`bg-transparent`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small><br><br>`cursor-default`<br><small>`ComboboxItem.vue:19` `<ComboboxItem>`</small><br><br>`data-[disabled]:pointer-events-none`<br><small>`ComboboxItem.vue:19` `<ComboboxItem>`</small><br><br>`data-[highlighted]:bg-accent`<br><small>`ComboboxItem.vue:19` `<ComboboxItem>`</small><br><br>`data-[highlighted]:text-accent-foreground`<br><small>`ComboboxItem.vue:19` `<ComboboxItem>`</small><br><br>`disabled:opacity-50`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small><br><br>`file:font-medium`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small><br><br>`file:text-sm`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small><br><br>`focus-visible:ring-1`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small><br><br>`focus-visible:ring-ring`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small><br><br>`font-medium`<br><small>`ComboboxGroup.vue:21` `<ComboboxLabel>`</small><br><br>`h-9`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small><br><br>`p-1`<br><small>`ComboboxGroup.vue:19` `<ComboboxGroup>`</small><br><br>`placeholder:text-muted-foreground`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small><br><br>`py-1`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small><br><br>`rounded-md`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`<br>`ComboboxList.vue:24` `<ComboboxContent>`</small><br><br>`shadow-sm`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small><br><br>`text-muted-foreground`<br><small>`ComboboxGroup.vue:21` `<ComboboxLabel>`</small><br><br>`text-xs`<br><small>`ComboboxGroup.vue:21` `<ComboboxLabel>`</small><br><br>`transition-colors`<br><small>`ComboboxInput.vue:22` `<ComboboxInput>`</small> | 4 | 8 |
| `command` | `[&:not([data-disabled])[data-highlighted]]:bg-accent`<br><small>`CommandItem.vue:68` `<ListboxItem>`</small><br><br>`[&:not([data-disabled])[data-highlighted]]:text-accent-foreground`<br><small>`CommandItem.vue:68` `<ListboxItem>`</small><br><br>`cursor-pointer`<br><small>`CommandItem.vue:68` `<ListboxItem>`</small><br><br>`data-[disabled]:cursor-not-allowed`<br><small>`CommandItem.vue:68` `<ListboxItem>`</small><br><br>`disabled:opacity-100`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small><br><br>`disabled:text-[var(--gray-400)]`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small><br><br>`h-8`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small><br><br>`leading-[1.5]`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small><br><br>`placeholder:text-[#C3C7CB]`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small><br><br>`py-0`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small><br><br>`rounded-[4px]`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small><br><br>`text-[14px]`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small> | `cursor-default`<br><small>`CommandItem.vue:68` `<ListboxItem>`</small><br><br>`data-[disabled]:pointer-events-none`<br><small>`CommandItem.vue:68` `<ListboxItem>`</small><br><br>`data-[highlighted]:bg-accent`<br><small>`CommandItem.vue:68` `<ListboxItem>`</small><br><br>`data-[highlighted]:text-accent-foreground`<br><small>`CommandItem.vue:68` `<ListboxItem>`</small><br><br>`disabled:opacity-50`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small><br><br>`h-10`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small><br><br>`placeholder:text-muted-foreground`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small><br><br>`py-3`<br><small>`CommandInput.vue:32` `<ListboxFilter>`</small> | 2 | 3 |
| `context-menu` | `[&:not([data-disabled])]:focus:bg-accent`<br><small>`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`<br>`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`<br>`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`</small><br><br>`[&:not([data-disabled])]:focus:bg-gray-400/30`<br><small>`ContextMenuItem.vue:22` `<ContextMenuItem>`</small><br><br>`[&:not([data-disabled])]:focus:text-accent-foreground`<br><small>`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`<br>`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`<br>`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`</small><br><br>`[&:not([data-disabled])]:focus:text-gray-900`<br><small>`ContextMenuItem.vue:22` `<ContextMenuItem>`</small><br><br>`[&:not([data-disabled])]:hover:bg-gray-400/30`<br><small>`ContextMenuItem.vue:22` `<ContextMenuItem>`</small><br><br>`border-gray-300`<br><small>`ContextMenuContent.vue:24` `<ContextMenuContent>`</small><br><br>`cursor-pointer`<br><small>`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`<br>`ContextMenuItem.vue:22` `<ContextMenuItem>`<br>`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`<br>`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`</small><br><br>`data-[disabled]:cursor-not-allowed`<br><small>`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`<br>`ContextMenuItem.vue:22` `<ContextMenuItem>`<br>`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`</small><br><br>`font-normal`<br><small>`ContextMenuItem.vue:22` `<ContextMenuItem>`</small><br><br>`rounded-[4px]`<br><small>`ContextMenuContent.vue:24` `<ContextMenuContent>`</small><br><br>`text-[14px]`<br><small>`ContextMenuItem.vue:22` `<ContextMenuItem>`</small><br><br>`text-gray-900`<br><small>`ContextMenuItem.vue:22` `<ContextMenuItem>`</small><br><br>`text-left`<br><small>`ContextMenuItem.vue:22` `<ContextMenuItem>`</small><br><br>`w-full`<br><small>`ContextMenuItem.vue:22` `<ContextMenuItem>`</small> | `cursor-default`<br><small>`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`<br>`ContextMenuItem.vue:22` `<ContextMenuItem>`<br>`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`<br>`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`</small><br><br>`data-[disabled]:pointer-events-none`<br><small>`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`<br>`ContextMenuItem.vue:22` `<ContextMenuItem>`<br>`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`</small><br><br>`focus:bg-accent`<br><small>`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`<br>`ContextMenuItem.vue:22` `<ContextMenuItem>`<br>`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`<br>`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`</small><br><br>`focus:text-accent-foreground`<br><small>`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`<br>`ContextMenuItem.vue:22` `<ContextMenuItem>`<br>`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`<br>`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`</small> | 5 | 2 |
| `dialog` | `bg-[#626c78]/50`<br><small>`DialogContent.vue:26` `<DialogOverlay>`<br>`DialogScrollContent.vue:26` `<DialogOverlay>`</small><br><br>`cursor-pointer`<br><small>`DialogContent.vue:39` `<DialogClose>`<br>`DialogScrollContent.vue:47` `<DialogClose>`</small><br><br>`disabled:cursor-not-allowed`<br><small>`DialogContent.vue:39` `<DialogClose>`<br>`DialogScrollContent.vue:47` `<DialogClose>`</small><br><br>`enabled:focus:outline-none`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`enabled:hover:bg-secondary`<br><small>`DialogScrollContent.vue:47` `<DialogClose>`</small><br><br>`enabled:hover:opacity-100`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`font-bold`<br><small>`DialogTitle.vue:18` `<DialogTitle>`</small><br><br>`h-6`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`items-center`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`justify-center`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`leading-[1.4]`<br><small>`DialogTitle.vue:18` `<DialogTitle>`</small><br><br>`right-6`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`text-[18px]`<br><small>`DialogTitle.vue:18` `<DialogTitle>`</small><br><br>`text-[var(--gray-900)]`<br><small>`DialogTitle.vue:18` `<DialogTitle>`</small><br><br>`top-6`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`w-6`<br><small>`DialogContent.vue:39` `<DialogClose>`</small> | `bg-black/80`<br><small>`DialogContent.vue:26` `<DialogOverlay>`<br>`DialogScrollContent.vue:26` `<DialogOverlay>`</small><br><br>`disabled:pointer-events-none`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`focus:outline-none`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`focus:ring-2`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`focus:ring-offset-2`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`focus:ring-ring`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`font-semibold`<br><small>`DialogTitle.vue:18` `<DialogTitle>`</small><br><br>`hover:bg-secondary`<br><small>`DialogScrollContent.vue:47` `<DialogClose>`</small><br><br>`hover:opacity-100`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`leading-none`<br><small>`DialogTitle.vue:18` `<DialogTitle>`</small><br><br>`right-4`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`ring-offset-background`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`text-lg`<br><small>`DialogTitle.vue:18` `<DialogTitle>`</small><br><br>`top-4`<br><small>`DialogContent.vue:39` `<DialogClose>`</small><br><br>`tracking-tight`<br><small>`DialogTitle.vue:18` `<DialogTitle>`</small> | 6 | 2 |
| `drawer` | `bg-overlay`<br><small>`DrawerOverlay.vue:14` `<DrawerOverlay>`</small><br><br>`font-bold`<br><small>`DrawerTitle.vue:14` `<DrawerTitle>`</small><br><br>`leading-[1.4]`<br><small>`DrawerTitle.vue:14` `<DrawerTitle>`</small><br><br>`text-[18px]`<br><small>`DrawerTitle.vue:14` `<DrawerTitle>`</small><br><br>`text-[var(--gray-900)]`<br><small>`DrawerTitle.vue:14` `<DrawerTitle>`</small> | `bg-black/80`<br><small>`DrawerOverlay.vue:14` `<DrawerOverlay>`</small><br><br>`border`<br><small>`DrawerContent.vue:19` `<DrawerContent>`</small><br><br>`font-semibold`<br><small>`DrawerTitle.vue:14` `<DrawerTitle>`</small><br><br>`leading-none`<br><small>`DrawerTitle.vue:14` `<DrawerTitle>`</small><br><br>`text-lg`<br><small>`DrawerTitle.vue:14` `<DrawerTitle>`</small><br><br>`tracking-tight`<br><small>`DrawerTitle.vue:14` `<DrawerTitle>`</small> | 3 | 2 |
| `dropdown-menu` | `[&:not([data-disabled])]:focus:bg-accent`<br><small>`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`<br>`DropdownMenuItem.vue:18` `<DropdownMenuItem>`<br>`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`<br>`DropdownMenuSubTrigger.vue:22` `<DropdownMenuSubTrigger>`</small><br><br>`[&:not([data-disabled])]:focus:text-accent-foreground`<br><small>`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`<br>`DropdownMenuItem.vue:18` `<DropdownMenuItem>`<br>`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`</small><br><br>`active:ring-0`<br><small>`DropdownMenuTrigger.vue:11` `<DropdownMenuTrigger>`</small><br><br>`border-gray-300`<br><small>`DropdownMenuContent.vue:29` `<DropdownMenuContent>`</small><br><br>`cursor-pointer`<br><small>`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`<br>`DropdownMenuItem.vue:18` `<DropdownMenuItem>`<br>`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`<br>`DropdownMenuSubTrigger.vue:22` `<DropdownMenuSubTrigger>`</small><br><br>`data-[disabled]:cursor-not-allowed`<br><small>`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`<br>`DropdownMenuItem.vue:18` `<DropdownMenuItem>`<br>`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`</small><br><br>`focus-visible:outline-none`<br><small>`DropdownMenuTrigger.vue:11` `<DropdownMenuTrigger>`</small><br><br>`focus-visible:ring-0`<br><small>`DropdownMenuTrigger.vue:11` `<DropdownMenuTrigger>`</small><br><br>`focus-visible:ring-offset-0`<br><small>`DropdownMenuTrigger.vue:11` `<DropdownMenuTrigger>`</small><br><br>`hover:ring-0`<br><small>`DropdownMenuTrigger.vue:11` `<DropdownMenuTrigger>`</small><br><br>`rounded-[4px]`<br><small>`DropdownMenuContent.vue:29` `<DropdownMenuContent>`</small> | `cursor-default`<br><small>`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`<br>`DropdownMenuItem.vue:18` `<DropdownMenuItem>`<br>`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`<br>`DropdownMenuSubTrigger.vue:22` `<DropdownMenuSubTrigger>`</small><br><br>`data-[disabled]:pointer-events-none`<br><small>`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`<br>`DropdownMenuItem.vue:18` `<DropdownMenuItem>`<br>`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`</small><br><br>`focus:bg-accent`<br><small>`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`<br>`DropdownMenuItem.vue:18` `<DropdownMenuItem>`<br>`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`<br>`DropdownMenuSubTrigger.vue:22` `<DropdownMenuSubTrigger>`</small><br><br>`focus:text-accent-foreground`<br><small>`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`<br>`DropdownMenuItem.vue:18` `<DropdownMenuItem>`<br>`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`</small> | 6 | 2 |
| `empty` | 无 | 无 | 0 | 0 |
| `field` | 无 | 无 | 0 | 0 |
| `form` | 无 | 无 | 0 | 0 |
| `hover-card` | `animate-in`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small><br><br>`border-gray-300`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small><br><br>`overflow-visible`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small><br><br>`px-3`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small><br><br>`py-2`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small><br><br>`rounded-[4px]`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small><br><br>`text-sm`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small> | `data-[state=open]:animate-in`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small><br><br>`data-[state=open]:fade-in-0`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small><br><br>`data-[state=open]:zoom-in-95`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small><br><br>`p-4`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small><br><br>`rounded-md`<br><small>`HoverCardContent.vue:28` `<HoverCardContent>`</small> | 1 | 2 |
| `input` | `bg-[var(--gray-0)]`<br><small>`Input.vue:49` `<input>`</small><br><br>`disabled:bg-[var(--gray-200)]`<br><small>`Input.vue:49` `<input>`</small><br><br>`disabled:opacity-100`<br><small>`Input.vue:49` `<input>`</small><br><br>`disabled:text-[var(--gray-400)]`<br><small>`Input.vue:49` `<input>`</small><br><br>`enabled:hover:border-primary`<br><small>`Input.vue:49` `<input>`</small><br><br>`file:font-normal`<br><small>`Input.vue:49` `<input>`</small><br><br>`file:text-[14px]`<br><small>`Input.vue:49` `<input>`</small><br><br>`focus-visible:border-primary`<br><small>`Input.vue:49` `<input>`</small><br><br>`focus-visible:caret-primary`<br><small>`Input.vue:49` `<input>`</small><br><br>`focus-visible:ring-0`<br><small>`Input.vue:49` `<input>`</small><br><br>`h-8`<br><small>`Input.vue:49` `<input>`</small><br><br>`leading-[1.5]`<br><small>`Input.vue:49` `<input>`</small><br><br>`min-h-[30px]`<br><small>`Input.vue:49` `<input>`</small><br><br>`outline-none`<br><small>`Input.vue:49` `<input>`</small><br><br>`placeholder:text-[#C3C7CB]`<br><small>`Input.vue:49` `<input>`</small><br><br>`py-0`<br><small>`Input.vue:49` `<input>`</small><br><br>`rounded-[4px]`<br><small>`Input.vue:49` `<input>`</small><br><br>`shadow-none`<br><small>`Input.vue:49` `<input>`</small><br><br>`text-[14px]`<br><small>`Input.vue:49` `<input>`</small><br><br>`text-foreground`<br><small>`Input.vue:49` `<input>`</small> | `bg-background`<br><small>`Input.vue:23` `<input>`</small><br><br>`disabled:opacity-50`<br><small>`Input.vue:23` `<input>`</small><br><br>`file:font-medium`<br><small>`Input.vue:23` `<input>`</small><br><br>`file:text-sm`<br><small>`Input.vue:23` `<input>`</small><br><br>`focus-visible:ring-2`<br><small>`Input.vue:23` `<input>`</small><br><br>`focus-visible:ring-offset-2`<br><small>`Input.vue:23` `<input>`</small><br><br>`focus-visible:ring-ring`<br><small>`Input.vue:23` `<input>`</small><br><br>`h-10`<br><small>`Input.vue:23` `<input>`</small><br><br>`placeholder:text-muted-foreground`<br><small>`Input.vue:23` `<input>`</small><br><br>`py-2`<br><small>`Input.vue:23` `<input>`</small><br><br>`ring-offset-background`<br><small>`Input.vue:23` `<input>`</small><br><br>`rounded-md`<br><small>`Input.vue:23` `<input>`</small><br><br>`text-sm`<br><small>`Input.vue:23` `<input>`</small> | 1 | 8 |
| `input-group` | `enabled:hover:z-10`<br><small>`InputGroupInput.vue:15` `<Input>`</small><br><br>`focus`<br><small>`InputGroup.vue:24` `<div>`</small><br><br>`focus-visible:z-10`<br><small>`InputGroupInput.vue:15` `<Input>`</small><br><br>`focus-within:border-primary`<br><small>`InputGroup.vue:24` `<div>`</small><br><br>`focus-within:z-10`<br><small>`InputGroup.vue:24` `<div>`</small><br><br>`font-normal`<br><small>`InputGroupText.vue:13` `<span>`<br>`index.ts:14` `cva(...)`</small><br><br>`hover`<br><small>`InputGroup.vue:24` `<div>`</small><br><br>`hover:border-primary`<br><small>`InputGroup.vue:24` `<div>`</small><br><br>`hover:z-10`<br><small>`InputGroup.vue:24` `<div>`</small><br><br>`leading-[1.5]`<br><small>`InputGroupText.vue:13` `<span>`</small><br><br>`rounded-[4px]`<br><small>`InputGroup.vue:24` `<div>`</small><br><br>`text-[14px]`<br><small>`InputGroupText.vue:13` `<span>`</small><br><br>`text-foreground`<br><small>`InputGroupText.vue:13` `<span>`</small><br><br>`z-10`<br><small>`InputGroupInput.vue:15` `<Input>`</small> | `dark:bg-input/30`<br><small>`InputGroup.vue:14` `<div>`</small><br><br>`focus-visible:ring-0`<br><small>`InputGroupInput.vue:14` `<Input>`<br>`InputGroupTextarea.vue:14` `<Textarea>`</small><br><br>`focus-visible:ring-transparent`<br><small>`InputGroupInput.vue:14` `<Input>`<br>`InputGroupTextarea.vue:14` `<Textarea>`</small><br><br>`font-medium`<br><small>`index.ts:14` `cva(...)`</small><br><br>`h-10`<br><small>`InputGroup.vue:14` `<div>`</small><br><br>`has-[[data-slot=input-group-control]:focus-visible]:ring-2`<br><small>`InputGroup.vue:14` `<div>`</small><br><br>`has-[[data-slot=input-group-control]:focus-visible]:ring-offset-2`<br><small>`InputGroup.vue:14` `<div>`</small><br><br>`has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background`<br><small>`InputGroup.vue:14` `<div>`</small><br><br>`has-[[data-slot=input-group-control]:focus-visible]:ring-ring`<br><small>`InputGroup.vue:14` `<div>`</small><br><br>`ring-offset-transparent`<br><small>`InputGroupInput.vue:14` `<Input>`<br>`InputGroupTextarea.vue:14` `<Textarea>`</small> | 1 | 0 |
| `item` | 无 | 无 | 0 | 0 |
| `kbd` | 无 | 无 | 0 | 0 |
| `label` | `font-normal`<br><small>`Label.vue:16` `<Label>`</small><br><br>`leading-[1.5]`<br><small>`Label.vue:16` `<Label>`</small><br><br>`peer-disabled:opacity-100`<br><small>`Label.vue:16` `<Label>`</small><br><br>`peer-disabled:text-[var(--gray-400)]`<br><small>`Label.vue:16` `<Label>`</small><br><br>`text-[14px]`<br><small>`Label.vue:16` `<Label>`</small><br><br>`text-foreground`<br><small>`Label.vue:16` `<Label>`</small> | `font-medium`<br><small>`Label.vue:16` `<Label>`</small><br><br>`leading-none`<br><small>`Label.vue:16` `<Label>`</small><br><br>`peer-disabled:opacity-70`<br><small>`Label.vue:16` `<Label>`</small><br><br>`text-sm`<br><small>`Label.vue:16` `<Label>`</small> | 1 | 0 |
| `menubar` | `[&_svg:not([class*=\`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`[&_svg]:pointer-events-none`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`[&:not([data-disabled])]:focus-visible:ring-0`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`[&:not([data-disabled])]:focus:bg-accent`<br><small>`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`<br>`MenubarItem.vue:23` `<MenubarItem>`<br>`MenubarRadioItem.vue:24` `<MenubarRadioItem>`<br>`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`</small><br><br>`[&:not([data-disabled])]:focus:text-accent-foreground`<br><small>`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`<br>`MenubarItem.vue:23` `<MenubarItem>`<br>`MenubarRadioItem.vue:24` `<MenubarRadioItem>`<br>`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`</small><br><br>`[&:not([data-disabled])]:hover:bg-muted`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`border-gray-300`<br><small>`Menubar.vue:22` `<MenubarRoot>`<br>`MenubarContent.vue:30` `<MenubarContent>`<br>`MenubarSubContent.vue:25` `<MenubarSubContent>`</small><br><br>`border-input`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`cursor-pointer`<br><small>`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`<br>`MenubarItem.vue:23` `<MenubarItem>`<br>`MenubarRadioItem.vue:24` `<MenubarRadioItem>`<br>`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`<br>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`data-[disabled]:cursor-not-allowed`<br><small>`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`<br>`MenubarItem.vue:23` `<MenubarItem>`<br>`MenubarRadioItem.vue:24` `<MenubarRadioItem>`<br>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`data-[state=open]:bg-muted`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`font-normal`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`gap-2`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`h-8`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`leading-[1.5]`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`px-4`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`rounded-[4px]`<br><small>`MenubarContent.vue:30` `<MenubarContent>`<br>`MenubarSubContent.vue:25` `<MenubarSubContent>`</small><br><br>`shadow-xs`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`size-\`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`text-[14px]`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`text-foreground`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`transition-colors`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`z-0`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small> | `cursor-default`<br><small>`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`<br>`MenubarItem.vue:23` `<MenubarItem>`<br>`MenubarRadioItem.vue:24` `<MenubarRadioItem>`<br>`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`<br>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`data-[disabled]:pointer-events-none`<br><small>`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`<br>`MenubarItem.vue:23` `<MenubarItem>`<br>`MenubarRadioItem.vue:24` `<MenubarRadioItem>`</small><br><br>`focus:bg-accent`<br><small>`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`<br>`MenubarItem.vue:23` `<MenubarItem>`<br>`MenubarRadioItem.vue:24` `<MenubarRadioItem>`<br>`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`<br>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`focus:text-accent-foreground`<br><small>`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`<br>`MenubarItem.vue:23` `<MenubarItem>`<br>`MenubarRadioItem.vue:24` `<MenubarRadioItem>`<br>`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`<br>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`font-medium`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small><br><br>`px-3`<br><small>`MenubarTrigger.vue:18` `<MenubarTrigger>`</small> | 8 | 0 |
| `navigation-menu` | `cursor-pointer`<br><small>`index.ts:13` `cva(...)`</small><br><br>`disabled:cursor-not-allowed`<br><small>`index.ts:13` `cva(...)`</small><br><br>`enabled:focus:bg-accent`<br><small>`index.ts:13` `cva(...)`</small><br><br>`enabled:focus:text-accent-foreground`<br><small>`index.ts:13` `cva(...)`</small><br><br>`enabled:hover:bg-accent`<br><small>`index.ts:13` `cva(...)`</small><br><br>`enabled:hover:text-accent-foreground`<br><small>`index.ts:13` `cva(...)`</small> | `disabled:pointer-events-none`<br><small>`index.ts:13` `cva(...)`</small><br><br>`focus:bg-accent`<br><small>`index.ts:13` `cva(...)`</small><br><br>`focus:text-accent-foreground`<br><small>`index.ts:13` `cva(...)`</small><br><br>`hover:bg-accent`<br><small>`index.ts:13` `cva(...)`</small><br><br>`hover:text-accent-foreground`<br><small>`index.ts:13` `cva(...)`</small> | 1 | 1 |
| `number-field` | `[&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-8`<br><small>`NumberFieldContent.vue:11` `<div>`</small><br><br>`[&>[data-slot=input]]:has-[[data-slot=increment]]:pr-8`<br><small>`NumberFieldContent.vue:11` `<div>`</small><br><br>`bg-[var(--gray-0)]`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`cursor-pointer`<br><small>`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`<br>`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`</small><br><br>`disabled:bg-[var(--gray-200)]`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`disabled:opacity-100`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`disabled:text-[var(--gray-400)]`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`enabled:hover:border-primary`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`focus-visible:border-primary`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`focus-visible:caret-primary`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`focus-visible:ring-0`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`h-8`<br><small>`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`<br>`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`<br>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`items-center`<br><small>`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`<br>`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`</small><br><br>`justify-center`<br><small>`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`<br>`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`</small><br><br>`leading-[1.5]`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`min-h-[30px]`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`outline-none`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`placeholder:text-[#C3C7CB]`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`px-3`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`py-0`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`rounded-[4px]`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`shadow-none`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`text-[14px]`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`text-foreground`<br><small>`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`<br>`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`<br>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`top-0`<br><small>`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`<br>`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`</small><br><br>`w-8`<br><small>`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`<br>`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`</small> | `[&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5`<br><small>`NumberFieldContent.vue:11` `<div>`</small><br><br>`[&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5`<br><small>`NumberFieldContent.vue:11` `<div>`</small><br><br>`bg-background`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`disabled:opacity-50`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`focus-visible:ring-2`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`focus-visible:ring-offset-2`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`focus-visible:ring-ring`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`h-10`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`p-3`<br><small>`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`<br>`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`</small><br><br>`placeholder:text-muted-foreground`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`py-2`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`ring-offset-background`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`rounded-md`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`text-sm`<br><small>`NumberFieldInput.vue:14` `<NumberFieldInput>`</small><br><br>`top-1/2`<br><small>`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`<br>`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`</small> | 4 | 7 |
| `pagination` | 无 | 无 | 0 | 0 |
| `pin-input` | `-ml-px`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`bg-[var(--gray-0)]`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`border`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`disabled:bg-[var(--gray-200)]`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`disabled:cursor-not-allowed`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`disabled:opacity-100`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`disabled:text-[var(--gray-400)]`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`enabled:hover:border-primary`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`first:ml-0`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`first:rounded-l-[4px]`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`focus-visible:border-primary`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`focus-visible:caret-primary`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`focus-visible:outline-none`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`focus-visible:ring`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`focus-visible:ring-ring`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`h-8`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`last:rounded-r-[4px]`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`leading-[1.5]`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`min-h-[30px]`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`outline-none`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`py-0`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`shadow-none`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`text-[14px]`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`text-foreground`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`w-8`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small> | `border-r`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`border-y`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`first:border-l`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`first:rounded-l-md`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`focus:outline-none`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`focus:ring-2`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`focus:ring-ring`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`h-10`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`last:rounded-r-md`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`text-sm`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small><br><br>`w-10`<br><small>`PinInputSlot.vue:16` `<PinInputInput>`</small> | 1 | 3 |
| `popover` | `animate-in`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small><br><br>`border-gray-300`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small><br><br>`px-3`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small><br><br>`py-2`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small><br><br>`rounded-[4px]`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small><br><br>`text-sm`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small> | `data-[state=open]:animate-in`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small><br><br>`data-[state=open]:fade-in-0`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small><br><br>`data-[state=open]:zoom-in-95`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small><br><br>`p-4`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small><br><br>`rounded-md`<br><small>`PopoverContent.vue:34` `<PopoverContent>`</small> | 1 | 2 |
| `progress` | `h-[6px]`<br><small>`Progress.vue:24` `<ProgressRoot>`</small> | `h-4`<br><small>`Progress.vue:24` `<ProgressRoot>`</small> | 1 | 0 |
| `radio-group` | 无 | 无 | 0 | 0 |
| `range-calendar` | `[&[data-selection-end]:not([data-disabled])]:focus:bg-primary`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`[&[data-selection-end]:not([data-disabled])]:focus:text-primary-foreground`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`[&[data-selection-end]:not([data-disabled])]:hover:bg-primary`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`[&[data-selection-end]:not([data-disabled])]:hover:text-primary-foreground`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`[&[data-selection-start]:not([data-disabled])]:focus:bg-primary`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`[&[data-selection-start]:not([data-disabled])]:focus:text-primary-foreground`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`[&[data-selection-start]:not([data-disabled])]:hover:bg-primary`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`[&[data-selection-start]:not([data-disabled])]:hover:text-primary-foreground`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`enabled:hover:opacity-100`<br><small>`RangeCalendarNextButton.vue:19` `<RangeCalendarNext>`<br>`RangeCalendarPrevButton.vue:19` `<RangeCalendarPrev>`</small> | `data-[selection-end]:focus:bg-primary`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`data-[selection-end]:focus:text-primary-foreground`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`data-[selection-end]:hover:bg-primary`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`data-[selection-end]:hover:text-primary-foreground`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`data-[selection-start]:focus:bg-primary`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`data-[selection-start]:focus:text-primary-foreground`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`data-[selection-start]:hover:bg-primary`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`data-[selection-start]:hover:text-primary-foreground`<br><small>`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`</small><br><br>`hover:opacity-100`<br><small>`RangeCalendarNextButton.vue:19` `<RangeCalendarNext>`<br>`RangeCalendarPrevButton.vue:19` `<RangeCalendarPrev>`</small> | 3 | 2 |
| `resizable` | 无 | 无 | 0 | 0 |
| `scroll-area` | `bg-[hsl(var(--scrollbar-thumb))]`<br><small>`ScrollBar.vue:26` `<ScrollAreaThumb>`</small><br><br>`h-[var(--scrollbar-size)]`<br><small>`ScrollBar.vue:18` `<ScrollAreaScrollbar>`</small><br><br>`hover:bg-[hsl(var(--scrollbar-thumb-hover))]`<br><small>`ScrollBar.vue:26` `<ScrollAreaThumb>`</small><br><br>`w-[var(--scrollbar-size)]`<br><small>`ScrollBar.vue:18` `<ScrollAreaScrollbar>`</small> | `bg-border`<br><small>`ScrollBar.vue:26` `<ScrollAreaThumb>`</small><br><br>`h-2.5`<br><small>`ScrollBar.vue:18` `<ScrollAreaScrollbar>`</small><br><br>`w-2.5`<br><small>`ScrollBar.vue:18` `<ScrollAreaScrollbar>`</small> | 2 | 0 |
| `select` | `[&:not([data-disabled])]:focus:bg-gray-400/30`<br><small>`SelectItem.vue:24` `<SelectItem>`</small><br><br>`[&:not([data-disabled])]:focus:text-gray-900`<br><small>`SelectItem.vue:24` `<SelectItem>`</small><br><br>`[&:not([data-disabled])]:hover:bg-gray-400/30`<br><small>`SelectItem.vue:24` `<SelectItem>`</small><br><br>`[&>span]:font-normal`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`[&>span]:leading-[1.5]`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`[&>span]:text-[14px]`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`bg-[var(--gray-0)]`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`border-gray-300`<br><small>`SelectContent.vue:37` `<SelectContent>`</small><br><br>`cursor-pointer`<br><small>`SelectItem.vue:24` `<SelectItem>`<br>`SelectScrollDownButton.vue:17` `<SelectScrollDownButton>`<br>`SelectScrollUpButton.vue:17` `<SelectScrollUpButton>`</small><br><br>`data-[disabled]:cursor-not-allowed`<br><small>`SelectItem.vue:24` `<SelectItem>`</small><br><br>`data-[placeholder]:text-[#C3C7CB]`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`disabled:bg-[var(--gray-200)]`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`disabled:opacity-100`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`disabled:text-[var(--gray-400)]`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`enabled:hover:border-primary`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`focus-visible:border-primary`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`focus-visible:outline-none`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`focus-visible:ring-0`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`font-normal`<br><small>`SelectItem.vue:24` `<SelectItem>`<br>`SelectLabel.vue:11` `<SelectLabel>`<br>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`h-8`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`leading-[1.5]`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`min-h-[30px]`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`ml-auto`<br><small>`SelectItem.vue:31` `<span>`</small><br><br>`order-last`<br><small>`SelectItem.vue:31` `<span>`</small><br><br>`px-1`<br><small>`SelectContent.vue:37` `<SelectContent>`</small><br><br>`px-2`<br><small>`SelectItem.vue:24` `<SelectItem>`<br>`SelectLabel.vue:11` `<SelectLabel>`</small><br><br>`py-0`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`rounded-[4px]`<br><small>`SelectContent.vue:37` `<SelectContent>`<br>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`shadow-none`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`text-[14px]`<br><small>`SelectItem.vue:24` `<SelectItem>`<br>`SelectLabel.vue:11` `<SelectLabel>`<br>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`text-foreground`<br><small>`SelectTrigger.vue:25` `<SelectTrigger>`</small><br><br>`text-gray-500`<br><small>`SelectLabel.vue:11` `<SelectLabel>`</small><br><br>`text-gray-900`<br><small>`SelectItem.vue:24` `<SelectItem>`</small><br><br>`text-left`<br><small>`SelectItem.vue:24` `<SelectItem>`<br>`SelectLabel.vue:11` `<SelectLabel>`</small> | `absolute`<br><small>`SelectItem.vue:31` `<span>`</small><br><br>`bg-background`<br><small>`SelectTrigger.vue:19` `<SelectTrigger>`</small><br><br>`cursor-default`<br><small>`SelectItem.vue:24` `<SelectItem>`<br>`SelectScrollDownButton.vue:17` `<SelectScrollDownButton>`<br>`SelectScrollUpButton.vue:17` `<SelectScrollUpButton>`</small><br><br>`data-[disabled]:pointer-events-none`<br><small>`SelectItem.vue:24` `<SelectItem>`</small><br><br>`data-[placeholder]:text-muted-foreground`<br><small>`SelectTrigger.vue:19` `<SelectTrigger>`</small><br><br>`disabled:opacity-50`<br><small>`SelectTrigger.vue:19` `<SelectTrigger>`</small><br><br>`focus:bg-accent`<br><small>`SelectItem.vue:24` `<SelectItem>`</small><br><br>`focus:outline-none`<br><small>`SelectTrigger.vue:19` `<SelectTrigger>`</small><br><br>`focus:ring-2`<br><small>`SelectTrigger.vue:19` `<SelectTrigger>`</small><br><br>`focus:ring-offset-2`<br><small>`SelectTrigger.vue:19` `<SelectTrigger>`</small><br><br>`focus:ring-ring`<br><small>`SelectTrigger.vue:19` `<SelectTrigger>`</small><br><br>`focus:text-accent-foreground`<br><small>`SelectItem.vue:24` `<SelectItem>`</small><br><br>`font-semibold`<br><small>`SelectLabel.vue:11` `<SelectLabel>`</small><br><br>`h-10`<br><small>`SelectTrigger.vue:19` `<SelectTrigger>`</small><br><br>`left-2`<br><small>`SelectItem.vue:31` `<span>`</small><br><br>`p-1`<br><small>`SelectContent.vue:43` `<SelectViewport>`<br>`SelectGroup.vue:14` `<SelectGroup>`</small><br><br>`pl-8`<br><small>`SelectItem.vue:24` `<SelectItem>`<br>`SelectLabel.vue:11` `<SelectLabel>`</small><br><br>`pr-2`<br><small>`SelectItem.vue:24` `<SelectItem>`<br>`SelectLabel.vue:11` `<SelectLabel>`</small><br><br>`ring-offset-background`<br><small>`SelectTrigger.vue:19` `<SelectTrigger>`</small><br><br>`rounded-md`<br><small>`SelectContent.vue:34` `<SelectContent>`<br>`SelectTrigger.vue:19` `<SelectTrigger>`</small> | 8 | 9 |
| `separator` | 无 | 无 | 0 | 0 |
| `sheet` | `bg-overlay`<br><small>`SheetContent.vue:38` `<DialogOverlay>`</small><br><br>`border-gray-200`<br><small>`SheetFooter.vue:10` `<div>`<br>`SheetHeader.vue:10` `<div>`</small><br><br>`cursor-pointer`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`disabled:cursor-not-allowed`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`enabled:focus-visible:ring-2`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`enabled:focus-visible:ring-offset-2`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`enabled:focus-visible:ring-ring`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`enabled:hover:opacity-100`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`font-bold`<br><small>`SheetTitle.vue:15` `<DialogTitle>`</small><br><br>`h-6`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`items-center`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`justify-center`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`leading-[1.4]`<br><small>`SheetTitle.vue:15` `<DialogTitle>`</small><br><br>`leading-[26px]`<br><small>`SheetHeader.vue:10` `<div>`</small><br><br>`mt-auto`<br><small>`SheetFooter.vue:10` `<div>`</small><br><br>`px-0`<br><small>`SheetContent.vue:41` `<DialogContent>`</small><br><br>`px-6`<br><small>`SheetFooter.vue:10` `<div>`<br>`SheetHeader.vue:10` `<div>`</small><br><br>`py-0`<br><small>`SheetContent.vue:41` `<DialogContent>`</small><br><br>`py-4`<br><small>`SheetFooter.vue:10` `<div>`<br>`SheetHeader.vue:10` `<div>`</small><br><br>`right-6`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`text-[18px]`<br><small>`SheetTitle.vue:15` `<DialogTitle>`</small><br><br>`text-[var(--gray-900)]`<br><small>`SheetTitle.vue:15` `<DialogTitle>`</small><br><br>`w-6`<br><small>`SheetContent.vue:47` `<DialogClose>`</small> | `bg-black/80`<br><small>`SheetContent.vue:38` `<DialogOverlay>`</small><br><br>`disabled:pointer-events-none`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`focus:ring-2`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`focus:ring-offset-2`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`focus:ring-ring`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`font-semibold`<br><small>`SheetTitle.vue:15` `<DialogTitle>`</small><br><br>`hover:opacity-100`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`p-6`<br><small>`index.ts:14` `cva(...)`</small><br><br>`right-4`<br><small>`SheetContent.vue:47` `<DialogClose>`</small><br><br>`text-foreground`<br><small>`SheetTitle.vue:15` `<DialogTitle>`</small><br><br>`text-lg`<br><small>`SheetTitle.vue:15` `<DialogTitle>`</small> | 6 | 1 |
| `sidebar` | `[&:not([aria-disabled=true])[data-state=open]]:hover:bg-sidebar-accent`<br><small>`index.ts:39` `cva(...)`</small><br><br>`[&:not([aria-disabled=true])[data-state=open]]:hover:text-sidebar-accent-foreground`<br><small>`index.ts:39` `cva(...)`</small><br><br>`[&:not([aria-disabled=true])]:active:bg-sidebar-accent`<br><small>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`</small><br><br>`[&:not([aria-disabled=true])]:active:text-sidebar-accent-foreground`<br><small>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`</small><br><br>`[&:not([aria-disabled=true])]:hover:bg-sidebar-accent`<br><small>`SidebarGroupAction.vue:17` `<Primitive>`<br>`SidebarMenuAction.vue:18` `<Primitive>`<br>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`<br>`index.ts:43` `variants`<br>`index.ts:45` `样式字符串`</small><br><br>`[&:not([aria-disabled=true])]:hover:shadow-[0_0_0_1px_var(--sidebar-accent)]`<br><small>`index.ts:45` `样式字符串`</small><br><br>`[&:not([aria-disabled=true])]:hover:text-sidebar-accent-foreground`<br><small>`SidebarGroupAction.vue:17` `<Primitive>`<br>`SidebarMenuAction.vue:18` `<Primitive>`<br>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`<br>`index.ts:43` `variants`<br>`index.ts:45` `样式字符串`</small><br><br>`aria-disabled:cursor-not-allowed`<br><small>`SidebarGroupAction.vue:17` `<Primitive>`<br>`SidebarMenuAction.vue:18` `<Primitive>`<br>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`</small><br><br>`cursor-pointer`<br><small>`SidebarGroupAction.vue:17` `<Primitive>`<br>`SidebarMenuAction.vue:18` `<Primitive>`<br>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`</small><br><br>`disabled:cursor-not-allowed`<br><small>`SidebarGroupAction.vue:17` `<Primitive>`<br>`SidebarMenuAction.vue:18` `<Primitive>`<br>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`</small><br><br>`enabled:hover:after:bg-sidebar-border`<br><small>`SidebarRail.vue:19` `<button>`</small><br><br>`focus-visible:ring-0`<br><small>`SidebarInput.vue:14` `<Input>`</small><br><br>`group-data-[collapsible=offcanvas]:enabled:hover:bg-sidebar`<br><small>`SidebarRail.vue:19` `<button>`</small> | `active:bg-sidebar-accent`<br><small>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`</small><br><br>`active:text-sidebar-accent-foreground`<br><small>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`</small><br><br>`aria-disabled:pointer-events-none`<br><small>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`</small><br><br>`data-[state=open]:hover:bg-sidebar-accent`<br><small>`index.ts:39` `cva(...)`</small><br><br>`data-[state=open]:hover:text-sidebar-accent-foreground`<br><small>`index.ts:39` `cva(...)`</small><br><br>`disabled:pointer-events-none`<br><small>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`</small><br><br>`focus-visible:ring-sidebar-ring`<br><small>`SidebarInput.vue:14` `<Input>`</small><br><br>`group-data-[collapsible=offcanvas]:hover:bg-sidebar`<br><small>`SidebarRail.vue:19` `<button>`</small><br><br>`hover:after:bg-sidebar-border`<br><small>`SidebarRail.vue:19` `<button>`</small><br><br>`hover:bg-sidebar-accent`<br><small>`SidebarGroupAction.vue:17` `<Primitive>`<br>`SidebarMenuAction.vue:18` `<Primitive>`<br>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`<br>`index.ts:43` `variants`<br>`index.ts:45` `variants`</small><br><br>`hover:shadow-[0_0_0_1px_var(--sidebar-accent)]`<br><small>`index.ts:45` `variants`</small><br><br>`hover:text-sidebar-accent-foreground`<br><small>`SidebarGroupAction.vue:17` `<Primitive>`<br>`SidebarMenuAction.vue:18` `<Primitive>`<br>`SidebarMenuSubButton.vue:24` `<Primitive>`<br>`index.ts:39` `cva(...)`<br>`index.ts:43` `variants`<br>`index.ts:45` `variants`</small> | 8 | 12 |
| `skeleton` | 无 | 无 | 0 | 0 |
| `slider` | `cursor-pointer`<br><small>`Slider.vue:30` `<SliderThumb>`</small><br><br>`data-[orientation=vertical]:w-[6px]`<br><small>`Slider.vue:24` `<SliderTrack>`</small><br><br>`disabled:cursor-not-allowed`<br><small>`Slider.vue:30` `<SliderThumb>`</small><br><br>`h-[6px]`<br><small>`Slider.vue:24` `<SliderTrack>`</small> | `disabled:pointer-events-none`<br><small>`Slider.vue:30` `<SliderThumb>`</small><br><br>`h-2`<br><small>`Slider.vue:24` `<SliderTrack>`</small> | 2 | 1 |
| `sonner` | 无 | 无 | 0 | 0 |
| `spinner` | 无 | 无 | 0 | 0 |
| `stepper` | `data-[disabled]:cursor-not-allowed`<br><small>`StepperItem.vue:19` `<StepperItem>`</small><br><br>`focus-visible:outline-none`<br><small>`StepperTrigger.vue:19` `<StepperTrigger>`</small><br><br>`focus-visible:ring-0`<br><small>`StepperTrigger.vue:19` `<StepperTrigger>`</small> | `data-[disabled]:pointer-events-none`<br><small>`StepperItem.vue:19` `<StepperItem>`</small> | 2 | 0 |
| `switch` | 无 | 无 | 0 | 0 |
| `table` | 无 | 无 | 0 | 0 |
| `tabs` | `cursor-pointer`<br><small>`TabsTrigger.vue:18` `<TabsTrigger>`</small><br><br>`disabled:cursor-not-allowed`<br><small>`TabsTrigger.vue:18` `<TabsTrigger>`</small><br><br>`rounded-[4px]`<br><small>`TabsList.vue:16` `<TabsList>`<br>`TabsTrigger.vue:18` `<TabsTrigger>`</small> | `disabled:pointer-events-none`<br><small>`TabsTrigger.vue:18` `<TabsTrigger>`</small><br><br>`rounded-md`<br><small>`TabsList.vue:16` `<TabsList>`</small><br><br>`rounded-sm`<br><small>`TabsTrigger.vue:18` `<TabsTrigger>`</small> | 2 | 1 |
| `tags-input` | `bg-[var(--gray-0)]`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`bg-gray-200/80`<br><small>`TagsInputItem.vue:16` `<TagsInputItem>`</small><br><br>`disabled:bg-[var(--gray-200)]`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`disabled:cursor-not-allowed`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`<br>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`disabled:opacity-100`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`disabled:text-[var(--gray-400)]`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`enabled:hover:border-primary`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`focus-within:border-primary`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`h-[22px]`<br><small>`TagsInputItem.vue:16` `<TagsInputItem>`</small><br><br>`leading-[1.5]`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`<br>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`min-h-[30px]`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`<br>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`outline-none`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`<br>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`placeholder:text-[#C3C7CB]`<br><small>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`px-0`<br><small>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`py-0`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`<br>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`rounded-[2px]`<br><small>`TagsInputItem.vue:16` `<TagsInputItem>`</small><br><br>`rounded-[4px]`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`shadow-none`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`text-[14px]`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`<br>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`text-foreground`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`<br>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`w-full`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small> | `bg-background`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`bg-secondary`<br><small>`TagsInputItem.vue:16` `<TagsInputItem>`</small><br><br>`flex-wrap`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`h-6`<br><small>`TagsInputItem.vue:16` `<TagsInputItem>`</small><br><br>`min-h-6`<br><small>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`px-1`<br><small>`TagsInputInput.vue:16` `<TagsInputInput>`</small><br><br>`py-2`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small><br><br>`rounded-md`<br><small>`TagsInput.vue:17` `<TagsInputRoot>`</small> | 3 | 5 |
| `textarea` | `bg-[var(--gray-0)]`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`disabled:bg-[var(--gray-200)]`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`disabled:opacity-100`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`disabled:text-[var(--gray-400)]`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`enabled:hover:border-primary`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`focus-visible:border-primary`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`focus-visible:caret-primary`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`focus-visible:ring-0`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`leading-[1.5]`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`outline-none`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`overflow-y-auto`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`placeholder:text-[#C3C7CB]`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`py-1.5`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`resize-y`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`rounded-[4px]`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`shadow-none`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`text-[14px]`<br><small>`Textarea.vue:49` `<textarea>`</small><br><br>`text-foreground`<br><small>`Textarea.vue:49` `<textarea>`</small> | `bg-background`<br><small>`Textarea.vue:23` `<textarea>`</small><br><br>`disabled:opacity-50`<br><small>`Textarea.vue:23` `<textarea>`</small><br><br>`focus-visible:ring-2`<br><small>`Textarea.vue:23` `<textarea>`</small><br><br>`focus-visible:ring-offset-2`<br><small>`Textarea.vue:23` `<textarea>`</small><br><br>`focus-visible:ring-ring`<br><small>`Textarea.vue:23` `<textarea>`</small><br><br>`placeholder:text-muted-foreground`<br><small>`Textarea.vue:23` `<textarea>`</small><br><br>`py-2`<br><small>`Textarea.vue:23` `<textarea>`</small><br><br>`ring-offset-background`<br><small>`Textarea.vue:23` `<textarea>`</small><br><br>`rounded-md`<br><small>`Textarea.vue:23` `<textarea>`</small><br><br>`text-sm`<br><small>`Textarea.vue:23` `<textarea>`</small> | 1 | 6 |
| `toggle` | `cursor-pointer`<br><small>`index.ts:7` `cva(...)`</small><br><br>`disabled:cursor-not-allowed`<br><small>`index.ts:7` `cva(...)`</small><br><br>`enabled:hover:bg-accent`<br><small>`index.ts:13` `variants`</small><br><br>`enabled:hover:bg-muted`<br><small>`index.ts:7` `cva(...)`</small><br><br>`enabled:hover:text-accent-foreground`<br><small>`index.ts:13` `variants`</small><br><br>`enabled:hover:text-muted-foreground`<br><small>`index.ts:7` `cva(...)`</small><br><br>`font-normal`<br><small>`index.ts:7` `cva(...)`</small><br><br>`h-7`<br><small>`index.ts:17` `样式字符串`</small><br><br>`h-8`<br><small>`index.ts:16` `样式字符串`</small><br><br>`leading-[initial]`<br><small>`index.ts:7` `cva(...)`</small><br><br>`min-w-7`<br><small>`index.ts:17` `样式字符串`</small><br><br>`min-w-8`<br><small>`index.ts:16` `样式字符串`</small><br><br>`px-4`<br><small>`index.ts:16` `样式字符串`<br>`index.ts:18` `样式字符串`</small><br><br>`rounded-sm`<br><small>`index.ts:7` `cva(...)`</small><br><br>`text-[14px]`<br><small>`index.ts:16` `样式字符串`<br>`index.ts:17` `样式字符串`</small><br><br>`text-[16px]`<br><small>`index.ts:18` `样式字符串`</small><br><br>`whitespace-nowrap`<br><small>`index.ts:7` `cva(...)`</small> | `disabled:pointer-events-none`<br><small>`index.ts:7` `cva(...)`</small><br><br>`font-medium`<br><small>`index.ts:7` `cva(...)`</small><br><br>`h-11`<br><small>`index.ts:18` `样式字符串`</small><br><br>`h-9`<br><small>`index.ts:17` `样式字符串`</small><br><br>`hover:bg-accent`<br><small>`index.ts:13` `variants`</small><br><br>`hover:bg-muted`<br><small>`index.ts:7` `cva(...)`</small><br><br>`hover:text-accent-foreground`<br><small>`index.ts:13` `variants`</small><br><br>`hover:text-muted-foreground`<br><small>`index.ts:7` `cva(...)`</small><br><br>`min-w-11`<br><small>`index.ts:18` `样式字符串`</small><br><br>`min-w-9`<br><small>`index.ts:17` `样式字符串`</small><br><br>`px-2.5`<br><small>`index.ts:17` `样式字符串`</small><br><br>`px-5`<br><small>`index.ts:18` `样式字符串`</small><br><br>`rounded-md`<br><small>`index.ts:7` `cva(...)`</small><br><br>`text-sm`<br><small>`index.ts:7` `cva(...)`</small> | 5 | 1 |
| `toggle-group` | 无 | 无 | 0 | 0 |
| `tooltip` | `border-gray-300`<br><small>`TooltipContent.vue:26` `<TooltipContent>`</small><br><br>`data-[side=bottom]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]`<br><small>`TooltipContent.vue:26` `<TooltipContent>`</small><br><br>`data-[side=left]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]`<br><small>`TooltipContent.vue:26` `<TooltipContent>`</small><br><br>`data-[side=right]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]`<br><small>`TooltipContent.vue:26` `<TooltipContent>`</small><br><br>`data-[side=top]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]`<br><small>`TooltipContent.vue:26` `<TooltipContent>`</small><br><br>`fill-popover`<br><small>`TooltipContent.vue:28` `<TooltipArrow>`</small><br><br>`overflow-visible`<br><small>`TooltipContent.vue:26` `<TooltipContent>`</small><br><br>`py-2`<br><small>`TooltipContent.vue:26` `<TooltipContent>`</small><br><br>`rounded-[4px]`<br><small>`TooltipContent.vue:26` `<TooltipContent>`</small><br><br>`stroke-gray-300`<br><small>`TooltipContent.vue:28` `<TooltipArrow>`</small><br><br>`z-[1]`<br><small>`TooltipContent.vue:28` `<TooltipArrow>`</small> | `overflow-hidden`<br><small>`TooltipContent.vue:25` `<TooltipContent>`</small><br><br>`py-1.5`<br><small>`TooltipContent.vue:25` `<TooltipContent>`</small><br><br>`rounded-md`<br><small>`TooltipContent.vue:25` `<TooltipContent>`</small> | 1 | 2 |

## Token 风险清单（registry/shadcn/default）

| 组件 | 文件 | 类 | 风险类型 | default 解决状态 | 建议 |
| --- | --- | --- | --- | --- | --- |
| `alert-dialog` | `AlertDialogContent.vue:28` | `border` | 语义 token 位置不匹配 | 已解决 | 弹窗或抽屉边框应使用明确边框 token，避免裸 border 依赖默认值。 |
| `breadcrumb` | `BreadcrumbLink.vue:16` | `hover:text-foreground` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `button` | `index.ts:7` | `disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `calendar` | `CalendarNextButton.vue:19` | `hover:opacity-100` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `calendar` | `CalendarPrevButton.vue:19` | `hover:opacity-100` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `combobox` | `ComboboxInput.vue:22` | `file:text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `combobox` | `ComboboxInput.vue:22` | `focus-visible:ring-1` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `combobox` | `ComboboxInput.vue:22` | `h-9` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `combobox` | `ComboboxInput.vue:22` | `py-1` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `combobox` | `ComboboxInput.vue:22` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `combobox` | `ComboboxInput.vue:22` | `text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `combobox` | `ComboboxList.vue:24` | `border` | 语义 token 位置不匹配 | 已解决 | 弹层内容边框应使用已验证的弹层边框 token，例如 border-gray-300。 |
| `combobox` | `ComboboxList.vue:24` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 弹层内容圆角应对齐 TooltipContent 基线，优先使用 rounded-[4px]。 |
| `command` | `CommandInput.vue:32` | `h-10` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `command` | `CommandInput.vue:32` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `command` | `CommandInput.vue:32` | `text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `context-menu` | `ContextMenuContent.vue:24` | `border` | 语义 token 位置不匹配 | 已解决 | 弹层内容边框应使用已验证的弹层边框 token，例如 border-gray-300。 |
| `context-menu` | `ContextMenuContent.vue:24` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 弹层内容圆角应对齐 TooltipContent 基线，优先使用 rounded-[4px]。 |
| `dialog` | `DialogContent.vue:30` | `border` | 语义 token 位置不匹配 | 已解决 | 弹窗或抽屉边框应使用明确边框 token，避免裸 border 依赖默认值。 |
| `dialog` | `DialogContent.vue:39` | `disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `drawer` | `DrawerContent.vue:19` | `border` | 语义 token 位置不匹配 | 已解决 | 弹窗或抽屉边框应使用明确边框 token，避免裸 border 依赖默认值。 |
| `drawer` | `DrawerOverlay.vue:14` | `bg-black/80` | 语义 token 位置不匹配 | 已解决 | 遮罩层应使用 bg-overlay，避免在组件中直接写黑色透明度。 |
| `dropdown-menu` | `DropdownMenuContent.vue:29` | `border` | 语义 token 位置不匹配 | 已解决 | 弹层内容边框应使用已验证的弹层边框 token，例如 border-gray-300。 |
| `dropdown-menu` | `DropdownMenuContent.vue:29` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 弹层内容圆角应对齐 TooltipContent 基线，优先使用 rounded-[4px]。 |
| `hover-card` | `HoverCardContent.vue:28` | `border` | 语义 token 位置不匹配 | 已解决 | 弹层内容边框应使用已验证的弹层边框 token，例如 border-gray-300。 |
| `hover-card` | `HoverCardContent.vue:28` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 弹层内容圆角应对齐 TooltipContent 基线，优先使用 rounded-[4px]。 |
| `input` | `Input.vue:23` | `file:text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `input` | `Input.vue:23` | `focus-visible:ring-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `input` | `Input.vue:23` | `h-10` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `input` | `Input.vue:23` | `py-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `input` | `Input.vue:23` | `ring-offset-background` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `input` | `Input.vue:23` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `input` | `Input.vue:23` | `text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `input` | `Input.vue:23` | `bg-background` | 语义 token 位置不匹配 | 已解决 | 输入类默认背景应与本项目输入基线保持一致，优先使用输入背景 token。 |
| `navigation-menu` | `index.ts:13` | `disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `number-field` | `NumberFieldInput.vue:14` | `focus-visible:ring-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `number-field` | `NumberFieldInput.vue:14` | `h-10` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `number-field` | `NumberFieldInput.vue:14` | `py-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `number-field` | `NumberFieldInput.vue:14` | `ring-offset-background` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `number-field` | `NumberFieldInput.vue:14` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `number-field` | `NumberFieldInput.vue:14` | `text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `number-field` | `NumberFieldInput.vue:14` | `bg-background` | 语义 token 位置不匹配 | 已解决 | 输入类默认背景应与本项目输入基线保持一致，优先使用输入背景 token。 |
| `pin-input` | `PinInputSlot.vue:16` | `focus:ring-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `pin-input` | `PinInputSlot.vue:16` | `h-10` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `pin-input` | `PinInputSlot.vue:16` | `text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `popover` | `PopoverContent.vue:34` | `border` | 语义 token 位置不匹配 | 已解决 | 弹层内容边框应使用已验证的弹层边框 token，例如 border-gray-300。 |
| `popover` | `PopoverContent.vue:34` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 弹层内容圆角应对齐 TooltipContent 基线，优先使用 rounded-[4px]。 |
| `range-calendar` | `RangeCalendarNextButton.vue:19` | `hover:opacity-100` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `range-calendar` | `RangeCalendarPrevButton.vue:19` | `hover:opacity-100` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `select` | `SelectContent.vue:34` | `border` | 语义 token 位置不匹配 | 已解决 | 弹层内容边框应使用已验证的弹层边框 token，例如 border-gray-300。 |
| `select` | `SelectContent.vue:34` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 弹层内容圆角应对齐 TooltipContent 基线，优先使用 rounded-[4px]。 |
| `select` | `SelectTrigger.vue:19` | `focus:ring-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `select` | `SelectTrigger.vue:19` | `h-10` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `select` | `SelectTrigger.vue:19` | `py-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `select` | `SelectTrigger.vue:19` | `ring-offset-background` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `select` | `SelectTrigger.vue:19` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `select` | `SelectTrigger.vue:19` | `text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `select` | `SelectTrigger.vue:19` | `bg-background` | 语义 token 位置不匹配 | 已解决 | 输入类默认背景应与本项目输入基线保持一致，优先使用输入背景 token。 |
| `sheet` | `SheetContent.vue:47` | `disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `sidebar` | `index.ts:39` | `aria-disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `sidebar` | `index.ts:39` | `disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `sidebar` | `SidebarInput.vue:14` | `focus-visible:ring-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `sidebar` | `SidebarInput.vue:14` | `bg-background` | 语义 token 位置不匹配 | 已解决 | 输入类默认背景应与本项目输入基线保持一致，优先使用输入背景 token。 |
| `sidebar` | `SidebarMenuAction.vue:18` | `hover:bg-sidebar-accent` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `sidebar` | `SidebarMenuAction.vue:18` | `hover:text-sidebar-accent-foreground` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `sidebar` | `SidebarMenuSubButton.vue:24` | `active:bg-sidebar-accent` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `sidebar` | `SidebarMenuSubButton.vue:24` | `active:text-sidebar-accent-foreground` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `sidebar` | `SidebarMenuSubButton.vue:24` | `aria-disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `sidebar` | `SidebarMenuSubButton.vue:24` | `disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `sidebar` | `SidebarMenuSubButton.vue:24` | `hover:bg-sidebar-accent` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `sidebar` | `SidebarMenuSubButton.vue:24` | `hover:text-sidebar-accent-foreground` | 交互状态未限定 enabled | 已解决 | 支持 disabled 的交互组件应使用 enabled:* 或等价条件限制 hover / focus / active 反馈。 |
| `slider` | `Slider.vue:30` | `disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `tabs` | `TabsTrigger.vue:18` | `disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `tags-input` | `TagsInput.vue:17` | `py-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `tags-input` | `TagsInput.vue:17` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `tags-input` | `TagsInput.vue:17` | `text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `tags-input` | `TagsInput.vue:17` | `bg-background` | 语义 token 位置不匹配 | 已解决 | 输入类默认背景应与本项目输入基线保持一致，优先使用输入背景 token。 |
| `tags-input` | `TagsInputInput.vue:16` | `text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `textarea` | `Textarea.vue:23` | `focus-visible:ring-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `textarea` | `Textarea.vue:23` | `py-2` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `textarea` | `Textarea.vue:23` | `ring-offset-background` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `textarea` | `Textarea.vue:23` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `textarea` | `Textarea.vue:23` | `text-sm` | 语义 token 位置不匹配 | 已解决 | 输入类组件在本项目中应对齐 Input 基线：h-8 / rounded-[4px] / text-[14px] / border-input / hover-focus border-primary / ring-0。 |
| `textarea` | `Textarea.vue:23` | `bg-background` | 语义 token 位置不匹配 | 已解决 | 输入类默认背景应与本项目输入基线保持一致，优先使用输入背景 token。 |
| `toggle` | `index.ts:7` | `disabled:pointer-events-none` | 语义 token 位置不匹配 | 已解决 | 禁用态不应让鼠标命中穿透组件本体，应保留 disabled:cursor-not-allowed。 |
| `tooltip` | `TooltipContent.vue:25` | `border` | 语义 token 位置不匹配 | 已解决 | 弹层内容边框应使用已验证的弹层边框 token，例如 border-gray-300。 |
| `tooltip` | `TooltipContent.vue:25` | `rounded-md` | 语义 token 位置不匹配 | 已解决 | 弹层内容圆角应对齐 TooltipContent 基线，优先使用 rounded-[4px]。 |

## 逐组件 Tailwind 类差异

<details open>
<summary><code>accordion</code>：新增 4 / 删除 2 / 同位置变更 2 / 风险 0</summary>

### default 新增类

- `border-gray-200`：`AccordionItem.vue:21` `<AccordionItem>`
- `cursor-pointer`：`AccordionTrigger.vue:24` `<AccordionTrigger>`
- `disabled:cursor-not-allowed`：`AccordionTrigger.vue:24` `<AccordionTrigger>`
- `py-1`：`AccordionTrigger.vue:24` `<AccordionTrigger>`

### default 删除类

- `hover:underline`：`AccordionTrigger.vue:21` `<AccordionTrigger>`
- `py-4`：`AccordionTrigger.vue:21` `<AccordionTrigger>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `AccordionItem.vue` default:21 / shadcn:18 | `border-gray-200` | 无 |
| `AccordionTrigger.vue` default:24 / shadcn:21 | `cursor-pointer` `disabled:cursor-not-allowed` `py-1` | `hover:underline` `py-4` |

</details>

<details open>
<summary><code>alert</code>：新增 4 / 删除 4 / 同位置变更 2 / 风险 0</summary>

### default 新增类

- `[&>svg]:text-red-500`：`index.ts:20` `variants`
- `border-gray-200`：`index.ts:14` `cva(...)`
- `border-red-500`：`index.ts:20` `variants`
- `text-red-500`：`index.ts:20` `variants`

### default 删除类

- `[&>svg]:text-destructive`：`index.ts:15` `variants`
- `border-destructive/50`：`index.ts:15` `variants`
- `dark:border-destructive`：`index.ts:15` `variants`
- `text-destructive`：`index.ts:15` `variants`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `index.ts` default:18 / shadcn:9 | `bg-background` `text-foreground` | `[&>svg]:absolute` `[&>svg]:left-4` `[&>svg]:text-foreground` `[&>svg]:top-4` `[&>svg+div]:translate-y-[-3px]` `[&>svg~*]:pl-7` `border` `p-4` `relative` `rounded-lg` `w-full` |
| `index.ts` default:20 / shadcn:13 | `[&>svg]:text-red-500` `border-red-500` `text-red-500` | `bg-background` `text-foreground` |

</details>

<details open>
<summary><code>alert-dialog</code>：新增 6 / 删除 5 / 同位置变更 4 / 风险 1</summary>

### default 新增类

- `bg-[#626c78]/50`：`AlertDialogContent.vue:24` `<AlertDialogOverlay>`
- `font-bold`：`AlertDialogTitle.vue:16` `<AlertDialogTitle>`
- `gap-y-1.5`：`AlertDialogHeader.vue:12` `<div>`
- `leading-[1.4]`：`AlertDialogTitle.vue:16` `<AlertDialogTitle>`
- `text-[16px]`：`AlertDialogTitle.vue:16` `<AlertDialogTitle>`
- `text-[var(--gray-900)]`：`AlertDialogTitle.vue:16` `<AlertDialogTitle>`

### default 删除类

- `bg-black/80`：`AlertDialogContent.vue:24` `<AlertDialogOverlay>`
- `border`：`AlertDialogContent.vue:28` `<AlertDialogContent>`
- `font-semibold`：`AlertDialogTitle.vue:16` `<AlertDialogTitle>`
- `gap-y-2`：`AlertDialogHeader.vue:12` `<div>`
- `text-lg`：`AlertDialogTitle.vue:16` `<AlertDialogTitle>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `AlertDialogContent.vue` default:24 / shadcn:24 | `bg-[#626c78]/50` | `bg-black/80` |
| `AlertDialogContent.vue` default:28 / shadcn:28 | 无 | `border` |
| `AlertDialogHeader.vue` default:12 / shadcn:12 | `gap-y-1.5` | `gap-y-2` |
| `AlertDialogTitle.vue` default:16 / shadcn:16 | `font-bold` `leading-[1.4]` `text-[16px]` `text-[var(--gray-900)]` | `font-semibold` `text-lg` |

</details>

<details>
<summary><code>aspect-ratio</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details>
<summary><code>avatar</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>badge</code>：新增 1 / 删除 1 / 同位置变更 4 / 风险 0</summary>

### default 新增类

- `font-normal`：`index.ts:12` `cva(...)`

### default 删除类

- `font-semibold`：`index.ts:7` `cva(...)`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `index.ts` default:17 / shadcn:7 | `bg-primary` `border-transparent` `hover:bg-primary/80` `text-primary-foreground` | `border` `focus:outline-none` `focus:ring-2` `focus:ring-offset-2` `focus:ring-ring` `font-semibold` `gap-1` `items-center` `px-2.5` `py-0.5` `rounded-full` `text-xs` `transition-colors` |
| `index.ts` default:19 / shadcn:12 | `bg-secondary` `hover:bg-secondary/80` `text-secondary-foreground` | `bg-primary` `hover:bg-primary/80` `text-primary-foreground` |
| `index.ts` default:21 / shadcn:14 | `bg-destructive` `hover:bg-destructive/80` `text-destructive-foreground` | `bg-secondary` `hover:bg-secondary/80` `text-secondary-foreground` |
| `index.ts` default:22 / shadcn:16 | `text-foreground` | `bg-destructive` `border-transparent` `hover:bg-destructive/80` `text-destructive-foreground` |

</details>

<details open>
<summary><code>breadcrumb</code>：新增 2 / 删除 1 / 同位置变更 1 / 风险 1</summary>

### default 新增类

- `cursor-pointer`：`BreadcrumbLink.vue:16` `<Primitive>`
- `enabled:hover:text-foreground`：`BreadcrumbLink.vue:16` `<Primitive>`

### default 删除类

- `hover:text-foreground`：`BreadcrumbLink.vue:16` `<Primitive>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `BreadcrumbLink.vue` default:16 / shadcn:16 | `cursor-pointer` `enabled:hover:text-foreground` | `hover:text-foreground` |

</details>

<details open>
<summary><code>button</code>：新增 22 / 删除 17 / 同位置变更 13 / 风险 1</summary>

### default 新增类

- `[&:not(:disabled):not([aria-disabled=true])]:hover:bg-accent`：`index.ts:15` `样式字符串`；`index.ts:18` `样式字符串`
- `[&:not(:disabled):not([aria-disabled=true])]:hover:bg-destructive/90`：`index.ts:13` `variants`
- `[&:not(:disabled):not([aria-disabled=true])]:hover:bg-primary/90`：`index.ts:11` `variants`
- `[&:not(:disabled):not([aria-disabled=true])]:hover:bg-secondary/80`：`index.ts:17` `样式字符串`
- `[&:not(:disabled):not([aria-disabled=true])]:hover:text-accent-foreground`：`index.ts:15` `样式字符串`；`index.ts:18` `样式字符串`
- `[&:not(:disabled):not([aria-disabled=true])]:hover:underline`：`index.ts:19` `样式字符串`
- `animate-spin`：`Button.vue:108` `<span>`
- `aria-disabled:cursor-not-allowed`：`index.ts:7` `cva(...)`
- `aria-disabled:opacity-50`：`index.ts:7` `cva(...)`
- `cursor-pointer`：`index.ts:7` `cva(...)`
- `disabled:cursor-not-allowed`：`index.ts:7` `cva(...)`
- `font-normal`：`index.ts:7` `cva(...)`
- `h-7`：`index.ts:23` `variant "sm"`
- `h-8`：`index.ts:22` `variant "default"`
- `leading-[initial]`：`index.ts:7` `cva(...)`
- `rounded-sm`：`index.ts:7` `cva(...)`；`index.ts:23` `variant "sm"`；`index.ts:24` `variant "lg"`
- `shrink-0`：`Button.vue:108` `<span>`
- `size-10`：`index.ts:27` `variant "icon-lg"`
- `size-7`：`index.ts:26` `variant "icon-sm"`
- `size-8`：`index.ts:25` `variant "icon"`
- `text-[14px]`：`index.ts:22` `variant "default"`；`index.ts:23` `variant "sm"`
- `text-[16px]`：`index.ts:24` `variant "lg"`

### default 删除类

- `disabled:pointer-events-none`：`index.ts:7` `cva(...)`
- `font-medium`：`index.ts:7` `cva(...)`
- `h-11`：`index.ts:24` `variant "lg"`
- `h-9`：`index.ts:23` `variant "sm"`
- `hover:bg-accent`：`index.ts:15` `样式字符串`；`index.ts:18` `样式字符串`
- `hover:bg-destructive/90`：`index.ts:13` `variants`
- `hover:bg-primary/90`：`index.ts:11` `variants`
- `hover:bg-secondary/80`：`index.ts:17` `样式字符串`
- `hover:text-accent-foreground`：`index.ts:15` `样式字符串`；`index.ts:18` `样式字符串`
- `hover:underline`：`index.ts:19` `样式字符串`
- `px-8`：`index.ts:24` `variant "lg"`
- `py-2`：`index.ts:22` `variant "default"`
- `rounded-md`：`index.ts:7` `cva(...)`；`index.ts:23` `variant "sm"`；`index.ts:24` `variant "lg"`
- `size-11`：`index.ts:27` `variant "icon-lg"`
- `size-9`：`index.ts:26` `variant "icon-sm"`
- `text-sm`：`index.ts:7` `cva(...)`
- `w-10`：`index.ts:25` `variant "icon"`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `index.ts` default:7 / shadcn:7 | `aria-disabled:cursor-not-allowed` `aria-disabled:opacity-50` `cursor-pointer` `disabled:cursor-not-allowed` `font-normal` `leading-[initial]` `rounded-sm` | `disabled:pointer-events-none` `font-medium` `rounded-md` `text-sm` |
| `index.ts` default:11 / shadcn:11 | `[&:not(:disabled):not([aria-disabled=true])]:hover:bg-primary/90` | `hover:bg-primary/90` |
| `index.ts` default:13 / shadcn:13 | `[&:not(:disabled):not([aria-disabled=true])]:hover:bg-destructive/90` | `hover:bg-destructive/90` |
| `index.ts` default:15 / shadcn:15 | `[&:not(:disabled):not([aria-disabled=true])]:hover:bg-accent` `[&:not(:disabled):not([aria-disabled=true])]:hover:text-accent-foreground` | `hover:bg-accent` `hover:text-accent-foreground` |
| `index.ts` default:17 / shadcn:17 | `[&:not(:disabled):not([aria-disabled=true])]:hover:bg-secondary/80` | `hover:bg-secondary/80` |
| `index.ts` default:18 / shadcn:18 | `[&:not(:disabled):not([aria-disabled=true])]:hover:bg-accent` `[&:not(:disabled):not([aria-disabled=true])]:hover:text-accent-foreground` | `hover:bg-accent` `hover:text-accent-foreground` |
| `index.ts` default:19 / shadcn:19 | `[&:not(:disabled):not([aria-disabled=true])]:hover:underline` | `hover:underline` |
| `index.ts` default:22 / shadcn:22 | `h-8` `text-[14px]` | `h-10` `py-2` |
| `index.ts` default:23 / shadcn:23 | `h-7` `rounded-sm` `text-[14px]` | `h-9` `rounded-md` |
| `index.ts` default:24 / shadcn:24 | `h-10` `px-4` `rounded-sm` `text-[16px]` | `h-11` `px-8` `rounded-md` |
| `index.ts` default:25 / shadcn:25 | `size-8` | `h-10` `w-10` |
| `index.ts` default:26 / shadcn:26 | `size-7` | `size-9` |
| `index.ts` default:27 / shadcn:27 | `size-10` | `size-11` |

</details>

<details open>
<summary><code>button-group</code>：新增 11 / 删除 3 / 同位置变更 2 / 风险 0</summary>

### default 新增类

- `[&>*:has(+[data-slot=input-group])]:border-r-transparent`：`index.ts:14` `variants`
- `border-input`：`ButtonGroupText.vue:26` `<Primitive>`
- `font-normal`：`ButtonGroupText.vue:26` `<Primitive>`
- `has-[>[data-slot=button-group][data-variant=group]]:gap-2`：`index.ts:9` `cva(...)`
- `has-[>[data-slot=input-group]]:[&>[data-slot=input-group]]:-ml-px`：`index.ts:14` `variants`
- `has-[>[data-slot=input-group]]:[&>[data-slot=input-group]]:!border-l`：`index.ts:14` `variants`
- `has-[>[data-slot=input-group]]:gap-2`：`index.ts:9` `cva(...)`
- `leading-[1.5]`：`ButtonGroupText.vue:26` `<Primitive>`
- `text-[14px]`：`ButtonGroupText.vue:26` `<Primitive>`
- `text-foreground`：`ButtonGroupText.vue:26` `<Primitive>`
- `z-0`：`ButtonGroupText.vue:26` `<Primitive>`

### default 删除类

- `font-medium`：`ButtonGroupText.vue:25` `<Primitive>`
- `has-[>[data-slot=button-group]]:gap-2`：`index.ts:9` `cva(...)`
- `text-sm`：`ButtonGroupText.vue:25` `<Primitive>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `index.ts` default:9 / shadcn:9 | `has-[>[data-slot=button-group][data-variant=group]]:gap-2` `has-[>[data-slot=input-group]]:gap-2` | `has-[>[data-slot=button-group]]:gap-2` |
| `index.ts` default:14 / shadcn:14 | `[&>*:has(+[data-slot=input-group])]:border-r-transparent` `has-[>[data-slot=input-group]]:[&>[data-slot=input-group]]:-ml-px` `has-[>[data-slot=input-group]]:[&>[data-slot=input-group]]:!border-l` | 无 |

</details>

<details open>
<summary><code>calendar</code>：新增 5 / 删除 5 / 同位置变更 3 / 风险 2</summary>

### default 新增类

- `[&[data-selected]:not([data-disabled])]:focus:bg-primary`：`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`
- `[&[data-selected]:not([data-disabled])]:focus:text-primary-foreground`：`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`
- `[&[data-selected]:not([data-disabled])]:hover:bg-primary`：`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`
- `[&[data-selected]:not([data-disabled])]:hover:text-primary-foreground`：`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`
- `enabled:hover:opacity-100`：`CalendarNextButton.vue:19` `<CalendarNext>`；`CalendarPrevButton.vue:19` `<CalendarPrev>`

### default 删除类

- `data-[selected]:focus:bg-primary`：`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`
- `data-[selected]:focus:text-primary-foreground`：`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`
- `data-[selected]:hover:bg-primary`：`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`
- `data-[selected]:hover:text-primary-foreground`：`CalendarCellTrigger.vue:18` `<CalendarCellTrigger>`
- `hover:opacity-100`：`CalendarNextButton.vue:19` `<CalendarNext>`；`CalendarPrevButton.vue:19` `<CalendarPrev>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `CalendarCellTrigger.vue` default:18 / shadcn:18 | `[&[data-selected]:not([data-disabled])]:focus:bg-primary` `[&[data-selected]:not([data-disabled])]:focus:text-primary-foreground` `[&[data-selected]:not([data-disabled])]:hover:bg-primary` `[&[data-selected]:not([data-disabled])]:hover:text-primary-foreground` | `data-[selected]:focus:bg-primary` `data-[selected]:focus:text-primary-foreground` `data-[selected]:hover:bg-primary` `data-[selected]:hover:text-primary-foreground` |
| `CalendarNextButton.vue` default:19 / shadcn:19 | `enabled:hover:opacity-100` | `hover:opacity-100` |
| `CalendarPrevButton.vue` default:19 / shadcn:19 | `enabled:hover:opacity-100` | `hover:opacity-100` |

</details>

<details open>
<summary><code>card</code>：新增 3 / 删除 3 / 同位置变更 3 / 风险 0</summary>

### default 新增类

- `border-[#e4e6e7]`：`Card.vue:12` `<div>`
- `p-[16px_20px]`：`Card.vue:12` `<div>`
- `rounded-[8px]`：`Card.vue:12` `<div>`

### default 删除类

- `p-6`：`CardContent.vue:11` `<div>`；`CardFooter.vue:11` `<div>`；`CardHeader.vue:11` `<div>`
- `pt-0`：`CardContent.vue:11` `<div>`；`CardFooter.vue:11` `<div>`
- `rounded-lg`：`Card.vue:12` `<div>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `Card.vue` default:12 / shadcn:12 | `border-[#e4e6e7]` `p-[16px_20px]` `rounded-[8px]` | `rounded-lg` |
| `CardFooter.vue` default:11 / shadcn:11 | 无 | `p-6` `pt-0` |
| `CardHeader.vue` default:11 / shadcn:11 | 无 | `p-6` |

</details>

<details>
<summary><code>carousel</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details>
<summary><code>chart</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>checkbox</code>：新增 1 / 删除 1 / 同位置变更 1 / 风险 0</summary>

### default 新增类

- `rounded-[2px]`：`Checkbox.vue:20` `<CheckboxRoot>`

### default 删除类

- `rounded-sm`：`Checkbox.vue:20` `<CheckboxRoot>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `Checkbox.vue` default:20 / shadcn:20 | `rounded-[2px]` | `rounded-sm` |

</details>

<details>
<summary><code>collapsible</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>combobox</code>：新增 39 / 删除 23 / 同位置变更 4 / 风险 8</summary>

### default 新增类

- `[&_[cmdk-group-heading]]:font-normal`：`ComboboxGroup.vue:19` `<ComboboxGroup>`
- `[&_[cmdk-group-heading]]:text-[14px]`：`ComboboxGroup.vue:19` `<ComboboxGroup>`
- `[&_[cmdk-group-heading]]:text-gray-500`：`ComboboxGroup.vue:19` `<ComboboxGroup>`
- `[&_[cmdk-group-heading]]:text-left`：`ComboboxGroup.vue:19` `<ComboboxGroup>`
- `[&:not([data-disabled])[data-highlighted]]:bg-gray-400/30`：`ComboboxItem.vue:22` `<ComboboxItem>`
- `[&:not([data-disabled])[data-highlighted]]:text-gray-900`：`ComboboxItem.vue:22` `<ComboboxItem>`
- `[&:not([data-disabled])]:hover:bg-gray-400/30`：`ComboboxItem.vue:22` `<ComboboxItem>`
- `absolute`：`ComboboxTrigger.vue:18` `<ComboboxTrigger>`
- `bg-[var(--gray-0)]`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `border-gray-300`：`ComboboxList.vue:27` `<ComboboxContent>`
- `cursor-pointer`：`ComboboxItem.vue:22` `<ComboboxItem>`
- `data-[disabled]:cursor-not-allowed`：`ComboboxItem.vue:22` `<ComboboxItem>`
- `disabled:bg-[var(--gray-200)]`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `disabled:opacity-100`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `disabled:text-[var(--gray-400)]`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `enabled:hover:border-primary`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `file:font-normal`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `file:text-[14px]`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `file:text-foreground`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `focus-visible:border-primary`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `focus-visible:caret-primary`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `focus-visible:ring-0`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `font-normal`：`ComboboxGroup.vue:21` `<ComboboxLabel>`；`ComboboxInput.vue:25` `<ComboboxInput>`；`ComboboxItem.vue:22` `<ComboboxItem>`
- `h-8`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `justify-center`：`ComboboxTrigger.vue:18` `<ComboboxTrigger>`
- `leading-[1.5]`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `min-h-[30px]`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `placeholder:text-[#C3C7CB]`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `px-1`：`ComboboxList.vue:27` `<ComboboxContent>`
- `py-0`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `py-2`：`ComboboxList.vue:27` `<ComboboxContent>`
- `right-3`：`ComboboxTrigger.vue:18` `<ComboboxTrigger>`
- `rounded-[4px]`：`ComboboxInput.vue:25` `<ComboboxInput>`；`ComboboxList.vue:27` `<ComboboxContent>`
- `shadow-none`：`ComboboxInput.vue:25` `<ComboboxInput>`
- `text-[14px]`：`ComboboxGroup.vue:21` `<ComboboxLabel>`；`ComboboxInput.vue:25` `<ComboboxInput>`；`ComboboxItem.vue:22` `<ComboboxItem>`
- `text-gray-500`：`ComboboxGroup.vue:21` `<ComboboxLabel>`
- `text-gray-900`：`ComboboxItem.vue:22` `<ComboboxItem>`
- `text-left`：`ComboboxGroup.vue:21` `<ComboboxLabel>`；`ComboboxItem.vue:22` `<ComboboxItem>`
- `top-1/2`：`ComboboxTrigger.vue:18` `<ComboboxTrigger>`

### default 删除类

- `[&_[cmdk-group-heading]]:font-medium`：`ComboboxGroup.vue:19` `<ComboboxGroup>`
- `[&_[cmdk-group-heading]]:text-muted-foreground`：`ComboboxGroup.vue:19` `<ComboboxGroup>`
- `[&_[cmdk-group-heading]]:text-xs`：`ComboboxGroup.vue:19` `<ComboboxGroup>`
- `bg-transparent`：`ComboboxInput.vue:22` `<ComboboxInput>`
- `cursor-default`：`ComboboxItem.vue:19` `<ComboboxItem>`
- `data-[disabled]:pointer-events-none`：`ComboboxItem.vue:19` `<ComboboxItem>`
- `data-[highlighted]:bg-accent`：`ComboboxItem.vue:19` `<ComboboxItem>`
- `data-[highlighted]:text-accent-foreground`：`ComboboxItem.vue:19` `<ComboboxItem>`
- `disabled:opacity-50`：`ComboboxInput.vue:22` `<ComboboxInput>`
- `file:font-medium`：`ComboboxInput.vue:22` `<ComboboxInput>`
- `file:text-sm`：`ComboboxInput.vue:22` `<ComboboxInput>`
- `focus-visible:ring-1`：`ComboboxInput.vue:22` `<ComboboxInput>`
- `focus-visible:ring-ring`：`ComboboxInput.vue:22` `<ComboboxInput>`
- `font-medium`：`ComboboxGroup.vue:21` `<ComboboxLabel>`
- `h-9`：`ComboboxInput.vue:22` `<ComboboxInput>`
- `p-1`：`ComboboxGroup.vue:19` `<ComboboxGroup>`
- `placeholder:text-muted-foreground`：`ComboboxInput.vue:22` `<ComboboxInput>`
- `py-1`：`ComboboxInput.vue:22` `<ComboboxInput>`
- `rounded-md`：`ComboboxInput.vue:22` `<ComboboxInput>`；`ComboboxList.vue:24` `<ComboboxContent>`
- `shadow-sm`：`ComboboxInput.vue:22` `<ComboboxInput>`
- `text-muted-foreground`：`ComboboxGroup.vue:21` `<ComboboxLabel>`
- `text-xs`：`ComboboxGroup.vue:21` `<ComboboxLabel>`
- `transition-colors`：`ComboboxInput.vue:22` `<ComboboxInput>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `ComboboxAnchor.vue` default:18 / shadcn:18 | `relative` | 无 |
| `ComboboxGroup.vue` default:19 / shadcn:19 | `[&_[cmdk-group-heading]]:font-normal` `[&_[cmdk-group-heading]]:text-[14px]` `[&_[cmdk-group-heading]]:text-gray-500` `[&_[cmdk-group-heading]]:text-left` | `[&_[cmdk-group-heading]]:font-medium` `[&_[cmdk-group-heading]]:text-muted-foreground` `[&_[cmdk-group-heading]]:text-xs` `p-1` |
| `ComboboxGroup.vue` default:21 / shadcn:21 | `font-normal` `text-[14px]` `text-gray-500` `text-left` | `font-medium` `text-muted-foreground` `text-xs` |
| `ComboboxList.vue` default:27 / shadcn:24 | `border-gray-300` `overflow-hidden` `px-1` `py-2` `rounded-[4px]` `text-sm` | `rounded-md` |

</details>

<details open>
<summary><code>command</code>：新增 12 / 删除 8 / 同位置变更 2 / 风险 3</summary>

### default 新增类

- `[&:not([data-disabled])[data-highlighted]]:bg-accent`：`CommandItem.vue:68` `<ListboxItem>`
- `[&:not([data-disabled])[data-highlighted]]:text-accent-foreground`：`CommandItem.vue:68` `<ListboxItem>`
- `cursor-pointer`：`CommandItem.vue:68` `<ListboxItem>`
- `data-[disabled]:cursor-not-allowed`：`CommandItem.vue:68` `<ListboxItem>`
- `disabled:opacity-100`：`CommandInput.vue:32` `<ListboxFilter>`
- `disabled:text-[var(--gray-400)]`：`CommandInput.vue:32` `<ListboxFilter>`
- `h-8`：`CommandInput.vue:32` `<ListboxFilter>`
- `leading-[1.5]`：`CommandInput.vue:32` `<ListboxFilter>`
- `placeholder:text-[#C3C7CB]`：`CommandInput.vue:32` `<ListboxFilter>`
- `py-0`：`CommandInput.vue:32` `<ListboxFilter>`
- `rounded-[4px]`：`CommandInput.vue:32` `<ListboxFilter>`
- `text-[14px]`：`CommandInput.vue:32` `<ListboxFilter>`

### default 删除类

- `cursor-default`：`CommandItem.vue:68` `<ListboxItem>`
- `data-[disabled]:pointer-events-none`：`CommandItem.vue:68` `<ListboxItem>`
- `data-[highlighted]:bg-accent`：`CommandItem.vue:68` `<ListboxItem>`
- `data-[highlighted]:text-accent-foreground`：`CommandItem.vue:68` `<ListboxItem>`
- `disabled:opacity-50`：`CommandInput.vue:32` `<ListboxFilter>`
- `h-10`：`CommandInput.vue:32` `<ListboxFilter>`
- `placeholder:text-muted-foreground`：`CommandInput.vue:32` `<ListboxFilter>`
- `py-3`：`CommandInput.vue:32` `<ListboxFilter>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `CommandInput.vue` default:32 / shadcn:32 | `disabled:opacity-100` `disabled:text-[var(--gray-400)]` `h-8` `leading-[1.5]` `placeholder:text-[#C3C7CB]` `py-0` `rounded-[4px]` `text-[14px]` `text-foreground` | `disabled:opacity-50` `h-10` `placeholder:text-muted-foreground` `py-3` `rounded-md` `text-sm` |
| `CommandItem.vue` default:68 / shadcn:68 | `[&:not([data-disabled])[data-highlighted]]:bg-accent` `[&:not([data-disabled])[data-highlighted]]:text-accent-foreground` `cursor-pointer` `data-[disabled]:cursor-not-allowed` | `cursor-default` `data-[disabled]:pointer-events-none` `data-[highlighted]:bg-accent` `data-[highlighted]:text-accent-foreground` |

</details>

<details open>
<summary><code>context-menu</code>：新增 14 / 删除 4 / 同位置变更 5 / 风险 2</summary>

### default 新增类

- `[&:not([data-disabled])]:focus:bg-accent`：`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`；`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`；`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`
- `[&:not([data-disabled])]:focus:bg-gray-400/30`：`ContextMenuItem.vue:22` `<ContextMenuItem>`
- `[&:not([data-disabled])]:focus:text-accent-foreground`：`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`；`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`；`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`
- `[&:not([data-disabled])]:focus:text-gray-900`：`ContextMenuItem.vue:22` `<ContextMenuItem>`
- `[&:not([data-disabled])]:hover:bg-gray-400/30`：`ContextMenuItem.vue:22` `<ContextMenuItem>`
- `border-gray-300`：`ContextMenuContent.vue:24` `<ContextMenuContent>`
- `cursor-pointer`：`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`；`ContextMenuItem.vue:22` `<ContextMenuItem>`；`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`；`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`
- `data-[disabled]:cursor-not-allowed`：`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`；`ContextMenuItem.vue:22` `<ContextMenuItem>`；`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`
- `font-normal`：`ContextMenuItem.vue:22` `<ContextMenuItem>`
- `rounded-[4px]`：`ContextMenuContent.vue:24` `<ContextMenuContent>`
- `text-[14px]`：`ContextMenuItem.vue:22` `<ContextMenuItem>`
- `text-gray-900`：`ContextMenuItem.vue:22` `<ContextMenuItem>`
- `text-left`：`ContextMenuItem.vue:22` `<ContextMenuItem>`
- `w-full`：`ContextMenuItem.vue:22` `<ContextMenuItem>`

### default 删除类

- `cursor-default`：`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`；`ContextMenuItem.vue:22` `<ContextMenuItem>`；`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`；`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`
- `data-[disabled]:pointer-events-none`：`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`；`ContextMenuItem.vue:22` `<ContextMenuItem>`；`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`
- `focus:bg-accent`：`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`；`ContextMenuItem.vue:22` `<ContextMenuItem>`；`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`；`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`
- `focus:text-accent-foreground`：`ContextMenuCheckboxItem.vue:24` `<ContextMenuCheckboxItem>`；`ContextMenuItem.vue:22` `<ContextMenuItem>`；`ContextMenuRadioItem.vue:24` `<ContextMenuRadioItem>`；`ContextMenuSubTrigger.vue:22` `<ContextMenuSubTrigger>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `ContextMenuCheckboxItem.vue` default:24 / shadcn:24 | `[&:not([data-disabled])]:focus:bg-accent` `[&:not([data-disabled])]:focus:text-accent-foreground` `cursor-pointer` `data-[disabled]:cursor-not-allowed` | `cursor-default` `data-[disabled]:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` |
| `ContextMenuContent.vue` default:24 / shadcn:24 | `border-gray-300` `rounded-[4px]` | `data-[state=open]:animate-in` `data-[state=open]:fade-in-0` `data-[state=open]:zoom-in-95` `rounded-md` |
| `ContextMenuItem.vue` default:22 / shadcn:22 | `[&:not([data-disabled])]:focus:bg-gray-400/30` `[&:not([data-disabled])]:focus:text-gray-900` `[&:not([data-disabled])]:hover:bg-gray-400/30` `cursor-pointer` `data-[disabled]:cursor-not-allowed` `font-normal` `text-[14px]` `text-gray-900` `text-left` `w-full` | `cursor-default` `data-[disabled]:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` `text-sm` |
| `ContextMenuRadioItem.vue` default:24 / shadcn:24 | `[&:not([data-disabled])]:focus:bg-accent` `[&:not([data-disabled])]:focus:text-accent-foreground` `cursor-pointer` `data-[disabled]:cursor-not-allowed` | `cursor-default` `data-[disabled]:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` |
| `ContextMenuSubTrigger.vue` default:22 / shadcn:22 | `[&:not([data-disabled])]:focus:bg-accent` `[&:not([data-disabled])]:focus:text-accent-foreground` `cursor-pointer` | `cursor-default` `focus:bg-accent` `focus:text-accent-foreground` |

</details>

<details open>
<summary><code>dialog</code>：新增 16 / 删除 15 / 同位置变更 6 / 风险 2</summary>

### default 新增类

- `bg-[#626c78]/50`：`DialogContent.vue:26` `<DialogOverlay>`；`DialogScrollContent.vue:26` `<DialogOverlay>`
- `cursor-pointer`：`DialogContent.vue:39` `<DialogClose>`；`DialogScrollContent.vue:47` `<DialogClose>`
- `disabled:cursor-not-allowed`：`DialogContent.vue:39` `<DialogClose>`；`DialogScrollContent.vue:47` `<DialogClose>`
- `enabled:focus:outline-none`：`DialogContent.vue:39` `<DialogClose>`
- `enabled:hover:bg-secondary`：`DialogScrollContent.vue:47` `<DialogClose>`
- `enabled:hover:opacity-100`：`DialogContent.vue:39` `<DialogClose>`
- `font-bold`：`DialogTitle.vue:18` `<DialogTitle>`
- `h-6`：`DialogContent.vue:39` `<DialogClose>`
- `items-center`：`DialogContent.vue:39` `<DialogClose>`
- `justify-center`：`DialogContent.vue:39` `<DialogClose>`
- `leading-[1.4]`：`DialogTitle.vue:18` `<DialogTitle>`
- `right-6`：`DialogContent.vue:39` `<DialogClose>`
- `text-[18px]`：`DialogTitle.vue:18` `<DialogTitle>`
- `text-[var(--gray-900)]`：`DialogTitle.vue:18` `<DialogTitle>`
- `top-6`：`DialogContent.vue:39` `<DialogClose>`
- `w-6`：`DialogContent.vue:39` `<DialogClose>`

### default 删除类

- `bg-black/80`：`DialogContent.vue:26` `<DialogOverlay>`；`DialogScrollContent.vue:26` `<DialogOverlay>`
- `disabled:pointer-events-none`：`DialogContent.vue:39` `<DialogClose>`
- `focus:outline-none`：`DialogContent.vue:39` `<DialogClose>`
- `focus:ring-2`：`DialogContent.vue:39` `<DialogClose>`
- `focus:ring-offset-2`：`DialogContent.vue:39` `<DialogClose>`
- `focus:ring-ring`：`DialogContent.vue:39` `<DialogClose>`
- `font-semibold`：`DialogTitle.vue:18` `<DialogTitle>`
- `hover:bg-secondary`：`DialogScrollContent.vue:47` `<DialogClose>`
- `hover:opacity-100`：`DialogContent.vue:39` `<DialogClose>`
- `leading-none`：`DialogTitle.vue:18` `<DialogTitle>`
- `right-4`：`DialogContent.vue:39` `<DialogClose>`
- `ring-offset-background`：`DialogContent.vue:39` `<DialogClose>`
- `text-lg`：`DialogTitle.vue:18` `<DialogTitle>`
- `top-4`：`DialogContent.vue:39` `<DialogClose>`
- `tracking-tight`：`DialogTitle.vue:18` `<DialogTitle>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `DialogContent.vue` default:26 / shadcn:26 | `bg-[#626c78]/50` | `bg-black/80` |
| `DialogContent.vue` default:30 / shadcn:30 | 无 | `border` |
| `DialogContent.vue` default:39 / shadcn:39 | `cursor-pointer` `disabled:cursor-not-allowed` `enabled:focus:outline-none` `enabled:hover:opacity-100` `flex` `h-6` `items-center` `justify-center` `right-6` `top-6` `w-6` | `disabled:pointer-events-none` `focus:outline-none` `focus:ring-2` `focus:ring-offset-2` `focus:ring-ring` `hover:opacity-100` `right-4` `ring-offset-background` `top-4` |
| `DialogScrollContent.vue` default:26 / shadcn:26 | `bg-[#626c78]/50` | `bg-black/80` |
| `DialogScrollContent.vue` default:47 / shadcn:47 | `cursor-pointer` `disabled:cursor-not-allowed` `enabled:hover:bg-secondary` | `hover:bg-secondary` |
| `DialogTitle.vue` default:18 / shadcn:18 | `font-bold` `leading-[1.4]` `text-[18px]` `text-[var(--gray-900)]` | `font-semibold` `leading-none` `text-lg` `tracking-tight` |

</details>

<details open>
<summary><code>drawer</code>：新增 5 / 删除 6 / 同位置变更 3 / 风险 2</summary>

### default 新增类

- `bg-overlay`：`DrawerOverlay.vue:14` `<DrawerOverlay>`
- `font-bold`：`DrawerTitle.vue:14` `<DrawerTitle>`
- `leading-[1.4]`：`DrawerTitle.vue:14` `<DrawerTitle>`
- `text-[18px]`：`DrawerTitle.vue:14` `<DrawerTitle>`
- `text-[var(--gray-900)]`：`DrawerTitle.vue:14` `<DrawerTitle>`

### default 删除类

- `bg-black/80`：`DrawerOverlay.vue:14` `<DrawerOverlay>`
- `border`：`DrawerContent.vue:19` `<DrawerContent>`
- `font-semibold`：`DrawerTitle.vue:14` `<DrawerTitle>`
- `leading-none`：`DrawerTitle.vue:14` `<DrawerTitle>`
- `text-lg`：`DrawerTitle.vue:14` `<DrawerTitle>`
- `tracking-tight`：`DrawerTitle.vue:14` `<DrawerTitle>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `DrawerContent.vue` default:19 / shadcn:19 | 无 | `border` |
| `DrawerOverlay.vue` default:14 / shadcn:14 | `bg-overlay` | `bg-black/80` |
| `DrawerTitle.vue` default:14 / shadcn:14 | `font-bold` `leading-[1.4]` `text-[18px]` `text-[var(--gray-900)]` | `font-semibold` `leading-none` `text-lg` `tracking-tight` |

</details>

<details open>
<summary><code>dropdown-menu</code>：新增 11 / 删除 4 / 同位置变更 6 / 风险 2</summary>

### default 新增类

- `[&:not([data-disabled])]:focus:bg-accent`：`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`；`DropdownMenuItem.vue:18` `<DropdownMenuItem>`；`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`；`DropdownMenuSubTrigger.vue:22` `<DropdownMenuSubTrigger>`
- `[&:not([data-disabled])]:focus:text-accent-foreground`：`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`；`DropdownMenuItem.vue:18` `<DropdownMenuItem>`；`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`
- `active:ring-0`：`DropdownMenuTrigger.vue:11` `<DropdownMenuTrigger>`
- `border-gray-300`：`DropdownMenuContent.vue:29` `<DropdownMenuContent>`
- `cursor-pointer`：`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`；`DropdownMenuItem.vue:18` `<DropdownMenuItem>`；`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`；`DropdownMenuSubTrigger.vue:22` `<DropdownMenuSubTrigger>`
- `data-[disabled]:cursor-not-allowed`：`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`；`DropdownMenuItem.vue:18` `<DropdownMenuItem>`；`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`
- `focus-visible:outline-none`：`DropdownMenuTrigger.vue:11` `<DropdownMenuTrigger>`
- `focus-visible:ring-0`：`DropdownMenuTrigger.vue:11` `<DropdownMenuTrigger>`
- `focus-visible:ring-offset-0`：`DropdownMenuTrigger.vue:11` `<DropdownMenuTrigger>`
- `hover:ring-0`：`DropdownMenuTrigger.vue:11` `<DropdownMenuTrigger>`
- `rounded-[4px]`：`DropdownMenuContent.vue:29` `<DropdownMenuContent>`

### default 删除类

- `cursor-default`：`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`；`DropdownMenuItem.vue:18` `<DropdownMenuItem>`；`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`；`DropdownMenuSubTrigger.vue:22` `<DropdownMenuSubTrigger>`
- `data-[disabled]:pointer-events-none`：`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`；`DropdownMenuItem.vue:18` `<DropdownMenuItem>`；`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`
- `focus:bg-accent`：`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`；`DropdownMenuItem.vue:18` `<DropdownMenuItem>`；`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`；`DropdownMenuSubTrigger.vue:22` `<DropdownMenuSubTrigger>`
- `focus:text-accent-foreground`：`DropdownMenuCheckboxItem.vue:24` `<DropdownMenuCheckboxItem>`；`DropdownMenuItem.vue:18` `<DropdownMenuItem>`；`DropdownMenuRadioItem.vue:25` `<DropdownMenuRadioItem>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `DropdownMenuCheckboxItem.vue` default:24 / shadcn:24 | `[&:not([data-disabled])]:focus:bg-accent` `[&:not([data-disabled])]:focus:text-accent-foreground` `cursor-pointer` `data-[disabled]:cursor-not-allowed` | `cursor-default` `data-[disabled]:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` |
| `DropdownMenuContent.vue` default:29 / shadcn:29 | `border-gray-300` `rounded-[4px]` | `rounded-md` |
| `DropdownMenuItem.vue` default:18 / shadcn:18 | `[&:not([data-disabled])]:focus:bg-accent` `[&:not([data-disabled])]:focus:text-accent-foreground` `cursor-pointer` `data-[disabled]:cursor-not-allowed` | `cursor-default` `data-[disabled]:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` |
| `DropdownMenuRadioItem.vue` default:25 / shadcn:25 | `[&:not([data-disabled])]:focus:bg-accent` `[&:not([data-disabled])]:focus:text-accent-foreground` `cursor-pointer` `data-[disabled]:cursor-not-allowed` | `cursor-default` `data-[disabled]:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` |
| `DropdownMenuSubTrigger.vue` default:22 / shadcn:22 | `[&:not([data-disabled])]:focus:bg-accent` `cursor-pointer` | `cursor-default` `focus:bg-accent` |
| `DropdownMenuTrigger.vue` default:11 / shadcn:11 | `active:ring-0` `focus-visible:outline-none` `focus-visible:ring-0` `focus-visible:ring-offset-0` `hover:ring-0` | 无 |

</details>

<details>
<summary><code>empty</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details>
<summary><code>field</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details>
<summary><code>form</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>hover-card</code>：新增 7 / 删除 5 / 同位置变更 1 / 风险 2</summary>

### default 新增类

- `animate-in`：`HoverCardContent.vue:28` `<HoverCardContent>`
- `border-gray-300`：`HoverCardContent.vue:28` `<HoverCardContent>`
- `overflow-visible`：`HoverCardContent.vue:28` `<HoverCardContent>`
- `px-3`：`HoverCardContent.vue:28` `<HoverCardContent>`
- `py-2`：`HoverCardContent.vue:28` `<HoverCardContent>`
- `rounded-[4px]`：`HoverCardContent.vue:28` `<HoverCardContent>`
- `text-sm`：`HoverCardContent.vue:28` `<HoverCardContent>`

### default 删除类

- `data-[state=open]:animate-in`：`HoverCardContent.vue:28` `<HoverCardContent>`
- `data-[state=open]:fade-in-0`：`HoverCardContent.vue:28` `<HoverCardContent>`
- `data-[state=open]:zoom-in-95`：`HoverCardContent.vue:28` `<HoverCardContent>`
- `p-4`：`HoverCardContent.vue:28` `<HoverCardContent>`
- `rounded-md`：`HoverCardContent.vue:28` `<HoverCardContent>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `HoverCardContent.vue` default:28 / shadcn:28 | `animate-in` `border-gray-300` `overflow-visible` `px-3` `py-2` `rounded-[4px]` `text-sm` | `data-[state=open]:animate-in` `data-[state=open]:fade-in-0` `data-[state=open]:zoom-in-95` `p-4` `rounded-md` |

</details>

<details open>
<summary><code>input</code>：新增 20 / 删除 13 / 同位置变更 1 / 风险 8</summary>

### default 新增类

- `bg-[var(--gray-0)]`：`Input.vue:49` `<input>`
- `disabled:bg-[var(--gray-200)]`：`Input.vue:49` `<input>`
- `disabled:opacity-100`：`Input.vue:49` `<input>`
- `disabled:text-[var(--gray-400)]`：`Input.vue:49` `<input>`
- `enabled:hover:border-primary`：`Input.vue:49` `<input>`
- `file:font-normal`：`Input.vue:49` `<input>`
- `file:text-[14px]`：`Input.vue:49` `<input>`
- `focus-visible:border-primary`：`Input.vue:49` `<input>`
- `focus-visible:caret-primary`：`Input.vue:49` `<input>`
- `focus-visible:ring-0`：`Input.vue:49` `<input>`
- `h-8`：`Input.vue:49` `<input>`
- `leading-[1.5]`：`Input.vue:49` `<input>`
- `min-h-[30px]`：`Input.vue:49` `<input>`
- `outline-none`：`Input.vue:49` `<input>`
- `placeholder:text-[#C3C7CB]`：`Input.vue:49` `<input>`
- `py-0`：`Input.vue:49` `<input>`
- `rounded-[4px]`：`Input.vue:49` `<input>`
- `shadow-none`：`Input.vue:49` `<input>`
- `text-[14px]`：`Input.vue:49` `<input>`
- `text-foreground`：`Input.vue:49` `<input>`

### default 删除类

- `bg-background`：`Input.vue:23` `<input>`
- `disabled:opacity-50`：`Input.vue:23` `<input>`
- `file:font-medium`：`Input.vue:23` `<input>`
- `file:text-sm`：`Input.vue:23` `<input>`
- `focus-visible:ring-2`：`Input.vue:23` `<input>`
- `focus-visible:ring-offset-2`：`Input.vue:23` `<input>`
- `focus-visible:ring-ring`：`Input.vue:23` `<input>`
- `h-10`：`Input.vue:23` `<input>`
- `placeholder:text-muted-foreground`：`Input.vue:23` `<input>`
- `py-2`：`Input.vue:23` `<input>`
- `ring-offset-background`：`Input.vue:23` `<input>`
- `rounded-md`：`Input.vue:23` `<input>`
- `text-sm`：`Input.vue:23` `<input>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `Input.vue` default:49 / shadcn:23 | `bg-[var(--gray-0)]` `disabled:bg-[var(--gray-200)]` `disabled:opacity-100` `disabled:text-[var(--gray-400)]` `enabled:hover:border-primary` `file:font-normal` `file:text-[14px]` `focus-visible:border-primary` `focus-visible:caret-primary` `focus-visible:ring-0` `h-8` `leading-[1.5]` `min-h-[30px]` `outline-none` `placeholder:text-[#C3C7CB]` `py-0` `rounded-[4px]` `shadow-none` `text-[14px]` `text-foreground` | `bg-background` `disabled:opacity-50` `file:font-medium` `file:text-sm` `focus-visible:ring-2` `focus-visible:ring-offset-2` `focus-visible:ring-ring` `h-10` `placeholder:text-muted-foreground` `py-2` `ring-offset-background` `rounded-md` `text-sm` |

</details>

<details open>
<summary><code>input-group</code>：新增 14 / 删除 10 / 同位置变更 1 / 风险 0</summary>

### default 新增类

- `enabled:hover:z-10`：`InputGroupInput.vue:15` `<Input>`
- `focus`：`InputGroup.vue:24` `<div>`
- `focus-visible:z-10`：`InputGroupInput.vue:15` `<Input>`
- `focus-within:border-primary`：`InputGroup.vue:24` `<div>`
- `focus-within:z-10`：`InputGroup.vue:24` `<div>`
- `font-normal`：`InputGroupText.vue:13` `<span>`；`index.ts:14` `cva(...)`
- `hover`：`InputGroup.vue:24` `<div>`
- `hover:border-primary`：`InputGroup.vue:24` `<div>`
- `hover:z-10`：`InputGroup.vue:24` `<div>`
- `leading-[1.5]`：`InputGroupText.vue:13` `<span>`
- `rounded-[4px]`：`InputGroup.vue:24` `<div>`
- `text-[14px]`：`InputGroupText.vue:13` `<span>`
- `text-foreground`：`InputGroupText.vue:13` `<span>`
- `z-10`：`InputGroupInput.vue:15` `<Input>`

### default 删除类

- `dark:bg-input/30`：`InputGroup.vue:14` `<div>`
- `focus-visible:ring-0`：`InputGroupInput.vue:14` `<Input>`；`InputGroupTextarea.vue:14` `<Textarea>`
- `focus-visible:ring-transparent`：`InputGroupInput.vue:14` `<Input>`；`InputGroupTextarea.vue:14` `<Textarea>`
- `font-medium`：`index.ts:14` `cva(...)`
- `h-10`：`InputGroup.vue:14` `<div>`
- `has-[[data-slot=input-group-control]:focus-visible]:ring-2`：`InputGroup.vue:14` `<div>`
- `has-[[data-slot=input-group-control]:focus-visible]:ring-offset-2`：`InputGroup.vue:14` `<div>`
- `has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background`：`InputGroup.vue:14` `<div>`
- `has-[[data-slot=input-group-control]:focus-visible]:ring-ring`：`InputGroup.vue:14` `<div>`
- `ring-offset-transparent`：`InputGroupInput.vue:14` `<Input>`；`InputGroupTextarea.vue:14` `<Textarea>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `index.ts` default:14 / shadcn:14 | `font-normal` | `font-medium` |

</details>

<details>
<summary><code>item</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details>
<summary><code>kbd</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>label</code>：新增 6 / 删除 4 / 同位置变更 1 / 风险 0</summary>

### default 新增类

- `font-normal`：`Label.vue:16` `<Label>`
- `leading-[1.5]`：`Label.vue:16` `<Label>`
- `peer-disabled:opacity-100`：`Label.vue:16` `<Label>`
- `peer-disabled:text-[var(--gray-400)]`：`Label.vue:16` `<Label>`
- `text-[14px]`：`Label.vue:16` `<Label>`
- `text-foreground`：`Label.vue:16` `<Label>`

### default 删除类

- `font-medium`：`Label.vue:16` `<Label>`
- `leading-none`：`Label.vue:16` `<Label>`
- `peer-disabled:opacity-70`：`Label.vue:16` `<Label>`
- `text-sm`：`Label.vue:16` `<Label>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `Label.vue` default:16 / shadcn:16 | `font-normal` `leading-[1.5]` `peer-disabled:opacity-100` `peer-disabled:text-[var(--gray-400)]` `text-[14px]` `text-foreground` | `font-medium` `leading-none` `peer-disabled:opacity-70` `text-sm` |

</details>

<details open>
<summary><code>menubar</code>：新增 23 / 删除 6 / 同位置变更 8 / 风险 0</summary>

### default 新增类

- `[&_svg:not([class*=\`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `[&_svg]:pointer-events-none`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `[&:not([data-disabled])]:focus-visible:ring-0`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `[&:not([data-disabled])]:focus:bg-accent`：`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`；`MenubarItem.vue:23` `<MenubarItem>`；`MenubarRadioItem.vue:24` `<MenubarRadioItem>`；`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`
- `[&:not([data-disabled])]:focus:text-accent-foreground`：`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`；`MenubarItem.vue:23` `<MenubarItem>`；`MenubarRadioItem.vue:24` `<MenubarRadioItem>`；`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`
- `[&:not([data-disabled])]:hover:bg-muted`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `border-gray-300`：`Menubar.vue:22` `<MenubarRoot>`；`MenubarContent.vue:30` `<MenubarContent>`；`MenubarSubContent.vue:25` `<MenubarSubContent>`
- `border-input`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `cursor-pointer`：`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`；`MenubarItem.vue:23` `<MenubarItem>`；`MenubarRadioItem.vue:24` `<MenubarRadioItem>`；`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`；`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `data-[disabled]:cursor-not-allowed`：`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`；`MenubarItem.vue:23` `<MenubarItem>`；`MenubarRadioItem.vue:24` `<MenubarRadioItem>`；`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `data-[state=open]:bg-muted`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `font-normal`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `gap-2`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `h-8`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `leading-[1.5]`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `px-4`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `rounded-[4px]`：`MenubarContent.vue:30` `<MenubarContent>`；`MenubarSubContent.vue:25` `<MenubarSubContent>`
- `shadow-xs`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `size-\`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `text-[14px]`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `text-foreground`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `transition-colors`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `z-0`：`MenubarTrigger.vue:18` `<MenubarTrigger>`

### default 删除类

- `cursor-default`：`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`；`MenubarItem.vue:23` `<MenubarItem>`；`MenubarRadioItem.vue:24` `<MenubarRadioItem>`；`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`；`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `data-[disabled]:pointer-events-none`：`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`；`MenubarItem.vue:23` `<MenubarItem>`；`MenubarRadioItem.vue:24` `<MenubarRadioItem>`
- `focus:bg-accent`：`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`；`MenubarItem.vue:23` `<MenubarItem>`；`MenubarRadioItem.vue:24` `<MenubarRadioItem>`；`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`；`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `focus:text-accent-foreground`：`MenubarCheckboxItem.vue:24` `<MenubarCheckboxItem>`；`MenubarItem.vue:23` `<MenubarItem>`；`MenubarRadioItem.vue:24` `<MenubarRadioItem>`；`MenubarSubTrigger.vue:19` `<MenubarSubTrigger>`；`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `font-medium`：`MenubarTrigger.vue:18` `<MenubarTrigger>`
- `px-3`：`MenubarTrigger.vue:18` `<MenubarTrigger>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `Menubar.vue` default:22 / shadcn:22 | `border-gray-300` | 无 |
| `MenubarCheckboxItem.vue` default:24 / shadcn:24 | `[&:not([data-disabled])]:focus:bg-accent` `[&:not([data-disabled])]:focus:text-accent-foreground` `cursor-pointer` `data-[disabled]:cursor-not-allowed` | `cursor-default` `data-[disabled]:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` |
| `MenubarContent.vue` default:30 / shadcn:30 | `border-gray-300` `data-[state=closed]:animate-out` `rounded-[4px]` | `rounded-md` |
| `MenubarItem.vue` default:23 / shadcn:23 | `[&:not([data-disabled])]:focus:bg-accent` `[&:not([data-disabled])]:focus:text-accent-foreground` `cursor-pointer` `data-[disabled]:cursor-not-allowed` | `cursor-default` `data-[disabled]:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` |
| `MenubarRadioItem.vue` default:24 / shadcn:24 | `[&:not([data-disabled])]:focus:bg-accent` `[&:not([data-disabled])]:focus:text-accent-foreground` `cursor-pointer` `data-[disabled]:cursor-not-allowed` | `cursor-default` `data-[disabled]:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` |
| `MenubarSubContent.vue` default:25 / shadcn:25 | `border-gray-300` `rounded-[4px]` `shadow-md` | `rounded-md` |
| `MenubarSubTrigger.vue` default:19 / shadcn:19 | `[&:not([data-disabled])]:focus:bg-accent` `[&:not([data-disabled])]:focus:text-accent-foreground` `cursor-pointer` | `cursor-default` `focus:bg-accent` `focus:text-accent-foreground` |
| `MenubarTrigger.vue` default:18 / shadcn:18 | `[&_svg:not([class*=\` `[&_svg]:pointer-events-none` `[&:not([data-disabled])]:focus-visible:ring-0` `[&:not([data-disabled])]:hover:bg-muted` `bg-muted` `border` `border-input` `cursor-pointer` `data-[disabled]:cursor-not-allowed` `data-[disabled]:opacity-50` `data-[state=open]:bg-muted` `font-normal` `gap-2` `h-8` `leading-[1.5]` `px-4` `relative` `rounded-md` `shadow-xs` `size-\` `text-[14px]` `text-foreground` `transition-colors` `z-0` | `cursor-default` `data-[state=open]:bg-accent` `data-[state=open]:text-accent-foreground` `focus:bg-accent` `focus:text-accent-foreground` `font-medium` `px-3` `py-1.5` `rounded-sm` `text-sm` |

</details>

<details open>
<summary><code>navigation-menu</code>：新增 6 / 删除 5 / 同位置变更 1 / 风险 1</summary>

### default 新增类

- `cursor-pointer`：`index.ts:13` `cva(...)`
- `disabled:cursor-not-allowed`：`index.ts:13` `cva(...)`
- `enabled:focus:bg-accent`：`index.ts:13` `cva(...)`
- `enabled:focus:text-accent-foreground`：`index.ts:13` `cva(...)`
- `enabled:hover:bg-accent`：`index.ts:13` `cva(...)`
- `enabled:hover:text-accent-foreground`：`index.ts:13` `cva(...)`

### default 删除类

- `disabled:pointer-events-none`：`index.ts:13` `cva(...)`
- `focus:bg-accent`：`index.ts:13` `cva(...)`
- `focus:text-accent-foreground`：`index.ts:13` `cva(...)`
- `hover:bg-accent`：`index.ts:13` `cva(...)`
- `hover:text-accent-foreground`：`index.ts:13` `cva(...)`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `index.ts` default:13 / shadcn:13 | `cursor-pointer` `disabled:cursor-not-allowed` `enabled:focus:bg-accent` `enabled:focus:text-accent-foreground` `enabled:hover:bg-accent` `enabled:hover:text-accent-foreground` | `disabled:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` `hover:bg-accent` `hover:text-accent-foreground` |

</details>

<details open>
<summary><code>number-field</code>：新增 26 / 删除 15 / 同位置变更 4 / 风险 7</summary>

### default 新增类

- `[&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-8`：`NumberFieldContent.vue:11` `<div>`
- `[&>[data-slot=input]]:has-[[data-slot=increment]]:pr-8`：`NumberFieldContent.vue:11` `<div>`
- `bg-[var(--gray-0)]`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `cursor-pointer`：`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`；`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`
- `disabled:bg-[var(--gray-200)]`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `disabled:opacity-100`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `disabled:text-[var(--gray-400)]`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `enabled:hover:border-primary`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `focus-visible:border-primary`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `focus-visible:caret-primary`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `focus-visible:ring-0`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `h-8`：`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`；`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`；`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `items-center`：`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`；`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`
- `justify-center`：`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`；`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`
- `leading-[1.5]`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `min-h-[30px]`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `outline-none`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `placeholder:text-[#C3C7CB]`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `px-3`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `py-0`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `rounded-[4px]`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `shadow-none`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `text-[14px]`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `text-foreground`：`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`；`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`；`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `top-0`：`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`；`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`
- `w-8`：`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`；`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`

### default 删除类

- `[&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5`：`NumberFieldContent.vue:11` `<div>`
- `[&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5`：`NumberFieldContent.vue:11` `<div>`
- `bg-background`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `disabled:opacity-50`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `focus-visible:ring-2`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `focus-visible:ring-offset-2`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `focus-visible:ring-ring`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `h-10`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `p-3`：`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`；`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`
- `placeholder:text-muted-foreground`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `py-2`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `ring-offset-background`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `rounded-md`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `text-sm`：`NumberFieldInput.vue:14` `<NumberFieldInput>`
- `top-1/2`：`NumberFieldDecrement.vue:17` `<NumberFieldDecrement>`；`NumberFieldIncrement.vue:17` `<NumberFieldIncrement>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `NumberFieldContent.vue` default:11 / shadcn:11 | `[&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-8` `[&>[data-slot=input]]:has-[[data-slot=increment]]:pr-8` | `[&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5` `[&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5` |
| `NumberFieldDecrement.vue` default:17 / shadcn:17 | `cursor-pointer` `flex` `h-8` `items-center` `justify-center` `text-foreground` `top-0` `w-8` | `p-3` `top-1/2` |
| `NumberFieldIncrement.vue` default:17 / shadcn:17 | `cursor-pointer` `flex` `h-8` `items-center` `justify-center` `text-foreground` `top-0` `w-8` | `p-3` `top-1/2` |
| `NumberFieldInput.vue` default:14 / shadcn:14 | `bg-[var(--gray-0)]` `disabled:bg-[var(--gray-200)]` `disabled:opacity-100` `disabled:text-[var(--gray-400)]` `enabled:hover:border-primary` `focus-visible:border-primary` `focus-visible:caret-primary` `focus-visible:ring-0` `h-8` `leading-[1.5]` `min-h-[30px]` `outline-none` `placeholder:text-[#C3C7CB]` `px-3` `py-0` `rounded-[4px]` `shadow-none` `text-[14px]` `text-foreground` | `bg-background` `disabled:opacity-50` `focus-visible:ring-2` `focus-visible:ring-offset-2` `focus-visible:ring-ring` `h-10` `placeholder:text-muted-foreground` `py-2` `ring-offset-background` `rounded-md` `text-sm` |

</details>

<details>
<summary><code>pagination</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>pin-input</code>：新增 25 / 删除 11 / 同位置变更 1 / 风险 3</summary>

### default 新增类

- `-ml-px`：`PinInputSlot.vue:16` `<PinInputInput>`
- `bg-[var(--gray-0)]`：`PinInputSlot.vue:16` `<PinInputInput>`
- `border`：`PinInputSlot.vue:16` `<PinInputInput>`
- `disabled:bg-[var(--gray-200)]`：`PinInputSlot.vue:16` `<PinInputInput>`
- `disabled:cursor-not-allowed`：`PinInputSlot.vue:16` `<PinInputInput>`
- `disabled:opacity-100`：`PinInputSlot.vue:16` `<PinInputInput>`
- `disabled:text-[var(--gray-400)]`：`PinInputSlot.vue:16` `<PinInputInput>`
- `enabled:hover:border-primary`：`PinInputSlot.vue:16` `<PinInputInput>`
- `first:ml-0`：`PinInputSlot.vue:16` `<PinInputInput>`
- `first:rounded-l-[4px]`：`PinInputSlot.vue:16` `<PinInputInput>`
- `focus-visible:border-primary`：`PinInputSlot.vue:16` `<PinInputInput>`
- `focus-visible:caret-primary`：`PinInputSlot.vue:16` `<PinInputInput>`
- `focus-visible:outline-none`：`PinInputSlot.vue:16` `<PinInputInput>`
- `focus-visible:ring`：`PinInputSlot.vue:16` `<PinInputInput>`
- `focus-visible:ring-ring`：`PinInputSlot.vue:16` `<PinInputInput>`
- `h-8`：`PinInputSlot.vue:16` `<PinInputInput>`
- `last:rounded-r-[4px]`：`PinInputSlot.vue:16` `<PinInputInput>`
- `leading-[1.5]`：`PinInputSlot.vue:16` `<PinInputInput>`
- `min-h-[30px]`：`PinInputSlot.vue:16` `<PinInputInput>`
- `outline-none`：`PinInputSlot.vue:16` `<PinInputInput>`
- `py-0`：`PinInputSlot.vue:16` `<PinInputInput>`
- `shadow-none`：`PinInputSlot.vue:16` `<PinInputInput>`
- `text-[14px]`：`PinInputSlot.vue:16` `<PinInputInput>`
- `text-foreground`：`PinInputSlot.vue:16` `<PinInputInput>`
- `w-8`：`PinInputSlot.vue:16` `<PinInputInput>`

### default 删除类

- `border-r`：`PinInputSlot.vue:16` `<PinInputInput>`
- `border-y`：`PinInputSlot.vue:16` `<PinInputInput>`
- `first:border-l`：`PinInputSlot.vue:16` `<PinInputInput>`
- `first:rounded-l-md`：`PinInputSlot.vue:16` `<PinInputInput>`
- `focus:outline-none`：`PinInputSlot.vue:16` `<PinInputInput>`
- `focus:ring-2`：`PinInputSlot.vue:16` `<PinInputInput>`
- `focus:ring-ring`：`PinInputSlot.vue:16` `<PinInputInput>`
- `h-10`：`PinInputSlot.vue:16` `<PinInputInput>`
- `last:rounded-r-md`：`PinInputSlot.vue:16` `<PinInputInput>`
- `text-sm`：`PinInputSlot.vue:16` `<PinInputInput>`
- `w-10`：`PinInputSlot.vue:16` `<PinInputInput>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `PinInputSlot.vue` default:16 / shadcn:16 | `-ml-px` `bg-[var(--gray-0)]` `border` `disabled:bg-[var(--gray-200)]` `disabled:cursor-not-allowed` `disabled:opacity-100` `disabled:text-[var(--gray-400)]` `enabled:hover:border-primary` `first:ml-0` `first:rounded-l-[4px]` `focus-visible:border-primary` `focus-visible:caret-primary` `focus-visible:outline-none` `focus-visible:ring` `focus-visible:ring-ring` `h-8` `last:rounded-r-[4px]` `leading-[1.5]` `min-h-[30px]` `outline-none` `py-0` `shadow-none` `text-[14px]` `text-foreground` `w-8` | `border-r` `border-y` `first:border-l` `first:rounded-l-md` `focus:outline-none` `focus:ring-2` `focus:ring-ring` `h-10` `last:rounded-r-md` `text-sm` `w-10` |

</details>

<details open>
<summary><code>popover</code>：新增 6 / 删除 5 / 同位置变更 1 / 风险 2</summary>

### default 新增类

- `animate-in`：`PopoverContent.vue:34` `<PopoverContent>`
- `border-gray-300`：`PopoverContent.vue:34` `<PopoverContent>`
- `px-3`：`PopoverContent.vue:34` `<PopoverContent>`
- `py-2`：`PopoverContent.vue:34` `<PopoverContent>`
- `rounded-[4px]`：`PopoverContent.vue:34` `<PopoverContent>`
- `text-sm`：`PopoverContent.vue:34` `<PopoverContent>`

### default 删除类

- `data-[state=open]:animate-in`：`PopoverContent.vue:34` `<PopoverContent>`
- `data-[state=open]:fade-in-0`：`PopoverContent.vue:34` `<PopoverContent>`
- `data-[state=open]:zoom-in-95`：`PopoverContent.vue:34` `<PopoverContent>`
- `p-4`：`PopoverContent.vue:34` `<PopoverContent>`
- `rounded-md`：`PopoverContent.vue:34` `<PopoverContent>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `PopoverContent.vue` default:34 / shadcn:34 | `animate-in` `border-gray-300` `px-3` `py-2` `rounded-[4px]` `text-sm` | `data-[state=open]:animate-in` `data-[state=open]:fade-in-0` `data-[state=open]:zoom-in-95` `p-4` `rounded-md` |

</details>

<details open>
<summary><code>progress</code>：新增 1 / 删除 1 / 同位置变更 1 / 风险 0</summary>

### default 新增类

- `h-[6px]`：`Progress.vue:24` `<ProgressRoot>`

### default 删除类

- `h-4`：`Progress.vue:24` `<ProgressRoot>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `Progress.vue` default:24 / shadcn:24 | `h-[6px]` | `h-4` |

</details>

<details>
<summary><code>radio-group</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>range-calendar</code>：新增 9 / 删除 9 / 同位置变更 3 / 风险 2</summary>

### default 新增类

- `[&[data-selection-end]:not([data-disabled])]:focus:bg-primary`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `[&[data-selection-end]:not([data-disabled])]:focus:text-primary-foreground`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `[&[data-selection-end]:not([data-disabled])]:hover:bg-primary`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `[&[data-selection-end]:not([data-disabled])]:hover:text-primary-foreground`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `[&[data-selection-start]:not([data-disabled])]:focus:bg-primary`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `[&[data-selection-start]:not([data-disabled])]:focus:text-primary-foreground`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `[&[data-selection-start]:not([data-disabled])]:hover:bg-primary`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `[&[data-selection-start]:not([data-disabled])]:hover:text-primary-foreground`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `enabled:hover:opacity-100`：`RangeCalendarNextButton.vue:19` `<RangeCalendarNext>`；`RangeCalendarPrevButton.vue:19` `<RangeCalendarPrev>`

### default 删除类

- `data-[selection-end]:focus:bg-primary`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `data-[selection-end]:focus:text-primary-foreground`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `data-[selection-end]:hover:bg-primary`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `data-[selection-end]:hover:text-primary-foreground`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `data-[selection-start]:focus:bg-primary`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `data-[selection-start]:focus:text-primary-foreground`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `data-[selection-start]:hover:bg-primary`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `data-[selection-start]:hover:text-primary-foreground`：`RangeCalendarCellTrigger.vue:18` `<RangeCalendarCellTrigger>`
- `hover:opacity-100`：`RangeCalendarNextButton.vue:19` `<RangeCalendarNext>`；`RangeCalendarPrevButton.vue:19` `<RangeCalendarPrev>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `RangeCalendarCellTrigger.vue` default:18 / shadcn:18 | `[&[data-selection-end]:not([data-disabled])]:focus:bg-primary` `[&[data-selection-end]:not([data-disabled])]:focus:text-primary-foreground` `[&[data-selection-end]:not([data-disabled])]:hover:bg-primary` `[&[data-selection-end]:not([data-disabled])]:hover:text-primary-foreground` `[&[data-selection-start]:not([data-disabled])]:focus:bg-primary` `[&[data-selection-start]:not([data-disabled])]:focus:text-primary-foreground` `[&[data-selection-start]:not([data-disabled])]:hover:bg-primary` `[&[data-selection-start]:not([data-disabled])]:hover:text-primary-foreground` | `data-[selection-end]:focus:bg-primary` `data-[selection-end]:focus:text-primary-foreground` `data-[selection-end]:hover:bg-primary` `data-[selection-end]:hover:text-primary-foreground` `data-[selection-start]:focus:bg-primary` `data-[selection-start]:focus:text-primary-foreground` `data-[selection-start]:hover:bg-primary` `data-[selection-start]:hover:text-primary-foreground` |
| `RangeCalendarNextButton.vue` default:19 / shadcn:19 | `enabled:hover:opacity-100` | `hover:opacity-100` |
| `RangeCalendarPrevButton.vue` default:19 / shadcn:19 | `enabled:hover:opacity-100` | `hover:opacity-100` |

</details>

<details>
<summary><code>resizable</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>scroll-area</code>：新增 4 / 删除 3 / 同位置变更 2 / 风险 0</summary>

### default 新增类

- `bg-[hsl(var(--scrollbar-thumb))]`：`ScrollBar.vue:26` `<ScrollAreaThumb>`
- `h-[var(--scrollbar-size)]`：`ScrollBar.vue:18` `<ScrollAreaScrollbar>`
- `hover:bg-[hsl(var(--scrollbar-thumb-hover))]`：`ScrollBar.vue:26` `<ScrollAreaThumb>`
- `w-[var(--scrollbar-size)]`：`ScrollBar.vue:18` `<ScrollAreaScrollbar>`

### default 删除类

- `bg-border`：`ScrollBar.vue:26` `<ScrollAreaThumb>`
- `h-2.5`：`ScrollBar.vue:18` `<ScrollAreaScrollbar>`
- `w-2.5`：`ScrollBar.vue:18` `<ScrollAreaScrollbar>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `ScrollBar.vue` default:18 / shadcn:18 | `h-[var(--scrollbar-size)]` `w-[var(--scrollbar-size)]` | `h-2.5` `w-2.5` |
| `ScrollBar.vue` default:26 / shadcn:26 | `bg-[hsl(var(--scrollbar-thumb))]` `hover:bg-[hsl(var(--scrollbar-thumb-hover))]` `transition-colors` | `bg-border` |

</details>

<details open>
<summary><code>select</code>：新增 34 / 删除 20 / 同位置变更 8 / 风险 9</summary>

### default 新增类

- `[&:not([data-disabled])]:focus:bg-gray-400/30`：`SelectItem.vue:24` `<SelectItem>`
- `[&:not([data-disabled])]:focus:text-gray-900`：`SelectItem.vue:24` `<SelectItem>`
- `[&:not([data-disabled])]:hover:bg-gray-400/30`：`SelectItem.vue:24` `<SelectItem>`
- `[&>span]:font-normal`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `[&>span]:leading-[1.5]`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `[&>span]:text-[14px]`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `bg-[var(--gray-0)]`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `border-gray-300`：`SelectContent.vue:37` `<SelectContent>`
- `cursor-pointer`：`SelectItem.vue:24` `<SelectItem>`；`SelectScrollDownButton.vue:17` `<SelectScrollDownButton>`；`SelectScrollUpButton.vue:17` `<SelectScrollUpButton>`
- `data-[disabled]:cursor-not-allowed`：`SelectItem.vue:24` `<SelectItem>`
- `data-[placeholder]:text-[#C3C7CB]`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `disabled:bg-[var(--gray-200)]`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `disabled:opacity-100`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `disabled:text-[var(--gray-400)]`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `enabled:hover:border-primary`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `focus-visible:border-primary`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `focus-visible:outline-none`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `focus-visible:ring-0`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `font-normal`：`SelectItem.vue:24` `<SelectItem>`；`SelectLabel.vue:11` `<SelectLabel>`；`SelectTrigger.vue:25` `<SelectTrigger>`
- `h-8`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `leading-[1.5]`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `min-h-[30px]`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `ml-auto`：`SelectItem.vue:31` `<span>`
- `order-last`：`SelectItem.vue:31` `<span>`
- `px-1`：`SelectContent.vue:37` `<SelectContent>`
- `px-2`：`SelectItem.vue:24` `<SelectItem>`；`SelectLabel.vue:11` `<SelectLabel>`
- `py-0`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `rounded-[4px]`：`SelectContent.vue:37` `<SelectContent>`；`SelectTrigger.vue:25` `<SelectTrigger>`
- `shadow-none`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `text-[14px]`：`SelectItem.vue:24` `<SelectItem>`；`SelectLabel.vue:11` `<SelectLabel>`；`SelectTrigger.vue:25` `<SelectTrigger>`
- `text-foreground`：`SelectTrigger.vue:25` `<SelectTrigger>`
- `text-gray-500`：`SelectLabel.vue:11` `<SelectLabel>`
- `text-gray-900`：`SelectItem.vue:24` `<SelectItem>`
- `text-left`：`SelectItem.vue:24` `<SelectItem>`；`SelectLabel.vue:11` `<SelectLabel>`

### default 删除类

- `absolute`：`SelectItem.vue:31` `<span>`
- `bg-background`：`SelectTrigger.vue:19` `<SelectTrigger>`
- `cursor-default`：`SelectItem.vue:24` `<SelectItem>`；`SelectScrollDownButton.vue:17` `<SelectScrollDownButton>`；`SelectScrollUpButton.vue:17` `<SelectScrollUpButton>`
- `data-[disabled]:pointer-events-none`：`SelectItem.vue:24` `<SelectItem>`
- `data-[placeholder]:text-muted-foreground`：`SelectTrigger.vue:19` `<SelectTrigger>`
- `disabled:opacity-50`：`SelectTrigger.vue:19` `<SelectTrigger>`
- `focus:bg-accent`：`SelectItem.vue:24` `<SelectItem>`
- `focus:outline-none`：`SelectTrigger.vue:19` `<SelectTrigger>`
- `focus:ring-2`：`SelectTrigger.vue:19` `<SelectTrigger>`
- `focus:ring-offset-2`：`SelectTrigger.vue:19` `<SelectTrigger>`
- `focus:ring-ring`：`SelectTrigger.vue:19` `<SelectTrigger>`
- `focus:text-accent-foreground`：`SelectItem.vue:24` `<SelectItem>`
- `font-semibold`：`SelectLabel.vue:11` `<SelectLabel>`
- `h-10`：`SelectTrigger.vue:19` `<SelectTrigger>`
- `left-2`：`SelectItem.vue:31` `<span>`
- `p-1`：`SelectContent.vue:43` `<SelectViewport>`；`SelectGroup.vue:14` `<SelectGroup>`
- `pl-8`：`SelectItem.vue:24` `<SelectItem>`；`SelectLabel.vue:11` `<SelectLabel>`
- `pr-2`：`SelectItem.vue:24` `<SelectItem>`；`SelectLabel.vue:11` `<SelectLabel>`
- `ring-offset-background`：`SelectTrigger.vue:19` `<SelectTrigger>`
- `rounded-md`：`SelectContent.vue:34` `<SelectContent>`；`SelectTrigger.vue:19` `<SelectTrigger>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `SelectContent.vue` default:37 / shadcn:34 | `border-gray-300` `px-1` `py-2` `rounded-[4px]` `text-sm` | `rounded-md` |
| `SelectContent.vue` default:46 / shadcn:43 | 无 | `p-1` |
| `SelectItem.vue` default:24 / shadcn:24 | `[&:not([data-disabled])]:focus:bg-gray-400/30` `[&:not([data-disabled])]:focus:text-gray-900` `[&:not([data-disabled])]:hover:bg-gray-400/30` `cursor-pointer` `data-[disabled]:cursor-not-allowed` `font-normal` `px-2` `text-[14px]` `text-gray-900` `text-left` | `cursor-default` `data-[disabled]:pointer-events-none` `focus:bg-accent` `focus:text-accent-foreground` `pl-8` `pr-2` `text-sm` |
| `SelectItem.vue` default:31 / shadcn:31 | `ml-auto` `order-last` | `absolute` `left-2` |
| `SelectLabel.vue` default:11 / shadcn:11 | `font-normal` `px-2` `text-[14px]` `text-gray-500` `text-left` | `font-semibold` `pl-8` `pr-2` `text-sm` |
| `SelectScrollDownButton.vue` default:17 / shadcn:17 | `cursor-pointer` | `cursor-default` |
| `SelectScrollUpButton.vue` default:17 / shadcn:17 | `cursor-pointer` | `cursor-default` |
| `SelectTrigger.vue` default:32 / shadcn:19 | `h-4` `opacity-50` `shrink-0` `w-4` | `[&>span]:truncate` `bg-background` `border` `border-input` `data-[placeholder]:text-muted-foreground` `disabled:cursor-not-allowed` `disabled:opacity-50` `flex` `focus:outline-none` `focus:ring-2` `focus:ring-offset-2` `focus:ring-ring` `h-10` `items-center` `justify-between` `px-3` `py-2` `ring-offset-background` `rounded-md` `text-sm` `text-start` `w-full` |

</details>

<details>
<summary><code>separator</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>sheet</code>：新增 23 / 删除 11 / 同位置变更 6 / 风险 1</summary>

### default 新增类

- `bg-overlay`：`SheetContent.vue:38` `<DialogOverlay>`
- `border-gray-200`：`SheetFooter.vue:10` `<div>`；`SheetHeader.vue:10` `<div>`
- `cursor-pointer`：`SheetContent.vue:47` `<DialogClose>`
- `disabled:cursor-not-allowed`：`SheetContent.vue:47` `<DialogClose>`
- `enabled:focus-visible:ring-2`：`SheetContent.vue:47` `<DialogClose>`
- `enabled:focus-visible:ring-offset-2`：`SheetContent.vue:47` `<DialogClose>`
- `enabled:focus-visible:ring-ring`：`SheetContent.vue:47` `<DialogClose>`
- `enabled:hover:opacity-100`：`SheetContent.vue:47` `<DialogClose>`
- `font-bold`：`SheetTitle.vue:15` `<DialogTitle>`
- `h-6`：`SheetContent.vue:47` `<DialogClose>`
- `items-center`：`SheetContent.vue:47` `<DialogClose>`
- `justify-center`：`SheetContent.vue:47` `<DialogClose>`
- `leading-[1.4]`：`SheetTitle.vue:15` `<DialogTitle>`
- `leading-[26px]`：`SheetHeader.vue:10` `<div>`
- `mt-auto`：`SheetFooter.vue:10` `<div>`
- `px-0`：`SheetContent.vue:41` `<DialogContent>`
- `px-6`：`SheetFooter.vue:10` `<div>`；`SheetHeader.vue:10` `<div>`
- `py-0`：`SheetContent.vue:41` `<DialogContent>`
- `py-4`：`SheetFooter.vue:10` `<div>`；`SheetHeader.vue:10` `<div>`
- `right-6`：`SheetContent.vue:47` `<DialogClose>`
- `text-[18px]`：`SheetTitle.vue:15` `<DialogTitle>`
- `text-[var(--gray-900)]`：`SheetTitle.vue:15` `<DialogTitle>`
- `w-6`：`SheetContent.vue:47` `<DialogClose>`

### default 删除类

- `bg-black/80`：`SheetContent.vue:38` `<DialogOverlay>`
- `disabled:pointer-events-none`：`SheetContent.vue:47` `<DialogClose>`
- `focus:ring-2`：`SheetContent.vue:47` `<DialogClose>`
- `focus:ring-offset-2`：`SheetContent.vue:47` `<DialogClose>`
- `focus:ring-ring`：`SheetContent.vue:47` `<DialogClose>`
- `font-semibold`：`SheetTitle.vue:15` `<DialogTitle>`
- `hover:opacity-100`：`SheetContent.vue:47` `<DialogClose>`
- `p-6`：`index.ts:14` `cva(...)`
- `right-4`：`SheetContent.vue:47` `<DialogClose>`
- `text-foreground`：`SheetTitle.vue:15` `<DialogTitle>`
- `text-lg`：`SheetTitle.vue:15` `<DialogTitle>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `SheetContent.vue` default:38 / shadcn:38 | `bg-overlay` | `bg-black/80` |
| `SheetContent.vue` default:47 / shadcn:47 | `cursor-pointer` `disabled:cursor-not-allowed` `enabled:focus-visible:ring-2` `enabled:focus-visible:ring-offset-2` `enabled:focus-visible:ring-ring` `enabled:hover:opacity-100` `flex` `h-6` `items-center` `justify-center` `right-6` `w-6` | `disabled:pointer-events-none` `focus:ring-2` `focus:ring-offset-2` `focus:ring-ring` `hover:opacity-100` `right-4` |
| `SheetFooter.vue` default:10 / shadcn:10 | `border-gray-200` `border-t` `mt-auto` `px-6` `py-4` | 无 |
| `SheetHeader.vue` default:10 / shadcn:10 | `border-b` `border-gray-200` `leading-[26px]` `px-6` `py-4` | 无 |
| `SheetTitle.vue` default:15 / shadcn:15 | `font-bold` `leading-[1.4]` `text-[18px]` `text-[var(--gray-900)]` | `font-semibold` `text-foreground` `text-lg` |
| `index.ts` default:14 / shadcn:14 | 无 | `p-6` |

</details>

<details open>
<summary><code>sidebar</code>：新增 13 / 删除 12 / 同位置变更 8 / 风险 12</summary>

### default 新增类

- `[&:not([aria-disabled=true])[data-state=open]]:hover:bg-sidebar-accent`：`index.ts:39` `cva(...)`
- `[&:not([aria-disabled=true])[data-state=open]]:hover:text-sidebar-accent-foreground`：`index.ts:39` `cva(...)`
- `[&:not([aria-disabled=true])]:active:bg-sidebar-accent`：`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`
- `[&:not([aria-disabled=true])]:active:text-sidebar-accent-foreground`：`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`
- `[&:not([aria-disabled=true])]:hover:bg-sidebar-accent`：`SidebarGroupAction.vue:17` `<Primitive>`；`SidebarMenuAction.vue:18` `<Primitive>`；`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`；`index.ts:43` `variants`；`index.ts:45` `样式字符串`
- `[&:not([aria-disabled=true])]:hover:shadow-[0_0_0_1px_var(--sidebar-accent)]`：`index.ts:45` `样式字符串`
- `[&:not([aria-disabled=true])]:hover:text-sidebar-accent-foreground`：`SidebarGroupAction.vue:17` `<Primitive>`；`SidebarMenuAction.vue:18` `<Primitive>`；`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`；`index.ts:43` `variants`；`index.ts:45` `样式字符串`
- `aria-disabled:cursor-not-allowed`：`SidebarGroupAction.vue:17` `<Primitive>`；`SidebarMenuAction.vue:18` `<Primitive>`；`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`
- `cursor-pointer`：`SidebarGroupAction.vue:17` `<Primitive>`；`SidebarMenuAction.vue:18` `<Primitive>`；`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`
- `disabled:cursor-not-allowed`：`SidebarGroupAction.vue:17` `<Primitive>`；`SidebarMenuAction.vue:18` `<Primitive>`；`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`
- `enabled:hover:after:bg-sidebar-border`：`SidebarRail.vue:19` `<button>`
- `focus-visible:ring-0`：`SidebarInput.vue:14` `<Input>`
- `group-data-[collapsible=offcanvas]:enabled:hover:bg-sidebar`：`SidebarRail.vue:19` `<button>`

### default 删除类

- `active:bg-sidebar-accent`：`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`
- `active:text-sidebar-accent-foreground`：`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`
- `aria-disabled:pointer-events-none`：`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`
- `data-[state=open]:hover:bg-sidebar-accent`：`index.ts:39` `cva(...)`
- `data-[state=open]:hover:text-sidebar-accent-foreground`：`index.ts:39` `cva(...)`
- `disabled:pointer-events-none`：`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`
- `focus-visible:ring-sidebar-ring`：`SidebarInput.vue:14` `<Input>`
- `group-data-[collapsible=offcanvas]:hover:bg-sidebar`：`SidebarRail.vue:19` `<button>`
- `hover:after:bg-sidebar-border`：`SidebarRail.vue:19` `<button>`
- `hover:bg-sidebar-accent`：`SidebarGroupAction.vue:17` `<Primitive>`；`SidebarMenuAction.vue:18` `<Primitive>`；`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`；`index.ts:43` `variants`；`index.ts:45` `variants`
- `hover:shadow-[0_0_0_1px_var(--sidebar-accent)]`：`index.ts:45` `variants`
- `hover:text-sidebar-accent-foreground`：`SidebarGroupAction.vue:17` `<Primitive>`；`SidebarMenuAction.vue:18` `<Primitive>`；`SidebarMenuSubButton.vue:24` `<Primitive>`；`index.ts:39` `cva(...)`；`index.ts:43` `variants`；`index.ts:45` `variants`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `SidebarGroupAction.vue` default:17 / shadcn:17 | `[&:not([aria-disabled=true])]:hover:bg-sidebar-accent` `[&:not([aria-disabled=true])]:hover:text-sidebar-accent-foreground` `aria-disabled:cursor-not-allowed` `cursor-pointer` `disabled:cursor-not-allowed` | `hover:bg-sidebar-accent` `hover:text-sidebar-accent-foreground` |
| `SidebarInput.vue` default:14 / shadcn:14 | `focus-visible:ring-0` | `bg-background` `focus-visible:ring-2` `focus-visible:ring-sidebar-ring` |
| `SidebarMenuAction.vue` default:18 / shadcn:18 | `[&:not([aria-disabled=true])]:hover:bg-sidebar-accent` `[&:not([aria-disabled=true])]:hover:text-sidebar-accent-foreground` `aria-disabled:cursor-not-allowed` `cursor-pointer` `disabled:cursor-not-allowed` | `hover:bg-sidebar-accent` `hover:text-sidebar-accent-foreground` |
| `SidebarMenuSubButton.vue` default:24 / shadcn:24 | `[&:not([aria-disabled=true])]:active:bg-sidebar-accent` `[&:not([aria-disabled=true])]:active:text-sidebar-accent-foreground` `[&:not([aria-disabled=true])]:hover:bg-sidebar-accent` `[&:not([aria-disabled=true])]:hover:text-sidebar-accent-foreground` `aria-disabled:cursor-not-allowed` `cursor-pointer` `disabled:cursor-not-allowed` | `active:bg-sidebar-accent` `active:text-sidebar-accent-foreground` `aria-disabled:pointer-events-none` `disabled:pointer-events-none` `hover:bg-sidebar-accent` `hover:text-sidebar-accent-foreground` |
| `SidebarRail.vue` default:19 / shadcn:19 | `enabled:hover:after:bg-sidebar-border` `group-data-[collapsible=offcanvas]:enabled:hover:bg-sidebar` | `group-data-[collapsible=offcanvas]:hover:bg-sidebar` `hover:after:bg-sidebar-border` |
| `index.ts` default:39 / shadcn:39 | `[&:not([aria-disabled=true])[data-state=open]]:hover:bg-sidebar-accent` `[&:not([aria-disabled=true])[data-state=open]]:hover:text-sidebar-accent-foreground` `[&:not([aria-disabled=true])]:active:bg-sidebar-accent` `[&:not([aria-disabled=true])]:active:text-sidebar-accent-foreground` `[&:not([aria-disabled=true])]:hover:bg-sidebar-accent` `[&:not([aria-disabled=true])]:hover:text-sidebar-accent-foreground` `aria-disabled:cursor-not-allowed` `cursor-pointer` `disabled:cursor-not-allowed` | `active:bg-sidebar-accent` `active:text-sidebar-accent-foreground` `aria-disabled:pointer-events-none` `data-[state=open]:hover:bg-sidebar-accent` `data-[state=open]:hover:text-sidebar-accent-foreground` `disabled:pointer-events-none` `hover:bg-sidebar-accent` `hover:text-sidebar-accent-foreground` |
| `index.ts` default:43 / shadcn:43 | `[&:not([aria-disabled=true])]:hover:bg-sidebar-accent` `[&:not([aria-disabled=true])]:hover:text-sidebar-accent-foreground` | `hover:bg-sidebar-accent` `hover:text-sidebar-accent-foreground` |
| `index.ts` default:45 / shadcn:45 | `[&:not([aria-disabled=true])]:hover:bg-sidebar-accent` `[&:not([aria-disabled=true])]:hover:shadow-[0_0_0_1px_var(--sidebar-accent)]` `[&:not([aria-disabled=true])]:hover:text-sidebar-accent-foreground` | `hover:bg-sidebar-accent` `hover:shadow-[0_0_0_1px_var(--sidebar-accent)]` `hover:text-sidebar-accent-foreground` |

</details>

<details>
<summary><code>skeleton</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>slider</code>：新增 4 / 删除 2 / 同位置变更 2 / 风险 1</summary>

### default 新增类

- `cursor-pointer`：`Slider.vue:30` `<SliderThumb>`
- `data-[orientation=vertical]:w-[6px]`：`Slider.vue:24` `<SliderTrack>`
- `disabled:cursor-not-allowed`：`Slider.vue:30` `<SliderThumb>`
- `h-[6px]`：`Slider.vue:24` `<SliderTrack>`

### default 删除类

- `disabled:pointer-events-none`：`Slider.vue:30` `<SliderThumb>`
- `h-2`：`Slider.vue:24` `<SliderTrack>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `Slider.vue` default:24 / shadcn:24 | `data-[orientation=vertical]:w-[6px]` `h-[6px]` | `data-[orientation=vertical]:w-2` `h-2` |
| `Slider.vue` default:30 / shadcn:30 | `cursor-pointer` `disabled:cursor-not-allowed` | `disabled:pointer-events-none` |

</details>

<details>
<summary><code>sonner</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details>
<summary><code>spinner</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>stepper</code>：新增 3 / 删除 1 / 同位置变更 2 / 风险 0</summary>

### default 新增类

- `data-[disabled]:cursor-not-allowed`：`StepperItem.vue:19` `<StepperItem>`
- `focus-visible:outline-none`：`StepperTrigger.vue:19` `<StepperTrigger>`
- `focus-visible:ring-0`：`StepperTrigger.vue:19` `<StepperTrigger>`

### default 删除类

- `data-[disabled]:pointer-events-none`：`StepperItem.vue:19` `<StepperItem>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `StepperItem.vue` default:19 / shadcn:19 | `data-[disabled]:cursor-not-allowed` | `data-[disabled]:pointer-events-none` |
| `StepperTrigger.vue` default:19 / shadcn:19 | `focus-visible:outline-none` `focus-visible:ring-0` | 无 |

</details>

<details>
<summary><code>switch</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details>
<summary><code>table</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>tabs</code>：新增 3 / 删除 3 / 同位置变更 2 / 风险 1</summary>

### default 新增类

- `cursor-pointer`：`TabsTrigger.vue:18` `<TabsTrigger>`
- `disabled:cursor-not-allowed`：`TabsTrigger.vue:18` `<TabsTrigger>`
- `rounded-[4px]`：`TabsList.vue:16` `<TabsList>`；`TabsTrigger.vue:18` `<TabsTrigger>`

### default 删除类

- `disabled:pointer-events-none`：`TabsTrigger.vue:18` `<TabsTrigger>`
- `rounded-md`：`TabsList.vue:16` `<TabsList>`
- `rounded-sm`：`TabsTrigger.vue:18` `<TabsTrigger>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `TabsList.vue` default:16 / shadcn:16 | `rounded-[4px]` | `rounded-md` |
| `TabsTrigger.vue` default:18 / shadcn:18 | `cursor-pointer` `disabled:cursor-not-allowed` `rounded-[4px]` | `disabled:pointer-events-none` `rounded-sm` |

</details>

<details open>
<summary><code>tags-input</code>：新增 21 / 删除 8 / 同位置变更 3 / 风险 5</summary>

### default 新增类

- `bg-[var(--gray-0)]`：`TagsInput.vue:17` `<TagsInputRoot>`
- `bg-gray-200/80`：`TagsInputItem.vue:16` `<TagsInputItem>`
- `disabled:bg-[var(--gray-200)]`：`TagsInput.vue:17` `<TagsInputRoot>`
- `disabled:cursor-not-allowed`：`TagsInput.vue:17` `<TagsInputRoot>`；`TagsInputInput.vue:16` `<TagsInputInput>`
- `disabled:opacity-100`：`TagsInput.vue:17` `<TagsInputRoot>`
- `disabled:text-[var(--gray-400)]`：`TagsInput.vue:17` `<TagsInputRoot>`
- `enabled:hover:border-primary`：`TagsInput.vue:17` `<TagsInputRoot>`
- `focus-within:border-primary`：`TagsInput.vue:17` `<TagsInputRoot>`
- `h-[22px]`：`TagsInputItem.vue:16` `<TagsInputItem>`
- `leading-[1.5]`：`TagsInput.vue:17` `<TagsInputRoot>`；`TagsInputInput.vue:16` `<TagsInputInput>`
- `min-h-[30px]`：`TagsInput.vue:17` `<TagsInputRoot>`；`TagsInputInput.vue:16` `<TagsInputInput>`
- `outline-none`：`TagsInput.vue:17` `<TagsInputRoot>`；`TagsInputInput.vue:16` `<TagsInputInput>`
- `placeholder:text-[#C3C7CB]`：`TagsInputInput.vue:16` `<TagsInputInput>`
- `px-0`：`TagsInputInput.vue:16` `<TagsInputInput>`
- `py-0`：`TagsInput.vue:17` `<TagsInputRoot>`；`TagsInputInput.vue:16` `<TagsInputInput>`
- `rounded-[2px]`：`TagsInputItem.vue:16` `<TagsInputItem>`
- `rounded-[4px]`：`TagsInput.vue:17` `<TagsInputRoot>`
- `shadow-none`：`TagsInput.vue:17` `<TagsInputRoot>`
- `text-[14px]`：`TagsInput.vue:17` `<TagsInputRoot>`；`TagsInputInput.vue:16` `<TagsInputInput>`
- `text-foreground`：`TagsInput.vue:17` `<TagsInputRoot>`；`TagsInputInput.vue:16` `<TagsInputInput>`
- `w-full`：`TagsInput.vue:17` `<TagsInputRoot>`

### default 删除类

- `bg-background`：`TagsInput.vue:17` `<TagsInputRoot>`
- `bg-secondary`：`TagsInputItem.vue:16` `<TagsInputItem>`
- `flex-wrap`：`TagsInput.vue:17` `<TagsInputRoot>`
- `h-6`：`TagsInputItem.vue:16` `<TagsInputItem>`
- `min-h-6`：`TagsInputInput.vue:16` `<TagsInputInput>`
- `px-1`：`TagsInputInput.vue:16` `<TagsInputInput>`
- `py-2`：`TagsInput.vue:17` `<TagsInputRoot>`
- `rounded-md`：`TagsInput.vue:17` `<TagsInputRoot>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `TagsInput.vue` default:17 / shadcn:17 | `bg-[var(--gray-0)]` `disabled:bg-[var(--gray-200)]` `disabled:cursor-not-allowed` `disabled:opacity-100` `disabled:text-[var(--gray-400)]` `enabled:hover:border-primary` `focus-within:border-primary` `leading-[1.5]` `min-h-[30px]` `outline-none` `py-0` `rounded-[4px]` `shadow-none` `text-[14px]` `text-foreground` `w-full` | `bg-background` `flex-wrap` `py-2` `rounded-md` `text-sm` |
| `TagsInputInput.vue` default:16 / shadcn:16 | `disabled:cursor-not-allowed` `flex` `leading-[1.5]` `min-h-[30px]` `outline-none` `placeholder:text-[#C3C7CB]` `px-0` `py-0` `text-[14px]` `text-foreground` | `min-h-6` `px-1` `text-sm` |
| `TagsInputItem.vue` default:16 / shadcn:16 | `bg-gray-200/80` `h-[22px]` `rounded-[2px]` | `bg-secondary` `h-6` `rounded` |

</details>

<details open>
<summary><code>textarea</code>：新增 18 / 删除 10 / 同位置变更 1 / 风险 6</summary>

### default 新增类

- `bg-[var(--gray-0)]`：`Textarea.vue:49` `<textarea>`
- `disabled:bg-[var(--gray-200)]`：`Textarea.vue:49` `<textarea>`
- `disabled:opacity-100`：`Textarea.vue:49` `<textarea>`
- `disabled:text-[var(--gray-400)]`：`Textarea.vue:49` `<textarea>`
- `enabled:hover:border-primary`：`Textarea.vue:49` `<textarea>`
- `focus-visible:border-primary`：`Textarea.vue:49` `<textarea>`
- `focus-visible:caret-primary`：`Textarea.vue:49` `<textarea>`
- `focus-visible:ring-0`：`Textarea.vue:49` `<textarea>`
- `leading-[1.5]`：`Textarea.vue:49` `<textarea>`
- `outline-none`：`Textarea.vue:49` `<textarea>`
- `overflow-y-auto`：`Textarea.vue:49` `<textarea>`
- `placeholder:text-[#C3C7CB]`：`Textarea.vue:49` `<textarea>`
- `py-1.5`：`Textarea.vue:49` `<textarea>`
- `resize-y`：`Textarea.vue:49` `<textarea>`
- `rounded-[4px]`：`Textarea.vue:49` `<textarea>`
- `shadow-none`：`Textarea.vue:49` `<textarea>`
- `text-[14px]`：`Textarea.vue:49` `<textarea>`
- `text-foreground`：`Textarea.vue:49` `<textarea>`

### default 删除类

- `bg-background`：`Textarea.vue:23` `<textarea>`
- `disabled:opacity-50`：`Textarea.vue:23` `<textarea>`
- `focus-visible:ring-2`：`Textarea.vue:23` `<textarea>`
- `focus-visible:ring-offset-2`：`Textarea.vue:23` `<textarea>`
- `focus-visible:ring-ring`：`Textarea.vue:23` `<textarea>`
- `placeholder:text-muted-foreground`：`Textarea.vue:23` `<textarea>`
- `py-2`：`Textarea.vue:23` `<textarea>`
- `ring-offset-background`：`Textarea.vue:23` `<textarea>`
- `rounded-md`：`Textarea.vue:23` `<textarea>`
- `text-sm`：`Textarea.vue:23` `<textarea>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `Textarea.vue` default:49 / shadcn:23 | `bg-[var(--gray-0)]` `disabled:bg-[var(--gray-200)]` `disabled:opacity-100` `disabled:text-[var(--gray-400)]` `enabled:hover:border-primary` `focus-visible:border-primary` `focus-visible:caret-primary` `focus-visible:ring-0` `leading-[1.5]` `outline-none` `overflow-y-auto` `placeholder:text-[#C3C7CB]` `py-1.5` `resize-y` `rounded-[4px]` `shadow-none` `text-[14px]` `text-foreground` | `bg-background` `disabled:opacity-50` `focus-visible:ring-2` `focus-visible:ring-offset-2` `focus-visible:ring-ring` `placeholder:text-muted-foreground` `py-2` `ring-offset-background` `rounded-md` `text-sm` |

</details>

<details open>
<summary><code>toggle</code>：新增 17 / 删除 14 / 同位置变更 5 / 风险 1</summary>

### default 新增类

- `cursor-pointer`：`index.ts:7` `cva(...)`
- `disabled:cursor-not-allowed`：`index.ts:7` `cva(...)`
- `enabled:hover:bg-accent`：`index.ts:13` `variants`
- `enabled:hover:bg-muted`：`index.ts:7` `cva(...)`
- `enabled:hover:text-accent-foreground`：`index.ts:13` `variants`
- `enabled:hover:text-muted-foreground`：`index.ts:7` `cva(...)`
- `font-normal`：`index.ts:7` `cva(...)`
- `h-7`：`index.ts:17` `样式字符串`
- `h-8`：`index.ts:16` `样式字符串`
- `leading-[initial]`：`index.ts:7` `cva(...)`
- `min-w-7`：`index.ts:17` `样式字符串`
- `min-w-8`：`index.ts:16` `样式字符串`
- `px-4`：`index.ts:16` `样式字符串`；`index.ts:18` `样式字符串`
- `rounded-sm`：`index.ts:7` `cva(...)`
- `text-[14px]`：`index.ts:16` `样式字符串`；`index.ts:17` `样式字符串`
- `text-[16px]`：`index.ts:18` `样式字符串`
- `whitespace-nowrap`：`index.ts:7` `cva(...)`

### default 删除类

- `disabled:pointer-events-none`：`index.ts:7` `cva(...)`
- `font-medium`：`index.ts:7` `cva(...)`
- `h-11`：`index.ts:18` `样式字符串`
- `h-9`：`index.ts:17` `样式字符串`
- `hover:bg-accent`：`index.ts:13` `variants`
- `hover:bg-muted`：`index.ts:7` `cva(...)`
- `hover:text-accent-foreground`：`index.ts:13` `variants`
- `hover:text-muted-foreground`：`index.ts:7` `cva(...)`
- `min-w-11`：`index.ts:18` `样式字符串`
- `min-w-9`：`index.ts:17` `样式字符串`
- `px-2.5`：`index.ts:17` `样式字符串`
- `px-5`：`index.ts:18` `样式字符串`
- `rounded-md`：`index.ts:7` `cva(...)`
- `text-sm`：`index.ts:7` `cva(...)`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `index.ts` default:7 / shadcn:7 | `cursor-pointer` `disabled:cursor-not-allowed` `enabled:hover:bg-muted` `enabled:hover:text-muted-foreground` `font-normal` `leading-[initial]` `rounded-sm` `whitespace-nowrap` | `disabled:pointer-events-none` `font-medium` `hover:bg-muted` `hover:text-muted-foreground` `rounded-md` `text-sm` |
| `index.ts` default:13 / shadcn:13 | `enabled:hover:bg-accent` `enabled:hover:text-accent-foreground` | `hover:bg-accent` `hover:text-accent-foreground` |
| `index.ts` default:16 / shadcn:16 | `h-8` `min-w-8` `px-4` `text-[14px]` | `h-10` `min-w-10` `px-3` |
| `index.ts` default:17 / shadcn:17 | `h-7` `min-w-7` `px-3` `text-[14px]` | `h-9` `min-w-9` `px-2.5` |
| `index.ts` default:18 / shadcn:18 | `h-10` `min-w-10` `px-4` `text-[16px]` | `h-11` `min-w-11` `px-5` |

</details>

<details>
<summary><code>toggle-group</code>：新增 0 / 删除 0 / 同位置变更 0 / 风险 0</summary>

### default 新增类

无。

### default 删除类

无。

### 同位置类串变更

无。

</details>

<details open>
<summary><code>tooltip</code>：新增 11 / 删除 3 / 同位置变更 1 / 风险 2</summary>

### default 新增类

- `border-gray-300`：`TooltipContent.vue:26` `<TooltipContent>`
- `data-[side=bottom]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]`：`TooltipContent.vue:26` `<TooltipContent>`
- `data-[side=left]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]`：`TooltipContent.vue:26` `<TooltipContent>`
- `data-[side=right]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]`：`TooltipContent.vue:26` `<TooltipContent>`
- `data-[side=top]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]`：`TooltipContent.vue:26` `<TooltipContent>`
- `fill-popover`：`TooltipContent.vue:28` `<TooltipArrow>`
- `overflow-visible`：`TooltipContent.vue:26` `<TooltipContent>`
- `py-2`：`TooltipContent.vue:26` `<TooltipContent>`
- `rounded-[4px]`：`TooltipContent.vue:26` `<TooltipContent>`
- `stroke-gray-300`：`TooltipContent.vue:28` `<TooltipArrow>`
- `z-[1]`：`TooltipContent.vue:28` `<TooltipArrow>`

### default 删除类

- `overflow-hidden`：`TooltipContent.vue:25` `<TooltipContent>`
- `py-1.5`：`TooltipContent.vue:25` `<TooltipContent>`
- `rounded-md`：`TooltipContent.vue:25` `<TooltipContent>`

### 同位置类串变更

| 文件 | default 新增 | default 删除 |
| --- | --- | --- |
| `TooltipContent.vue` default:26 / shadcn:25 | `border-gray-300` `data-[side=bottom]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]` `data-[side=left]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]` `data-[side=right]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]` `data-[side=top]:[&_[data-slot=tooltip-arrow]]:translate-y-[-20%]` `overflow-visible` `py-2` `rounded-[4px]` | `overflow-hidden` `py-1.5` `rounded-md` |

</details>

