
/**
 * 存储全局数据
 */

import { defineStore } from "pinia";

const useMainStore = defineStore("main",{
    state: () => ({
      token: "",
      startDate: "",
      isLoading: false,
      isShowLogin: false, // 是否展示登录弹窗
      pageWidth: 1100, // 页面宽度
    }),
    actions: {

    }
  })

export default useMainStore