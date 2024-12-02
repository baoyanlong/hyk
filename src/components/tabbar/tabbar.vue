<template>
  <div class="tabbar">
    
    <div class="tabbar-left">
      <div class="tabbar-left-bg">
        <img class="icon" src="@/assets/img/tabbar/tabbar_home_selected.png" alt="">
        <span class="title">共享游|一折玩正版</span>
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

    <div class="tabbar-right" 
    :style="{ 'margin-right': hasLogin ? 80 + 'px' : 127 + 'px' }">
      <div class="button" @click="loginClick()">
        <span>{{loginTitle}}</span>
      </div>
      <div class="user" 
      v-if="hasLogin"
      @click="userClick()">
        <img class="icon" src="@/assets/img/tabbar/tabbar_user_selected.png" alt="">
        <span class="text">用户大先生</span>
      </div>
      
    </div>
   
  </div>
  <tabbar_menu v-show="isShowMenu" />
</template>

<script setup>

import tabbarData from "@/assets/data/tabbar/tabbar.js"
import { ref } from "vue";
import { useRouter } from "vue-router";
import tabbar_menu from "@/views/home/components/tabbarMenu.vue";
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from "pinia";

const router = useRouter()
// 当前点击索引
const currentIndex = ref(0)
// 是否已登录
const hasLogin = ref(false)
// 登录按钮文案
const loginTitle = ref('登录/注册')
// 是否展示菜单
const isShowMenu = ref(false)

const mainStore = useMainStore()
const { isShowLogin } = storeToRefs(mainStore)



// 导航栏点击
const itemClick = (index, item) => {
  console.log(`点击了第${index}个导航`)
  currentIndex.value = index
  router.push(item.path)
}

// 登录注册点击
const loginClick = () => {
  console.log("登录注册点击")
  isShowLogin.value = true
  hasLogin.value = !hasLogin.value
  loginTitle.value = hasLogin.value ? "立即上架" : "登录/注册"
}

// 用户栏点击
const userClick = () => {
  console.log("用户栏点击")
  if (hasLogin.value) {
    isShowMenu.value = !isShowMenu.value
  }
}

</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  display: flex;
  justify-content: space-between;
  min-width: 1200px;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;

  background-color: rgba(30, 35, 41, 1);

  .tabbar-left {
    display: flex;
    margin-left: 20px;
    
    .tabbar-left-bg {
      display: flex;
      align-items: center;
      .icon {
        width: 42px;
        height: 42px;
      }
      .title {
        font-family: "AlimamaShuHeiTi";
        font-size: 20px;
        color: rgba(116, 124, 134, 1);
      }
    }

    .tabbar-left-item {
      display: flex;

      margin-left: 61px;
      margin-top: 10px;
      
      .tabbar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-right: 10px;
        width: 120px;
        background-color: rgba(33, 43, 69, 1);

        cursor: pointer;

        &.active {
          color: rgba(243, 243, 243, 1);
          background-color: rgba(75, 97, 155, 1); 
        }

        .text {
          font-family: "AlimamaShuHeiTi";
          font-size:16px;
          color: rgba(243, 243, 243, 1);
        }
      }
    }
  }

  .tabbar-right {
    display: flex;
    align-items: center;
    margin-right: 20px;

    font-size: 20px;
    color: #fff;

    .button {
      display: flex;
      height: 42px;
      width: 120px;
      background-color: rgba(161, 205, 68, 1);

      justify-content: center;
      // align-items: center;

      line-height: 42px;
      font-family: "AlimamaShuHeiTi";
      font-size:16px;
      color: rgba(14, 20, 27, 1);

      cursor: pointer;
    }

    .user {
      display: flex;
      align-items: center;

      margin-left: 47px;
      cursor: pointer;
      .icon {
        margin-right: 13px;
        width: 44px;
        height: 42px;
      }

      .text {
        font-family: "AlimamaShuHeiTi";
        font-size:16px;
        color: rgba(116, 124, 134, 1);
      }
    }
  }

  
  
}
</style>
