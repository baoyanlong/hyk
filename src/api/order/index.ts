import { request } from "@/utils/service"
import type * as Order from "./types/order"

/** 买家购买记录 */
export function getBuyerRecordListApi(data: Order.BuyerRecordListRequestData) {
  return request<Order.BuyerRecordListResponseData>({
    url: "order/buyer-page",
    method: "post",
    data
  })
}

/** 创建订单 */
export function createOrderApi(data: Order.CreateOrderRequestData) {
  return request<Order.CreateOrderResponseData>({
    url: "order/createOrder",
    method: "post",
    data
  })
}

/** 买家获取登录验证码 */
export function getBuyerGetCaptchaApi(data: Order.BuyerGetCaptchaRequestData) {
  return request<Order.BuyerGetCaptchaResponseData>({
    url: "order/get-captcha",
    method: "get",
    data
  })
}

/** 获取支付方式  */
export function getPayMethodApi() {
  return request<Order.GetPayMethodResponseData>({
    url: "order/get-pay-method",
    method: "get"
  })
}

/** 获取共享账号信息 */
export function getShareAccountApi(data: Order.GetShareAccountRequestData) {
  return request<Order.GetShareAccountResponseData>({
    url: "order/get-share-account",
    method: "get",
    data
  })
}

/** 支付 */
export function payApi(data: Order.PayRequestData) {
  return request<Order.PayResponseData>({
    url: "order/pay",
    method: "post",
    data
  })
}

/** 查询支付结果 */
export function queryPayResultApi(data: Order.QueryPayResultRequestData) {
  return request<Order.QueryPayResultResponseData>({
    url: "order/query-pay-result",
    method: "get",
    data
  })
}

/** 卖家出租记录*/
export function getSellerRecordListApi(data: Order.SellerRecordListRequestData) {
  return request<Order.SellerRecordListResponseData>({
    url: "/order/seller-page",
    method: "post",
    data
  })
}
