<template>
  <div class="content">
    <combine_game_item_left_two :item="item"/>
    <combine_game_item_right :item="item"/>
  </div>
</template>

<script setup>
import combine_game_item_left_two from './combineGameItemLeftTwo.vue';
import combine_game_item_right from './combineGameItemRight.vue';

const props = defineProps({
  item:{}
})
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: space-between;

  margin-top: 12px;

  background-color: #212B45FF;

  padding: 10px 10px;
}
</style>