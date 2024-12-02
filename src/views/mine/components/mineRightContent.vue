<template>
  <div class="mine-right-content">
    <div class="content-header">
      <acountInfo/>
      <myWalletInfo/>
    </div>
    <div>
      <recordList/>
    </div>
  </div>
</template>

<script setup>
import acountInfo from './acountInfo.vue';
import recordList from './recordList.vue';
import myWalletInfo from './myWalletInfo.vue';
</script>

<style lang="less" scoped>
.content-header {
  display: flex;
  justify-content: start;
  align-items: start;
}
</style>