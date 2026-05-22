<script setup lang="ts">
import type { ListboxRootEmits, ListboxRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ListboxRoot, useFilter, useForwardPropsEmits } from "reka-ui"
import { reactive, ref, watch } from "vue"
import { cn } from "@/lib/utils"
import { provideCommandContext } from "."

/**
 * Command 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = withDefaults(defineProps<ListboxRootProps & { class?: HTMLAttributes["class"] }>(), {
  modelValue: "",
})

/**
 * Command 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<ListboxRootEmits>()

/**
 * 移除仅由 Command 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 Command 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const allItems = ref<Map<string, string>>(new Map())
const allGroups = ref<Map<string, Set<string>>>(new Map())

const { contains } = useFilter({ sensitivity: "base" })
const filterState = reactive({
  search: "",
  filtered: {
    /** The count of all visible items. */
    count: 0,
    /** Map from visible item id to its search score. */
    items: new Map() as Map<string, number>,
    /** Set of groups with at least one visible item. */
    groups: new Set() as Set<string>,
  },
})

/**
 * filterItems 处理 Command 的本地交互逻辑，并保持对外状态更新语义稳定。
 */
function filterItems() {
  if (!filterState.search) {
    filterState.filtered.count = allItems.value.size
    // 搜索为空时不额外过滤，每个条目会自行保持显示。
    return
  }

  // 重置可见分组集合。
  filterState.filtered.groups = new Set()
  let itemCount = 0

  // 计算哪些条目应包含在当前搜索结果中。
  for (const [id, value] of allItems.value) {
    const score = contains(value, filterState.search)
    filterState.filtered.items.set(id, score ? 1 : 0)
    if (score)
      itemCount++
  }

  // 只保留至少包含一个可见条目的分组。
  for (const [groupId, group] of allGroups.value) {
    for (const itemId of group) {
      if (filterState.filtered.items.get(itemId)! > 0) {
        filterState.filtered.groups.add(groupId)
        break
      }
    }
  }

  filterState.filtered.count = itemCount
}

watch(() => filterState.search, () => {
  filterItems()
})

/**
 * Command 向子组件提供上下文，保证组合式组件在同一作用域内共享状态。
 */
provideCommandContext({
  allItems,
  allGroups,
  filterState,
})
</script>

<template>
  <ListboxRoot
    v-bind="forwarded"
    :class="cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground', props.class)"
  >
    <slot />
  </ListboxRoot>
</template>
