<template>
  <div class="home-combine">
    <div class="home-combine-top">
      <div class="home-combine-top-left">
        <span class="home-combine-top-title1">组合游戏</span>
        <span class="home-combine-top-title2">一号多游戏 打包超划算</span>
        <img src="@/assets/img/tabbar/tabbar_user_selected.png" alt="">
      </div>
      <a-button type="primary" style="background-color: rgb(66, 86, 144); width: 120px; height: 40px;" >查看更多</a-button>
    </div>
    <div class="home-combine-content">
      <combine_game_item/>
      <combine_game_item/>
    </div>
  </div>
</template>

<script setup>
import combine_game_item from '@/components/home/combine_game_item.vue';
</script>

<style lang="less" scoped>
.home-combine {
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  padding-bottom: 10px;

  background-color: rgb(30, 38, 61);


  .home-combine-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;

    background-color: rgb(30, 38, 61);
    

    .home-combine-top-left {
      display: flex;
      align-items: center;

      .home-combine-top-title1 {
        margin-left: 10px;
        line-height: 40px;
        font-size: 20px;
        color: rgb(255, 255, 255);
        // background-color: rgb(230, 38, 61);
      }

      .home-combine-top-title2 {

        margin-left: 10px;
        margin-top: 5px;
        line-height: 40px;
        font-size: 12px;
        color: rgb(204, 146, 82);
        // background-color: rgb(130, 38, 61);
      }

      img {
        width: 20px;
        height: 20px;
      }
    }

    .home-combine-content {
      display: flex;
      flex-direction: column;
    }



    
  }
}
</style>