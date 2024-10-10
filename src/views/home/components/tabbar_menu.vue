<template>
  <div class="menu">
    <template v-for="(item, index) in tabbarMenuData">
      <div 
        class="item"
        @click="itemClick(index, item)"
      >
        <div class="text-bg">
          <span class="text">{{ item.text }}</span>
        </div>
        <span class="des">{{ item.des }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarMenuData from '@/assets/data/tabbarMenu';

// 导航栏点击
const itemClick = (index, item) => {
  console.log(`点击了菜单第${index}个`)
  // currentIndex.value = index
  // router.push(item.path)
}
</script>

<style lang="less" scoped>
.menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 60px;
  right: 80px;
  width: 180px;
  height: 208px;

  background-color: rgba(0, 0, 0, 1);

  .item {
    display: flex;
    align-items: center;
    background-color: rgba(30, 35, 41, 1);

    margin-top: 1px;

    height: 52px;
    width: 180px;

    .text-bg {
      display: flex;
      width: 42px;
      height: 42px;
      border-radius: 3px;
      background-color: rgba(116, 124, 134, 1);
      align-items: center;
      justify-content: center;
      margin-left: 6px;
      .text {
        font-family: "AlimamaShuHeiTi-Bold";
        font-size:20px;
        color: rgba(33, 43, 69, 1);
      }
    }

    .des {
      margin-left: 13px;
      font-family: "AlimamaShuHeiTi-Bold";
      font-size:16px;
      color: rgba(116, 124, 134, 1);
    }
  }
}
</style>