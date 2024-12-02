/** 游戏列表 */
export interface GameListRequestData {
  flagHomepage: string
  gameId: string
  gameName: string
  pageNo: number
  pageSize: number
  sort: string
  sortField: string
}
export interface GameData {
  gameId: string
  gameMainImg: string
  gameName: string
  gameVersion: string[]
  onSaleNum: number
  originalPrice: number
  price: number
  steamGameAppId: string
}
export type GameListResponseData = ApiResponseData<ListData<GameData>>

/** 游戏商品列表 */
export interface GameProductListRequestData {
  pageNo: string
  pageSize: string
  status: boolean
}
export interface GameAttributeData {
  gameAttributeId: string
  gameAttributeName: string
}
export interface GameProductData {
  dayPrice: number
  gameAttribute: GameAttributeData[]
  gameCoverImg: string
  gameId: string
  gameItemId: string
  gameName: string
  latestPublishRecordId: string
  marketLowestPrice: number
  price: number
  remark: string
  sellerAvatar: string
  sellerNickName: string
  steamGameAppId: string
  validDays: number
}
export type GameProductListResponseData = ApiResponseData<ListData<GameProductData>>

/** 获取游戏上架记录详情 */
export interface GameRecordDetailRequestData {
  id: string
}
export interface BindSteamVOData {
  avatar: string
  nickName: string
  steamId: string
}
export interface GameRecordDetailData {
  bindSteamVO: BindSteamVOData
  captcha: string
  currentFinishStep: number
  doublePrice: number
  friendCode: string
  gameSkuId: string
  gameSpuId: string
  id: string
  price: number
  remark: string
  steamAccount: string
  steamAccountPwd: string
  steamId: string
  triplePrice: number
}
export type GameRecordDetailResponseData = ApiResponseData<ListData<GameRecordDetailData>>

/** 卖家获取验证码 */
export interface SellerGetCaptchaRequestData {
  id: string
}
export type SellerGetCaptchaResponseData = ApiResponseData<string>

/** 一键定价 */
export interface OneKeyPriceRequestData {
  gameItemId: string
}
export type OneKeyPriceResponseData = ApiResponseData<boolean>

/** 保存上架游戏信息 */
export interface SavePreStepRequestData {
  flagFirst: boolean
  gameSkuId: string
  gameSpuId: string
  price: number
  remark: string
  steamId: string
}
export type SavePreStepResponseData = ApiResponseData<string>

/** 完成上架步骤 */
export interface SaveStepRequestData {
  flagFirst: boolean
  id: string
  step: number
}
export type SaveStepResponseData = ApiResponseData<string>

/** 终止上架 */
export interface TerminatePublishRequestData {
  flagFirst: boolean
  id: string
}
export type TerminatePublishResponseData = ApiResponseData<string>

/** 上下架 */
export interface UpOrDownRequestData {
  gameItemId: string
  status: boolean
}
export type UpOrDownResponseData = ApiResponseData<boolean>

/** 修改价格 */
export interface UpdatePriceRequestData {
  gameItemId: string
  price: number
}
export type UpdatePriceResponseData = ApiResponseData<boolean>