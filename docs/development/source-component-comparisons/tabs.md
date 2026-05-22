# tabs 与 tabs 组件差异对比

## Summary

旧组件 `tabs`（导出 `MTabs`）与当前组件 `tabs` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `tabs` | `tabs` |
| 导出 | `MTabs` | `Tabs 复合组件` |
| 旧源码 | `source/packages/components/tabs` | `registry/default/tabs` |

## 旧组件能力

- data 数组驱动
- type line/segment/border
- size large/medium/small
- backgroundColor、itemWidth、scrollPosition
- renderSlot/renderPreSlot
- change 事件
- setBarStyle 方法

## 当前组件能力

- Tabs、TabsList、TabsTrigger、TabsContent 复合组件
- 基于 reka-ui TabsRoot
- 通过 class/slot 自定义视觉

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 当前没有 data 驱动
- 当前没有 line/segment/border 内建模式
- 当前没有 renderSlot/renderPreSlot 配置对象
- 当前没有 setBarStyle 暴露方法

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `tabs`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
