<template>
  <div class="home-banner">
    <img class="home-banner-img" src="@/assets/img/test/game.jpg" alt="">
    <div class="home-banner-list">
      <span class="home-banner-list-item">游戏一</span>
      <span class="home-banner-list-item">游戏二</span>
      <span class="home-banner-list-item">游戏三</span>
      <span class="home-banner-list-item">游戏四</span>
      <span class="home-banner-list-item">游戏五</span>
      <span class="home-banner-list-item">游戏六</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.home-banner {

  display: flex;

  height: 300px;

  .home-banner-img {
    // width: 1000px;
    // height: 100%;
    // width: auto;
    flex: 1;
  }

  .home-banner-list {
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    width: 200px;

    background-color: rgb(8, 2, 17);
  }

  .home-banner-list-item {
    
    height: 46px;
    text-align: center;

    line-height: 46px;
    
    background-color: rgb(26, 27, 26);
  }
}
</style>