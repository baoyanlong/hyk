import { reactive, ref } from "vue"
import { pinia } from "@/stores"
import { defineStore } from "pinia"
import { getBannerListApi, getBroadcastApi } from "@/api/home"
import { getSendCodeApi, loginApi } from "@/api/login"
import { LoginRequestData, LoginSendCodeRequestData } from "@/api/login/types/login"

export const useHomeStore = defineStore("home", () => {
  /** 手机号验证码登录  */
  const login = async ({ phone, code, sourceChannel } : LoginRequestData) => {
    const { data } = await loginApi({ phone, code, sourceChannel })
    console.log(data)
  }
  /** 发送验证码 */
  const getSendCode = async ({ phone } : LoginSendCodeRequestData) => {
    const { data } = await getSendCodeApi({ phone })
    console.log(data)
  }
 
  // 返回所有属性和方法
  return {
    login,
    getSendCode
  }
})

/**
 * 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useHomeStoreHook() {
  return useHomeStore(pinia)
}
