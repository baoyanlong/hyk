<template>
  <div class="single-game-item">
    <img class="image" src="@/assets/img/test/game2.webp" alt="">
    <span class="single-game-item-title">黑神话悟空 普通版</span>
    <span class="single-game-item-title2">黑神话悟空详情</span>
    <div class="single-game-item-price">
      <span class="single-game-item-price-original">原价￥300</span>
      <span class="single-game-item-price-discount">折后￥25起</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

.single-game-item {
  display: flex;
  flex-direction: column;

  width: 280px;
  // height: 220px;

  background-color: rgb(26, 26, 26);

  .image {
    width: 100%;
  }

  .single-game-item-title {
    margin-top: 5px;
    margin-left: 10px;

    color: #fff;
    font-size: 18px;
  }
  .single-game-item-title2 {
    margin-top: 5px;
    margin-left: 10px;

    color: rgb(73, 73, 73);
    font-size: 10px;
  }

  .single-game-item-price {
    display: flex;
    justify-content: end;

    align-items: center;

    .single-game-item-price-original {
      margin-top: 5px;

      margin-bottom: 15px;

      color: rgb(73, 73, 73);
      font-size: 10px;
    }
    .single-game-item-price-discount {
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;

      color: rgb(220, 156, 83);
      font-size: 18px;
    }
  }


}

</style>