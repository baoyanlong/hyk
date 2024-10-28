<template>
  <div class="game-detail">
    <homeSearch/>
    <span class="nav-title">首页 > 市场 > 黑神话 悟空</span>
    <span class="game-title">黑神话 悟空</span>
    <div class="detail-content">
      <gameDetailVideo/>
      <gameDetailInfo/>
    </div>
  </div>
</template>

<script setup>
import homeSearch from '../homeSearch.vue';
import gameDetailInfo from './components/gameDetailInfo.vue';
import gameDetailVideo from './components/gameDetailVideo.vue';
</script>

<style lang="less" scoped>
.game-detail {
  width: var(--page-width);
  margin: 0 auto;

  color: #fff;
  background-color: rgb(8, 2, 17);

  .nav-title {
    display: block;
    margin-top: 10px;
    font-family: "AlibabaPuHuiTi";
    font-size:10px;
    color: #A6A6A6;
  }

  .game-title {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;

    font-family: "AlimamaShuHeiTi";
    font-size:16px;
    color: #FFFFFF;
  }

  .detail-content {
    display: flex;
    justify-content: space-between;
    // align-items: center;
  }



}
</style>