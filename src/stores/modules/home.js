import { getHomeData } from "@/api/modules/home";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {

  state: () => ({
    allCities: {},
    bannerData: [
      {
        "imgUrl": "/src/assets/img/test/game_banner.jpg",
        "title": "游戏一",
      },
      {
        "imgUrl": "/src/assets/img/test/game_banner.jpg",
        "title": "游戏二",
      },
      {
        "imgUrl": "/src/assets/img/test/game_banner.jpg",
        "title": "游戏三",
      },
      {
        "imgUrl": "/src/assets/img/test/game_banner.jpg",
        "title": "游戏四",
      },
      {
        "imgUrl": "/src/assets/img/test/game_banner.jpg",
        "title": "游戏五",
      },
      {
        "imgUrl": "/src/assets/img/test/game_banner.jpg",
        "title": "游戏六",
      },
    ],
    searchDialogData: [
      {
        "color": "#F5B464",
        "title": "黑神话：悟空",
      },
      {
        "color": "#CFCFCF",
        "title": "赛博朋克2077",
      },
      {
        "color": "#DD927D",
        "title": "幻兽帕鲁",
      },
      {
        "color": "#737373",
        "title": "CS2",
      },
      {
        "color": "#737373",
        "title": "侠盗猎车GTA5",
      },
    ],
    searchDialogType2Data: [
      {
        "imgUrl": "/src/assets/img/home/home_search_img.jpg",
        "title": "黑神话：悟空  普通版",
        "des": "Black Myth: Wukong",
        "price": "¥29.9起",
      },
      {
        "imgUrl": "/src/assets/img/home/home_search_img.jpg",
        "title": "暗黑破坏神2：狱火重生",
        "des": "暗黑2",
        "price": "¥29.9起",
      },
      {
        "imgUrl": "/src/assets/img/home/home_search_img.jpg",
        "title": "黑暗之魂",
        "des": "DARK SOULS™ III",
        "price": "¥29.9起",
      },
      {
        "imgUrl": "/src/assets/img/home/home_search_img.jpg",
        "title": "黑暗的欺骗",
        "des": "黑暗欺骗 /DarkDeception",
        "price": "¥29.9起",
      },
      {
        "imgUrl": "/src/assets/img/home/home_search_img.jpg",
        "title": "黑客网络",
        "des": "Hacknet",
        "price": "¥29.9起",
      },
    ],
    homeSingleListData: [
      {
        "imgUrl": "/src/assets/img/home/home_single_game_icon.jpg",
        "title": "黑神话：悟空  普通版",
        "des": "Black Myth: Wukong",
        "price": "折后¥25.9起",
        "originalPrice": "原价¥300",
      },
      {
        "imgUrl": "/src/assets/img/home/home_single_game_icon.jpg",
        "title": "暗黑破坏神2：狱火重生",
        "des": "暗黑2",
        "price": "折后¥25.9起",
        "originalPrice": "原价¥300",
      },
      {
        "imgUrl": "/src/assets/img/home/home_single_game_icon.jpg",
        "title": "黑暗之魂",
        "des": "DARK SOULS™ III",
        "price": "折后¥25.9起",
        "originalPrice": "原价¥300",
      },
      {
        "imgUrl": "/src/assets/img/home/home_single_game_icon.jpg",
        "title": "黑暗的欺骗",
        "des": "黑暗欺骗 /DarkDeception",
        "price": "折后¥25.9起",
        "originalPrice": "原价¥300",
      },
    ],
    homeCombineListData: [
      {
        "imgUrls": ["/src/assets/img/home/home_combine_game_icon.jpg", "/src/assets/img/home/home_combine_game_icon.jpg", "/src/assets/img/home/home_combine_game_icon.jpg"],
        "title": "黑神话：悟空  普通版",
        "des": "白送了都，不买还是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "price": "折后¥25.9起",
        "originalPrice": "原价¥300",
        "name": "魂系三合一游戏包低价出",
        "sellerDescription": "白送了都，不买还是xxxxxxxxxxxxxxxxx白送了都，不买还是xxx白送了都，不买还是白送了都，不买还是",
        "label": "动作角色扮演/剧情/单人......",
        "platform": "Steam / Wegame",
        "evaluation": "好评如潮",
      },
      {
        "imgUrls": ["/src/assets/img/home/home_combine_game_icon.jpg", "/src/assets/img/home/home_combine_game_icon.jpg",],
        "title": "黑神话：悟空  普通版",
        "des": "白送了都，不买还是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "price": "折后¥25.9起",
        "originalPrice": "原价¥300",
        "name": "魂系三合一游戏包低价出",
        "sellerDescription": "白送了都，不买还是xxxxxxxxxxxxxxxxx白送了都，不买还是xxx白送了都，不买还是白送了都，不买还是",
        "label": "动作角色扮演/剧情/单人......",
        "platform": "Steam / Wegame",
        "evaluation": "好评如潮",
      },
    ],
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getHomeData()
      this.allCities = res.data
    },
  }
})

export default useHomeStore