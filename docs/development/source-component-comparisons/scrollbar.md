# scrollbar 与 scroll-area 组件差异对比

## Summary

旧组件 `scrollbar`（导出 `MScrollbar / MScrollArea`）与当前组件 `scroll-area` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `scrollbar` | `scroll-area` |
| 导出 | `MScrollbar / MScrollArea` | `ScrollArea、ScrollBar` |
| 旧源码 | `source/packages/components/scrollbar` | `registry/default/scroll-area` |

## 旧组件能力

- 自定义 scrollbar、bar、thumb
- 滚动条类型、常量和工具函数
- 测试覆盖滚动容器行为

## 当前组件能力

- 提供 ScrollArea 和 ScrollBar
- 基于 reka-ui scroll area primitive

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 旧 scrollbar 工具函数和精细 thumb/bar API 不直接暴露
- 旧 MScrollbar 导出名不保留

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `scroll-area`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
