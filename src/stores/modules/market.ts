import { reactive, ref } from "vue"
import { pinia } from "@/stores"
import { defineStore } from "pinia"
import { getGameListApi, getGameProductListApi, getGameRecordDetailApi, getOneKeyPriceApi, getSellerGetCaptchaApi, savePreStepApi, terminatePublishApi, updatePriceApi, upOrDownApi } from "@/api/market"
import { GameListRequestData, GameProductListRequestData, GameRecordDetailRequestData, OneKeyPriceRequestData, SavePreStepRequestData, SellerGetCaptchaRequestData, TerminatePublishRequestData, UpdatePriceRequestData, UpOrDownRequestData } from "@/api/market/types/market"

export const useMarketStore = defineStore("market", () => {
  /** 游戏列表 */
  const getGameList = async ({ flagHomepage, gameId, gameName, pageNo, pageSize, sort, sortField }: GameListRequestData) => {
    const { data } = await getGameListApi({ flagHomepage, gameId, gameName, pageNo, pageSize, sort, sortField })
    console.log(data)
  }
  /** 游戏商品列表  */
  const getGameProductLsiApi = async ({ status, pageNo, pageSize }: GameProductListRequestData) => {
    const { data } = await getGameProductListApi({ status, pageNo, pageSize })
    console.log(data)
  }
  /** 获取游戏上架记录详情 */
  const getGameRecordDetail = async ({ id }: GameRecordDetailRequestData) => {
    const { data } = await getGameRecordDetailApi({ id })
    console.log(data)
  }
  /** 卖家获取验证码  */
  const getSellerGetCaptcha = async ({ id }: SellerGetCaptchaRequestData) => {
    const { data } = await getSellerGetCaptchaApi({ id })
    console.log(data)
  }
  /** 一键定价 */
  const getOneKeyPrice = async ({ gameItemId }: OneKeyPriceRequestData) => {
    const { data } = await getOneKeyPriceApi({ gameItemId })
    console.log(data)
  }
  /** 保存上架游戏信息 */
  const savePreStep = async ({ flagFirst, gameSkuId, gameSpuId, price, remark, steamId }: SavePreStepRequestData) => {
    const { data } = await savePreStepApi({ flagFirst, gameSkuId, gameSpuId, price, remark, steamId })
    console.log(data)
  }
  /** 终止上架 */
  const terminatePublish = async ({ flagFirst, id }: TerminatePublishRequestData) => {
    const { data } = await terminatePublishApi({ flagFirst, id })
    console.log(data)
  }
  /** 上下架  */
  const upOrDown = async ({ gameItemId, status }: UpOrDownRequestData) => {
    const { data } = await upOrDownApi({ gameItemId, status })
    console.log(data)
  }
  /** 修改价格  */
  const updatePrice = async ({ gameItemId, price }: UpdatePriceRequestData) => {
    const { data } = await updatePriceApi({ gameItemId, price })
    console.log(data)
  }

  // 返回所有属性和方法
  return {
    getGameList,
    getGameProductLsiApi,
    getGameRecordDetail,
    getSellerGetCaptcha,
    getOneKeyPrice,
    savePreStep,
    terminatePublish,
    upOrDown,
    updatePrice
  }
})

/**
 * 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useMarketStoreHook() {
  return useMarketStore(pinia)
}
