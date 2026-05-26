# 组件样式复用清单

## Summary

本文档整理本项目中已经验证过、可直接复用的组件样式点，供后续新增组件或继续改造现有组件时参考。内容只记录已经在当前代码库里落地过的样式模式，不包含抽象但未验证的设计口号。

## 可复用 Token

| Token | 值 | 适用场景 |
| --- | --- | --- |
| `--gray-900` | `#1b2129` | 主标题、正文主色 |
| `--gray-400` | `#c4c9cf` | 浅色 hover / focus 背景 |
| `--gray-300` | `#e1e5eb` | 边框、描边、次级分隔线 |
| `--gray-200` | `#e8ecf0` | 头尾分隔、面板边界 |
| `--overlay` | `rgb(0 0 0 / 0.8)` | Drawer、Sheet 等遮罩层 |

## 可复用基础样式

- 输入框 / 触发器统一使用 `h-8 min-h-[30px]`
- 边框圆角统一收敛到 `rounded-[4px]`
- 主输入文本统一使用 `text-[14px] font-normal leading-[1.5]`
- 默认文本色统一使用 `text-foreground`
- placeholder 统一使用浅灰色 token 或十六进制颜色
- disabled 状态统一禁用 hover / focus 反馈，并保留 `cursor-not-allowed`

## 可复用交互样式

- hover / focus 分开控制，不混写到默认态
- 列表项 hover / highlight 统一使用浅灰背景，而不是强烈的 accent
- 弹层内容统一使用 `overflow-hidden`、`shadow-md`、`z-50`
- 弹层进入动画统一使用 `animate-in fade-in-0 zoom-in-95`
- 弹层关闭动画统一使用 `data-[state=closed]:animate-out`

## 可复用弹层结构

- `TooltipContent` 的圆角、边框、阴影、箭头层级可作为弹层参考基线
- `SelectContent` / `ComboboxList` / `ContextMenuContent` 可共享同一类弹层外观
- `DrawerOverlay` / `SheetContent` 可共享 `bg-overlay`
- `DrawerContent` / `SheetContent` 适合用顶部或底部固定定位的容器结构

## 可复用列表项结构

- 左右对齐的菜单项可统一使用 `px-2 py-1.5`
- 选中标记适合用 `ml-auto order-last` 或固定左侧占位二选一
- group heading 统一使用 `px-2 py-1.5 text-[14px] font-normal text-gray-500`
- item 文本统一使用 `text-[14px] font-normal text-gray-900`

## 可复用组合模式

- `Select`、`Combobox`、`ContextMenu` 都适合拆成 `Trigger / Content / Item / Label / Group` 的组合结构
- `Drawer`、`Sheet` 都适合拆成 `Overlay / Content / Header / Footer / Title / Description`
- 输入类复合组件适合用 `Input` / `Textarea` 作为视觉基线，再加附加按钮、标签或图标

## 复用建议

- 优先复用 token，再复用 class 片段，最后才是整块组件结构。
- 如果新组件的视觉目标和这里已验证的模式一致，优先直接沿用现有 class 组合。
- 如果组件需要特殊交互，不要先改 token；先确认是否只需要组合层覆盖。
- 新增样式清单时，应把已经在项目中验证过的内容继续补进来，不要重复写抽象描述。
