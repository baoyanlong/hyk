<template>
  <div class="combine-game-item">
    <combine_game_item_left/>
    <combine_game_item_right/>
  </div>
</template>

<script setup>
import combine_game_item_left from './combine_game_item_left.vue';
import combine_game_item_right from './combine_game_item_right.vue';
</script>

<style lang="less" scoped>
.combine-game-item {
  display: flex;
  justify-content: space-between;
}
</style>