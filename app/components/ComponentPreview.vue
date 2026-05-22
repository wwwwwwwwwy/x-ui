<script setup lang="ts">
import { ref, computed } from 'vue'
import { toast } from 'vue-sonner'
import { Copy, Check, Eye, Code, Layers, FileCode, Play, Terminal } from 'lucide-vue-next'

const props = defineProps<{
  name: string
  code: string
}>()

const activeTab = ref<'preview' | 'code'>('preview')
const isCopied = ref(false)

async function handleCopy() {
  try {
    await navigator.clipboard.writeText(props.code)
    isCopied.value = true
    toast.success('Code copied to clipboard!', {
      description: `Copied successfully for ${props.name} component.`,
      duration: 2500,
    })
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    toast.error('Failed to copy code.')
    console.error('Clipboard copy failed:', err)
  }
}

// Capitalize helper
const capitalizedName = computed(() => {
  if (!props.name) return ''
  return props.name.charAt(0).toUpperCase() + props.name.slice(1)
})

// Line count computed property
const codeLines = computed(() => {
  return props.code.split('\n')
})

// Custom regex-based VSCode syntax highlighter with robust token isolation
const highlightedHtml = computed(() => {
  const tokens: string[] = []
  
  // Helper to store HTML highlighted tokens and return a placeholder
  function addToken(html: string): string {
    tokens.push(html)
    return `___VSC_TOKEN_${tokens.length - 1}___`
  }

  // Escape basic HTML characters first
  let escaped = props.code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // 1. Comments: HTML comments and JS comments
  escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, (match: string) => {
    return addToken(`<span class="vsc-comment">${match}</span>`)
  })
  escaped = escaped.replace(/(\/\/.*)/g, (match: string) => {
    return addToken(`<span class="vsc-comment">${match}</span>`)
  })

  // 2. Strings (Single & Double Quotes)
  escaped = escaped.replace(/(["'])(.*?)\1/g, (match: string) => {
    return addToken(`<span class="vsc-string">${match}</span>`)
  })

  // 3. HTML Tags and their attributes: Match everything between &lt; and &gt;
  escaped = escaped.replace(/(&lt;\/?[a-zA-Z0-9:@\-.]+)([\s\S]*?)(&gt;)/g, (match: string, tagStart: string, tagBody: string, tagEnd: string) => {
    // Highlight the tag name part
    const highlightedTagStart = tagStart.replace(/(&lt;\/?)([a-zA-Z0-9:\-.]+)/, (m: string, p1: string, p2: string) => {
      return `${p1}<span class="vsc-tag">${p2}</span>`
    })
    
    // Highlight attributes in tag body, skipping already replaced string token placeholders
    const highlightedTagBody = tagBody.replace(/([\w:@\-.]+)(?=\s|=)/g, (m: string) => {
      if (m.startsWith('___VSC_TOKEN')) return m
      return `<span class="vsc-attr">${m}</span>`
    })
    
    return `${highlightedTagStart}${highlightedTagBody}${tagEnd}`
  })

  // 4. Keywords (const, let, import, etc.): color #c586c0
  const jsKeywords = /\b(const|let|var|import|from|export|default|return|function|await|async|type|interface|extends)\b/g
  escaped = escaped.replace(jsKeywords, '<span class="vsc-keyword">$1</span>')

  // 5. Standard Vue/JS API calls: color #dcdcaa
  const coreApis = /\b(ref|computed|defineProps|defineEmits|withDefaults|useRoute|useAsyncData|queryCollection|useHead|useVModel|reactiveOmit|useForwardPropsEmits)\b/g
  escaped = escaped.replace(coreApis, '<span class="vsc-api">$1</span>')

  // 6. Restore all placeholders in a single pass to prevent nested token corruption
  const finalHtml = escaped.replace(/___VSC_TOKEN_(\d+)___/g, (_: string, index: string) => {
    return tokens[parseInt(index, 10)] || ''
  })

  return finalHtml
})
</script>

<template>
  <div class="relative overflow-hidden rounded-[8px] border border-[#E2E4E9] bg-white">
    
    <!-- Top Control Bar (Clean 1px border, no shadows) -->
    <div class="flex flex-col gap-3 border-b border-[#E2E4E9] bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      
      <!-- Component info -->
      <div class="flex items-center gap-2.5">
        <span class="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#eef4ff] text-[#2D5AF2]">
          <Layers class="h-3.5 w-3.5" />
        </span>
        <div class="flex items-baseline gap-2">
          <h3 class="text-[14px] font-bold text-[#161c24] capitalize">
            {{ name }}
          </h3>
          <span class="rounded-[4px] bg-[#F5F6F7] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#434655]">
            Demo Showcase
          </span>
        </div>
      </div>

      <!-- Segmented Tab Controls (Systematic Clarity style) -->
      <div class="flex items-center gap-1 self-start rounded-[4px] border border-[#E2E4E9] bg-[#F5F6F7]/50 p-1 sm:self-auto">
        <button
          type="button"
          :class="[
            'flex items-center gap-1.5 rounded-[4px] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-150',
            activeTab === 'preview'
              ? 'bg-white border border-[#E2E4E9] text-[#2D5AF2] shadow-sm'
              : 'text-[#434655] hover:text-[#161c24] hover:bg-white/40'
          ]"
          @click="activeTab = 'preview'"
        >
          <Eye class="h-3 w-3" />
          <span>Preview</span>
        </button>
        <button
          type="button"
          :class="[
            'flex items-center gap-1.5 rounded-[4px] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-150',
            activeTab === 'code'
              ? 'bg-white border border-[#E2E4E9] text-[#2D5AF2] shadow-sm'
              : 'text-[#434655] hover:text-[#161c24] hover:bg-white/40'
          ]"
          @click="activeTab = 'code'"
        >
          <Code class="h-3 w-3" />
          <span>Source Code</span>
        </button>
      </div>

    </div>

    <!-- Active Views Card -->
    <div class="relative bg-white">
      
      <!-- Preview Frame Tab -->
      <div 
        v-show="activeTab === 'preview'" 
        class="relative flex min-h-[220px] items-center justify-center rounded-b-[8px] bg-[#f8f9ff] p-8 sm:p-12 preview-grid"
      >
        <!-- Dynamic Slot Renders interactive component demo -->
        <div class="w-full max-w-2xl rounded-[8px] border border-[#E2E4E9] bg-white p-6 md:p-8 outline-glow">
          <slot />
        </div>
      </div>

      <!-- Source Code Tab: FULL AUTHENTIC VSCODE WINDOW DESIGN -->
      <div v-show="activeTab === 'code'" class="relative flex flex-col bg-[#1e1e1e] rounded-b-[8px] overflow-hidden select-none">
        
        <!-- VSCode Window Header -->
        <div class="flex items-center justify-between bg-[#2d2d2d] pl-4 pr-4 h-9 border-b border-[#252526]">
          <!-- Left side: Mac Window Dots + Tab -->
          <div class="flex items-center gap-4 h-full">
            <!-- Mac Window Dots -->
            <div class="flex items-center gap-1.5 shrink-0">
              <span class="h-3 w-3 rounded-full bg-[#ff5f56]"></span>
              <span class="h-3 w-3 rounded-full bg-[#ffbd2e]"></span>
              <span class="h-3 w-3 rounded-full bg-[#27c93f]"></span>
            </div>
            
            <!-- VSCode Active Tab Header (Aligned left, directly next to control dots) -->
            <div class="flex items-center gap-1.5 px-4 h-9 bg-[#1e1e1e] border-t-2 border-[#007acc] text-[#cccccc] text-[11px] font-semibold border-r border-[#252526]">
              <span class="text-[#41b883] font-bold">V</span>
              <span>{{ capitalizedName }}Demo.vue</span>
              <span class="text-[9px] ml-1.5 text-[#858585] cursor-pointer">×</span>
            </div>
          </div>

          <!-- Top Right Copy Code & Status -->
          <div class="z-10 flex items-center gap-2">
            <button
              type="button"
              class="flex h-6 items-center gap-1.5 rounded-[4px] border border-[#3c3c3c] bg-[#252526] px-2.5 text-[10px] font-semibold text-white/95 hover:bg-[#3c3c3c] transition-all active:scale-95 cursor-pointer"
              @click="handleCopy"
            >
              <Check v-if="isCopied" class="h-3 w-3 text-[#2d5af2]" />
              <Copy v-else class="h-3 w-3" />
              <span>{{ isCopied ? 'Copied' : 'Copy' }}</span>
            </button>
          </div>
        </div>

        <!-- VSCode Editor Area with Code & Gutter Line Numbers -->
        <div class="flex flex-row overflow-x-auto text-left font-mono text-[12.5px] leading-[20px] text-[#cccccc] bg-[#1e1e1e] min-h-[220px]">
          <!-- Line Numbers Gutter -->
          <div class="select-none text-right pr-4 pl-5 py-4 border-r border-[#2d2d2d] text-[#858585] bg-[#1e1e1e] shrink-0 font-mono text-[12px]">
            <div v-for="n in codeLines.length" :key="n" class="h-[20px]">{{ n }}</div>
          </div>
          
          <!-- Code Body Container -->
          <pre class="m-0 py-4 px-5 bg-[#1e1e1e] flex-1 overflow-x-auto select-text"><code class="block whitespace-pre font-mono text-[12.5px] leading-[20px]" v-html="highlightedHtml"></code></pre>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
/* Systematic radial dot pattern matching premium developer dashboard */
.preview-grid {
  background-image: radial-gradient(#dde3ee 1px, transparent 1px);
  background-size: 16px 16px;
}

.outline-glow {
  transition: all 0.2s ease;
}
.outline-glow:hover {
  border-color: #2D5AF2;
  box-shadow: 0px 4px 12px rgba(26, 77, 230, 0.04);
}

/* VSCode Dark+ Syntax Coloring variables & selectors */
:deep(.vsc-comment) {
  color: #6a9955 !important;
  font-style: italic;
}
:deep(.vsc-tag) {
  color: #569cd6 !important;
}
:deep(.vsc-string) {
  color: #ce9178 !important;
}
:deep(.vsc-keyword) {
  color: #c586c0 !important;
}
:deep(.vsc-api) {
  color: #dcdcaa !important;
}
:deep(.vsc-attr) {
  color: #9cdcfe !important;
}
</style>
