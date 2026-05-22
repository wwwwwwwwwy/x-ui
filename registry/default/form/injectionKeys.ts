import type { InjectionKey } from "vue"

/**
 * 导出 FORM_ITEM_INJECTION_KEY，作为组件内部或外部复用的稳定常量。
 */
export const FORM_ITEM_INJECTION_KEY
  = Symbol() as InjectionKey<string>
