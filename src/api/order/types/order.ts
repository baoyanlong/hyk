/** 买家购买记录 */
export interface BuyerRecordListRequestData {
  pageNo: number
  pageSize: number
}
export interface BuyerRecordData {
  amount: number
  buyDays: number
  buyTime: string
  buyerId: string
  gameName: string
  gameVersion: string
  itemSnapshot: string
  mainOrderId: string
  orderId: string
  payMethod: number
  sellerId: string
  status: number
  steamAccount: string
  steamPassword: string
}
export type BuyerRecordListResponseData = ApiResponseData<ListData<BuyerRecordData>>

/** 创建订单 */
export interface CreateOrderRequestData {
  gameItemId: string
}
export type CreateOrderResponseData = ApiResponseData<string>

/** 买家获取登录验证码 */
export interface BuyerGetCaptchaRequestData {
  orderId: string
}
export type BuyerGetCaptchaResponseData = ApiResponseData<string>

/** 获取支付方式 */
export interface PayMethodData {
  balance: number
  payMethod: string
}
export type GetPayMethodResponseData = ApiResponseData<PayMethodData[]>

/** 获取共享账号信息 */
export interface GetShareAccountRequestData {
  orderId: string
}
export interface ShareAccountData {
  steamAccount: string
  steamAccountPwd: string
}
export type GetShareAccountResponseData = ApiResponseData<ShareAccountData>

/** 支付 */
export interface PayRequestData {
  orderId: string
  payMethod: number
}
export interface PayResData {
  payId: string
  payLink: string
}
export type PayResponseData = ApiResponseData<PayResData>

/** 查询支付结果 */
export interface QueryPayResultRequestData {
  payId: number
}
export type QueryPayResultResponseData = ApiResponseData<boolean>

/** 卖家出租记录 */
export interface SellerRecordListRequestData {
  pageNo: number
  pageSize: number
}
export interface SellerRecordData {
  amount: number
  buyDays: number
  buyTime: string
  buyerId: string
  gameName: string
  gameVersion: string
  itemSnapshot: string
  mainOrderId: string
  orderId: string
  sellerId: string
  status: number
  steamAccount: string
  steamPassword: string
}
export type SellerRecordListResponseData = ApiResponseData<ListData<SellerRecordData>>
