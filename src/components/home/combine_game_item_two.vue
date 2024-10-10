<template>
  <div class="content">
    <combine_game_item_left_two :item="item"/>
    <combine_game_item_right :item="item"/>
  </div>
</template>

<script setup>
import combine_game_item_left_two from './combine_game_item_left_two.vue';
import combine_game_item_right from './combine_game_item_right.vue';

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