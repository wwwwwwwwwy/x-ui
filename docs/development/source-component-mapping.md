# source 旧组件库与当前组件对照关系

## Summary

`source/packages/components` 是旧组件库入口，`source/packages/components/components.ts` 共导出 58 个旧组件目录；当前默认分发组件以 `registry/default` 和 `registry.json` 为准，共 58 个 shadcn-vue 风格组件。

旧组件库特征：

- 主要使用 Vue TSX 编写。
- 全局安装入口在 `source/packages/components/index.ts`。
- 默认安装前缀是 `M`。
- 旧组件文档多在各组件目录的 `index.md`。
- 旧组件测试示例多在各组件目录的 `test/*.vue`。

当前组件库特征：

- 使用 Vue SFC `.vue`。
- 组件源码在 `registry/default/<component>`。
- registry JSON 静态分发在 `public/r/*.json`。
- 组件 API 文档在 `content/docs/components/*.md`。

## 开发索引

- [组件依赖关系](./component-dependency-map.md)
- [组件样式复用清单](./source-component-comparisons/style-reuse-checklist.md)
- [旧组件与当前组件差异对照](./source-component-comparisons/)

## 直接或基本对应

| 旧组件 | 旧导出 | 当前组件 | 对应说明 |
| --- | --- | --- | --- |
| `avatar` | `MAvatar` | `avatar` | 头像组件，功能语义直接对应。 |
| `badge` | `MBadge` | `badge` | 徽标组件，功能语义直接对应。 |
| `breadcrumb` | `MBreadcrumb` | `breadcrumb` | 面包屑组件，功能语义直接对应。 |
| `button` | `MButton` | `button` | 按钮组件，功能语义直接对应。 |
| `checkbox` | `MCheckbox` | `checkbox` | 单个复选框直接对应。 |
| `drawer` | `MDrawer` | `drawer` | 抽屉组件，功能语义基本对应。 |
| `dropdown` | `MDropdown` | `dropdown-menu` | 下拉菜单语义对应；当前按 shadcn-vue 拆成复合组件。 |
| `form` | `MForm` | `form` | 表单能力对应；当前更偏向 vee-validate/shadcn-vue 组合。 |
| `formItem` | `MFormItem` | `field` / `form` | 表单项语义对应；当前由 `field` 和 `form` 共同承载。 |
| `input` | `MInput` | `input` / `textarea` / `input-group` | 基础输入对应；旧库里的 textarea、图标、提示等能力需要拆到多个当前组件。 |
| `inputNum` | `MNumber` / `InputNum` | `number-field` | 数字输入语义对应。 |
| `inputNumber` | `MInputNumber` / `InputNumber` | `number-field` | 数字输入语义对应。 |
| `pagination` | `MPagination` | `pagination` | 分页语义直接对应。 |
| `popover` | `MPopover` | `popover` | 弹出层语义对应。 |
| `radioGroup` | `MRadioGroup` | `radio-group` | 单选组语义对应。 |
| `scrollbar` | `MScrollbar` / `MScrollArea` | `scroll-area` | 滚动区域语义对应。 |
| `select` | `MSelect` / `MOption` / `MOptionGroup` | `select` | 选择器语义对应；当前按 shadcn-vue 复合组件拆分。 |
| `shadcnPopover` | `MShadcnPopover` 等 | `popover` | 旧库已有 shadcn 风格 Popover，可对齐当前 `popover`。 |
| `Sidebar` | `Msidebar` | `sidebar` | 侧边栏语义对应；当前是 shadcn-vue sidebar 复合组件。 |
| `SidebarCustom` | `MsidebarCustom` | `sidebar` | 自定义侧边栏可作为当前 `sidebar` 的迁移参考。 |
| `step` | `MStep` | `stepper` | 单步骤可并入当前 `stepper` 体系。 |
| `steps` | `MSteps` | `stepper` | 步骤条语义对应。 |
| `switch` | `MSwitch` | `switch` | 开关组件直接对应。 |
| `table` | `MTable` | `table` | 表格语义对应；旧库表格能力明显更复杂，迁移时可能需要扩展 `pro-table`。 |
| `tabs` | `MTabs` | `tabs` | 标签页语义直接对应。 |
| `tips` | `MTips` | `tooltip` | 提示说明语义对应。 |

## 近似对应或需要拆分迁移

| 旧组件 | 旧导出 | 当前候选 | 迁移说明 |
| --- | --- | --- | --- |
| `banner` | `MBanner` | `alert` | 横幅提示可映射为 `alert`；关闭、编辑等行为需要额外封装。 |
| `checkBoxGroup` | `MCheckboxGroup` | `checkbox` | 当前没有独立 checkbox group，需要用多个 `checkbox` 组合实现。 |
| `collapse` | `MCollapse` / `MCollapseItem` | `accordion` / `collapsible` | 多项折叠更接近 `accordion`，单项展开更接近 `collapsible`。 |
| `datePicker` | `MDatePicker` | `calendar` / `range-calendar` | 当前只有日历 primitive，不等价于完整 DatePicker；日期输入、确认、时间选择需扩展。 |
| `listSkeleton` | `MListSkeleton` | `skeleton` | 骨架屏语义对应，但旧库列表骨架需要用 `skeleton` 组合复刻。 |
| `loading` | `MLoading` | `spinner` / `progress` | 局部 loading 可用 `spinner`，进度语义用 `progress`；指令和 service 需额外实现。 |
| `message` | `MMessage` | `sonner` | 消息提示可迁移到 `sonner`。 |
| `messageBox` | `MMessageBox` | `alert-dialog` / `dialog` | 确认弹窗语义可用 `alert-dialog`，普通弹窗可用 `dialog`。 |
| `modal` | `MModal` | `dialog` / `alert-dialog` | 普通模态框对应 `dialog`，确认类对应 `alert-dialog`。 |
| `notification` | `MNotification` | `sonner` | 通知提示可迁移到 `sonner`。 |
| `popConfirm` | `MPopConfirm` | `popover` / `alert-dialog` | 气泡确认需要组合 `popover` 与确认按钮；强确认场景可用 `alert-dialog`。 |
| `popup` | `MPopup` | `popover` / `sheet` / `dialog` | 需要按弹出位置和交互语义选择当前组件。 |
| `search` | `MSearch` | `input` / `command` / `combobox` | 简单搜索用 `input`，命令式搜索用 `command`，下拉搜索用 `combobox`。 |
| `selectCreate` | `MSelectCreate` | `combobox` / `select` | 可创建选项更接近 `combobox`，普通选择仍用 `select`。 |
| `selectHeader` | `MSelectHeader` | `tags-input` / `select` / `combobox` | 多标签选择头部能力可拆到 `tags-input` 或 `combobox`。 |
| `tag` | `MTag` | `badge` / `tags-input` | 静态标签接近 `badge`，可编辑标签集合接近 `tags-input`。 |
| `timepicker` | `MTimePicker` / `MTimePickerPanel` | 暂无直接组件 | 可作为后续自定义 registry 组件新增。 |
| `monthDayPicker` | `MMonthDayPicker` | `calendar` / `range-calendar` | 月日选择需要在当前 calendar 基础上封装。 |
| `treeSelect` | `MTreeSelect` | `combobox` / `select` | 当前无树选择，需要自定义扩展。 |
| `selectTree` | `MSelectTree` | `combobox` / `select` | 当前无树选择，需要自定义扩展。 |

## 当前缺失旧库能力

这些旧组件在当前 shadcn-vue registry 中没有直接等价组件，迁移时应作为自定义组件重新设计：

| 旧组件 | 旧导出 | 说明 |
| --- | --- | --- |
| `anchor` | `MAnchor` | 锚点导航；当前没有直接组件。 |
| `cascader` | `MCascader` | 级联选择器；当前没有直接组件。 |
| `fileUpload` | `MFileUpload` | 文件上传；当前没有直接组件。 |
| `guide` | `MGuide` | 新手引导；当前没有直接组件。 |
| `icon` | `MIcon` | 图标组件；当前更适合使用 `lucide-vue-next` 或独立图标体系。 |
| `illustration` | `MIllustration` | 插画空状态资源；可与 `empty` 组合，但不是直接组件。 |
| `imageUpload` | `MImageUpload` | 图片上传；当前没有直接组件。 |
| `overlay` | `FlexibleOverlay` | 底层 overlay 工具；当前由 `reka-ui` primitive 间接承担。 |
| `transfer` | `MTransfer` | 穿梭框；当前没有直接组件。 |
| `tree` | `MTree` | 树组件；当前没有直接组件。 |
| `virtualList` | `MVirtualList` | 虚拟列表；当前没有直接组件。 |

## 当前新增能力

这些是当前 shadcn-vue registry 中存在，但旧组件库没有明确同名或强语义对应的组件：

| 当前组件 | 说明 |
| --- | --- |
| `aspect-ratio` | 固定宽高比容器。 |
| `button-group` | 按钮组。 |
| `card` | 卡片布局。 |
| `carousel` | 轮播。 |
| `chart` | 图表组合组件。 |
| `command` | 命令面板。 |
| `context-menu` | 右键上下文菜单。 |
| `empty` | 空状态组件；可承接部分 illustration/listSkeleton 场景。 |
| `hover-card` | 悬浮卡片。 |
| `item` | 通用条目布局。 |
| `kbd` | 键盘按键展示。 |
| `label` | 表单标签。 |
| `menubar` | 菜单栏。 |
| `navigation-menu` | 导航菜单。 |
| `pin-input` | PIN/验证码输入；旧库 input 的 vericode 示例可参考迁移。 |
| `resizable` | 可拖拽调整尺寸面板。 |
| `separator` | 分隔线。 |
| `sheet` | 侧滑面板；可承接部分 drawer/popup 场景。 |
| `slider` | 滑块。 |
| `toggle` | 单个切换按钮。 |
| `toggle-group` | 切换按钮组。 |

## 迁移优先级建议

优先迁移已有强对应关系、且用户使用频率高的组件：

1. `button`、`input`、`select`、`checkbox`、`radioGroup`、`switch`。
2. `modal`、`drawer`、`popover`、`message`、`notification`。
3. `form`、`formItem`、`table`、`pagination`、`tabs`。
4. `datePicker`、`timepicker`、`cascader`、`treeSelect`、`transfer` 等当前缺失的复杂业务组件。

迁移复杂组件时，建议不要逐行搬运 TSX，而是按当前规范重写为 Vue SFC，并保留旧组件的 API 对照文档。
