# steps 与 stepper 组件差异对比

## Summary

旧组件 `steps`（导出 `MSteps`）与当前组件 `stepper` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `steps` | `stepper` |
| 导出 | `MSteps` | `Stepper 复合组件` |
| 旧源码 | `source/packages/components/steps` | `registry/default/stepper` |

## 旧组件能力

- modelValue 当前节点
- space、size、layout、lineType
- category default/number/icon
- defaultColor、readonly、defaultSet
- 节点 status/color/icon
- title、description、defaultImg、activeImg 插槽

## 当前组件能力

- 基于 reka-ui StepperRoot
- 通过复合组件声明步骤结构
- 支持水平/垂直等 primitive 能力

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 旧 data 节点对象驱动没有内建
- 旧 category/lineType/defaultColor/defaultSet 没有直接 prop
- 旧 defaultImg/activeImg 插槽需要自定义组合

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `stepper`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
