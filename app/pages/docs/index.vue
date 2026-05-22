<template>
  <main class="mx-auto max-w-5xl px-6 py-12">
    <NuxtLink to="/" class="text-sm text-slate-500 hover:text-slate-950">X UI</NuxtLink>
    <h1 class="mt-6 text-3xl font-semibold text-slate-950">Documentation</h1>
    <p class="mt-3 max-w-2xl text-slate-600">
      Install components through shadcn-vue compatible registry URLs.
    </p>

    <section class="mt-10 grid gap-4 sm:grid-cols-2">
      <NuxtLink
        v-for="item in components"
        :key="item.slug"
        :to="`/docs/components/${item.slug}`"
        class="rounded-lg border border-slate-200 p-5 hover:bg-slate-50"
      >
        <h2 class="text-base font-semibold text-slate-950">{{ item.title }}</h2>
        <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
      </NuxtLink>
    </section>

    <section class="mt-12">
      <h2 class="text-xl font-semibold text-slate-950">shadcn-vue mirror</h2>
      <p class="mt-2 text-sm leading-6 text-slate-600">
        Official shadcn-vue components that are available in the upstream registry are mirrored under
        <code class="rounded bg-slate-100 px-1.5 py-0.5">/r/shadcn</code>.
      </p>
      <div class="mt-5 flex flex-wrap gap-2">
        <a
          v-for="item in shadcnItems"
          :key="item"
          :href="`/r/shadcn/${item}.json`"
          class="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          {{ item }}
        </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { componentDocs } from '@/data/component-docs'

const components = componentDocs
const shadcnItems = componentDocs.map((item) => item.slug)
</script>
