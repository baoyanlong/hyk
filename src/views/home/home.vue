<template>
  <div class="home">
    <home_banner/>
    <home_search/>
    <home_single/>
    <home_combine/>
  </div>
</template>

<script setup>
import home_banner from './home_banner.vue';
import home_search from './home_search.vue';
import home_single from './home_single.vue';
import home_combine from './home_combine.vue';
</script>

<style lang="less" scoped>
.home {
  // position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding-top: 70px;
  padding-left: 200px;
  padding-right: 200px;
  // height: max-content;

  color: #fff;
  background-color: rgb(8, 2, 17);
  
}
</style>