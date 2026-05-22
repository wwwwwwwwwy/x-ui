# drawer 与 drawer 组件差异对比

## Summary

旧组件 `drawer`（导出 `MDrawer`）与当前组件 `drawer` 在功能语义上直接或基本对应，但两边的实现模型不同：旧组件偏业务封装和集中式 props，当前组件偏 shadcn-vue 复合组件和 slot 组合。

## 对应关系

| 项目 | 旧组件库 | 当前组件库 |
| --- | --- | --- |
| 组件 | `drawer` | `drawer` |
| 导出 | `MDrawer` | `Drawer 复合组件` |
| 旧源码 | `source/packages/components/drawer` | `registry/default/drawer` |

## 旧组件能力

- modelValue/show 双入口控制显示
- title、title slot、content slot、handle slot、icon slot
- width、height、zIndex、shadow、shadowClick
- footFixed、titleOverFlow、drawerClass、自定义关闭排除类
- close 事件

## 当前组件能力

- 基于 vaul-vue Drawer 复合组件
- 提供 DrawerContent、Header、Footer、Title、Description 等结构
- 更偏向组合式内容

## 功能差异

- 旧组件通常通过单个组件和集中式 props 承载完整业务行为。
- 当前组件通常拆成多个 shadcn-vue 复合组件，由使用方通过结构、slot 和 class 组合行为。
- 迁移时应优先保持语义和交互结果一致，不建议逐行搬运旧 TSX 实现。

## 旧组件支持但当前不直接支持

- 当前没有 title/titleOverFlow/footFixed 等业务 prop
- 当前没有 customCloseClassName 排除关闭逻辑
- 当前没有 width/height/zIndex/shadowClick 的旧式集中 API

## 迁移建议

- 若只是基础 UI 语义，优先使用当前 `drawer`。
- 若依赖旧组件的业务 props、事件签名或数据驱动能力，应新增一层兼容封装。
- 兼容封装必须按当前规范使用 Vue SFC、中文文档和中文 JSDoc 注释。
