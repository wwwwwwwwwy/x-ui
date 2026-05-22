<script setup lang="ts">
import type { ListboxItemEmits, ListboxItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit, useCurrentElement } from "@vueuse/core"
import { ListboxItem, useForwardPropsEmits, useId } from "reka-ui"
import { computed, onMounted, onUnmounted, ref } from "vue"
import { cn } from "@/lib/utils"
import { useCommand, useCommandGroup } from "."

/**
 * CommandItem 的 props 声明；透传第三方 primitive 的字段时只在本地补充 class、variant 或默认值约束。
 */
const props = defineProps<ListboxItemProps & { class?: HTMLAttributes["class"] }>()
/**
 * CommandItem 的事件声明；事件名称和载荷保持与底层 primitive 或本地交互状态一致。
 */
const emits = defineEmits<ListboxItemEmits>()

/**
 * 移除仅由 CommandItem 本地消费的字段，避免 class、variant 等样式字段透传到底层 DOM 或 primitive。
 */
const delegatedProps = reactiveOmit(props, "class")

/**
 * 转发 CommandItem 的 props 和事件，确保包装组件继续兼容 reka-ui 的受控与非受控行为。
 */
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const id = useId()
const { filterState, allItems, allGroups } = useCommand()
const groupContext = useCommandGroup()

/**
 * isRender 是 CommandItem 的派生状态，用于让模板和样式保持同步。
 */
const isRender = computed(() => {
  if (!filterState.search) {
    return true
  }
  else {
    const filteredCurrentItem = filterState.filtered.items.get(id)
    // 过滤结果尚未包含当前条目时，先渲染一次以便挂载后写入映射。
    if (filteredCurrentItem === undefined) {
      return true
    }

    // 根据过滤得分判断当前条目是否显示。
    return filteredCurrentItem > 0
  }
})

/**
 * itemRef 保存 CommandItem 的本地响应式状态，不会改变外部 registry API。
 */
const itemRef = ref()
const currentElement = useCurrentElement(itemRef)
onMounted(() => {
  if (!(currentElement.value instanceof HTMLElement))
    return

  // 使用渲染文本作为搜索过滤值。
  allItems.value.set(id, currentElement.value.textContent ?? props?.value!.toString())

  const groupId = groupContext?.id
  if (groupId) {
    if (!allGroups.value.has(groupId)) {
      allGroups.value.set(groupId, new Set([id]))
    }
    else {
      allGroups.value.get(groupId)?.add(id)
    }
  }
})
onUnmounted(() => {
  allItems.value.delete(id)
})
</script>

<template>
  <ListboxItem
    v-if="isRender"
    v-bind="forwarded"
    :id="id"
    ref="itemRef"
    :class="cn('relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0', props.class)"
    @select="() => {
      filterState.search = ''
    }"
  >
    <slot />
  </ListboxItem>
</template>
