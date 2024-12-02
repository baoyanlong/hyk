import { request } from "@/utils/service"
import type * as User from "./types/user"

/** 绑定支付宝信息 */
export function bindAlipayApi(data: User.BindAlipayRequestData) {
  return request<User.BindAlipayResponseData>({
    url: "user/bind-alipay",
    method: "get",
    data
  })
}

/** 绑定steam */
export function bindSteamApi(data: User.BindSteamRequestData) {
  return request<User.BindSteamResponseData>({
    url: "user/bindSteam",
    method: "post",
    data
  })
}

/** 用户资金账户信息 */
export function getFundAccountApi() {
  return request<User.FundAccountResponseData>({
    url: "user/fund-account",
    method: "get"
  })
}

/** 获取预提现信息 */
export function getPreWithdrawInfoApi(data: User.PreWithdrawInfoRequestData) {
  return request<User.PreWithdrawInfoResponseData>({
    url: "user/pre-withdraw-info",
    method: "get",
    data
  })
}

/** 实名认证 */
export function getRealNameApi(data: User.RealNameRequestData) {
  return request<User.RealNameResponseData>({
    url: "user/real-name",
    method: "post",
    data
  })
}

/** 解绑steam */
export function unBindSteamApi(data: User.UnBindSteamRequestData) {
  return request<User.UnBindSteamResponseData>({
    url: "user/unBindSteam",
    method: "post",
    data
  })
}

/** 用户信息 */
export function getUserInfoApi() {
  return request<User.UserInfoResponseData>({
    url: "user/user-info",
    method: "get"
  })
}

/** 提现 */
export function withdrawApi(data: User.WithdrawRequestData) {
  return request<User.WithdrawResponseData>({
    url: "user/withdraw",
    method: "post",
    data
  })
}

/** 提现记录 */
export function getWithdrawRecordApi(data: User.WithdrawRecordRequestData) {
  return request<User.WithdrawRecordResponseData>({
    url: "user/withdraw-record",
    method: "post",
    data
  })
}

/** 消息列表 */
export function getMessageListApi(data: User.MessageListRequestData) {
  return request<User.MessageListResponseData>({
    url: "system/message/page",
    method: "post",
    data
  })
}