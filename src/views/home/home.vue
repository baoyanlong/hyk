<template>
  <div class="home">
    <homeBanner/>
    <homeSearch/>
    <homeSingle/>
    <homeCombine/>
    <homeGuide/>
    <homeBar/>
  </div>
</template>

<script setup>
// 导入页面组件
import homeBanner from './homeBanner.vue';
import homeSearch from './homeSearch.vue';
import homeSingle from './homeSingle.vue';
import homeCombine from './homeCombine.vue';
import homeGuide from './homeGuide.vue';
import homeBar from './homeBar.vue';

// 导入数据文件
import useHomeStore from '@/stores/modules/home';

const homeStore = useHomeStore()

</script>

<style lang="less" scoped>
.home {
  padding-top: 80px;
  width: var(--page-width);
  margin: 0 auto;

  color: #fff;
  background-color: rgb(8, 2, 17);
  
}

</style>