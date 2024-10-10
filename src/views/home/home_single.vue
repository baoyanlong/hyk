<template>
  <div class="home-single">
    <div class="home-single-top">
      <div class="top_left">
        <span class="home-single-top-title1">单体游戏</span>
        <span class="home-single-top-title2">一号一游戏 独享更清爽</span>
        <img src="@/assets/img/home/home_hot_icon.png" alt="" srcset="">
      </div>
      <a-button class="moreBtn" type="primary"
      @click="clickMore()" 
      style="background-color: #4B619BFF; 
      width: 98px; 
      height: 28px; 
      font-family: 'AlimamaShuHeiTi-Bold';
      font-size:16px;
      color: #FFFFFFFF
      ">查看更多</a-button>
    </div>
    <div class="home-single-content">
      <template v-for="(item) in homeSingleListData">
        <single_game_item :item="item"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import single_game_item from '@/components/home/single_game_item.vue';
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { homeSingleListData } = storeToRefs(homeStore)

const clickMore = () => {
  console.log("clickMore")
}

</script>

<style lang="less" scoped>
.home-single {
  display: flex;
  flex-direction: column;

  margin-top: 12px;
  // padding-bottom: 10px;

  background-color: transparent;


  .home-single-top {
    display: flex;
    justify-content: space-between;
    align-items: end;

    height: 28px;

    background-color: transparent;

    .top_left {
      display: flex;
      justify-content: start;
      align-items: end;
      height: 28px;
      width: 221px;
      background: linear-gradient(90deg, #212B45FF 0%, #191A1D00 100%);

      padding-bottom: 4px;

      .home-single-top-title1 {
        margin-left: 7px;
        font-family: "AlimamaShuHeiTi-Bold";
        font-size:16px;
        color: #FFFFFFFF;
        // background-color: rgb(230, 38, 61);
      }

      .home-single-top-title2 {
        margin-left: 8px;
        margin-bottom: 2px;
        font-family: "Alibaba_PuHuiTi";
        font-size:10px;
        color: #F5B464FF;
        // background-color: rgb(130, 38, 61);
      }
      img {
        margin-left: 3px;
        margin-bottom: 2px;
        width: 14px;
        height: 14px;
      }
    }
    
    .moreBtn {
      border-radius: 0px;
      padding-top: 1px;
    }

    
  }

  .home-single-content {
    display: flex;
    justify-content: space-evenly;

    background-color: #212B45FF;

    // height: 162px;

    padding-top: 10px;
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 12px;
  }
}
</style>