<template>
  <div class="home-banner">
    <van-swipe class="my-swipe"
    @change="onChange" 
     :autoplay="3000" 
     indicator-color="white">
     <template v-for="(item, index) in bannerData">
      <van-swipe-item >
        <img class="img" src="@/assets/img/test/game_banner.jpg" :src="item.imgUrl" alt="" srcset="">
      </van-swipe-item>
     </template>
    </van-swipe>
    <div class="home-banner-list">
      <template v-for="(item, index) in bannerData">
        <span class="home-banner-list-item" 
        :class="{ active: currentIndex == index }">
          {{ item.title }}
        </span>
     </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const homeStore = useHomeStore()
// 轮播图数据
const { bannerData } = storeToRefs(homeStore)
// 当前选中的index
const currentIndex = ref(0)

// 轮播图滚动回调
const onChange = (index) => {
  currentIndex.value = index
}



</script>

<style lang="less" scoped>
.home-banner {
  position: relative;
  left: 0;
  right: 200px;
  top: 0;
  height: 250px;

  .my-swipe {
    position: absolute;
    left: 0;
    right: 180px;
    top: 0;
    bottom: 0;


    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: transparent;
  }
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: transparent;

    .img {
      // width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }
  }

  .home-banner-list {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    width: 180px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: rgb(8, 2, 17);
  }

  .home-banner-list-item {
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: rgba(30, 35, 41, 1);

    font-family: "AlibabaPuHuiTi";
    font-size:12px;
    color: rgba(158, 158, 158, 1);

    &.active {
      color: rgba(243, 243, 243, 1);
      // background-color: rgba(75, 97, 155, 1); 
    }
  }
}
</style>