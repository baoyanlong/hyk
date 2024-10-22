<template>
  <div class="app">
    <RouterView/>
    <tabbar/>
    <div class="bottom">
      <homeBottom/>
    </div>
  </div>
</template>

<script setup>
  import tabbar from './components/tabbar/tabbar.vue';
  import homeBottom from './views/home/homeBottom.vue';
</script>


<style scoped>
/* .app {
  display: flex;
  justify-content: center;
} */

 .bottom {
  background-color: #1E2329;
 }
</style>
