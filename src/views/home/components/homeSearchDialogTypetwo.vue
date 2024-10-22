<template>
  <div class="search_dialog_two">
    <ul>
      <template v-for="(item) in searchDialogType2Data">
        <li>
        <homeSearchListItem :item="item"/>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import homeSearchListItem from './homeSearchListItem.vue';
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { searchDialogType2Data } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.search_dialog_two {
  position: absolute;
  top: 33px;
  right: 0;
  left: 0;
  // height: 100px;
  background-color: #1E2329FF;

  padding-top: 10px;

  // display: flex;
  // flex-direction: column;
  // background-color: #1E2329FF;
  z-index: 10;
}
</style>