# registry 标准流程

## 目标

本流程用于保证 `x-ui` 的 registry、文档和静态站点可以稳定复现。

## 新增或更新默认组件

1. 修改或新增 `registry/default/<component>/`。
2. 确认组件使用 Vue SFC `.vue`，并保留 `components/ui/<component>/<file>` 安装目标。
3. 在 `registry.json` 中维护对应 item。
4. 写入运行时依赖：
   - 外部包写入 `dependencies`。
   - 组件间依赖写入 `registryDependencies`。
5. 为新增或修改的 props、emits、slots、exports、variant 和复杂逻辑补充中文 JSDoc。
6. 生成默认 registry：

```bash
./node_modules/.bin/shadcn-vue build --output ./public/r
```

7. 生成组件文档：

```bash
npm run docs:generate
```

8. 运行验证：

```bash
./node_modules/.bin/vue-tsc --noEmit
./node_modules/.bin/nuxi generate
```

## 同步上游 shadcn-vue 镜像

1. 运行同步脚本：

```bash
node scripts/sync-shadcn-registry.mjs
```

2. 构建上游镜像 registry：

```bash
./node_modules/.bin/shadcn-vue build registry.shadcn.json --output ./public/r/shadcn
```

3. 如需更新默认分发源，将 `registry/shadcn/default` 中需要的组件复制到 `registry/default`。
4. 确认 `registry/default` 中没有 `.tsx` 文件。
5. 重新生成默认 registry 和组件文档。

## 删除或禁用组件

1. 从 `registry.json` 删除对应 item。
2. 删除 `registry/default/<component>/`。
3. 删除 `public/r/<component>.json`。
4. 删除 `content/docs/components/<component>.md`。
5. 重新运行：

```bash
npm run docs:generate
./node_modules/.bin/shadcn-vue build --output ./public/r
./node_modules/.bin/vue-tsc --noEmit
./node_modules/.bin/nuxi generate
```

## 固定校验

每次涉及 registry 的任务完成前，至少运行：

```bash
find registry/default -name '*.tsx' | wc -l
find registry/default -name '*.vue' | wc -l
node -e "const r=require('./registry.json'); console.log(r.items.some(i=>i.name==='toast'))"
```

期望结果：

- `.tsx` 数量为 `0`。
- `.vue` 数量大于 `0`。
- `toast` 检查输出 `false`。
