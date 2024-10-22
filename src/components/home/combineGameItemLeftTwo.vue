<template>
  <div class="combine-game-item-left">
    <div class="top">
      <template v-for="(model) in item.imgUrls">
        <img src="@/assets/img/home/home_combine_game_icon.jpg" :src="model" alt="">
      </template>
    </div>
    <div class="bottom">
      <span class="title">{{ item.title }}</span>
      <span class="des">{{ item.des }}</span>
      <span class="orginal_price">{{ item.originalPrice }}</span>
      <span class="price">{{ item.price }}</span>
      <a-button class="moreBtn" type="primary"
      @click="clickMore()" 
      style="background-color: #A1CD44FF; 
      width: 89px; 
      height: 26px; 
      font-family: 'AlibabaPuHuiTi';
      font-size:14px;
      color: #1B1B1BFF
      ">立即购买</a-button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item:{}
})
</script>

<style lang="less" scoped>
.combine-game-item-left {
  display: flex;
  flex-direction: column;

  flex-flow: 1;
  // flex-shrink: 1;
  min-width: 850px;


  .top {
    max-width: 900px;
    overflow-x: auto;
    display: flex;
    scrollbar-width: none;
    .img {
      width: 310px;
      height: 140px;
    }
  }

  .bottom {
    position: relative;

    height: 54px;

    background-color: #1E2329FF;

    .title {
      position: absolute;
      left: 9px;
      right: 0;
      top: 5px;
      height: 22px;

      font-family: "AlimamaShuHeiTi";
      font-size:12px;
      color: #FFFFFFFF;
    }

    .des {
      position: absolute;
      left: 9px;
      top: 34px;

      font-family: "AlibabaPuHuiTi";
      font-size:8px;
      color: #9E9E9EFF;
    }

    .orginal_price {
      position: absolute;
      right: 103px;
      bottom: 23px;

      font-family: "AlibabaPuHuiTi";
      font-size:8px;
      color: #9E9E9EFF;
    }

    .price {
      position: absolute;
      right: 103px;
      bottom: 6px;

      font-family: "AlimamaShuHeiTi";
      font-size:12px;
      color: #F5B464FF;
    }

    .moreBtn {
      position: absolute;
      right: 6px;
      bottom: 6px;

      border-radius: 0px;
      padding-top: 1px;
    }
  }
}
</style>