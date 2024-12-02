import { request } from "@/utils/service"
import type * as Market from "./types/market"

/** 游戏列表 */
export function getGameListApi(data: Market.GameListRequestData) {
  return request<Market.GameListResponseData>({
    url: "game/game-page",
    method: "post",
    data
  })
}

/** 游戏商品列表 */
export function getGameProductListApi(data: Market.GameProductListRequestData) {
  return request<Market.GameProductListResponseData>({
    url: "item/game-item-page",
    method: "post",
    data
  })
}

/** 获取游戏上架记录详情 */
export function getGameRecordDetailApi(data: Market.GameRecordDetailRequestData) {
  return request<Market.GameRecordDetailResponseData>({
    url: "item/game-record-detail",
    method: "get",
    data
  })
}

/** 卖家获取验证码 */
export function getSellerGetCaptchaApi(data: Market.SellerGetCaptchaRequestData) {
  return request<Market.SellerGetCaptchaResponseData>({
    url: "item/get-captcha",
    method: "get",
    data
  })
}

/** 一键定价 */
export function getOneKeyPriceApi(data: Market.OneKeyPriceRequestData) {
  return request<Market.OneKeyPriceResponseData>({
    url: "item/one-key-price",
    method: "get",
    data
  })
}

/** 保存上架游戏信息 */
export function savePreStepApi(data: Market.SavePreStepRequestData) {
  return request<Market.SavePreStepResponseData>({
    url: "item/save-pre-step",
    method: "post",
    data
  })
}

/** 完成上架步骤 */
export function saveStepApi(data: Market.SaveStepRequestData) {
  return request<Market.SaveStepResponseData>({
    url: "item/save-step",
    method: "post",
    data
  })
}

/** 终止上架 */
export function terminatePublishApi(data: Market.TerminatePublishRequestData) {
  return request<Market.TerminatePublishResponseData>({
    url: "item/terminate-publish",
    method: "post",
    data
  })
}

/** 上下架 */
export function upOrDownApi(data: Market.UpOrDownRequestData) {
  return request<Market.UpOrDownResponseData>({
    url: "item/up-or-down",
    method: "get",
    data
  })
}

/** 修改价格 */
export function updatePriceApi(data: Market.UpdatePriceRequestData) {
  return request<Market.UpdatePriceResponseData>({
    url: "item/update-price",
    method: "get",
    data
  })
}
