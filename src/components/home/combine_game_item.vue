<template>
  <div class="combine-game-item">
    <combine_game_item_left :item="item"/>
    <combine_game_item_right :item="item"/>
  </div>
</template>

<script setup>
import combine_game_item_left from './combine_game_item_left.vue';
import combine_game_item_right from './combine_game_item_right.vue';

const props = defineProps({
  item:{}
})

console.log(props.item);

</script>

<style lang="less" scoped>
.combine-game-item {
  display: flex;
  justify-content: space-between;

  background-color: #212B45FF;

  padding: 10px 10px;
}
</style>