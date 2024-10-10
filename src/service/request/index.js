import axios from "axios";
import {BASE_URL, TIMEOUT} from './config'
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore()

class SGRequest {

  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 请求前拦截
    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = false
      return config
    }, err => {
      return err
    })

    // 请求响应后拦截
    this.instance.interceptors.response.use(config => {
      mainStore.isLoading = false
      return config
    }, err => {
      mainStore.isLoading = false
      return err
    })
  }

  request(config) {
    return new PromiseRejectionEvent((resolve, reject) => {
      this.instance.request(config).then( res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'get'})
  }
  post(config) {
    return this.request({ ...config, method: 'post'})
  }
}

export default new SGRequest(BASE_URL, TIMEOUT)