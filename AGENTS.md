# AGENTS.md

## 项目定位

`x-ui` 是一个基于 Nuxt、Nuxt Content 和 shadcn-vue compatible registry 的组件库与文档站项目。

核心产物：

- 文档站：Nuxt 静态站点。
- 默认 registry：`public/r/*.json`。
- 上游镜像 registry：`public/r/shadcn/*.json`。
- 组件源码：`registry/default/<component>/`。
- 上游镜像源码：`registry/shadcn/default/<component>/`。

## 必读规范

所有 Agent 在修改本项目之前必须先阅读本文件。

涉及组件、registry、文档、构建流程时，还必须阅读并遵守：

- [shadcn-vue 组件开发规范](docs/development/shadcn-vue-component-conventions.md)
- [registry 标准流程](docs/development/registry-runbook.md)

## 执行流程

复杂任务必须按以下顺序执行：

```txt
PLAN -> EXECUTE -> VERIFY -> DONE
```

要求：

- 先确认当前文件结构、registry 配置和现有实现，再修改。
- 禁止猜测 shadcn-vue API；以本仓库源码、registry JSON 和官方兼容格式为依据。
- 修改组件、registry 或文档后必须运行对应验证命令。
- 不得恢复已移除的 `toast` 组件；通知能力使用 `sonner`。

## 开发强约束

- `registry/default` 使用 Vue SFC `.vue`，禁止改成 TSX。
- `registry/shadcn/default` 是上游 shadcn-vue 镜像，默认保持原样。
- registry install target 必须保持 `components/ui/<component>/<file>` 结构，禁止拍平。
- 所有项目文档、组件文档和开发规范默认使用中文书写。
- 新增或修改组件源码时，props、emits、slots、exports、variant、组合式函数和复杂逻辑必须使用 JSDoc 风格注释。
- 组件 API 文档只保证覆盖本仓库源码可提取的信息，不编造第三方继承 API。

## 常用命令

优先使用本地 bin 命令进行可复现验证：

```bash
npm run docs:generate
./node_modules/.bin/shadcn-vue build --output ./public/r
./node_modules/.bin/shadcn-vue build registry.shadcn.json --output ./public/r/shadcn
./node_modules/.bin/vue-tsc --noEmit
./node_modules/.bin/nuxi generate
```

开发预览：

```bash
./node_modules/.bin/nuxi dev --host 127.0.0.1 --port 3000
```

## 完成标准

任务完成前至少确认：

- `AGENTS.md` 和被引用规范仍然一致。
- registry 中不存在 `toast` 组件。
- `registry/default` 中不存在 `.tsx` 文件。
- 文档、类型检查和静态生成通过。
