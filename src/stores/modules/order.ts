import { pinia } from "@/stores"
import { defineStore } from "pinia"
import {
  createOrderApi,
  getBuyerGetCaptchaApi,
  getBuyerRecordListApi,
  getPayMethodApi,
  getSellerRecordListApi,
  getShareAccountApi,
  payApi,
  queryPayResultApi
} from "@/api/order"
import {
  BuyerGetCaptchaRequestData,
  BuyerRecordListRequestData,
  CreateOrderRequestData,
  GetShareAccountRequestData,
  PayRequestData,
  QueryPayResultRequestData,
  SellerRecordListRequestData
} from "@/api/order/types/order"

export const useOrderStore = defineStore("order", () => {
  /** 买家购买记录 */
  const getBuyerRecordList = async ({ pageNo, pageSize }: BuyerRecordListRequestData) => {
    const { data } = await getBuyerRecordListApi({ pageNo, pageSize })
    console.log(data)
  }
  /** 创建订单 */
  const createOrder = async ({ gameItemId }: CreateOrderRequestData) => {
    const { data } = await createOrderApi({ gameItemId })
    console.log(data)
  }
  /** 买家获取登录验证码 */
  const getBuyerGetCaptcha = async ({ orderId }: BuyerGetCaptchaRequestData) => {
    const { data } = await getBuyerGetCaptchaApi({ orderId })
    console.log(data)
  }
  /** 获取支付方式  */
  const getPayMethod = async () => {
    const { data } = await getPayMethodApi()
    console.log(data)
  }
  /** 获取共享账号信息  */
  const getShareAccount = async ({ orderId }: GetShareAccountRequestData) => {
    const { data } = await getShareAccountApi({ orderId })
    console.log(data)
  }
  /** 支付   */
  const pay = async ({ orderId, payMethod }: PayRequestData) => {
    const { data } = await payApi({ orderId, payMethod })
    console.log(data)
  }
  /** 查询支付结果  */
  const queryPayResult = async ({ payId }: QueryPayResultRequestData) => {
    const { data } = await queryPayResultApi({ payId })
    console.log(data)
  }
  /** 卖家出租记录  */
  const getSellerRecordList = async ({ pageNo, pageSize }: SellerRecordListRequestData) => {
    const { data } = await getSellerRecordListApi({ pageNo, pageSize })
    console.log(data)
  }

  // 返回所有属性和方法
  return {
    getBuyerRecordList,
    createOrder,
    getBuyerGetCaptcha,
    getPayMethod,
    getShareAccount,
    pay,
    queryPayResult,
    getSellerRecordList
  }
})

/**
 * 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useOrderStoreHook() {
  return useOrderStore(pinia)
}
