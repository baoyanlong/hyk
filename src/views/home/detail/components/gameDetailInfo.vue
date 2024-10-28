<template>
  <div class="game-info">
    <div class="game-info-item">
      <span class="game-info-item-title">游戏信息</span>
      <div class="line-bg">
        <div class="line"> </div>
      </div>
      <template v-for="(item,index) in gameInfoValues">
        <div class="game-info-item-bar">
          <span class="game-info-item-bar-key">{{ gameInfoKeys[index] }}</span>
          <span class="game-info-item-bar-value">{{item}}</span>
        </div>
      </template>
      
    </div>

    <div class="game-info-item">
      <span class="game-info-item-title">配置要求</span>
      <div class="line-bg">
        <div class="line"> </div>
      </div>
      <template v-for="(item,index) in configReqValues">
        <div class="game-info-item-bar">
          <span class="game-info-item-bar-key">{{ configReqKeys[index] }}</span>
          <span class="game-info-item-bar-value">{{item}}</span>
        </div>
      </template>
    </div>

    <div class="game-info-item">
      <span class="game-info-item-title">商品说明</span>
      <div class="line-bg">
        <div class="line"> </div>
      </div>
      <template v-for="(item,index) in explain">
        <div class="game-info-item-bar">
          <span class="game-info-item-bar-value">{{item}}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import useDetailStore from '@/stores/modules/detail';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const detaiStore = useDetailStore()
const { gameInfo, configReq, explain } = storeToRefs(detaiStore)

const gameInfoValues = computed( () => {
  return Object.values(gameInfo.value)
})
const gameInfoKeys = ["游戏类型：", "开发商：", "发售日期：", "支持语言：", "游戏版本："]

const configReqValues = computed( () => {
  return Object.values(configReq.value)
})
const configReqKeys = ["游戏类型：", "开发商：", "发售日期：", "支持语言：", "游戏版本："]

 
</script>

<style lang="less" scoped>
.game-info {
  width: 270px;
  background-color: #1B223A;

  padding: 10px 10px 0px 10px;

  .game-info-item {
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    background-color: #1E2329;
    margin-bottom: 10px;

    .game-info-item-title {
      margin-bottom: 5px;

      font-family: "AlimamaShuHeiTi";
      font-size:12px;
      color: #FFFFFF;
    }

    .line-bg {
      background-color: #212B45;
      height: 2px;
      .line {
        width: 20px;
        height: 2px;
        background-color: #4B619B;
      }
    }

    .game-info-item-bar {
      display: flex;
      margin-top: 10px;

      .game-info-item-bar-key {
        min-width: 48px;
        font-family: "AlibabaPuHuiTi";
        font-size:8px;
        font-weight: 700;
        color: #A6A8B3;
      }
      .game-info-item-bar-value {
        font-family: "AlibabaPuHuiTi";
        font-size:8px;
        color: #FFFFFF;
      }
    }
  }
}
</style>