<template>
  <div class="single-game-item">
    <img class="image" :src="item.imgUrl" alt="">
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
  item:{}
})
</script>

<style lang="less" scoped>

.single-game-item {
  display: flex;
  flex-direction: column;

  margin-left: 6px;
  margin-right: 6px;

  // width: 236px;
  // height: 220px;

  background-color: #1E2329FF;

  .image {
    width: 100%;
    // height: 108px;
  }

  .single-game-item-title {
    margin-top: 4px;
    margin-left: 12px;

    color: #fff;
    font-family: "AlimamaShuHeiTi-Bold";
    font-size:12px;
  }
  .single-game-item-title2 {
    margin-top: 3px;
    margin-left: 12px;
    font-family: "Alibaba_PuHuiTi";
    font-size:8px;
    color: #9E9E9EFF;
  }

  .single-game-item-price {
    display: flex;
    justify-content: end;
    align-items: end;

    .single-game-item-price-original {
      margin-bottom: 7px;
      font-family: "Alibaba_PuHuiTi";
      font-size:8px;
      color: #9E9E9EFF;
    }
    .single-game-item-price-discount {
      margin-left: 5px;
      margin-right: 6px;
      margin-bottom: 7px;

      font-family: "AlimamaShuHeiTi-Bold";
      font-size:12px;
      color: #F5B464FF;
    }
  }


}

</style>