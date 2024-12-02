import { request } from "@/utils/service"
import type * as Home from "./types/home"

/** banner列表 */
export function getBannerListApi() {
  return request<Home.BannerListResponseData>({
    url: "homepage/banner-list",
    method: "get"
  })
}

/** 获取广播内容 */
export function getBroadcastApi() {
  return request<Home.BroadcastResponseData>({
    url: "homepage/broadcast",
    method: "get"
  })
}
