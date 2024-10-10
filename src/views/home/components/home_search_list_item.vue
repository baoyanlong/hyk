<template>
  <div class="list_item">
    <img class="icon" :src="item.imgUrl" alt="" srcset="">
    <div class="des_bg">
      <span class="title">{{ item.title }}</span>
      <span class="des">{{ item.des }}</span>
    </div>
    <div class="price_bg">
      <span class="price">{{ item.price }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps ({
  item:{}
})
</script>

<style lang="less" scoped>
.list_item {

  display: flex;
  justify-content: space-between;

  margin-left: 10px;
  margin-bottom: 10px;

  background-color: #1E2329FF;

  .icon {
    width: 82px;
    height: 46px;
  }
  .des_bg {
    display: flex;
    flex-direction: column;

    flex-grow: 1;

    .title {
      margin-left: 6px;
      font-family: "AlimamaShuHeiTi-Bold";
      font-size:12px;
      color: #FFFFFFFF;
    }
    .des {
      margin-top: 3px;
      margin-left: 6px;
      font-family: "Alibaba_PuHuiTi";
      font-size:8px;
      color: #9E9E9EFF;
    }
  }
  .price_bg {
    display: flex;
    align-items: end;
    .price {
      margin-right: 13px;
      font-family: "AlimamaShuHeiTi-Bold";
      font-size:12px;
      color: #F5B464FF;
    }
  }
}
</style>