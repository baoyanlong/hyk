/** 绑定支付宝信息 */
export interface BindAlipayRequestData {
  alipayAccount: string
  name: string
}
export type BindAlipayResponseData = ApiResponseData<Boolean>

/** 绑定steam */
export interface BindSteamRequestData {
  steamId: string
}
export type BindSteamResponseData = ApiResponseData<boolean>

/** 用户资金账户信息 */
export interface FundAccountData {
  freezeAmount: number
  walletBalance: number
}
export type FundAccountResponseData = ApiResponseData<FundAccountData>

/** 获取预提现信息 */
export interface PreWithdrawInfoRequestData {
  amount: number
}
export interface PreWithdrawInfoData {
  alipayAccount: string
  name: string
  naserviceFeeme: number
  natransferAmountme: number
}
export type PreWithdrawInfoResponseData = ApiResponseData<PreWithdrawInfoData>

/** 实名认证 */
export interface RealNameRequestData {
  idCard: string
  name: string
  phone: string
}
export type RealNameResponseData = ApiResponseData<boolean>

/** 解绑steam */
export interface UnBindSteamRequestData {
  steamId: string
}
export type UnBindSteamResponseData = ApiResponseData<boolean>

/** 用户信息 */
export interface UserInfoData {
  avatar: string
  flagRealName: boolean
  nickName: string
  phone: string
  steamVOS: SteamVOSData[]
}
export interface SteamVOSData {
  avatar: string
  nickName: boolean
  steamId: string
}
export type UserInfoResponseData = ApiResponseData<UserInfoData>

/** 提现 */
export interface WithdrawRequestData {
  amount: number
}
export type WithdrawResponseData = ApiResponseData<boolean>

/** 提现记录 */
export interface WithdrawRecordRequestData {
  pageNo: number
  pageSize: number
}
export interface WithdrawRecordData {
  alipayAccount: string
  createTime: string
  name: string
  serviceFee: number
  status: number
  transferAmount: number
  withdrawAmount: number
  withdrawRecordId: string
}
export type WithdrawRecordResponseData = ApiResponseData<ListData<WithdrawRecordData>>

/** 消息列表 */
export interface MessageListRequestData {
  pageNo: number
  pageSize: number
}
export interface MessageData {
  content: string
  createTime: string
  id: number
  operator: string
  skipConfig: string
  title: string
}
export type MessageListResponseData = ApiResponseData<ListData<MessageData>>