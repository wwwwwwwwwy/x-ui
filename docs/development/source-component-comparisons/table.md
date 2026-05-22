# table 与 table 组件差异对比

## Summary

旧组件 `table`（导出 `MTable`）与当前组件 `table` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `table` | `table` |
| 导出 | `MTable` | `Table 复合组件` |
| 旧源码 | `source/packages/components/table` | `registry/default/table` |

## 旧组件能力

- columns/data 数据驱动表格
- 排序、固定列、列宽拖拽、合并单元格
- 表头说明、表头设置、奇偶行变色、选择框禁用提示
- formatter、自定义行样式、tooltip 定位
- 大量业务测试场景

## 当前组件能力

- 提供 Table、Header、Body、Row、Cell、Head、Caption、Empty 等基础语义组件
- 偏向静态结构组合

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 当前不是数据驱动表格
- 没有内建排序、选择、列设置、拖拽列宽、固定列、合并单元格
- 旧 MTable 更接近后续 ProTable 需求

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `table`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
