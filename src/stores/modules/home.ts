import { pinia } from "@/stores"
import { defineStore } from "pinia"
import { getBannerListApi, getBroadcastApi } from "@/api/home"

export const useHomeStore = defineStore("home", () => {
  /** banner列表 */
  const getBannerList = async () => {
    const { data } = await getBannerListApi()
    console.log(data)
  }
  /** 获取广播内容 */
  const getBroadcast = async () => {
    const { data } = await getBroadcastApi()
    console.log(data)
  }

  // 返回所有属性和方法
  return {
    getBannerList,
    getBroadcast
  }
})

/**
 * 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useOrderStoreHook() {
  return useHomeStore(pinia)
}
