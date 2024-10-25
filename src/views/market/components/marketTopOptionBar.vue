<template>
  <div class="market-option-bar">
    <div class="single-item" :class="{ active: currentSelectIndex === 0 }" @click="chooseIndex(0)">
      <span class="home-single-top-title1">单体游戏</span>
      <span class="home-single-top-title2">一号一游戏 独享更清爽</span>
    </div>
    <div class="combine-item" :class="{ active: currentSelectIndex === 1 }" @click="chooseIndex(1)">
      <span class="combine-item-title1">组合游戏</span>
      <span class="combine-item-title2">一号多游戏 打包超划算</span>
    </div>
  </div>
</template>

<script setup>
import { defineModel } from 'vue';

const currentSelectIndex = defineModel("currentSelectIndex")

const chooseIndex = (index) => {
  currentSelectIndex.value = index
}

</script>

<style lang="less" scoped>
.market-option-bar {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  .single-item {
    border-radius: 2px;
    background-color: #1E2329;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 25px;

    cursor: pointer;

    &.active {
      background-color: #4B619B;
    }

    .home-single-top-title1 {
      margin-left: 7px;
      font-family: "AlimamaShuHeiTi";
      font-size: 16px;
      color: #FFFFFF;
    }

    .home-single-top-title2 {
      margin-left: 8px;
      margin-right: 7px;
      margin-bottom: -2px;
      font-family: "AlibabaPuHuiTi";
      font-size: 10px;
      color: #F5B464FF;
    }
  }

  

  .combine-item {
    border-radius: 2px;
    background-color: #1E2329;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 25px;
    cursor: pointer;

    &.active {
      background-color: #4B619B;
    }

    .combine-item-title1 {
      margin-left: 7px;
      font-family: "AlimamaShuHeiTi";
      font-size: 16px;
      color: #FFFFFF;
    }

    .combine-item-title2 {
      margin-left: 8px;
      margin-right: 7px;
      margin-bottom: -2px;
      font-family: "AlibabaPuHuiTi";
      font-size: 10px;
      color: #F5B464FF;
    }
  }
}
</style>