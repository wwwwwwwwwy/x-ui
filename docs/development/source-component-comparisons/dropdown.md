# dropdown 与 dropdown-menu 组件差异对比

## Summary

旧组件 `dropdown`（导出 `MDropdown`）与当前组件 `dropdown-menu` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `dropdown` | `dropdown-menu` |
| 导出 | `MDropdown` | `DropdownMenu 复合组件` |
| 旧源码 | `source/packages/components/dropdown` | `registry/default/dropdown-menu` |

## 旧组件能力

- options 数组驱动菜单
- text/type 触发器配置
- trigger hover/click
- showArrow、showSearch、search
- open/modelValue 手动控制
- emptyText、disabled、delay、offset、placement
- 选项支持 disabled、divider、slotName

## 当前组件能力

- 提供 DropdownMenuRoot、Trigger、Content、Item、Group、Separator、CheckboxItem、RadioItem 等复合组件
- 支持更细粒度结构组合

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 当前没有 options 数组驱动封装
- 当前没有内建搜索框
- 当前没有 text/type/showArrow/emptyText 业务 prop
- 当前 hover 触发需要额外封装或改用 hover-card/popover

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `dropdown-menu`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
