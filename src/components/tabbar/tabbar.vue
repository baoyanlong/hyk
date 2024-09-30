<template>
  <div class="tabbar">
    
    <div class="tabbar-left">
      <div class="tabbar-left-icon">
        <img src="@/assets/img/tabbar/tabbar_home_selected.png" alt="">
        <span>共享游|一折玩正版</span>
      </div>

      <div class="tabbar-left-item">
        <template v-for="(item, index) in tabbarData">
        <div 
          class="tabbar-item" 
          :class="{ active: currentIndex == index }"
          @click="itemClick(index, item)"
        >
          <!-- <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" srcset=""> -->
          <!-- <img v-else :src="getAssetURL(item.imageActive)" alt="" srcset=""> -->
          <span class="text">{{ item.text }}</span>
        </div>
      </template>
      </div>

    </div>

    <div class="tabbar-right" @click="loginClick()">
      <img src="@/assets/img/tabbar/tabbar_home_selected.png" alt="">
      <span>登录/注册</span>
    </div>
   
  </div>
</template>

<script setup>

import tabbarData from "@/assets/data/tabbar.js"
import { ref } from "vue";
import { useRouter } from "vue-router";

const currentIndex = ref(0)
const router = useRouter()


// 导航栏点击
const itemClick = (index, item) => {
  console.log(`点击了第${index}个导航`)
  currentIndex.value = index
  router.push(item.path)
}

// 登录注册点击
const loginClick = () => {
  console.log("登录注册点击")
}

</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  display: flex;
  justify-content: space-between;

  top: 0;
  left: 0;
  right: 0;
  height: 70px;

  line-height: 70px;
  
  background-color: rgba(35, 43, 67, 1);


  .tabbar-left {
    display: flex;


    .tabbar-left-icon {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: #fff;
      // background-color: #f00;
    }

    .tabbar-left-item {
      display: flex;

      margin-left: 50px;
      
      .tabbar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 180px;

        &.active {
          color: #fff;
          background-color: rgb(79, 97, 151);
        }

        .text {
          font-size:20px;
          color: #fff;
        }
      }
    }
    
  }

  .tabbar-left .tabbar-left-icon > img {
      width: 46px;
      height: 46px;
  }

  .tabbar-right {
    display: flex;
    align-items: center;
    margin-right: 20px;

    font-size: 20px;
    color: #fff;
  }

  .tabbar-right > img {
      width: 46px;
      height: 46px;
  }
  
}
</style>
