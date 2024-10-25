<template>
  <div class="single-game-content">
    <div class="home-single-top">
      <div class="top_left">
        <span class="home-single-top-title1">单体游戏</span>
        <span class="home-single-top-title2">一号一游戏 独享更清爽</span>
        <img src="@/assets/img/home/home_hot_icon.png" alt="" srcset="">
      </div>
      <gameListFilter/>
    </div>
    <div class="single-game-list">
      <template v-for="(item) in singleListData">
        <singleGameItem :item="item" :item-width="itemWidth"/>
      </template>
      <template v-if="emptyCount > 0" v-for="index in emptyCount">
        <div :style="{width: itemWidth + 'px'}"></div>
      </template>
    </div>

    
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import gameListFilter from './gameListFilter.vue';
import useMarketStore from '@/stores/modules/market';
import singleGameItem from '@/components/home/singleGameItem.vue';
import useMainStore from '@/stores/modules/main';
import { computed, ref } from 'vue';

const marketStore = useMarketStore()
const { singleListData } = storeToRefs(marketStore)

const mainStore = useMainStore()
const { pageWidth } = storeToRefs(mainStore)

const itemWidth = computed(() => {
  return (pageWidth.value - 3*12 - 2*10) / 4
})

const emptyCount = computed( () => {
  return (singleListData.value.length % 4) == 0 ? 0 : 4 - (singleListData.value.length % 4)
})


</script>

<style lang="less" scoped>
.single-game-content {
  display: flex;
  flex-direction: column;


  margin-top: 12px;

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
        font-family: "AlimamaShuHeiTi";
        font-size:16px;
        color: #FFFFFFFF;
        // background-color: rgb(230, 38, 61);
      }

      .home-single-top-title2 {
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

  .single-game-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
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