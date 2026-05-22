# shadcn-vue 组件开发规范

## 目标

本规范用于约束 `x-ui` 的组件开发、registry 分发和文档生成，确保项目持续兼容 shadcn-vue 生态。

所有涉及 `registry/default`、`registry/shadcn/default`、`registry.json`、`public/r`、`content/docs/components` 的修改都必须遵守本规范。

## 目录职责

- `registry/shadcn/default`：上游 shadcn-vue 组件镜像，默认保持原样。
- `registry/default`：本项目默认分发源，直接使用 Vue SFC `.vue` 文件。
- `registry.json`：默认 registry manifest，声明 `public/r/*.json` 的构建来源。
- `registry.shadcn.json`：上游镜像 registry manifest，声明 `public/r/shadcn/*.json` 的构建来源。
- `public/r`：静态 registry JSON 输出目录。
- `content/docs/components`：组件文档目录。
- `app/data/component-docs.ts`：组件文档索引数据。
- `app/components/examples/<component>/<ExampleName>.vue`：组件文档示例源码目录，示例必须参与 Nuxt/Vite 编译。

## registry 强约束

- `registry/default` 必须使用 Vue SFC `.vue`，禁止改成 TSX。
- `registry/shadcn/default` 是 upstream mirror，除同步上游外不得手工改写。
- `registry/default` 可以从 `registry/shadcn/default` 复制，但复制后必须保持 shadcn-vue 兼容结构。
- registry install target 必须保持 `components/ui/<component>/<file>`。
- 禁止把组件安装目标拍平为 `components/ui/<file>`。
- 新增组件必须同步维护：
  - `registry/default/<component>/`
  - `registry.json`
  - `public/r/<component>.json`
  - `content/docs/components/<component>.md`
  - `app/data/component-docs.ts`
  - `app/components/examples/<component>/Basic.vue`
- 删除或禁用组件时必须同步清理 registry manifest、静态 registry JSON、组件文档和文档索引。
- `toast` 不作为组件恢复；需要通知能力时使用 `sonner`。

## 组件源码规范

组件源码必须保持 shadcn-vue 风格：

- 使用 Vue SFC 和 `<script setup lang="ts">`。
- 使用 `reka-ui` primitives 时，保留官方 props、emits 转发方式。
- class 合并统一使用 `cn`。
- variant 定义统一使用 `class-variance-authority`。
- 组件目录通过 `index.ts` 统一导出组件、variant 和类型。
- 外部运行时依赖必须写入 registry item 的 `dependencies`。
- 组件之间的依赖必须写入 registry item 的 `registryDependencies`。
- 禁止编造未在源码、依赖类型或 registry 中出现的 API。
- 所有可点击组件必须显式维护鼠标状态：可点击状态使用 `cursor-pointer`，对应 CSS 为 `cursor: pointer;`；禁用状态使用 `disabled:cursor-not-allowed` 或等价 class，确保整个组件显示 `cursor: not-allowed;`。
- 禁用状态不得使用会让鼠标命中穿透组件本体的 `disabled:pointer-events-none`；若底层 primitive 必须阻止交互，必须由禁用属性、事件守卫或内部子元素处理，不能破坏组件本体的 `not-allowed` 光标表现。
- 支持 disabled 的交互组件，禁用态不得响应 hover、active、focus 等交互视觉反馈。hover、active、focus 相关 class 必须使用 `enabled:*`、`data-[disabled=false]:*`、`aria-disabled:false` 等等价条件限制，确保 disabled 视觉状态不会被交互态覆盖。

## JSDoc 注释规范

新增或修改 `registry/default` 中的组件时，必须补齐 JSDoc 风格注释。

必须注释的对象：

- props 类型、props interface 或 props runtime declaration。
- emits 类型、事件载荷和触发时机。
- slots 类型、slot props 和默认渲染行为。
- exports，包括组件导出、variant、类型导出和工具函数。
- variant 的可选值、默认值和视觉语义。
- 组合式函数、状态派生逻辑和非直观兼容处理。

注释格式：

```ts
/**
 * 中文说明用途、取值、默认行为和兼容性约束。
 */
```

要求：

- 注释内容默认使用中文。
- 注释必须解释语义和约束，禁止只重复变量名。
- 简单模板结构不需要无意义注释。
- `registry/shadcn/default` 是上游镜像，默认不为了补注释而改动。
- 若从上游复制到 `registry/default` 后进行了本项目定制，定制部分必须补 JSDoc。

## 中文文档规范

所有新增或修改的项目文档、组件文档和开发规范默认使用中文书写。

允许保留英文的内容：

- 代码标识符。
- API 名称。
- 命令。
- 错误输出。
- 第三方库名称。
- shadcn-vue、Nuxt、Vue、Tailwind 等专有名词。

组件文档必须包含：

- 安装方式。
- 导入方式。
- 基础用法。
- props、emits、slots、exports 示例。
- registry URL。
- 源码可提取 API 的边界说明。

## 文档示例规范

- 所有组件文档示例 Vue 文件统一放在 `app/components/examples/<component>/<ExampleName>.vue`。
- 示例文件名使用 PascalCase，例如 `Basic.vue`、`Variants.vue`、`WithIcon.vue`。
- Markdown 中通过 Nuxt Content MDC 语法引用预览组件：

```md
::component-preview{src="button/Basic.vue"}
::
```

- `src` 必须使用相对 `app/components/examples` 根目录的路径，禁止使用绝对路径。
- `ComponentPreview` 必须以示例 Vue 文件作为单一真实来源：同一个 `src` 同时用于渲染预览和读取源码复制内容。
- 示例源码中的组件导入必须使用最终安装路径 `@/components/ui/<component>`，禁止使用 `~~/registry/default/<component>`。
- 示例中出现的可见文案必须使用中文，代码标识符、API 名称和第三方专有名词可以保留英文。
- 新增或修改组件文档时，必须同步新增或更新对应的示例 Vue 文件，禁止让预览内容和 Source Code 分别维护两份不一致内容。

## API 文档边界

组件 API 文档只保证覆盖本仓库源码可提取的信息：

- `defineProps`
- `defineEmits`
- `defineSlots`
- template slots
- `index.ts` exports
- 本地 imports 和依赖

当 API 来自 `reka-ui`、`vaul-vue`、`vue-sonner` 等第三方 primitive 时：

- 可以记录本地源码中的类型引用。
- 不展开第三方类型的完整字段，除非字段在本仓库源码中显式声明。
- 不编造默认值、事件载荷或 slot props。

## 验证要求

修改组件、registry 或文档后，根据影响范围运行：

```bash
npm run docs:generate
./node_modules/.bin/shadcn-vue build --output ./public/r
./node_modules/.bin/vue-tsc --noEmit
./node_modules/.bin/nuxi generate
```

同步上游镜像后还必须运行：

```bash
./node_modules/.bin/shadcn-vue build registry.shadcn.json --output ./public/r/shadcn
```
