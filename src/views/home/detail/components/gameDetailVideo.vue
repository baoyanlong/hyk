<template>
  <div class="game-video">
    <div class="video-content">
      <videoPlayer/>
    </div>
    <div class="video-list">
      <div class="button left" @click="scrollLeft()"><</div>
      <div class="scroll-list" ref="scrollList">
        <template v-for="index in 15">
          <div class="scroll-list-item" 
          :class="{ selected: selectIndex === index }"
          @click="selectItem(index)">{{index}}</div>
        </template>
      </div>
      <div class="button right" @click="scrollRight()">></div>
    </div>
  </div>
</template>

<script setup>
import videoPlayer from './videoPlayer.vue';
import { ref } from 'vue';
const scrollList = ref(null); // 定义一个 ref 变量来绑定元素

const selectIndex = ref(0)


const selectItem = (index) => {
  selectIndex.value = index
}

const scrollRight = () => {
  scrollList.value.scrollLeft += scrollList.value.clientWidth / 2;
}

const scrollLeft = () => {
  scrollList.value.scrollLeft -= scrollList.value.clientWidth / 2;
}

</script>

<style lang="less" scoped>
.game-video {
  display: flex;
  flex-direction: column;
  justify-content: start;

  // flex-grow: 1;
  width: calc(var(--page-width) - 270px);

  .video-content {
    height: 356px;

    background-color: transparent;

    display: flex;
    align-items: center;
  }

  .video-list {

    padding: 5px 10px;

    display: flex;
    justify-content: space-between;

    .button {
      width: 30px;
      height: 60px;
      background-color: #1B1B1B;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .scroll-list {
        padding-left: 5px;

        height: 60px;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;

        display: flex;

        &::-webkit-scrollbar {
          display: none;
        }

        .scroll-list-item {
          margin-right: 5px;
          min-width: 100px;
          width: 100px;
          height: 60px;
          // background-color: aqua;

          cursor: pointer;
          // transition: transform 0.2s;

          background: url("@/assets/img/home/home_single_game_icon.jpg") no-repeat;
          background-size: cover;

          &.selected {
            // transform: scale(1.1); /* 选中时放大效果 */
            border: 2px solid #ffffff; /* 选中时的边框样式 */
          }
        }
      }
  }
}
</style>