<template>
  <div class="mine">
    <div class="home-search-notice">
      <img src="@/assets/img/common/info_icon.png" alt="">
      <span>特别声明：本站所有游戏均基于官方共享功能，100%正版无阉割，请放心购买！（比条为滾动文本，仅在后台设定展示公告文本时展示）</span>
    </div>
    <div class="mine-page-content">
      <mineLeftMenu/>
      <mineRightContent/>
    </div>
  </div>
</template>

<script setup>
import mineLeftMenu from './components/mineLeftMenu.vue';
import mineRightContent from './components/mineRightContent.vue';
</script>

<style >
.mine {
  padding-top: 80px;
  width: var(--page-width);
  margin: 0 auto;

  color: #fff;
  background-color: rgb(8, 2, 17);

  .mine-page-content {
    display: flex;
    align-items: start;
  }
}


.home-search-notice {
  display: flex;
  align-items: center;

  margin-top: 2px;

  margin-bottom: 12px;

  height: 20px;
  background-color: rgba(30, 35, 41, 1);

  


  img {
    margin-left: 6px;
    width: 14px;
    height: 14px;
  }

  span {
    margin-left: 6px;
    font-family: "AlibabaPuHuiTi";
    font-size:12px;
    color: rgba(158, 158, 158, 1);
  }


}
</style>