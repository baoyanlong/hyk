
/**
 * 存储全局数据
 */

import { defineStore } from "pinia";

const useMainStore = defineStore("main",{
    state: () => ({
      token: "",
      startDate: "",
      isLoading: false,
    }),
    actions: {

    }
  })

export default useMainStore