/** 手机号验证码登录 */
export interface LoginRequestData {
  code: string
  phone: string
  sourceChannel: string
}
export interface LoginData {
  account: string
  loginUserId: string
  nickName: string
  permission: string
  phone: string
  roleId: number
  token: string
}
export type LoginResponseData = ApiResponseData<LoginData>

/** 发送验证码 */
export interface LoginSendCodeRequestData {
  phone: string
}
export type LoginSendCodeResponseData = ApiResponseData<boolean>
