
import SGRequest from '../request/index'

export function getHomeData() {
  return  SGRequest.get({
    url: "/city/all"
  })
}

// get请求
export function getCityAll2() {
  return  SGRequest.get({
    url: "/city/all",
    params: {
      page: 1
    }
  })
}

// post请求
export function getCityAll3() {
  return  SGRequest.post({
    url: "/city/all",
    data: {
      page: 1
    }
  })
}

// post请求
export function getCityAll4(currentPage) {
  return  SGRequest.post({
    url: "/city/all",
    data: {
      page: currentPage
    }
  })
}