<template>
  <div class="single-game-item" :style="{ width: itemWidth + 'px'}">
    <img class="image" src="@/assets/img/home/home_single_game_icon.jpg" :src="item.imgUrl" alt="">
    <span class="single-game-item-title">{{ item.title }}</span>
    <span class="single-game-item-title2">{{ item.des }}</span>
    <div class="single-game-item-price">
      <span class="single-game-item-price-original">{{ item.originalPrice }}</span>
      <span class="single-game-item-price-discount">{{ item.price }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item:{},
  itemWidth: Number
})
</script>

<style lang="less" scoped>

.single-game-item {
  display: flex;
  flex-direction: column;

  background-color: #1E2329FF;
  margin-bottom: 10px;

  .image {
    width: 100%;
  }

  .single-game-item-title {
    margin-top: 4px;
    margin-left: 12px;

    color: #fff;
    font-family: "AlimamaShuHeiTi";
    font-size:12px;
  }
  .single-game-item-title2 {
    margin-top: 3px;
    margin-left: 12px;
    font-family: "AlibabaPuHuiTi";
    font-size:8px;
    color: #9E9E9EFF;
  }

  .single-game-item-price {
    display: flex;
    justify-content: end;
    align-items: end;

    .single-game-item-price-original {
      margin-bottom: 7px;
      font-family: "AlibabaPuHuiTi";
      font-size:8px;
      color: #9E9E9EFF;
    }
    .single-game-item-price-discount {
      margin-left: 5px;
      margin-right: 6px;
      margin-bottom: 7px;

      font-family: "AlimamaShuHeiTi";
      font-size:12px;
      color: #F5B464FF;
    }
  }


}

</style>