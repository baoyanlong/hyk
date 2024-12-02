import { request } from "@/utils/service"
import type * as Login from "./types/login"

/** 手机号验证码登录 */
export function loginApi(data: Login.LoginRequestData) {
  return request<Login.LoginResponseData>({
    url: "login/loginWithPhone",
    method: "post",
    data
  })
}

/** 发送验证码 */
export function getSendCodeApi(data: Login.LoginSendCodeRequestData) {
  return request<Login.LoginSendCodeResponseData>({
    url: "login/sendCode",
    method: "get",
    data
  })
}
