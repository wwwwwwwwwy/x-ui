# 组件依赖关系

本文档整理 `registry/default` 中 58 个组件的依赖关系，用于后续逐个组件调整样式、示例和文档时判断修改顺序。

## 依赖来源

依赖关系来自两个来源：

- `registry.json` 中的 `registryDependencies`
- `registry/default` 源码中对 `@/registry/default/ui/*` 或 `@/components/ui/*` 的本地组件引用

本文只记录本仓库组件之间的依赖关系。`reka-ui`、`@vueuse/core`、`class-variance-authority`、`@meri-design/icon-vue`、`lucide-vue-next` 等第三方依赖单独记录在“第三方依赖概览”中。

## 推荐修改顺序

## 全量修改计划表

| 顺序 | 状态 | 阶段 | 组件 | 本地依赖 | 修改后重点回归 |
| --- | --- | --- | --- | --- | --- |
| 1 | 已完成 | 基础枢纽 | `button` | 无 | `alert-dialog`, `calendar`, `carousel`, `chart`, `input-group`, `pagination`, `range-calendar`, `sidebar` |
| 2 | 已完成 | 基础枢纽 | `input` | 无 | `input-group`, `sidebar` |
| 3 | 已完成 | 基础枢纽 | `textarea` | 无 | `input-group` |
| 4 | 已完成 | 基础枢纽 | `separator` | 无 | `button-group`, `field`, `item`, `sidebar` |
| 5 | 已完成 | 基础枢纽 | `label` | 无 | `field`, `form` |
| 6 | 已完成 | 基础枢纽 | `card` | 无 | `chart` |
| 7 | 已完成 | 基础枢纽 | `toggle` | 无 | `toggle-group` |
| 8 | 已完成 | 基础枢纽 | `tooltip` | 无 | `sidebar` |
| 9 | 已完成 | 基础枢纽 | `sheet` | 无 | `sidebar` |
| 10 | 已完成 | 基础枢纽 | `skeleton` | 无 | `sidebar` |
| 11 | 已完成 | 基础独立 | `accordion` | 无 | 当前组件页面 |
| 12 | 已完成 | 基础独立 | `alert` | 无 | 当前组件页面 |
| 13 | 已完成 | 基础独立 | `aspect-ratio` | 无 | 当前组件页面 |
| 14 | 已完成 | 基础独立 | `avatar` | 无 | 当前组件页面 |
| 15 | 已完成 | 基础独立 | `badge` | 无 | 当前组件页面 |
| 16 | 已完成 | 基础独立 | `breadcrumb` | 无 | 当前组件页面 |
| 17 | 已完成 | 基础独立 | `checkbox` | 无 | 当前组件页面 |
| 18 | 已完成 | 基础独立 | `collapsible` | 无 | 当前组件页面 |
| 19 | 已完成 | 基础独立 | `combobox` | 无 | 当前组件页面 |
| 20 | 已完成 | 基础独立 | `context-menu` | 无 | 当前组件页面 |
| 21 | 已完成 | 基础独立 | `dialog` | 无 | `command` |
| 22 | 已完成 | 基础独立 | `drawer` | 无 | 当前组件页面 |
| 23 | 待处理 | 基础独立 | `dropdown-menu` | 无 | 当前组件页面 |
| 24 | 待处理 | 基础独立 | `empty` | 无 | 当前组件页面 |
| 25 | 待处理 | 基础独立 | `hover-card` | 无 | 当前组件页面 |
| 26 | 待处理 | 基础独立 | `kbd` | 无 | 当前组件页面 |
| 27 | 待处理 | 基础独立 | `menubar` | 无 | 当前组件页面 |
| 28 | 待处理 | 基础独立 | `navigation-menu` | 无 | 当前组件页面 |
| 29 | 待处理 | 基础独立 | `number-field` | 无 | 当前组件页面 |
| 30 | 待处理 | 基础独立 | `pin-input` | 无 | 当前组件页面 |
| 31 | 待处理 | 基础独立 | `popover` | 无 | 当前组件页面 |
| 32 | 待处理 | 基础独立 | `progress` | 无 | 当前组件页面 |
| 33 | 待处理 | 基础独立 | `radio-group` | 无 | 当前组件页面 |
| 34 | 待处理 | 基础独立 | `resizable` | 无 | 当前组件页面 |
| 35 | 已完成 | 基础独立 | `scroll-area` | 无 | 当前组件页面 |
| 36 | 已完成 | 基础独立 | `select` | 无 | 当前组件页面 |
| 37 | 待处理 | 基础独立 | `slider` | 无 | 当前组件页面 |
| 38 | 待处理 | 基础独立 | `sonner` | 无 | 当前组件页面 |
| 39 | 待处理 | 基础独立 | `spinner` | 无 | 当前组件页面 |
| 40 | 待处理 | 基础独立 | `stepper` | 无 | 当前组件页面 |
| 41 | 待处理 | 基础独立 | `switch` | 无 | 当前组件页面 |
| 42 | 待处理 | 基础独立 | `table` | 无 | 当前组件页面 |
| 43 | 待处理 | 基础独立 | `tabs` | 无 | 当前组件页面 |
| 44 | 待处理 | 基础独立 | `tags-input` | 无 | 当前组件页面 |
| 45 | 待处理 | 轻量组合 | `alert-dialog` | `button` | 当前组件页面 |
| 46 | 已完成 | 轻量组合 | `button-group` | `separator` | 当前组件页面 |
| 47 | 待处理 | 轻量组合 | `calendar` | `button` | 当前组件页面 |
| 48 | 待处理 | 轻量组合 | `carousel` | `button` | 当前组件页面 |
| 49 | 待处理 | 轻量组合 | `command` | `dialog` | 当前组件页面 |
| 50 | 待处理 | 轻量组合 | `field` | `label`, `separator` | 当前组件页面 |
| 51 | 待处理 | 轻量组合 | `form` | `label` | 当前组件页面 |
| 52 | 已完成 | 轻量组合 | `input-group` | `button`, `input`, `textarea` | 当前组件页面 |
| 53 | 待处理 | 轻量组合 | `item` | `separator` | 当前组件页面 |
| 54 | 待处理 | 轻量组合 | `pagination` | `button` | 当前组件页面 |
| 55 | 待处理 | 轻量组合 | `range-calendar` | `button` | 当前组件页面 |
| 56 | 待处理 | 轻量组合 | `toggle-group` | `toggle` | 当前组件页面 |
| 57 | 待处理 | 复杂复合 | `chart` | `button`, `card` | `button`, `card`, 当前组件页面 |
| 58 | 待处理 | 复杂复合 | `sidebar` | `button`, `input`, `separator`, `sheet`, `skeleton`, `tooltip` | 所有布局态、折叠态、移动端 sheet、tooltip |

### 第一层：基础组件

这些组件不依赖其它本地组件，适合优先修改。修改它们会影响被依赖组件的表现。

```txt
accordion
alert
aspect-ratio
avatar
badge
breadcrumb
button
card
checkbox
collapsible
combobox
context-menu
dialog
drawer
dropdown-menu
empty
hover-card
input
kbd
label
menubar
navigation-menu
number-field
pin-input
popover
progress
radio-group
resizable
scroll-area
select
separator
sheet
skeleton
slider
sonner
spinner
stepper
switch
table
tabs
tags-input
textarea
toggle
tooltip
```

### 第二层：轻量组合组件

这些组件依赖少量基础组件，建议在基础组件确认后修改。

| 组件 | 依赖组件 | 说明 |
| --- | --- | --- |
| `alert-dialog` | `button` | action / cancel 使用 `buttonVariants` |
| `button-group` | `separator` | 分割线使用 `Separator` |
| `calendar` | `button` | 上一月、下一月、日期单元按钮使用 `buttonVariants` |
| `carousel` | `button` | previous / next 控制按钮使用 `Button` |
| `command` | `dialog` | `CommandDialog` 复用 `Dialog` |
| `field` | `label`, `separator` | label 与分割线复用基础组件 |
| `form` | `label` | `FormLabel` 复用 `Label` |
| `input-group` | `button`, `input`, `textarea` | 输入组按钮、输入框、多行输入复用基础组件 |
| `item` | `separator` | `ItemSeparator` 复用 `Separator` |
| `pagination` | `button` | 页码、上一页、下一页使用 `buttonVariants` |
| `range-calendar` | `button` | 上一月、下一月、日期单元按钮使用 `buttonVariants` |
| `toggle-group` | `toggle` | item 复用 `toggleVariants` |

### 第三层：复杂复合组件

这些组件依赖多个本地组件，建议放在基础组件和轻量组合组件之后处理。

| 组件 | 依赖组件 | 说明 |
| --- | --- | --- |
| `chart` | `button`, `card` | 图例按钮使用 `buttonVariants`，tooltip 使用 `Card` |
| `sidebar` | `button`, `input`, `separator`, `sheet`, `skeleton`, `tooltip` | 依赖最多，建议最后修改 |

## 被依赖次数

修改这些组件时需要额外注意，因为它们会影响多个其它组件。

| 组件 | 被哪些组件依赖 |
| --- | --- |
| `button` | `alert-dialog`, `calendar`, `carousel`, `chart`, `input-group`, `pagination`, `range-calendar`, `sidebar` |
| `separator` | `button-group`, `field`, `item`, `sidebar` |
| `input` | `input-group`, `sidebar` |
| `label` | `field`, `form` |
| `card` | `chart` |
| `dialog` | `command` |
| `sheet` | `sidebar` |
| `skeleton` | `sidebar` |
| `textarea` | `input-group` |
| `toggle` | `toggle-group` |
| `tooltip` | `sidebar` |

## 完整本地依赖表

| 组件 | 本地依赖 |
| --- | --- |
| `accordion` | 无 |
| `alert` | 无 |
| `alert-dialog` | `button` |
| `aspect-ratio` | 无 |
| `avatar` | 无 |
| `badge` | 无 |
| `breadcrumb` | 无 |
| `button` | 无 |
| `button-group` | `separator` |
| `calendar` | `button` |
| `card` | 无 |
| `carousel` | `button` |
| `chart` | `button`, `card` |
| `checkbox` | 无 |
| `collapsible` | 无 |
| `combobox` | 无 |
| `command` | `dialog` |
| `context-menu` | 无 |
| `dialog` | 无 |
| `drawer` | 无 |
| `dropdown-menu` | 无 |
| `empty` | 无 |
| `field` | `label`, `separator` |
| `form` | `label` |
| `hover-card` | 无 |
| `input` | 无 |
| `input-group` | `button`, `input`, `textarea` |
| `item` | `separator` |
| `kbd` | 无 |
| `label` | 无 |
| `menubar` | 无 |
| `navigation-menu` | 无 |
| `number-field` | 无 |
| `pagination` | `button` |
| `pin-input` | 无 |
| `popover` | 无 |
| `progress` | 无 |
| `radio-group` | 无 |
| `range-calendar` | `button` |
| `resizable` | 无 |
| `scroll-area` | 无 |
| `select` | 无 |
| `separator` | 无 |
| `sheet` | 无 |
| `sidebar` | `button`, `input`, `separator`, `sheet`, `skeleton`, `tooltip` |
| `skeleton` | 无 |
| `slider` | 无 |
| `sonner` | 无 |
| `spinner` | 无 |
| `stepper` | 无 |
| `switch` | 无 |
| `table` | 无 |
| `tabs` | 无 |
| `tags-input` | 无 |
| `textarea` | 无 |
| `toggle` | 无 |
| `toggle-group` | `toggle` |
| `tooltip` | 无 |

## 第三方依赖概览

### 高频基础依赖

| 第三方依赖 | 使用场景 |
| --- | --- |
| `vue` | 组件基础运行时 |
| `reka-ui` | 大部分 headless primitive |
| `@vueuse/core` | props 转发、v-model、工具组合式函数 |
| `class-variance-authority` | `button`、`badge`、`alert`、`toggle` 等 variant |
| `@meri-design/icon-vue` | 当前默认图标库 |
| `lucide-vue-next` | 部分组件仍存在图标引用 |

### 特定组件依赖

| 组件 | 特定第三方依赖 |
| --- | --- |
| `carousel` | `embla-carousel-vue` |
| `chart` | `@unovis/ts`, `@unovis/vue` |
| `drawer` | `vaul-vue` |
| `form` | `vee-validate`, `@vee-validate/zod`, `zod` |
| `sonner` | `vue-sonner` |

## 修改建议

- 优先修改 `button`、`input`、`textarea`、`separator`、`label`、`card`、`toggle`、`tooltip`、`sheet`、`skeleton`。
- 修改被依赖组件后，至少检查依赖它的组件页面，尤其是 `button` 相关组件。
- `sidebar` 依赖最多，建议最后处理。
- 修改组件样式时保持 API、exports、primitive 转发和 install target 不变。

## 已复用的设计细节

以下规则来自 `button`、`input`、`textarea`、`input-group`、`button-group`、`scroll-area` 的本轮修改，后续组件样式调整时优先复用。

| 设计细节 | 当前使用组件 | 说明 |
| --- | --- | --- |
| 输入类边框 token | `input`, `textarea`, `input-group`, `button-group` | 默认边框使用 `border-input`，交互高亮使用 `border-primary`，避免直接写 `var(--gray-400)` / `var(--blue-500)`。 |
| 输入类尺寸与文字规格 | `input`, `textarea`, `input-group` | 单行输入高度统一为 `h-8`，圆角统一为 `rounded-[4px]`，字号使用 `text-[14px]`，行高使用 `leading-[1.5]`。 |
| 输入类交互状态 | `input`, `textarea`, `input-group` | hover / focus 使用同一套 primary 边框色；focus 输入态同步使用 `caret-primary`。禁用态通过 `disabled:*` 限制交互视觉。 |
| 组合输入的边框职责 | `input-group` | `InputGroupInput` 自身不画边框，外层 `InputGroup` 负责组合边框、hover 和 focus-within 状态，避免内部控件与外层容器重复画线。 |
| 相邻组合的接缝处理 | `button-group`, `input-group` | `ButtonGroup` 与 `InputGroup` 紧邻时，通过 `-ml-px` 合并 1px 接缝，并让前一个元素的右边框透明；只强制恢复左边框宽度，不强制锁死边框颜色。 |
| 滚动条 token | `scroll-area`, `textarea` | 原生滚动条与 `ScrollArea` 共用滚动条 token；需要原生滚动条的输入类组件使用 `.x-scrollbar` 保持视觉一致。 |
| 文档示例覆盖 | `input`, `input-group`, `textarea` | 组件 API 文档按源码可提取信息补充具体示例，不编造第三方继承 API。 |
