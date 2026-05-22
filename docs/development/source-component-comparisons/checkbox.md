# checkbox 与 checkbox 组件差异对比

## Summary

旧组件 `checkbox`（导出 `MCheckbox`）与当前组件 `checkbox` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `checkbox` | `checkbox` |
| 导出 | `MCheckbox` | `Checkbox` |
| 旧源码 | `source/packages/components/checkbox` | `registry/default/checkbox` |

## 旧组件能力

- modelValue 使用 checked/uncheck/notNull 字符串状态
- size 数字控制尺寸
- click/change/update:modelValue 事件返回状态和事件对象

## 当前组件能力

- 基于 CheckboxRoot 和 CheckboxIndicator
- 使用 checked/unchecked/indeterminate 语义
- 支持 primitive props 与 emits 转发

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 旧字符串状态 checked/uncheck/notNull 需要适配
- 当前没有 size 数字 prop
- 事件签名不直接返回旧 State 枚举

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `checkbox`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
