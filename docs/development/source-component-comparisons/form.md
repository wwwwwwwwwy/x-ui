# form 与 form 组件差异对比

## Summary

旧组件 `form`（导出 `MForm`）与当前组件 `form` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `form` | `form` |
| 导出 | `MForm` | `Form 相关 helper 与组件` |
| 旧源码 | `source/packages/components/form` | `registry/default/form` |

## 旧组件能力

- 表单布局、inline、labelPosition
- rules 校验
- 与旧 FormItem 配合收集和校验字段

## 当前组件能力

- 基于 vee-validate 体系
- 提供 FormControl、FormField、FormItem、FormLabel、FormMessage 等组合
- 校验更依赖 zod/vee-validate

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 旧 inline/labelPosition 集中式 API 需要重建
- 旧 rules 规则格式需要转换到 vee-validate/zod
- 旧表单实例方法需要逐项迁移

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `form`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
