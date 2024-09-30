<template>
  <div class="home-search">
    <div class="home-search-notice">
      <img src="@/assets/img/tabbar/tabbar_user_selected.png" alt="">
      <span>特别声明：本站所有游戏均基于官方共享功能，100%正版无阉割，请放心购买！（比条为滾动文本，仅在后台设定展示公告文本时展示）</span>
    </div>
    <div class="home-search-content">
      <div class="home-search-content-i">
        <div class="home-search-content-icon">
          <img src="@/assets/img/tabbar/tabbar_user_selected.png" alt="">
          <span>官方正版2222</span>
        </div>
        <div class="home-search-content-icon">
          <img src="@/assets/img/tabbar/tabbar_user_selected.png" alt="">
          <span>联机支持</span>
        </div>
        <div class="home-search-content-icon">
          <img src="@/assets/img/tabbar/tabbar_user_selected.png" alt="">
          <span>存档支持</span>
        </div>
      </div>
      <a-input-search
        class="home-search-content-search"
        v-model:value="value"
        placeholder="黑神话悟空"
        style="border-radius: 4px; background-color: rgb(26, 27, 26);"
        @search="onSearch"
      />
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
const value = ref('');
const onSearch = searchValue => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};

</script>

<style lang="less" scoped>

.home-search {
  display: flex;
  flex-direction: column;
}

.home-search-notice {
  display: flex;
  align-items: center;

  margin-top: 5px;

  height: 30px;
  background-color: rgb(30, 32, 61);

  img {
    width: 20px;
    height: 20px;
  }

  span {
    // line-height: 60px;
    font-size: 12px;
    color: rgb(129, 132, 135);
  }
}

.home-search-content {
  display: flex;

  align-items: center;

  margin-top: 5px;

  height: 50px;
  background-color: rgb(26, 27, 26);


  .home-search-content-i {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    img {
      width: 25px;
      height: 25px;
    }

    span {
    // line-height: 60px;
      font-size: 22px;
      color: rgb(150, 152, 163);
    }
    .home-search-content-icon {
      display: flex;
      align-items: center;

      margin-right: 60px;
      
    }
  }

  .home-search-content-search {
    // display: flex;
    // align-items: center;

    width: 200px;
    color: rgb(86, 86, 88);
    background-color: rgb(26, 27, 26);

    // border: 1px solid rgb(181, 129, 71);
    // border-radius: 12px;

  }
}
</style>