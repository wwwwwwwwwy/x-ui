# X UI Registry MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Bun + Nuxt + Nuxt Content static documentation site with a shadcn-vue-compatible custom registry served from `/r/*.json`.

**Architecture:** The project keeps docs, registry source files, and static registry output in one repository. Nuxt serves documentation pages and static JSON from `public/r`; shadcn-vue CLI builds component registry JSON from `registry.json`.

**Tech Stack:** Bun, Nuxt, Nuxt Content, Vue, TypeScript, Tailwind CSS, shadcn-vue registry CLI.

---

### Task 1: Project Foundation

**Files:**
- Create: `package.json`
- Create: `nuxt.config.ts`
- Create: `tsconfig.json`
- Create: `app/app.vue`
- Create: `app/assets/css/main.css`

- [ ] **Step 1: Create package and Nuxt configuration**

Create `package.json` with Bun scripts for development, registry generation, type checking, and static release.

- [ ] **Step 2: Create root Nuxt app files**

Create `nuxt.config.ts`, `tsconfig.json`, `app/app.vue`, and `app/assets/css/main.css` so Nuxt can render routes and include Tailwind CSS.

- [ ] **Step 3: Install dependencies**

Run: `bun install`

Expected: dependencies install and `bun.lock` is created.

### Task 2: shadcn-vue Registry Source

**Files:**
- Create: `components.json`
- Create: `registry.json`
- Create: `registry/default/button/Button.vue`
- Create: `registry/default/button/index.ts`
- Create: `registry/default/input/Input.vue`
- Create: `registry/default/input/index.ts`
- Create: `registry/default/card/Card.vue`
- Create: `registry/default/card/index.ts`
- Create: `registry/default/pro-table/ProTable.vue`
- Create: `registry/default/pro-table/index.ts`

- [ ] **Step 1: Add shadcn-vue config**

Create `components.json` with aliases and Tailwind settings compatible with Nuxt.

- [ ] **Step 2: Add registry manifest**

Create `registry.json` with four items: `button`, `input`, `card`, and `pro-table`.

- [ ] **Step 3: Add component source files**

Create minimal Vue components in `registry/default/*` with stable exports.

### Task 3: Documentation Site

**Files:**
- Create: `app/pages/index.vue`
- Create: `app/pages/docs/index.vue`
- Create: `app/pages/docs/components/[slug].vue`
- Create: `content/docs/getting-started.md`
- Create: `content/docs/components/button.md`
- Create: `content/docs/components/input.md`
- Create: `content/docs/components/card.md`
- Create: `content/docs/components/pro-table.md`

- [ ] **Step 1: Add route pages**

Create home, docs index, and component detail routes.

- [ ] **Step 2: Add Nuxt Content docs**

Create Markdown files for getting started and the four MVP components.

### Task 4: Verification

**Files:**
- Generated: `public/r/*.json`
- Generated: `.output/public`

- [ ] **Step 1: Build registry**

Run: `bun run registry:build`

Expected: `public/r/button.json`, `public/r/input.json`, `public/r/card.json`, and `public/r/pro-table.json` exist.

- [ ] **Step 2: Type check**

Run: `bun run check`

Expected: TypeScript exits 0.

- [ ] **Step 3: Static generate**

Run: `bun run release:static`

Expected: Nuxt generates `.output/public`.

- [ ] **Step 4: Start dev server**

Run: `bun run dev --host 127.0.0.1`

Expected: local server responds at `http://127.0.0.1:3000/` and `http://127.0.0.1:3000/r/button.json`.
