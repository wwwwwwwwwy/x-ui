# pagination 与 pagination 组件差异对比

## Summary

旧组件 `pagination`（导出 `MPagination`）与当前组件 `pagination` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `pagination` | `pagination` |
| 导出 | `MPagination` | `Pagination 复合组件` |
| 旧源码 | `source/packages/components/pagination` | `registry/default/pagination` |

## 旧组件能力

- 完整页码、上一页/下一页、更多、省略、jumper、simple 模式
- 旧 Props 包含分页业务配置

## 当前组件能力

- 提供 Pagination、Content、Item、Next、Previous、Ellipsis 等复合组件
- 偏向由使用方组合分页 UI

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 当前没有内建 jumper/simple 完整业务封装
- 旧分页数据驱动和事件格式需要适配

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `pagination`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
