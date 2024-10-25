<template>
  <div class="combine-game-content">
    <div class="combine-content-top">
      <div class="top_left">
        <span class="combine-content-title1">组合游戏</span>
        <span class="combine-content-title2">一号多游戏 打包超划算</span>
        <img src="@/assets/img/home/home_hot_icon.png" alt="" srcset="">
      </div>
      <gameListFilter/>
    </div>
    <div class="combine-content-list">
      <div class="home-combine-content">
        <combineGameItem :item="combineListData[0]"/>
        <combineGameItemTwo :item="combineListData[1]"/>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import combineGameItem from '@/components/home/combineGameItem.vue';
import combineGameItemTwo from '@/components/home/combineGameItemTwo.vue';
import gameListFilter from './gameListFilter.vue';
import useMarketStore from '@/stores/modules/market';
import { storeToRefs } from 'pinia';

const marketStore = useMarketStore()
const { combineListData } = storeToRefs(marketStore)


</script>

<style lang="less" scoped>
.combine-game-content {
  display: flex;
  flex-direction: column;


  margin-top: 12px;

  background-color: transparent;
  .combine-content-top {
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

      .combine-content-title1 {
        margin-left: 7px;
        font-family: "AlimamaShuHeiTi";
        font-size:16px;
        color: #FFFFFFFF;
        // background-color: rgb(230, 38, 61);
      }

      .combine-content-title2 {
        margin-left: 8px;
        margin-bottom: 2px;
        font-family: "AlibabaPuHuiTi";
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
    
  }

  .combine-content-list {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // align-content: space-between;
    // gap: 12px;

    background-color: #212B45FF;

    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 2px;
  }

}
</style>