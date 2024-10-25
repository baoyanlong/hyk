<template>
  <div class="filter-content">
    <div class="price-filter">
      <div class="price-filter-left">
        <span>￥最低价</span>
        <span>-</span>
        <span>￥最高价</span>
      </div>
      <span class="filter-bnt">筛选</span>
    </div>
    <div class="filter-content-right" @click="showMenu()">
      <span class="title">销量优先</span>
      <div class="triangle-bottom-right"></div>
      <div v-show="isShowMenu" class="filter-menu">
        <div class="filter-menu-item">
          <span>最新上架</span>
        </div>
        <div class="filter-menu-item">
          <span>折扣优先</span>
        </div>
        <div class="filter-menu-item">
          <span>价格升序</span>
        </div>
        <div class="filter-menu-item">
          <span>价格降序</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShowMenu = ref(false)

const showMenu = () => {
  isShowMenu.value = !isShowMenu.value
}

</script>

<style lang="less" scoped>
.filter-content {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1px;

  background-color: transparent;

  .price-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212B45;
    height: 28px;

    .price-filter-left {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto 28px;

      font-family: "AlibabaPuHuiTi";
      font-size:12px;
      color: #A6A6AD;
    }

    .filter-bnt {
      margin-right: 23px;
      font-family: "AlimamaShuHeiTi";
      font-size:12px;
      color: #F5B464;

      cursor: pointer;
    }
  }

  .filter-content-right {
    position: relative;
    margin-left: 3px;
    width: 98px;
    height: 28px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #212B45;

    cursor: pointer;

    .title {
      font-family: "AlimamaShuHeiTi";
      font-size:12px;
      color: #F5B464;
    }

    .triangle-bottom-right {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-bottom: 12px solid #F5B464; /* 三角形颜色 */
    }

    .filter-menu {
      position: absolute;
      left: 0;
      right: 0;
      top: 28px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: #212B45;

      .filter-menu-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 28px;
        span {
          font-family: "AlimamaShuHeiTi";
          font-size:12px;
          color: #A6A6AD;
        }
      }
      
    }
  }

  
}
</style>