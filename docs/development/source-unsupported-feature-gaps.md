# 旧组件支持但当前 shadcn-vue 组件不直接支持的能力

## Summary

本文件汇总直接或基本对应组件中，旧组件已支持但当前 `registry/default` 组件没有直接内建的能力。后续迁移时，这些能力应作为兼容封装、自定义组件或 Pro 组件需求处理。

## avatar -> avatar

- 旧组件的 type=image/logo/text 没有直接等价 prop
- 旧组件的 radius、color、bgColor、fontSize 没有当前内置 prop
- 旧组件的 fit 与 onError 需要落到 AvatarImage 或额外封装

## badge -> badge

- 当前没有 count 计数逻辑
- 当前没有 100+ 截断逻辑
- 当前没有 show/type 控制红点模式

## breadcrumb -> breadcrumb

- 当前没有 data 驱动渲染
- 当前没有 itemNum 自动折叠下拉
- 当前没有 nameKey/nameWidth/popWidth/widthAuto API
- 当前没有内建 change 事件封装

## button -> button

- 当前没有 loading prop
- 当前没有 icon/iconSize/iconBg/iconPosition prop
- 当前没有 width prop
- 旧 type=text 需要映射到 ghost/link 或额外 variant

## checkbox -> checkbox

- 旧字符串状态 checked/uncheck/notNull 需要适配
- 当前没有 size 数字 prop
- 事件签名不直接返回旧 State 枚举

## drawer -> drawer

- 当前没有 title/titleOverFlow/footFixed 等业务 prop
- 当前没有 customCloseClassName 排除关闭逻辑
- 当前没有 width/height/zIndex/shadowClick 的旧式集中 API

## dropdown -> dropdown-menu

- 当前没有 options 数组驱动封装
- 当前没有内建搜索框
- 当前没有 text/type/showArrow/emptyText 业务 prop
- 当前 hover 触发需要额外封装或改用 hover-card/popover

## form -> form

- 旧 inline/labelPosition 集中式 API 需要重建
- 旧 rules 规则格式需要转换到 vee-validate/zod
- 旧表单实例方法需要逐项迁移

## formItem -> field / form

- 旧 FormItem 的 prop/rules 联动需要映射
- 旧 label 宽度和布局 API 需要额外封装

## input -> input / textarea / input-group

- 旧组件的 showWordLimit/message/password/vericode 需要额外封装
- 旧 width/height/icon 集中 prop 不在当前 Input 内
- 旧多模式输入需要拆成多个当前组件组合

## inputNum -> number-field

- 旧 InputNum 的具体格式化/精度/清空 API 需逐项适配
- 旧导出名 MNumber/InputNum 不保留

## inputNumber -> number-field

- 旧 InputNumber 的业务 prop 需要映射到 NumberField primitive
- 旧导出名和事件签名不直接保留

## pagination -> pagination

- 当前没有内建 jumper/simple 完整业务封装
- 旧分页数据驱动和事件格式需要适配

## popover -> popover

- 旧 use-popover 工具和部分 trigger 封装不保留
- 旧定位 API 需要映射到 reka-ui/floating-ui props

## radioGroup -> radio-group

- 旧 options/data 驱动需要额外封装
- 旧事件签名和字段名需要适配

## scrollbar -> scroll-area

- 旧 scrollbar 工具函数和精细 thumb/bar API 不直接暴露
- 旧 MScrollbar 导出名不保留

## select -> select

- 旧 options 数据驱动需要额外封装
- 旧 useIsShowTips/usePopupStyle 不保留
- 旧 Option/OptionGroup 组件名不直接保留

## shadcnPopover -> popover

- 旧 MShadcnPopover 命名不保留
- 旧 Content 细节和 API 需要逐项核对后迁移

## Sidebar -> sidebar

- 旧尺寸变化 API 和图标资源不直接保留
- 旧 Msidebar 命名不保留
- 旧 resident 行为需映射到当前 Provider/variant/collapsible

## SidebarCustom -> sidebar

- 旧自定义图标包不保留
- 旧 SidebarCustomProps 需要单独映射到当前 sidebar props/slot

## step -> stepper

- 旧 MStep 独立导出不保留
- 旧 StepProps 字段需映射到 StepperItem/Indicator/Title

## steps -> stepper

- 旧 data 节点对象驱动没有内建
- 旧 category/lineType/defaultColor/defaultSet 没有直接 prop
- 旧 defaultImg/activeImg 插槽需要自定义组合

## switch -> switch

- 旧字符串状态需要适配
- 当前没有 loading prop
- 当前没有 beforeChange 阻止切换钩子
- 当前没有 size prop

## table -> table

- 当前不是数据驱动表格
- 没有内建排序、选择、列设置、拖拽列宽、固定列、合并单元格
- 旧 MTable 更接近后续 ProTable 需求

## tabs -> tabs

- 当前没有 data 驱动
- 当前没有 line/segment/border 内建模式
- 当前没有 renderSlot/renderPreSlot 配置对象
- 当前没有 setBarStyle 暴露方法

## tips -> tooltip

- 当前没有 theme prop
- 旧 Popover 类属性需要映射到 TooltipContent/Root props
- 旧 MTips 命名不保留
