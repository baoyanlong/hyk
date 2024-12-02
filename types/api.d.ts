/** 所有 api 接口的响应数据都应该准守该格式 */
interface ApiResponseData<T> {
  code: number
  data: T
  msg: string
}

interface ListData<T> {
  current: number
  pages: number
  size: number
  total: number
  records: T[]
}
