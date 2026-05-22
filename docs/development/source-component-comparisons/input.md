# input 与 input / textarea / input-group 组件差异对比

## Summary

旧组件 `input`（导出 `MInput`）与当前组件 `input / textarea / input-group` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `input` | `input / textarea / input-group` |
| 导出 | `MInput` | `Input、Textarea、InputGroup` |
| 旧源码 | `source/packages/components/input` | `registry/default/input / textarea / input-group` |

## 旧组件能力

- 普通输入、密码、textarea、验证码示例
- height、width、icon、message、showWordLimit
- 统一 MInput API 承载多形态输入

## 当前组件能力

- Input 是基础 input
- Textarea 单独拆分
- InputGroup 承载前后缀/按钮组合

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 旧组件的 showWordLimit/message/password/vericode 需要额外封装
- 旧 width/height/icon 集中 prop 不在当前 Input 内
- 旧多模式输入需要拆成多个当前组件组合

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `input / textarea / input-group`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
