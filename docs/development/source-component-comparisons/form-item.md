# formItem 与 field / form 组件差异对比

## Summary

旧组件 `formItem`（导出 `MFormItem`）与当前组件 `field / form` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `formItem` | `field / form` |
| 导出 | `MFormItem` | `Field 与 FormItem 体系` |
| 旧源码 | `source/packages/components/formItem` | `registry/default/field / form` |

## 旧组件能力

- 旧 FormItem 承担 label、prop、校验信息和布局
- 与 MForm 上下文联动

## 当前组件能力

- Field 提供通用字段布局
- FormItem/FormLabel/FormMessage 提供 vee-validate 字段结构

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 旧 FormItem 的 prop/rules 联动需要映射
- 旧 label 宽度和布局 API 需要额外封装

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `field / form`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
