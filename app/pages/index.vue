<template>
  <main class="min-h-screen bg-white">
    <section class="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
      <p class="mb-4 text-sm font-medium uppercase tracking-wide text-slate-500">X UI Registry</p>
      <h1 class="max-w-3xl text-5xl font-semibold leading-tight text-slate-950">
        A Nuxt-powered shadcn-vue compatible component registry.
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Ship docs and installable registry JSON from one static site. Components live as source files,
        registry items are served from <code class="rounded bg-slate-100 px-1.5 py-0.5">/r</code>.
      </p>
      <div class="mt-10 flex flex-wrap gap-3">
        <NuxtLink
          to="/docs"
          class="inline-flex h-10 items-center rounded-md bg-slate-950 px-4 text-sm font-medium text-white hover:bg-slate-800"
        >
          View docs
        </NuxtLink>
        <a
          href="/r/button.json"
          class="inline-flex h-10 items-center rounded-md border border-slate-200 px-4 text-sm font-medium text-slate-950 hover:bg-slate-50"
        >
          Open button.json
        </a>
      </div>
    </section>
  </main>
</template>
