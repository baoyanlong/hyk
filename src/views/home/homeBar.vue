<template>
  <div class="bar">
    <template v-for="(item) in homebarData">
      <div class="bar_item_bg">
        <img src="@/assets/img/home/home_bar_custome.png" :src="item.image" alt="" srcset="">
        <span class="title">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import homebarData from '@/assets/data/home/homebar';


</script>

<style lang="less" scoped>
.bar {
  position: absolute;
  right: -50px;
  bottom: 300px;
  width: 40px;

  padding-top: 5px;

  background-color: #1E2329FF;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  

  .bar_item_bg {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    margin-bottom: 5px;

    img {
      width: 22px;
      height: 22px;
    }

    .title {
      margin-top: 2px;
      font-family: "AlibabaPuHuiTi";
      font-size: 8px;
      color: #A6A6A6FF;
    }
  }
}
</style>