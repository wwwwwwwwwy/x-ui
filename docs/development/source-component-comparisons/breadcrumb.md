# breadcrumb 与 breadcrumb 组件差异对比

## Summary

旧组件 `breadcrumb`（导出 `MBreadcrumb`）与当前组件 `breadcrumb` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `breadcrumb` | `breadcrumb` |
| 导出 | `MBreadcrumb` | `Breadcrumb 复合组件` |
| 旧源码 | `source/packages/components/breadcrumb` | `registry/default/breadcrumb` |

## 旧组件能力

- data 数组驱动渲染
- separator 与 separator-icon
- nameKey 自定义字段
- itemNum 超出后显示省略和下拉
- nameWidth、popWidth、widthAuto 宽度控制
- change 点击回调

## 当前组件能力

- 提供 Breadcrumb、BreadcrumbList、BreadcrumbItem、BreadcrumbLink 等复合组件
- 支持自定义 separator slot/组件组合
- 更偏向手写结构

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 当前没有 data 驱动渲染
- 当前没有 itemNum 自动折叠下拉
- 当前没有 nameKey/nameWidth/popWidth/widthAuto API
- 当前没有内建 change 事件封装

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `breadcrumb`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
