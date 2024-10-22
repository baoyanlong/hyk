<template>
  <div class="search_dialog">
    <span class="no_content">暂无相关内容，看看推荐吧</span>
    <div class="header">
      <span>热门搜索</span>
      <img src="@/assets/img/home/home_hot_icon.png" alt="" srcset="">
      <img src="@/assets/img/home/home_hot_icon.png" alt="" srcset="">
      <img src="@/assets/img/home/home_hot_icon.png" alt="" srcset="">
      <img src="@/assets/img/home/home_hot_icon.png" alt="" srcset="">
    </div>
    <template v-for="(item, index) in searchDialogData">
      <div class="list_item" @click="clickItem(item)">
        <span class="order" :style="{ 'color': item.color }">{{index + 1}}</span>
        <span class="name">{{item.title}}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { searchDialogData } = storeToRefs(homeStore)


const clickItem = (item) => {
  console.log(item.title)
}
</script>

<style lang="less" scoped>

.search_dialog {
  position: absolute;
  top: 33px;
  right: 0;
  left: 0;
  height: 174px;

  padding-left: 19px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #1E2329FF;
  z-index: 10;

  .no_content {
    font-family: "AlibabaPuHuiTi";
    font-size:12px;
    color: #9E9E9EFF;
  }
  .header {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 16px;

    height: 32px;
    img {
      margin-left: 3px;
      width: 15px;
      height: 15px;
    }
    span {
      margin-right: 3px;
      margin-top: 2px;
      font-family: "AlimamaShuHeiTi";
      font-size:12px;
      color: #9E9E9EFF;
    }
  }

  .list_item {
    display: flex;
    justify-content: start;
    align-items: center;

    .order {
      font-family: "AlimamaShuHeiTi";
      font-size:12px;
      color: #F5B464FF;
    }

    .name {
      margin-left: 9px;
      font-family: "AlimamaShuHeiTi";
      font-size:12px;
      color: #F3F3F3FF;
    }
  }

}
</style>