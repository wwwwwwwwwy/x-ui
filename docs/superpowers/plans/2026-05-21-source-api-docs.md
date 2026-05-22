# Source API Docs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate detailed Nuxt Content documentation for every default registry component using APIs that can be extracted from local source.

**Architecture:** Add one Node script that reads `registry.json` and `registry/default/**`, extracts exports, explicit `defineProps`, `defineEmits`, `defineSlots`, local type exports, dependencies, and slots observed in templates, then writes deterministic Markdown files under `content/docs/components`. The docs route remains data-driven through generated Markdown.

**Tech Stack:** Node.js, Vue SFC source parsing with regex/source extraction, Nuxt Content Markdown, shadcn-vue registry metadata.

---

### Task 1: Documentation Generator

**Files:**
- Create: `scripts/generate-component-docs.mjs`
- Modify: `content/docs/components/*.md`

- [ ] **Step 1: Read registry metadata**

Load `registry.json`, iterate over all `items`, and use each item file list as the source of truth.

- [ ] **Step 2: Extract source APIs**

For every component directory, extract:
- exported component names from `index.ts`
- type/value exports from `index.ts`
- explicit `defineProps` generic/runtime declarations
- explicit `defineEmits` declarations
- explicit `defineSlots` declarations
- slot names used in templates
- external imports as dependencies

- [ ] **Step 3: Generate examples**

Create basic usage and one example per extracted API entry. Use conservative examples that demonstrate syntax without inventing behavior beyond source.

- [ ] **Step 4: Write Markdown docs**

Write `content/docs/components/<component>.md` for all registry items.

### Task 2: Docs Index

**Files:**
- Modify: `app/pages/docs/index.vue`

- [ ] **Step 1: Replace hardcoded component list**

Use the generated component names from the registry mirror so docs index exposes every generated component doc.

### Task 3: Verification

- [ ] **Step 1: Generate docs**

Run: `node scripts/generate-component-docs.mjs`

Expected: one Markdown file per `registry.json` item.

- [ ] **Step 2: Typecheck and static generate**

Run:
```bash
./node_modules/.bin/nuxi prepare
./node_modules/.bin/vue-tsc --noEmit
./node_modules/.bin/nuxi generate
```

Expected: exit code 0.
