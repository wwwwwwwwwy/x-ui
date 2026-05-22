<template>
  <main class="mx-auto max-w-4xl px-6 py-12">
    <NuxtLink to="/docs" class="text-sm text-slate-500 hover:text-slate-950">Docs</NuxtLink>
    <article class="mt-6">
      <ContentRenderer v-if="page" :value="page" />
      <div v-else class="rounded-lg border border-slate-200 p-6">
        <h1 class="text-xl font-semibold text-slate-950">Component not found</h1>
        <p class="mt-2 text-slate-600">The requested component page does not exist.</p>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug))
const { data: page } = await useAsyncData(`component-${slug.value}`, () =>
  queryCollection('docs').path(`/docs/components/${slug.value}`).first(),
)
</script>
