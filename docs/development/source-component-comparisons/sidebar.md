# Sidebar 与 sidebar 组件差异对比

## Summary

旧组件 `Sidebar`（导出 `Msidebar`）与当前组件 `sidebar` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `Sidebar` | `sidebar` |
| 导出 | `Msidebar` | `Sidebar 复合组件` |
| 旧源码 | `source/packages/components/Sidebar` | `registry/default/sidebar` |

## 旧组件能力

- 常驻、尺寸变化、展开收起
- 内置左右方向图标
- 测试覆盖 resident、changesize

## 当前组件能力

- shadcn-vue sidebar 复合组件
- 提供 Provider、Rail、Trigger、Menu、Group、Inset 等完整结构
- 内置移动端和 cookie 状态

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 旧尺寸变化 API 和图标资源不直接保留
- 旧 Msidebar 命名不保留
- 旧 resident 行为需映射到当前 Provider/variant/collapsible

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `sidebar`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
