/** banner列表 */
export interface BannerListData {
  current: number
  hitCount: boolean
  pages: number
  records: BannerData[]
  size: number
  total: number
}
export interface BannerData {
  createTime: string
  id: number
  image: string
  skipConfig: string
  sort: number
  status: boolean
  title: string
}
export type BannerListResponseData = ApiResponseData<BannerData[]>

/** broadcast广播内容 */
export interface BroadcastData {
  content: string
  skipConfig: string
}
export type BroadcastResponseData = ApiResponseData<BroadcastData>