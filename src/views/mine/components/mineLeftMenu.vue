<template>
  <div class="mine-left-menu">
    <div class="user">
      <img class="icon" src="@/assets/img/tabbar/tabbar_user_selected.png" alt="">
      <span class="text">用户大先生</span>
      <div class="line"></div>
    </div>
    <div class="menu-item-bg">
      <template v-for="(item, index) in menuList">
        <div class="menu-item" :class="{ selected: index === currentIndex}" @click="clickItem(index)">{{item}}</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import useMineStore from '@/stores/modules/mine';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const mineStore = useMineStore()
const { menuList } = storeToRefs(mineStore)

const currentIndex = ref(0)

const clickItem = (index) => {
  currentIndex.value = index
}
</script>

<style lang="less" scoped>
.mine-left-menu {
  background-color: #1E2329;

  width: 110px;
  height: 650px;

  

  .menu-item-bg {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 24px;
    background-color: transparent;

    .menu-item {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #212B45;
      height: 26px;
      width: 100%;
      margin-bottom: 2px;

      font-family: "AlimamaShuHeiTi";
      font-size:12px;
      color: #A6A6A6;

      cursor: pointer;

      &.selected {
        color: #FFFFFF;
        background-color: #4B619B;
      }
    }
  }
  
}

.user {
  display: flex;
  align-items: center;
  flex-direction: column;

  .icon {
    margin-top: 16px;
    margin-bottom: 14px;
    width: 44px;
    height: 42px;
  }

  .text {
    font-family: "AlibabaPuHuiTi";
    font-size:12px;
    color: #747C86;
  }

  .line {
    margin-top: 5px;
    width: 110px;
    height: 2px;
    background-color: #212B45;
  }
}
</style>