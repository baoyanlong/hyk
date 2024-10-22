
<template>
  <div class="content">
    <div class="content-top">
      <div class="content-top-left">
        <img class="icon" src="@/assets/img/tabbar/tabbar_home_selected.png" alt="">
        <span class="title">共享游 | 一折玩正版</span>
      </div>
      <div class="content-top-right">
        <template v-for="(item, index) in homeBottomData.list1">
          <div class="item">
            <span class="item-title" @click="topItemClick(item, index)">{{item}}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="line"></div>
    <div class="content-bottom">
      <div class="content-bottom-left">
        <template v-for="item in homeBottomData.companyInfos">
          <span class="company-title">{{item}}</span>
        </template>
      </div>
      <div class="content-bottom-right">
        <template v-for="(item, index) in homeBottomData.list2">
          <div class="content-bottom-right-item">
            <span class="item-title" @click="bottomItemClick(item, index)">{{item}}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import homeBottomData from '@/assets/data/home/homeBottom';

// 顶部按钮点击
const topItemClick = (item, index) => {
  console.log("点击了" + item + index)
}

// 底部按钮点击
const bottomItemClick = (item, index) => {
  console.log("点击了" + item + index)
}
</script>

<style lang="less" scoped>
.content {

  padding-bottom: 80px;
  background-color: #1E2329;
  width: 1100px;
  margin: 0 auto;


  .content-top {
    display: flex;

    height: 68px;
   

    .content-top-left {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 370px;
      .icon {
        width: 42px;
        height: 42px;
      }
      .title {
        margin-left: 10px;
        font-family: "AlimamaShuHeiTi";
        font-size: 20px;
        color: #747C86;
      }
    }

    .content-top-right {
      display: flex;
      justify-content: start;
      align-items: center;

      .item {
        width: 210px;
        .item-title {
          cursor: pointer;
          font-family: "AlibabaPuHuiTi";
          font-size: 12px;
          color: #747C86;
        }
      }
    }
  }

  .line {
    height: 3px;
    background-color: #212B45;
  }

  .content-bottom {
    display: flex;
    height: 110px;
    padding-top: 20px;
    .content-bottom-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 370px;
      .company-title {
        font-family: "AlibabaPuHuiTi";
        font-size: 12px;
        color: #747C86;
      }
    }

    .content-bottom-right {
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      align-content: space-between;

      width: 640px;

      .content-bottom-right-item {
        width: 210px;
        .item-title {
        font-family: "AlibabaPuHuiTi";
        font-size: 12px;
        color: #747C86;
        cursor: pointer;
      }
      }
      
    }
  }
}
</style>