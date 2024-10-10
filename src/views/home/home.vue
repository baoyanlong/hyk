<template>
  <div class="home">
    <home_banner/>
    <home_search/>
    <home_single/>
    <home_combine/>
    <home_guide/>
    <home_bar/>
  </div>
</template>

<script setup>
// 导入页面组件
import home_banner from './home_banner.vue';
import home_search from './home_search.vue';
import home_single from './home_single.vue';
import home_combine from './home_combine.vue';
import home_guide from './home_guide.vue';
import home_bar from './home_bar.vue';
// 导入数据文件
import useHomeStore from '@/stores/modules/home';

const homeStore = useHomeStore()


</script>

<style lang="less" scoped>
.home {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding-top: 80px;
  padding-left: 260px;
  padding-right: 260px;
  height: max-content;


  min-width: 1200px;

  color: #fff;
  background-color: rgb(8, 2, 17);
  
}
</style>