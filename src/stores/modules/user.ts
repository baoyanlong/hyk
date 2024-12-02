import { pinia } from "@/stores"
import { defineStore } from "pinia"
import {
  BindAlipayRequestData,
  BindSteamRequestData,
  MessageListRequestData,
  PreWithdrawInfoRequestData,
  RealNameRequestData,
  UnBindSteamRequestData,
  WithdrawRecordRequestData,
  WithdrawRequestData
} from "@/api/user/types/user"
import {
  bindAlipayApi,
  bindSteamApi,
  getFundAccountApi,
  getMessageListApi,
  getPreWithdrawInfoApi,
  getRealNameApi,
  getUserInfoApi,
  getWithdrawRecordApi,
  unBindSteamApi,
  withdrawApi
} from "@/api/user"

export const useUserStore = defineStore("user", () => {
  /** 绑定支付宝信息 */
  const bindAlipay = async ({ alipayAccount, name }: BindAlipayRequestData) => {
    const { data } = await bindAlipayApi({ alipayAccount, name })
    console.log(data)
  }
  /** 绑定steam */
  const bindSteam = async ({ steamId }: BindSteamRequestData) => {
    const { data } = await bindSteamApi({ steamId })
    console.log(data)
  }
  /** 用户资金账户信息 */
  const getFundAccount = async () => {
    const { data } = await getFundAccountApi()
    console.log(data)
  }
  /** 获取预提现信息  */
  const getPreWithdrawInfo = async ({ amount }: PreWithdrawInfoRequestData) => {
    const { data } = await getPreWithdrawInfoApi({ amount })
    console.log(data)
  }
  /** 实名认证  */
  const getRealName = async ({ idCard, name, phone }: RealNameRequestData) => {
    const { data } = await getRealNameApi({ idCard, name, phone })
    console.log(data)
  }
  /** 解绑steam  */
  const unBindSteam = async ({ steamId }: UnBindSteamRequestData) => {
    const { data } = await unBindSteamApi({ steamId })
    console.log(data)
  }
  /** 用户信息 */
  const getUserInfo = async () => {
    const { data } = await getUserInfoApi()
    console.log(data)
  }
  /** 提现   */
  const withdraw = async ({ amount }: WithdrawRequestData) => {
    const { data } = await withdrawApi({ amount })
    console.log(data)
  }
  /** 提现记录  */
  const getWithdrawRecord = async ({ pageNo, pageSize }: WithdrawRecordRequestData) => {
    const { data } = await getWithdrawRecordApi({ pageNo, pageSize })
    console.log(data)
  }
  /** 消息列表  */
  const getMessageList = async ({ pageNo, pageSize }: MessageListRequestData) => {
    const { data } = await getMessageListApi({ pageNo, pageSize })
    console.log(data)
  }

  // 返回所有属性和方法
  return {
    bindAlipay,
    bindSteam,
    getFundAccount,
    getPreWithdrawInfo,
    getRealName,
    unBindSteam,
    getUserInfo,
    withdraw,
    getWithdrawRecord,
    getMessageList
  }
})

/**
 * 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useUserStoreHook() {
  return useUserStore(pinia)
}
