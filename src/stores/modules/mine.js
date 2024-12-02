import { defineStore } from "pinia";

const useMineStore = defineStore("mine",{
    state: () => ({
      menuList: ["账户中心", "我的订单", "我的上架"],
    }),
    actions: {

    }
  })

export default useMineStore