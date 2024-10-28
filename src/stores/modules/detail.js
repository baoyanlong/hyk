import { defineStore } from "pinia";

const useDetailStore = defineStore("detail",{
    state: () => ({
      gameInfo: {
        "type": "动作/角色扮演/神话/战斗",
        "developer": "Game Science",
        "publishTime": "2024-08-19",
        "lan": "中文/英文",
        "version": "标准版",
        },
      configReq: {
        "stystem": "Windows 10 64-bit",
        "cpu": "Intel Core i5-8400 / AMD Ryzen 5 1600",
        "memory": "16 GB RAM",
        "graphics": "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX580 8GB",
        "size": "需要130GB可用空间",
      },
      explain: ["1.本商品为独立包含多款游戏的的STEAM平台账号+初始邮箱（可点击顶部菜单栏查看各款游戏），该游戏通过家庭共享提供。",
        "2.官方功能，安全无忧！STEAM平台正式启动，100%正版无阉割，支持云存档、成就、创意工坊等，游玩与正版无区别。",
        "3.为防止误操作，本账号仅提供游戏试玩体验，已关闭STEAM社区、商城、好友等权限。",
        "4.由于家庭共享席位存在有效期，初始有效期为90天，由于每个订单出售时间不一致，实际有效期请以订单为准。有效期结束后可续费延时。",
      ]
    }),
    actions: {

    }
  })

export default useDetailStore