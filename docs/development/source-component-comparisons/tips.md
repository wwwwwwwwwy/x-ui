# tips 与 tooltip 组件差异对比

## Summary

旧组件 `tips`（导出 `MTips`）与当前组件 `tooltip` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `tips` | `tooltip` |
| 导出 | `MTips` | `Tooltip 复合组件` |
| 旧源码 | `source/packages/components/tips` | `registry/default/tooltip` |

## 旧组件能力

- theme 支持主题
- 自定义内容
- 复用 Popover 类似属性

## 当前组件能力

- TooltipProvider、Tooltip、TooltipTrigger、TooltipContent
- 基于 reka-ui Tooltip primitive

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 当前没有 theme prop
- 旧 Popover 类属性需要映射到 TooltipContent/Root props
- 旧 MTips 命名不保留

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `tooltip`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
