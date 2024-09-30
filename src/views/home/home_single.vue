<template>
  <div class="home-single">
    <div class="home-single-top">
      <div>
        <span class="home-single-top-title1">单体游戏</span>
        <span class="home-single-top-title2">一号以游戏 独享更清爽</span>
      </div>
      <a-button type="primary" style="background-color: rgb(66, 86, 144); width: 120px; height: 40px;" >查看更多</a-button>
    </div>
    <div class="home-single-content">
      <single_game_item/>
      <single_game_item/>
      <single_game_item/>
      <single_game_item/>
    </div>
  </div>
</template>

<script setup>
import single_game_item from '@/components/home/single_game_item.vue';
</script>

<style lang="less" scoped>
.home-single {
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  padding-bottom: 10px;

  background-color: rgb(30, 38, 61);


  .home-single-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;

    background-color: rgb(30, 38, 61);
    
    .home-single-top-title1 {
      margin-left: 10px;
      line-height: 40px;
      font-size: 20px;
      color: rgb(255, 255, 255);
      // background-color: rgb(230, 38, 61);
    }

    .home-single-top-title2 {

      margin-left: 10px;
      line-height: 40px;
      font-size: 12px;
      color: rgb(204, 146, 82);
      // background-color: rgb(130, 38, 61);
    }
    
  }

  .home-single-content {
    display: flex;
    justify-content: space-evenly;

    background-color: rgb(30, 38, 61);

    margin-top: 10px;
  }
}
</style>