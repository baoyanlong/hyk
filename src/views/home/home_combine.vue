<template>
  <div class="home-combine">
    <div class="home-combine-top">
      <div class="home-combine-top-left">
        <span class="home-combine-top-title1">组合游戏</span>
        <span class="home-combine-top-title2">一号多游戏 打包超划算</span>
        <img src="@/assets/img/home/home_hot_icon.png" alt="" srcset="">
      </div>
      <a-button class="moreBtn" type="primary"
      @click="clickMore()" 
      style="background-color: #4B619BFF; 
      width: 98px; 
      height: 28px; 
      font-family: 'AlimamaShuHeiTi-Bold';
      font-size:16px;
      color: #FFFFFFFF;
      border-radius: 0px;
      ">查看更多</a-button>
    </div>
    <div class="home-combine-content">
      <combine_game_item :item="homeCombineListData[0]"/>
      <combine_game_item_two :item="homeCombineListData[1]"/>
    </div>
  </div>
</template>

<script setup>
import combine_game_item from '@/components/home/combine_game_item.vue';
import combine_game_item_two from '@/components/home/combine_game_item_two.vue';

import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()
const { homeCombineListData } = storeToRefs(homeStore)


const clickMore = () => {
  console.log("clickMore")
}
</script>

<style lang="less" scoped>
.home-combine {
  display: flex;
  flex-direction: column;

  margin-top: 12px;
  // padding-bottom: 10px;

  background-color: transparent;


  .home-combine-top {
    display: flex;
    justify-content: space-between;
    align-items: end;

    height: 28px;

    background-color: transparent;

    .moreBtn {
      padding-top: 1px;
    }

    .home-combine-top-left {
      display: flex;
      justify-content: start;
      align-items: end;
      height: 28px;
      width: 221px;
      background: linear-gradient(90deg, #212B45FF 0%, #191A1D00 100%);

      padding-bottom: 4px;

      .home-combine-top-title1 {
        margin-left: 7px;
        font-family: "AlimamaShuHeiTi-Bold";
        font-size:16px;
        color: #FFFFFFFF;
      }

      .home-combine-top-title2 {
        margin-left: 8px;
        margin-bottom: 2px;
        font-family: "Alibaba_PuHuiTi";
        font-size:10px;
        color: #F5B464FF;
      }

      img {
        margin-left: 3px;
        margin-bottom: 2px;
        width: 14px;
        height: 14px;
      }
      
    }

    .home-combine-content {
      display: flex;
      flex-direction: column;
    }



    
  }
}
</style>