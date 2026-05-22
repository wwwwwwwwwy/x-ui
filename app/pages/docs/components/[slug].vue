<template>
  <div class="min-h-screen bg-[#f8f9ff] text-[#161c24]">
    <!-- Premium Header Navbar -->
    <header class="sticky top-0 z-40 border-b border-[#E2E4E9] bg-white/90 backdrop-blur-md">
      <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div class="flex items-center gap-3">
          <NuxtLink to="/" class="flex items-center gap-2 font-semibold text-[#161c24]">
            <span class="flex h-7 w-7 items-center justify-center rounded-[4px] bg-[#2D5AF2] text-white font-bold shadow-sm">X</span>
            <span class="tracking-tight">X UI</span>
          </NuxtLink>
          <span class="h-4 w-px bg-[#E2E4E9]"></span>
          <span class="text-xs font-semibold uppercase tracking-wider text-[#434655]">Systematic Registry</span>
        </div>
        <div class="flex items-center gap-4">
          <NuxtLink to="/docs" class="text-xs font-semibold uppercase tracking-wider text-[#434655] hover:text-[#2D5AF2] transition-colors">
            All Components
          </NuxtLink>
          <a href="https://github.com" target="_blank" class="text-xs font-semibold uppercase tracking-wider text-[#434655] hover:text-[#2D5AF2] transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </header>

    <!-- Main Docs Layout with Sidebar -->
    <div class="mx-auto flex max-w-7xl px-6">
      
      <!-- Sticky Sidebar Navigation -->
      <aside class="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-[#E2E4E9] py-8 pr-6 md:block">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <h3 class="px-3 text-[10px] font-bold uppercase tracking-wider text-[#434655]">
              Getting Started
            </h3>
            <NuxtLink to="/docs" class="rounded-[4px] px-3 py-2 text-xs font-medium text-[#434655] hover:bg-[#F5F6F7] hover:text-[#161c24] transition-colors">
              Introduction
            </NuxtLink>
          </div>

          <div class="flex flex-col gap-1">
            <h3 class="mb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-[#434655]">
              Components
            </h3>
            <NuxtLink
              v-for="item in componentDocs"
              :key="item.slug"
              :to="`/docs/components/${item.slug}`"
              :class="[
                'flex items-center justify-between rounded-[4px] px-3 py-1.5 text-xs transition-all duration-150',
                slug === item.slug
                  ? 'bg-[#eef4ff] font-semibold text-[#2D5AF2] border-r-2 border-[#2D5AF2] shadow-sm'
                  : 'font-medium text-[#434655] hover:bg-[#F5F6F7] hover:text-[#161c24]'
              ]"
            >
              <span>{{ item.title }}</span>
              <span v-if="slug === item.slug" class="h-1.5 w-1.5 rounded-full bg-[#2D5AF2]"></span>
            </NuxtLink>
          </div>
        </div>
      </aside>

      <!-- Main Docs Content -->
      <main class="min-w-0 flex-1 py-8 md:pl-8 lg:pl-12">
        
        <!-- Breadcrumb Navigation -->
        <nav class="flex items-center gap-1.5 text-[11px] font-medium text-[#434655]">
          <NuxtLink to="/docs" class="hover:text-[#2D5AF2] transition-colors">docs</NuxtLink>
          <span>/</span>
          <span class="text-slate-400">components</span>
          <span>/</span>
          <span class="text-[#161c24] font-semibold">{{ slug }}</span>
        </nav>

        <!-- Dynamic Content Area -->
        <article class="mt-4">
          <div v-if="page" class="space-y-8">
            
            <!-- Component Title Header -->
            <div class="relative overflow-hidden rounded-[12px] border border-[#E2E4E9] bg-white p-8">
              <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#2D5AF2]/5 blur-3xl"></div>
              <div class="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-[#2D5AF2]/5 blur-3xl"></div>

              <div class="relative flex flex-col gap-3">
                <h1 class="text-3xl font-bold tracking-tight text-[#161c24]">
                  {{ page.title || slug }}
                </h1>
                <p class="max-w-2xl text-[14px] leading-6 text-[#434655]">
                  {{ page.description || 'Modern, beautiful components built using shadcn-vue and Vue SFC standards.' }}
                </p>
              </div>
            </div>

            <!-- Premium Interactive Showcase -->
            <div v-if="hasDemo" class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-[#2D5AF2] animate-pulse"></span>
                  <h3 class="text-xs font-bold uppercase tracking-wider text-[#434655]">
                    Interactive Live Preview
                  </h3>
                </div>
                <span class="rounded-[4px] bg-[#eef4ff] px-2.5 py-0.5 text-[10px] font-bold text-[#2D5AF2]">
                  Systematic Clarity
                </span>
              </div>
              
              <!-- Generic Component Preview System -->
              <ComponentPreview :name="slug" :code="demoCode">
                <ButtonDemo v-slot v-if="slug === 'button'" />
                <BadgeDemo v-slot v-if="slug === 'badge'" />
                <CheckboxDemo v-slot v-if="slug === 'checkbox'" />
                <SwitchDemo v-slot v-if="slug === 'switch'" />
                <InputDemo v-slot v-if="slug === 'input'" />
                <TableDemo v-slot v-if="slug === 'table'" />
              </ComponentPreview>
            </div>

            <!-- Auto-generated Markdown Documentation -->
            <div class="rounded-[8px] border border-[#E2E4E9] bg-white p-8">
              <div class="flex items-center gap-2 border-b border-[#E2E4E9] pb-4">
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#434655]">
                  Technical Specs & Install
                </h3>
              </div>
              <div class="prose mt-6">
                <ContentRenderer :value="page" />
              </div>
            </div>

          </div>

          <!-- Component Not Found fallback -->
          <div v-else class="rounded-[12px] border border-[#E2E4E9] bg-white p-12 text-center">
            <h1 class="text-xl font-bold text-[#161c24]">Component not found</h1>
            <p class="mt-2 text-xs text-[#434655]">The requested component page does not exist.</p>
            <NuxtLink to="/docs" class="mt-6 inline-flex h-9 items-center rounded-[4px] bg-[#2D5AF2] px-4 text-xs font-semibold text-white hover:bg-[#003fd4] transition-colors">
              Back to Docs
            </NuxtLink>
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { componentDocs } from '@/data/component-docs'
import { demoCodes } from '@/data/demo-codes'

// Import all demo components
import ButtonDemo from '@/components/ButtonDemo.vue'
import BadgeDemo from '@/components/BadgeDemo.vue'
import CheckboxDemo from '@/components/CheckboxDemo.vue'
import SwitchDemo from '@/components/SwitchDemo.vue'
import InputDemo from '@/components/InputDemo.vue'
import TableDemo from '@/components/TableDemo.vue'
import ComponentPreview from '@/components/ComponentPreview.vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data: page } = await useAsyncData(`component-${slug.value}`, () =>
  queryCollection('docs').path(`/docs/components/${slug.value}`).first(),
)

// Check if current component has a pre-built demo
const hasDemo = computed(() => {
  return ['button', 'badge', 'checkbox', 'switch', 'input', 'table'].includes(slug.value)
})

// Retrieve demo source code string
const demoCode = computed(() => {
  return demoCodes[slug.value] || ''
})

// Set page meta for title and description dynamically
useHead({
  title: page.value ? `${page.value.title} - Systematic Clarity` : 'X UI Docs',
  meta: [
    { name: 'description', content: page.value?.description || 'Component documentation' }
  ]
})
</script>

