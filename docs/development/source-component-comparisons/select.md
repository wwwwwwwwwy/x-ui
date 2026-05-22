# select 与 select 组件差异对比

## Summary

旧组件 `select`（导出 `MSelect / MOption / MOptionGroup`）与当前组件 `select` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `select` | `select` |
| 导出 | `MSelect / MOption / MOptionGroup` | `Select 复合组件` |
| 旧源码 | `source/packages/components/select` | `registry/default/select` |

## 旧组件能力

- Option、OptionGroup、Select 三类导出
- options、popup 样式、搜索提示等工具
- 数据驱动选择器

## 当前组件能力

- 提供 Select、Trigger、Value、Content、Item、Group、Label、Separator 等复合组件
- 通过子组件声明选项

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 旧 options 数据驱动需要额外封装
- 旧 useIsShowTips/usePopupStyle 不保留
- 旧 Option/OptionGroup 组件名不直接保留

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `select`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
