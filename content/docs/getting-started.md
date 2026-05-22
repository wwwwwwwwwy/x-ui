---
title: Getting Started
description: Install X UI components from the static registry.
---

# Getting Started

X UI publishes shadcn-vue compatible registry JSON from `/r`.

```bash
bunx shadcn-vue@latest add https://your-domain.com/r/button.json
```

For local verification, run the docs server and install from localhost.

```bash
bun run dev
bunx shadcn-vue@latest add http://localhost:3000/r/button.json
```

The mirrored upstream shadcn-vue components are available under `/r/shadcn`.

```bash
bunx shadcn-vue@latest add http://localhost:3000/r/shadcn/accordion.json
```
