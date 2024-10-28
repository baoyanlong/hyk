<template>
  <div class="app">
    <RouterView :style="{'padding-top': '80' + 'px'}"/>
    <tabbar/>
    <div class="bottom">
      <homeBottom/>
    </div>
    <login v-if="isShowLogin"/>
  </div>
</template>

<script setup>
  import tabbar from './components/tabbar/tabbar.vue';
  import homeBottom from './views/home/homeBottom.vue';
  import login from './views/login/login.vue';

  import useMainStore from '@/stores/modules/main';
  import { storeToRefs } from 'pinia';

  const mainStore = useMainStore()
  const { isShowLogin } = storeToRefs(mainStore)
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
